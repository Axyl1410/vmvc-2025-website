"use client";

import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const MOBILE_BREAKPOINT = 768;

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Check if animations should run
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

      if (isMobile) {
        // On mobile, just ensure everything is visible immediately
        gsap.set(
          ".hero-logo, .hero-heading span, .hero-description, .hero-button, .hero-card",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            clearProps: "all",
          }
        );
        return;
      }

      // Desktop animations with timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      tl.fromTo(
        ".hero-logo",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      );

      tl.fromTo(
        ".hero-heading span",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 },
        "-=0.5"
      );

      tl.fromTo(
        ".hero-description",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      );

      tl.fromTo(
        ".hero-button",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 },
        "-=0.2"
      );

      tl.fromTo(
        ".hero-card",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.7 },
        "-=0.3"
      );
    },
    { scope: containerRef, dependencies: [] }
  );

  const buttonNew = (
    <Button
      asChild
      className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300"
    >
      <a href="#register" rel="noopener noreferrer">
        Đăng Ký Ngay
      </a>
    </Button>
  );

  return (
    <section className="relative isolate overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="hero-logo mb-5 flex items-center gap-1">
            <Image
              alt="Viet My Vibe Code logo"
              className="h-12 w-12"
              height={48}
              src="/icons/logo.png"
              width={48}
            />
            <p className="text-lime-300/80 text-sm uppercase tracking-[0.25em]">
              VIET MY VIBE CODE
            </p>
          </div>
          <h1 className="hero-heading mt-3 text-center font-extrabold text-4xl tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">CUỘC THI LẬP TRÌNH</span>
            <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">
              AI + CODING
            </span>
            <span className="block">CHO SINH VIÊN 2025</span>
          </h1>
          <p className="hero-description mt-4 max-w-2xl text-center text-base text-neutral-300 sm:text-lg">
            Thử thách kỹ năng lập trình và vận dụng AI để xây dựng giải pháp
            phần mềm hoàn chỉnh trong thời gian ngắn.
            <span className="mt-2 block font-semibold text-lime-300">
              17/11/2025 - 29/11/2025
            </span>
          </p>
          <div className="hero-button mt-6">{buttonNew}</div>

          {/* Cards grid */}
          <div className="mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {cardData.map((card) => (
              <FeatureCard
                key={card.title}
                sub={card.sub}
                title={card.title}
                tone={card.tone}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title = "Tiêu đề",
  sub = "Mô tả chi tiết",
  tone = "default",
}: {
  title?: string;
  sub?: string;
  tone?: string;
}) {
  return (
    <div className="hero-card liquid-glass relative rounded-2xl border border-white/20 p-6 transition-all duration-300 hover:border-lime-300/50 hover:shadow-[0_0_30px_rgba(132,204,22,0.2)]">
      <div className="flex h-full flex-col items-center space-y-4 text-center">
        {/* Main content */}
        <div className="flex-1 space-y-3">
          <div className="font-extrabold text-4xl text-white drop-shadow-lg">
            {title}
          </div>
          <p className="text-neutral-300 text-sm leading-relaxed">{sub}</p>
        </div>

        {/* Bottom badge */}
        <div className="inline-flex items-center rounded-full border border-lime-400/40 bg-lime-400/20 px-4 py-1.5 font-semibold text-lime-300 text-xs uppercase tracking-wider">
          {tone}
        </div>
      </div>
    </div>
  );
}

const cardData = [
  {
    title: "AI + Coding",
    sub: "Kết hợp sức mạnh AI để code nhanh hơn",
    tone: "AI-Powered",
  },
  {
    title: "Teamwork",
    sub: "Làm việc nhóm 2 người hiệu quả",
    tone: "Team Spirit",
  },
  {
    title: "30 Phút",
    sub: "Hoàn thành dự án trong 30 phút",
    tone: "Fast Track",
  },
  {
    title: "Thực Chiến",
    sub: "Giải quyết bài toán thực tế",
    tone: "Practical",
  },
  {
    title: "6 Triệu",
    sub: "Tổng giải thưởng hấp dẫn",
    tone: "Grand Prize",
  },
];
