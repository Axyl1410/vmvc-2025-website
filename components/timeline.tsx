"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "17/11/2025",
    title: "Kickoff - Workshop",
    description:
      "Workshop hướng dẫn thể lệ và cách làm bài thi. Công bố đề Vòng 1",
    highlight: true,
  },
  {
    date: "17/11 - 22/11",
    title: "Làm bài Vòng 1",
    description:
      "Thời gian làm bài và nộp đề tài Vòng tuyển chọn. Các đội thực hiện dự án và ghi lại video recap.",
  },
  {
    date: "24/11/2025",
    title: "Công bố kết quả Vòng 1",
    description:
      "Ban tổ chức công bố 8 đội xuất sắc nhất vào vòng chung kết",
  },
  {
    date: "29/11/2025",
    title: "Chung kết",
    description:
      "8 đội cao điểm nhất tranh tài trực tiếp. Mỗi đội có 30 phút làm bài và 5 phút trình bày.",
    highlight: true,
  },
];

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const animationPlayedRef = useRef(false);

  useGSAP(
    () => {
      if (animationPlayedRef.current) {
        return;
      }

      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        gsap.set(".timeline-item", { opacity: 1, x: 0 });
        animationPlayedRef.current = true;
        return;
      }

      // Desktop animations
      gsap.set(".timeline-item", { opacity: 0, x: -30 });

      gsap.to(".timeline-item", {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
          once: true,
        },
        onComplete: () => {
          animationPlayedRef.current = true;
        },
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section className="py-16 text-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-bold text-3xl md:text-4xl">
            Lịch Trình Cuộc Thi
          </h2>

          <div className="timeline-container relative">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-[47px] w-0.5 bg-gradient-to-b from-lime-300 via-purple-400 to-lime-300 md:left-[158px]" />

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div className="timeline-item relative" key={index}>
                  <div className="flex items-start gap-6 md:gap-8">
                    {/* Date label */}
                    <div className="flex w-[80px] shrink-0 items-center justify-end md:w-[150px]">
                      <div
                        className={`rounded-lg px-3 py-1.5 text-center font-bold text-xs md:text-sm ${
                          event.highlight
                            ? "bg-lime-400 text-black"
                            : "bg-white/10 text-white"
                        }`}
                      >
                        {event.date}
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="relative z-10 shrink-0">
                      <div
                        className={`h-4 w-4 rounded-full border-4 ${
                          event.highlight
                            ? "border-lime-400 bg-lime-400 shadow-[0_0_20px_rgba(132,204,22,0.6)]"
                            : "border-purple-400 bg-purple-400"
                        }`}
                      />
                    </div>

                    {/* Content card */}
                    <div className="flex-1 pb-2">
                      <div
                        className={`liquid-glass rounded-xl border p-4 transition-all duration-300 hover:scale-[1.02] md:p-6 ${
                          event.highlight
                            ? "border-lime-300/40 shadow-[0_0_30px_rgba(132,204,22,0.15)]"
                            : "border-white/20"
                        }`}
                      >
                        <h3
                          className={`mb-2 font-bold text-lg md:text-xl ${
                            event.highlight ? "text-lime-300" : "text-white"
                          }`}
                        >
                          {event.title}
                        </h3>
                        <p className="text-neutral-300 text-sm leading-relaxed md:text-base">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;

