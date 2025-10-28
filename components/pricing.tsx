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
import { useState } from "react";

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

type Currency = "INR" | "USD";

const PRICES: Record<
  Currency,
  { startup: string; pro: string; premium: string; save: string }
> = {
  INR: {
    startup: "₹25,000/-",
    pro: "₹55,000/-",
    premium: "₹1,70,500/-",
    save: "Save Flat ₹1,500/-",
  },
  USD: {
    startup: "$299",
    pro: "$699",
    premium: "$2,049",
    save: "Save $20",
  },
};

function guessLocalCurrency(): Currency {
  const lang = typeof navigator !== "undefined" ? navigator.language : "";
  const tz =
    typeof Intl !== "undefined"
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : "";
  if (/-(IN|PK|BD)\b/i.test(lang) || /(Kolkata|Karachi|Dhaka)/i.test(tz || ""))
    return "INR";
  return "USD";
}

const startupVideos = [
  "H1h5dHpp1Nw",
  "HXARcSSdfMU",
  "fd8zraQ1JdE",
  "ARQyF2FA3Ec",
  "dEZfHADlFtw",
  "wuyfdfKO6Rc",
  "VakkmhtrUA0",
  "o8DoIg9yNGk",
  "rtReBkFt-To",
];
const proVideos = [
  "ASV2myPRfKA",
  "eTfS2lqwf6A",
  "KALbYHmGV4I",
  "Go0AA9hZ4as",
  "sB7RZ9QCOAg",
  "TK2WboJOJaw",
  "5Xq7UdXXOxI",
  "kMjWCidQSK0",
  "RKKdQvwKOhQ",
];
const premiumVideos = [
  "v2AC41dglnM",
  "pRpeEdMmmQ0",
  "3AtDnEC4zak",
  "JRfuAukYTKg",
  "LsoLEjrDogU",
  "RB-RcX5DS5A",
  "hTWKbfoikeg",
  "YQHsXMglC9A",
  "09R8_2nJtjg",
];

export function Pricing() {
  const [openPlan, setOpenPlan] = useState<
    null | "Startup" | "Pro" | "Premium"
  >(null);

  return (
    <section
      id="pricing"
      className="text-white"
      itemScope
      itemType="https://schema.org/PriceSpecification"
    >
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              border: `1px solid ${ACCENT}`,
            }}
          >
            Giải Thưởng Cuộc Thi
          </div>
          <h2
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
            itemProp="name"
          >
            Cơ Cấu Giải Thưởng
          </h2>
          <p
            className="mx-auto mt-2 max-w-xl text-sm text-neutral-300"
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
          {/* Third Prize */}
          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div
              className="absolute right-4 top-11 rounded-full px-3 py-1 text-[10px] font-semibold"
              style={{ backgroundColor: "#cd7f32", color: "#000" }}
            >
              GIẢI BA
            </div>
            <CardHeader className="space-y-3 pb-4">
              <div
                className="text-sm font-semibold text-neutral-100"
                itemProp="name"
              >
                Giải Ba
              </div>
              <div className="flex items-end gap-2 text-white">
                <div
                  className="text-3xl font-bold tracking-tight"
                  itemProp="price"
                >
                  1.000.000₫
                </div>
                <meta itemProp="priceCurrency" content="VND" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Đội có nỗ lực xuất sắc",
                  "Trình bày tốt nhất",
                  "Giấy chứng nhận tham gia",
                  "Tiền thưởng 1 triệu đồng",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          {/* Second Prize */}
          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div
              className="absolute right-4 top-11 rounded-full px-3 py-1 text-[10px] font-semibold"
              style={{ backgroundColor: "#c0c0c0", color: "#000" }}
            >
              GIẢI NHÌ
            </div>
            <CardHeader className="space-y-3 pb-4">
              <div
                className="text-sm font-semibold text-neutral-100"
                itemProp="name"
              >
                Giải Nhì
              </div>
              <div className="flex items-end gap-2 text-white">
                <div
                  className="text-3xl font-bold tracking-tight"
                  itemProp="price"
                >
                  2.000.000₫
                </div>
                <meta itemProp="priceCurrency" content="VND" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Đội có giải pháp tốt",
                  "Sáng tạo và hiệu quả",
                  "Giấy chứng nhận tham gia",
                  "Tiền thưởng 2 triệu đồng",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          {/* First Prize */}
          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass-enhanced shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div
              className="absolute right-4 top-11 rounded-full px-3 py-1 text-[10px] font-semibold"
              style={{ backgroundColor: "#ffd700", color: "#000" }}
            >
              GIẢI NHẤT
            </div>
            <CardHeader className="relative space-y-3 pb-4">
              <div
                className="text-sm font-semibold text-neutral-100"
                itemProp="name"
              >
                Giải Nhất
              </div>
              <div className="flex items-end gap-2 text-white">
                <div
                  className="text-3xl font-bold tracking-tight"
                  itemProp="price"
                >
                  3.000.000₫
                </div>
                <meta itemProp="priceCurrency" content="VND" />
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
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4"
                      style={{ color: ACCENT }}
                    />
                    <span className="text-sm text-neutral-100">{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>
        </div>
      </div>

      {/* Evaluation Criteria Section */}
      <div className="container mx-auto px-4 mt-16">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Tiêu Chí Chấm Điểm
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="liquid-glass border border-white/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-white">
                    Hiệu quả ứng dụng AI
                  </h4>
                  <span className="text-xl font-bold text-lime-300">30%</span>
                </div>
                <p className="text-xs text-neutral-300">
                  Khả năng tận dụng AI để tăng tốc và cải thiện chất lượng
                </p>
              </CardContent>
            </Card>
            <Card className="liquid-glass border border-white/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-white">
                    Tính đúng đắn & tối ưu
                  </h4>
                  <span className="text-xl font-bold text-lime-300">30%</span>
                </div>
                <p className="text-xs text-neutral-300">
                  Giải pháp hoạt động đúng và hiệu quả
                </p>
              </CardContent>
            </Card>
            <Card className="liquid-glass border border-white/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-white">
                    Sáng tạo & trình bày
                  </h4>
                  <span className="text-xl font-bold text-lime-300">20%</span>
                </div>
                <p className="text-xs text-neutral-300">
                  Ý tưởng độc đáo và cách thuyết trình
                </p>
              </CardContent>
            </Card>
            <Card className="liquid-glass border border-white/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-white">
                    Teamwork & thuyết trình
                  </h4>
                  <span className="text-xl font-bold text-lime-300">20%</span>
                </div>
                <p className="text-xs text-neutral-300">
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
