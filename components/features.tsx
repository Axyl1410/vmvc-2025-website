"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

interface FeaturesContent {
  title: string;
  subtitle: string;
}

const defaultContent: FeaturesContent = {
  title: "Mục tiêu và lợi ích khi tham gia",
  subtitle: "Khám phá những gì bạn sẽ đạt được từ cuộc thi",
};

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent);

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content");
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        if (parsed.features) {
          setContent(parsed.features);
        }
      } catch (error) {
        console.error("Error parsing saved content:", error);
      }
    }
  }, []);

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {content.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* AI Skills Card */}
        <Card className="liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">
              KỸ NĂNG AI
            </p>
            <CardTitle className="mt-1 text-xl text-white">
              Rèn luyện kỹ năng sử dụng AI hiệu quả và đúng đắn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-lime-300" />
                  <h4 className="text-sm font-semibold text-white">
                    Chatbot & Agent
                  </h4>
                </div>
                <p className="text-xs text-neutral-300">
                  Sử dụng ChatGPT, Claude, Gemini, Copilot để tăng tốc phát
                  triển
                </p>
              </div>
              <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-lime-300" />
                  <h4 className="text-sm font-semibold text-white">
                    Coding Tools
                  </h4>
                </div>
                <p className="text-xs text-neutral-300">
                  Tận dụng Cursor, Zed, GitHub Copilot để code thông minh hơn
                </p>
              </div>
              <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-lime-300" />
                  <h4 className="text-sm font-semibold text-white">
                    Problem Solving
                  </h4>
                </div>
                <p className="text-xs text-neutral-300">
                  Giải quyết bài toán thực tế thay vì sử dụng AI máy móc
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Competition Benefits Card */}
        <Card className="liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">
              LỢI ÍCH THAM GIA
            </p>
            <CardTitle className="mt-1 text-xl text-white">
              Phát triển kỹ năng và mở rộng cơ hội nghề nghiệp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-lime-300" />
                  <h4 className="text-sm font-semibold text-white">
                    Thực Chiến
                  </h4>
                </div>
                <p className="text-xs text-neutral-300">
                  Hoàn thành giải pháp phần mềm trong thời gian giới hạn
                </p>
              </div>
              <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-lime-300" />
                  <h4 className="text-sm font-semibold text-white">Teamwork</h4>
                </div>
                <p className="text-xs text-neutral-300">
                  Trải nghiệm làm việc nhóm, chia sẻ vai trò, phối hợp nhịp
                  nhàng
                </p>
              </div>
              <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-lime-300" />
                  <h4 className="text-sm font-semibold text-white">
                    Networking
                  </h4>
                </div>
                <p className="text-xs text-neutral-300">
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
