"use client";

import Image from "next/image";
import { useState } from "react";

export function LogoMarquee() {
  const [pausedRow, setPausedRow] = useState<string | null>(null);

  const technologies = [
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "C#",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: "Flutter",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
  ];

  const aiTools = [
    {
      name: "ChatGPT",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    },
    {
      name: "Claude",
      logo: "https://spcdn.shortpixel.ai/spio/ret_img,q_orig,to_auto,s_webp:avif/https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/claude-ai-icon.png",
    },
    {
      name: "Gemini",
      logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
    },
    {
      name: "Copilot",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Cursor",
      logo: "https://www.toolkitly.com/assets/img/upload/logo/cursor-ai-1.webp",
    },
    {
      name: "Zed",
      logo: "https://zed.dev/_next/static/media/logo_wordmark_black_bigger.43e61ae9.png",
    },
    {
      name: "AI Tools",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  ];

  const TechCard = ({
    tech,
    rowId,
  }: {
    tech: { name: string; logo?: string };
    rowId: string;
  }) => (
    <div
      className="mx-3 shrink-0"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
    >
      <div className="liquid-glass flex h-16 w-32 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-white/20 p-3 transition-all duration-300 hover:border-lime-300/50 hover:shadow-[0_0_30px_rgba(132,204,22,0.2)] sm:h-18 sm:w-36 lg:h-20 lg:w-40">
        {tech.logo && (
          <div className="relative h-8 w-8 sm:h-10 sm:w-10">
            <Image
              alt={`${tech.name} logo`}
              className="object-contain"
              fill
              sizes="40px"
              src={tech.logo}
            />
          </div>
        )}
        <span className="text-center font-bold text-white text-xs sm:text-sm">
          {tech.name}
        </span>
      </div>
    </div>
  );

  return (
    <section className="overflow-hidden py-16 text-white sm:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <h2 className="font-extrabold text-4xl text-white tracking-tight sm:text-5xl">
            Công Nghệ & Kỹ Năng{" "}
            <span className="text-lime-300">Được Khuyến Khích</span>
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-300 text-sm">
            Sử dụng bất kỳ ngôn ngữ lập trình và công cụ AI nào để hoàn thành dự
            án
          </p>
        </div>

        {/* Tech Marquee */}
        <div className="relative space-y-6">
          {/* First Row - Programming Languages */}
          <div>
            <h3 className="mb-3 text-center font-semibold text-lime-300 text-sm">
              Ngôn Ngữ Lập Trình
            </h3>
            <div className="mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] flex overflow-hidden">
              <div
                className={"flex animate-scroll-right whitespace-nowrap"}
                style={{
                  animationPlayState:
                    pausedRow === "first" ? "paused" : "running",
                  width: "max-content",
                }}
              >
                {[...technologies, ...technologies, ...technologies].map(
                  (tech, index) => (
                    <TechCard
                      key={`first-${index}`}
                      rowId="first"
                      tech={tech}
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* Second Row - AI Tools */}
          <div>
            <h3 className="mb-3 text-center font-semibold text-lime-300 text-sm">
              Công Cụ AI
            </h3>
            <div className="mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] flex overflow-hidden">
              <div
                className={"flex animate-scroll-left whitespace-nowrap"}
                style={{
                  animationPlayState:
                    pausedRow === "second" ? "paused" : "running",
                  width: "max-content",
                }}
              >
                {[...aiTools, ...aiTools, ...aiTools].map((tool, index) => (
                  <TechCard
                    key={`second-${index}`}
                    rowId="second"
                    tech={tool}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
