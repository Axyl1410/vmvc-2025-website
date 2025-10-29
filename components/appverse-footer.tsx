"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { isExternalRegistration, REGISTRATION_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type FooterContent = {
  tagline: string;
  copyright: string;
};

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
      } catch {
        // Silent error handling
      }
    }
  }, []);

  return (
    <section className="text-white">
      {/* Register CTA */}
      {/* <div className="container mx-auto px-4 pt-12 sm:pt-16" id="register">
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-full bg-lime-400 px-6 py-2 font-medium text-black text-sm shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:bg-lime-300"
          >
            <Link
              href={REGISTRATION_URL}
              {...(isExternalRegistration
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              Đăng Ký Ngay
            </Link>
          </Button>
        </div>
      </div> */}

      {/* Competition Info */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="liquid-glass relative overflow-hidden rounded-3xl p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] text-lime-300 tracking-widest">
                QUY ĐỊNH VÀ CÁCH THỨC
              </p>
              <h3 className="font-bold text-2xl text-white leading-tight sm:text-3xl">
                Tham gia cuộc thi lập trình sáng tạo
              </h3>
              <div className="mt-4 space-y-3 text-neutral-300 text-sm">
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
                <h4 className="mb-2 font-semibold text-sm text-white">
                  Thời Gian
                </h4>
                <p className="text-neutral-300 text-xs">
                  17/11/2025 - 29/11/2025
                </p>
              </Card>
              <Card className="liquid-glass border border-white/20 p-4">
                <h4 className="mb-2 font-semibold text-sm text-white">
                  Địa Điểm
                </h4>
                <p className="text-neutral-300 text-xs">Cao Đẳng Việt Mỹ</p>
              </Card>
              <Card className="liquid-glass border border-white/20 p-4">
                <h4 className="mb-2 font-semibold text-sm text-white">
                  Số Đội Chung Kết
                </h4>
                <p className="text-neutral-300 text-xs">8 đội xuất sắc nhất</p>
              </Card>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-white/10 border-t pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1">
                <Image
                  alt="Viet My Vibe Code logo"
                  className="h-12 w-12"
                  height={48}
                  src="/icons/logo.png"
                  width={48}
                />
                <span className="font-semibold text-white text-xl">
                  VMVC 2025
                </span>
              </div>
              <p className="max-w-sm text-neutral-400 text-sm">
                {content.tagline}
              </p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 font-semibold text-neutral-400 text-xs uppercase tracking-widest">
                  Điều Hướng
                </h5>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  {[
                    { label: "Trang Chủ", href: "/" },
                    { label: "Về Cuộc Thi", href: "/About" },
                    { label: "Giải Thưởng", href: "/#pricing" },
                    { label: "FAQ", href: "/faq" },
                    { label: "Thể Lệ", href: "/t&c" },
                    { label: "Đăng Ký", href: REGISTRATION_URL },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link className="hover:text-lime-300" href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 font-semibold text-neutral-400 text-xs uppercase tracking-widest">
                  Liên Hệ
                </h5>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>
                    <p className="text-xs">Cao Đẳng Việt Mỹ</p>
                  </li>
                  <li>
                    <a
                      className="text-xs transition-colors hover:text-lime-300"
                      href="mailto:mua.tran@caodangvietmy.edu.vn"
                    >
                      Email: mua.tran@caodangvietmy.edu.vn
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-xs transition-colors hover:text-lime-300"
                      href="tel:0914444686"
                    >
                      Hotline: 091 444 46 86
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-1 text-xs transition-colors hover:text-lime-300"
                      href="https://www.facebook.com/caodangvietmy"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Facebook: Cao Đẳng Việt Mỹ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-white/10 border-t pt-6 text-neutral-500 text-xs sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <Link className="hover:text-lime-300" href="/About">
                Về Cuộc Thi
              </Link>
              <Link className="hover:text-lime-300" href="/t&c">
                Thể Lệ
              </Link>
              <Link className="hover:text-lime-300" href="/faq">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
