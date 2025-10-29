"use client";

import { Mesh, Program, Renderer, Triangle } from "ogl";
import type React from "react";
import { useEffect, useRef } from "react";
import "./Plasma.css";

interface PlasmaProps {
  color?: string;
  speed?: number;
  direction?: "forward" | "reverse" | "pingpong";
  scale?: number;
  opacity?: number;
  mouseInteractive?: boolean;
}

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 0.5, 0.2];
  return [
    Number.parseInt(result[1], 16) / 255,
    Number.parseInt(result[2], 16) / 255,
    Number.parseInt(result[3], 16) / 255,
  ];
};

const vertex = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
uniform float uIterations;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  
  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);
  
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;

  for (vec2 r = iResolution.xy, Q; ++i < uIterations; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y)); 
    p.z -= 4.; 
    S = p;
    d = p.y-T;
    
    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05); 
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T)); 
    z+= d = abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4; 
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
  }
  
  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);
  
  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));
  
  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}`;

export const Plasma: React.FC<PlasmaProps> = ({
  color = "#ffffff",
  speed = 1,
  direction = "forward",
  scale = 1,
  opacity = 1,
  mouseInteractive = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  // Refs to store OGL objects
  const rendererRef = useRef<Renderer | null>(null);
  const programRef = useRef<Program | null>(null);
  const meshRef = useRef<Mesh | null>(null);
  const isMobileRef = useRef(false);
  const isIOSRef = useRef(false);

  // == 1. INITIALIZATION EFFECT (RUNS ONCE) ==
  useEffect(() => {
    if (!containerRef.current) return;

    isIOSRef.current = /iPad|iPhone|iPod/.test(navigator.userAgent);
    isMobileRef.current = window.innerWidth < 768;
    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const saveData = (navigator as any)?.connection?.saveData === true;

    // If user prefers reduced motion or is on data saver, don't mount the animation at all.
    if (prefersReducedMotion || saveData) {
      return;
    }

    const iterations = isMobileRef.current ? 40.0 : 60.0;

    const renderer = new Renderer({
      webgl: 2,
      alpha: true,
      antialias: false,
      // Reduce DPR more aggressively on mobile for big win
      dpr: Math.max(
        0.5,
        Math.min(
          window.devicePixelRatio || 1,
          // Cap desktop DPR at 1.5 for huge performance win on HiDPI screens
          isMobileRef.current ? 1 : 1.5
        ) * (isIOSRef.current || isMobileRef.current ? 0.5 : 1)
      ),
    });
    rendererRef.current = renderer;

    const gl = renderer.gl;
    const canvas = gl.canvas as HTMLCanvasElement;
    canvas.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;display:block;";
    containerRef.current.appendChild(canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uCustomColor: { value: new Float32Array(hexToRgb(color)) },
        uUseCustomColor: { value: color ? 1.0 : 0.0 },
        uSpeed: { value: speed * (isMobileRef.current ? 0.3 : 0.4) },
        uDirection: {
          value:
            direction === "pingpong"
              ? 0.0
              : direction === "reverse"
                ? -1.0
                : 1.0,
        },
        uScale: { value: isMobileRef.current ? scale * 1.2 : scale },
        uOpacity: { value: Math.min(0.8, opacity) },
        uMouse: { value: new Float32Array([0, 0]) },
        uMouseInteractive: {
          value: isIOSRef.current ? 0.0 : mouseInteractive ? 1.0 : 0.0,
        },
        uIterations: { value: iterations },
      },
    });
    programRef.current = program;

    const mesh = new Mesh(gl, { geometry, program });
    meshRef.current = mesh;

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      if (isIOSRef.current || !programRef.current) return;
      const mouseInteractiveValue = (
        programRef.current.uniforms.uMouseInteractive as any
      ).value;
      if (mouseInteractiveValue < 0.5) return;

      const rect = containerRef.current!.getBoundingClientRect();
      mousePos.current.x = e.clientX - rect.left;
      mousePos.current.y = e.clientY - rect.top;
      const mouseUniform = programRef.current.uniforms.uMouse
        .value as Float32Array;
      mouseUniform[0] = mousePos.current.x;
      mouseUniform[1] = mousePos.current.y;
    };
    containerRef.current.addEventListener("mousemove", handleMouseMove);

    // Resize handling with debounce
    let resizeTimer: number;
    const setSize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        if (
          !(containerRef.current && rendererRef.current && programRef.current)
        )
          return;

        const rect = containerRef.current!.getBoundingClientRect();
        const width = Math.max(1, Math.floor(rect.width));
        const height = Math.max(1, Math.floor(rect.height));
        rendererRef.current.setSize(width, height);
        const res = programRef.current.uniforms.iResolution
          .value as Float32Array;
        res[0] = rendererRef.current.gl.drawingBufferWidth;
        res[1] = rendererRef.current.gl.drawingBufferHeight;
      }, 50);
    };
    const ro = new ResizeObserver(setSize);
    ro.observe(containerRef.current);
    setSize();

    // Animation loop with FPS throttle and visibility pause
    let raf = 0;
    let lastTime = 0;
    let running = true;
    const targetDelta = isMobileRef.current ? 50 : 17;
    const t0 = performance.now();

    const loop = (t: number) => {
      if (
        !(
          running &&
          programRef.current &&
          rendererRef.current &&
          meshRef.current
        )
      )
        return;
      raf = requestAnimationFrame(loop); // Request next frame immediately

      const delta = t - lastTime;
      if (delta < targetDelta) {
        // Skip frame if not enough time
        return;
      }
      lastTime = t; // Update time for this render

      const timeValue = (t - t0) * 0.001;

      // Only update uDirection if it's 'pingpong' (0.0 is flag)
      const currentDirection = (programRef.current.uniforms.uDirection as any)
        .value;
      if (currentDirection === 0.0) {
        const cycle = Math.sin(timeValue * 0.5);
        (programRef.current.uniforms.uDirection as any).value = cycle;
      }

      (programRef.current.uniforms.iTime as any).value = timeValue;
      rendererRef.current.render({ scene: meshRef.current });
    };
    raf = requestAnimationFrame(loop);

    const onVisibility = () => {
      const hidden = document.visibilityState === "hidden";
      // Pause rendering entirely while hidden
      if (hidden && running) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!(hidden || running)) {
        running = true;
        lastTime = 0;
        raf = requestAnimationFrame(loop);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      clearTimeout(resizeTimer);
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      }
      try {
        containerRef.current?.removeChild(canvas);
      } catch {}
      rendererRef.current?.gl
        ?.getExtension("WEBGL_lose_context")
        ?.loseContext();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // <-- ONLY RUN ONCE - Initial values are captured, updates handled by individual useEffects

  // == 2. UNIFORM UPDATE EFFECTS ==

  useEffect(() => {
    if (!programRef.current) return;
    const useCustomColor = color ? 1.0 : 0.0;
    const customColorRgb = color ? hexToRgb(color) : [1, 1, 1];
    (programRef.current.uniforms.uUseCustomColor as any).value = useCustomColor;
    (programRef.current.uniforms.uCustomColor as any).value.set(customColorRgb);
  }, [color]);

  useEffect(() => {
    if (!programRef.current) return;
    (programRef.current.uniforms.uSpeed as any).value =
      speed * (isMobileRef.current ? 0.3 : 0.4);
  }, [speed]);

  useEffect(() => {
    if (!programRef.current) return;
    let directionValue;
    if (direction === "reverse") {
      directionValue = -1.0;
    } else if (direction === "forward") {
      directionValue = 1.0;
    } else {
      // 'pingpong'
      directionValue = 0.0; // Use 0.0 as flag for 'pingpong'
    }
    (programRef.current.uniforms.uDirection as any).value = directionValue;
  }, [direction]);

  useEffect(() => {
    if (!programRef.current) return;
    (programRef.current.uniforms.uScale as any).value = isMobileRef.current
      ? scale * 1.2
      : scale;
  }, [scale]);

  useEffect(() => {
    if (!programRef.current) return;
    (programRef.current.uniforms.uOpacity as any).value = Math.min(
      0.8,
      opacity
    );
  }, [opacity]);

  useEffect(() => {
    if (!programRef.current) return;
    (programRef.current.uniforms.uMouseInteractive as any).value =
      isIOSRef.current ? 0.0 : mouseInteractive ? 1.0 : 0.0;
  }, [mouseInteractive]);

  return (
    <div
      className="plasma-container pointer-events-none relative h-full w-full"
      ref={containerRef}
    />
  );
};

export default Plasma;
