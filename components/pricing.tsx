"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

type Feature = { text: string; muted?: boolean };

const ACCENT = "#C6FF3A";

function FeatureItem({ text, muted = false }: Feature) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
      <span
        className={`text-sm ${muted ? "text-neutral-300" : "text-neutral-100"}`}
      >
        {text}
      </span>
    </li>
  );
}

export function Pricing() {
  return (
    <section
      className="text-white"
      id="pricing"
      itemScope
      itemType="https://schema.org/PriceSpecification"
    >
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 font-medium text-white text-xs"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              border: `1px solid ${ACCENT}`,
            }}
          >
            Giải Thưởng Cuộc Thi
          </div>
          <h2
            className="font-extrabold text-4xl tracking-tight sm:text-5xl"
            itemProp="name"
          >
            Cơ Cấu Giải Thưởng
          </h2>
          <p
            className="mx-auto mt-2 max-w-xl text-neutral-300 text-sm"
            itemProp="description"
          >
            Tổng giải thưởng 6 triệu đồng. Tất cả 8 đội vào chung kết đều nhận
            giấy chứng nhận.
          </p>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full px-5 text-neutral-900 hover:brightness-95"
              style={{ backgroundColor: "#f2f2f2" }}
            >
              <Link href="#register">Đăng Ký Tham Gia</Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* First Prize */}
          <Card
            className="liquid-glass-enhanced relative overflow-hidden rounded-2xl border-2 border-lime-300/30 shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <style jsx>{`
              @keyframes rotateBorder {
                0% {
                  transform: translate(-50%, -50%) rotate(0deg);
                }
                100% {
                  transform: translate(-50%, -50%) rotate(360deg);
                }
              }

              .rotating-border-wrapper {
                position: absolute;
                inset: 0;
                border-radius: inherit;
                pointer-events: none;
                padding: 2px;

                /* === MASK LAYER === */
                mask-image: 
                  linear-gradient(white, white),
                  linear-gradient(white, white);
                
                mask-clip: 
                  content-box,
                  border-box;

                mask-composite: exclude;

                /* Webkit (Safari) */
                -webkit-mask-image: 
                  linear-gradient(white, white),
                  linear-gradient(white, white);
                
                -webkit-mask-clip: 
                  content-box,
                  border-box;

                -webkit-mask-composite: destination-out;
              }

              .rotating-border-line {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 300%;
                height: 300%;
                
                background: conic-gradient(
                  transparent 0deg,
                  transparent 342.5deg,
                  ${ACCENT} 345deg,
                  ${ACCENT} 360deg,
                  transparent 362.5deg
                );
                
                animation: rotateBorder 8s linear infinite;
                filter: drop-shadow(0 0 15px ${ACCENT}) 
                        drop-shadow(0 0 20px ${ACCENT})
                        drop-shadow(0 0 8px ${ACCENT});
              }
            `}</style>

            <div className="rotating-border-wrapper">
              <div className="rotating-border-line" />
            </div>

            <div
              className="absolute top-11 right-4 z-10 rounded-full px-3 py-1 font-semibold text-[10px]"
              style={{ backgroundColor: "#ffd700", color: "#000" }}
            >
              GIẢI NHẤT
            </div>
            <CardHeader className="relative space-y-3 pb-4">
              <div
                className="font-semibold text-neutral-100 text-sm"
                itemProp="name"
              >
                Giải Nhất
              </div>
              <div className="flex items-end gap-2 text-white">
                <div
                  className="font-bold text-3xl tracking-tight"
                  itemProp="price"
                >
                  3.000.000₫
                </div>
                <meta content="VND" itemProp="priceCurrency" />
              </div>
            </CardHeader>
            <CardContent className="relative pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Đội xuất sắc nhất",
                  "Kết quả tổng hợp tốt nhất",
                  "Giấy chứng nhận tham gia",
                  "Tiền thưởng 3 triệu đồng",
                  "Cơ hội networking đặc biệt",
                ].map((f) => (
                  <li className="flex items-start gap-2" key={f}>
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4"
                      style={{ color: ACCENT }}
                    />
                    <span className="text-neutral-100 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          {/* Second Prize */}
          <Card
            className="liquid-glass relative overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div
              className="absolute top-11 right-4 rounded-full px-3 py-1 font-semibold text-[10px]"
              style={{ backgroundColor: "#c0c0c0", color: "#000" }}
            >
              GIẢI NHÌ
            </div>
            <CardHeader className="space-y-3 pb-4">
              <div
                className="font-semibold text-neutral-100 text-sm"
                itemProp="name"
              >
                Giải Nhì
              </div>
              <div className="flex items-end gap-2 text-white">
                <div
                  className="font-bold text-3xl tracking-tight"
                  itemProp="price"
                >
                  2.000.000₫
                </div>
                <meta content="VND" itemProp="priceCurrency" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Đội có giải pháp tốt",
                  "Sáng tạo và hiệu quả",
                  "Giấy chứng nhận tham gia",
                  "Tiền thưởng 2 triệu đồng",
                ].map((f) => (
                  <FeatureItem key={f} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          {/* Third Prize */}
          <Card
            className="liquid-glass relative overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div
              className="absolute top-11 right-4 rounded-full px-3 py-1 font-semibold text-[10px]"
              style={{ backgroundColor: "#cd7f32", color: "#000" }}
            >
              GIẢI BA
            </div>
            <CardHeader className="space-y-3 pb-4">
              <div
                className="font-semibold text-neutral-100 text-sm"
                itemProp="name"
              >
                Giải Ba
              </div>
              <div className="flex items-end gap-2 text-white">
                <div
                  className="font-bold text-3xl tracking-tight"
                  itemProp="price"
                >
                  1.000.000₫
                </div>
                <meta content="VND" itemProp="priceCurrency" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Đội có nỗ lực xuất sắc",
                  "Trình bày tốt nhất",
                  "Giấy chứng nhận tham gia",
                  "Tiền thưởng 1 triệu đồng",
                ].map((f) => (
                  <FeatureItem key={f} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>
        </div>
      </div>

      {/* Evaluation Criteria Section */}
      <div className="container mx-auto mt-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-center font-bold text-2xl text-white">
            Tiêu Chí Chấm Điểm
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="liquid-glass border border-white/20">
              <CardContent className="pt-6">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-white">
                    Hiệu quả ứng dụng AI
                  </h4>
                  <span className="font-bold text-lime-300 text-xl">30%</span>
                </div>
                <p className="text-neutral-300 text-xs">
                  Khả năng tận dụng AI để tăng tốc và cải thiện chất lượng
                </p>
              </CardContent>
            </Card>
            <Card className="liquid-glass border border-white/20">
              <CardContent className="pt-6">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-white">
                    Tính đúng đắn & tối ưu
                  </h4>
                  <span className="font-bold text-lime-300 text-xl">30%</span>
                </div>
                <p className="text-neutral-300 text-xs">
                  Giải pháp hoạt động đúng và hiệu quả
                </p>
              </CardContent>
            </Card>
            <Card className="liquid-glass border border-white/20">
              <CardContent className="pt-6">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-white">
                    Sáng tạo & trình bày
                  </h4>
                  <span className="font-bold text-lime-300 text-xl">20%</span>
                </div>
                <p className="text-neutral-300 text-xs">
                  Ý tưởng độc đáo và cách thuyết trình
                </p>
              </CardContent>
            </Card>
            <Card className="liquid-glass border border-white/20">
              <CardContent className="pt-6">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-white">
                    Teamwork & thuyết trình
                  </h4>
                  <span className="font-bold text-lime-300 text-xl">20%</span>
                </div>
                <p className="text-neutral-300 text-xs">
                  Phối hợp nhóm và kỹ năng trình bày
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
