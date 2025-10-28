"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const MOBILE_BREAKPOINT = 768;

type FeaturesContent = {
  title: string;
  subtitle: string;
};

const defaultContent: FeaturesContent = {
  title: "Mục tiêu và lợi ích khi tham gia",
  subtitle: "Khám phá những gì bạn sẽ đạt được từ cuộc thi",
};

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content");
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        if (parsed.features) {
          setContent(parsed.features);
        }
      } catch {
        // Silent error handling
      }
    }
  }, []);

  useGSAP(
    () => {
      // Check if animations should run (disable on small screens for better performance)
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

      if (isMobile) {
        // On mobile, just ensure everything is visible
        gsap.set(".features-heading, .features-card, .feature-item", {
          opacity: 1,
          y: 0,
          x: 0,
        });
        return;
      }

      // Desktop animations - set initial states
      gsap.set(".features-heading", { y: 40, opacity: 0 });
      gsap.set(".features-card", { y: 60, opacity: 0 });
      gsap.set(".feature-item", { x: -20, opacity: 0 });

      // Animate heading
      gsap.to(".features-heading", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".features-heading",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate cards
      gsap.to(".features-card", {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate items
      gsap.to(".feature-item", {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      className="container mx-auto px-4 py-16 sm:py-20"
      id="features"
      ref={sectionRef}
    >
      <h2 className="features-heading mb-8 text-center font-extrabold text-4xl text-white tracking-tight sm:text-5xl">
        {content.title}
      </h2>

      <div className="features-grid grid gap-6 md:grid-cols-2">
        {/* AI Skills Card */}
        <Card className="features-card liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] text-white/80 tracking-widest">
              KỸ NĂNG AI
            </p>
            <CardTitle className="mt-1 text-white text-xl">
              Rèn luyện kỹ năng sử dụng AI hiệu quả và đúng đắn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="feature-item rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Star className="h-5 w-5 text-lime-300" />
                  <h4 className="font-semibold text-sm text-white">
                    Chatbot & Agent
                  </h4>
                </div>
                <p className="text-neutral-300 text-xs">
                  Sử dụng ChatGPT, Claude, Gemini, Copilot để tăng tốc phát
                  triển
                </p>
              </div>
              <div className="feature-item rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Star className="h-5 w-5 text-lime-300" />
                  <h4 className="font-semibold text-sm text-white">
                    Coding Tools
                  </h4>
                </div>
                <p className="text-neutral-300 text-xs">
                  Tận dụng Cursor, Zed, GitHub Copilot để code thông minh hơn
                </p>
              </div>
              <div className="feature-item rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Star className="h-5 w-5 text-lime-300" />
                  <h4 className="font-semibold text-sm text-white">
                    Problem Solving
                  </h4>
                </div>
                <p className="text-neutral-300 text-xs">
                  Giải quyết bài toán thực tế thay vì sử dụng AI máy móc
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Competition Benefits Card */}
        <Card className="features-card liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] text-white/80 tracking-widest">
              LỢI ÍCH THAM GIA
            </p>
            <CardTitle className="mt-1 text-white text-xl">
              Phát triển kỹ năng và mở rộng cơ hội nghề nghiệp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="feature-item rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Star className="h-5 w-5 text-lime-300" />
                  <h4 className="font-semibold text-sm text-white">
                    Thực Chiến
                  </h4>
                </div>
                <p className="text-neutral-300 text-xs">
                  Hoàn thành giải pháp phần mềm trong thời gian giới hạn
                </p>
              </div>
              <div className="feature-item rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Star className="h-5 w-5 text-lime-300" />
                  <h4 className="font-semibold text-sm text-white">Teamwork</h4>
                </div>
                <p className="text-neutral-300 text-xs">
                  Trải nghiệm làm việc nhóm, chia sẻ vai trò, phối hợp nhịp
                  nhàng
                </p>
              </div>
              <div className="feature-item rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Star className="h-5 w-5 text-lime-300" />
                  <h4 className="font-semibold text-sm text-white">
                    Networking
                  </h4>
                </div>
                <p className="text-neutral-300 text-xs">
                  Kết nối cộng đồng, mở ra cơ hội trong lĩnh vực AI và phần mềm
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
