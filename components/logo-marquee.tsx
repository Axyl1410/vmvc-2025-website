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
      className="shrink-0 mx-3"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
    >
      <div className="w-32 sm:w-36 lg:w-40 h-16 sm:h-18 lg:h-20 rounded-2xl liquid-glass border border-white/20 flex flex-col items-center justify-center gap-2 p-3 overflow-hidden hover:border-lime-300/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(132,204,22,0.2)]">
        {tech.logo && (
          <div className="relative w-8 h-8 sm:w-10 sm:h-10">
            <Image
              src={tech.logo}
              alt={`${tech.name} logo`}
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>
        )}
        <span className="text-white font-bold text-xs sm:text-sm text-center">
          {tech.name}
        </span>
      </div>
    </div>
  );

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Công Nghệ & Kỹ Năng{" "}
            <span className="text-lime-300">Được Khuyến Khích</span>
          </h2>
          <p className="mt-4 text-sm text-neutral-300 max-w-2xl">
            Sử dụng bất kỳ ngôn ngữ lập trình và công cụ AI nào để hoàn thành dự
            án
          </p>
        </div>

        {/* Tech Marquee */}
        <div className="relative space-y-6">
          {/* First Row - Programming Languages */}
          <div>
            <h3 className="text-sm font-semibold text-lime-300 mb-3 text-center">
              Ngôn Ngữ Lập Trình
            </h3>
            <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div
                className={`flex animate-scroll-right whitespace-nowrap`}
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
                      tech={tech}
                      rowId="first"
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* Second Row - AI Tools */}
          <div>
            <h3 className="text-sm font-semibold text-lime-300 mb-3 text-center">
              Công Cụ AI
            </h3>
            <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div
                className={`flex animate-scroll-left whitespace-nowrap`}
                style={{
                  animationPlayState:
                    pausedRow === "second" ? "paused" : "running",
                  width: "max-content",
                }}
              >
                {[...aiTools, ...aiTools, ...aiTools].map((tool, index) => (
                  <TechCard
                    key={`second-${index}`}
                    tech={tool}
                    rowId="second"
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
