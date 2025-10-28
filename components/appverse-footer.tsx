"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface FooterContent {
  tagline: string;
  copyright: string;
}

const defaultContent: FooterContent = {
  tagline:
    "Cuộc thi lập trình dành cho sinh viên, nơi thí sinh vận dụng AI và kỹ năng lập trình để xây dựng giải pháp phần mềm.",
  copyright: "© 2025 — Cao Đẳng Việt Mỹ",
};

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent);

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content");
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        if (parsed.footer) {
          setContent(parsed.footer);
        }
      } catch (error) {
        console.error("Error parsing saved content:", error);
      }
    }
  }, []);

  return (
    <section className="text-white">
      {/* Register CTA */}
      <div id="register" className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-full bg-lime-400 px-6 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:bg-lime-300"
          >
            <Link href="/#register">Đăng Ký Ngay</Link>
          </Button>
        </div>
      </div>

      {/* Competition Info */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-lime-300">
                QUY ĐỊNH VÀ CÁCH THỨC
              </p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Tham gia cuộc thi lập trình sáng tạo
              </h3>
              <div className="mt-4 space-y-3 text-sm text-neutral-300">
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-lime-300" />
                  <p>Mỗi đội gồm 2 thành viên sinh viên</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-lime-300" />
                  <p>Vòng tuyển chọn: Nộp đề tài và video recap</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-lime-300" />
                  <p>Vòng chung kết: 30 phút code + 5 phút trình bày</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-lime-300" />
                  <p>
                    Được phép sử dụng AI Chatbot/Agent và mọi công cụ lập trình
                  </p>
                </div>
              </div>
            </div>

            {/* Right info */}
            <div className="space-y-4">
              <Card className="liquid-glass border border-white/20 p-4">
                <h4 className="text-sm font-semibold text-white mb-2">
                  Thời Gian
                </h4>
                <p className="text-xs text-neutral-300">
                  17/11/2025 - 29/11/2025
                </p>
              </Card>
              <Card className="liquid-glass border border-white/20 p-4">
                <h4 className="text-sm font-semibold text-white mb-2">
                  Địa Điểm
                </h4>
                <p className="text-xs text-neutral-300">Cao Đẳng Việt Mỹ</p>
              </Card>
              <Card className="liquid-glass border border-white/20 p-4">
                <h4 className="text-sm font-semibold text-white mb-2">
                  Số Đội Chung Kết
                </h4>
                <p className="text-xs text-neutral-300">8 đội xuất sắc nhất</p>
              </Card>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <Image
                  src="/icons/skitbit-white.svg"
                  alt="Viet My Vibe Code logo"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <span className="text-xl font-semibold text-white">
                  VMVC 2025
                </span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">
                {content.tagline}
              </p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Điều Hướng
                </h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {[
                    { label: "Trang Chủ", href: "/" },
                    { label: "Về Cuộc Thi", href: "/About" },
                    { label: "Giải Thưởng", href: "/#pricing" },
                    { label: "FAQ", href: "/faq" },
                    { label: "Thể Lệ", href: "/t&c" },
                    { label: "Đăng Ký", href: "/#register" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="hover:text-lime-300">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Liên Hệ
                </h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li>
                    <p className="text-xs">Cao Đẳng Việt Mỹ</p>
                  </li>
                  <li>
                    <a
                      href="mailto:mua.tran@caodangvietmy.edu.vn"
                      className="text-xs hover:text-lime-300 transition-colors"
                    >
                      Email: mua.tran@caodangvietmy.edu.vn
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:0914444686"
                      className="text-xs hover:text-lime-300 transition-colors"
                    >
                      Hotline: 091 444 46 86
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/caodangvietmy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs hover:text-lime-300 transition-colors flex items-center gap-1"
                    >
                      Facebook: Cao Đẳng Việt Mỹ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href="/About" className="hover:text-lime-300">
                Về Cuộc Thi
              </Link>
              <Link href="/t&c" className="hover:text-lime-300">
                Thể Lệ
              </Link>
              <Link href="/faq" className="hover:text-lime-300">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
