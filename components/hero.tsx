import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
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
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <Image
              src="/icons/skitbit-white.svg"
              alt="Viet My Vibe Code logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">
              VIET MY VIBE CODE
            </p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">CUỘC THI LẬP TRÌNH</span>
            <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">
              AI + CODING
            </span>
            <span className="block">CHO SINH VIÊN 2025</span>
          </h1>
          <p className="mt-4 text-center text-base text-neutral-300 max-w-2xl sm:text-lg">
            Thử thách kỹ năng lập trình và vận dụng AI để xây dựng giải pháp
            phần mềm hoàn chỉnh trong thời gian ngắn.
            <span className="block mt-2 text-lime-300 font-semibold">
              17/11/2025 - 29/11/2025
            </span>
          </p>
          <div className="mt-6">{buttonNew}</div>

          {/* Cards grid */}
          <div className="mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {cardData.map((card, i) => (
              <FeatureCard
                key={i}
                title={card.title}
                sub={card.sub}
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
    <div className="relative rounded-2xl liquid-glass border border-white/20 p-6 hover:border-lime-300/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(132,204,22,0.2)]">
      <div className="flex flex-col items-center text-center space-y-4 h-full">
        {/* Main content */}
        <div className="flex-1 space-y-3">
          <div className="text-4xl font-extrabold text-white drop-shadow-lg">
            {title}
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed">{sub}</p>
        </div>

        {/* Bottom badge */}
        <div className="inline-flex items-center rounded-full bg-lime-400/20 border border-lime-400/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-300">
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
