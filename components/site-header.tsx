"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ChevronDown,
  FileText,
  HelpCircle,
  Info,
  Menu,
  Tag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function SiteHeader() {
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    {
      href: "/About",
      label: "Về Cuộc Thi",
      icon: Info,
      description: "Giới thiệu về Viet My Vibe Code 2025",
    },
    {
      href: "#pricing",
      label: "Giải Thưởng",
      icon: Tag,
      description: "Cơ cấu giải thưởng 6 triệu đồng",
    },
    {
      href: "/t&c",
      label: "Thể Lệ",
      icon: FileText,
      description: "Quy định và cách thức tham gia",
    },
  ];

  const links = [
    { href: "/About", label: "Về Cuộc Thi", icon: Info },
    { href: "#pricing", label: "Giải Thưởng", icon: Tag },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
    { href: "#register", label: "Đăng Ký", icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <Image
              src="/icons/skitbit-white.svg"
              alt="Viet My Vibe Code logo"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="font-semibold tracking-wide text-white">
              VMVC 2025
            </span>
          </Link>

          {/* Desktop Nav with Services Dropdown */}
          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="bg-transparent text-white/90 hover:text-lime-300 data-[state=open]:text-lime-300
                               hover:bg-transparent focus:bg-transparent
                               data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent
                               data-[active=true]:bg-transparent transition-colors"
                  >
                    Thông Tin
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-transparent! border-0! shadow-none! z-9999">
                    <ul className="grid w-[280px] gap-2 p-4 relative z-10000 opacity-100">
                      {services.map((service) => (
                        <li key={service.href} className="opacity-100">
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="group relative flex items-start gap-3 rounded-lg p-3.5 transition-all
                                         bg-gray-900 hover:bg-gray-800
                                         border border-white/20 hover:border-lime-300/50
                                         hover:shadow-[0_0_20px_rgba(132,204,22,0.3)]
                                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300/70
                                         opacity-100 visible"
                            >
                              <service.icon className="h-5 w-5 text-lime-400 mt-0.5 shrink-0 group-hover:text-lime-300 opacity-100" />
                              <div className="flex-1 opacity-100">
                                <div className="text-sm font-semibold text-white group-hover:text-lime-300 mb-1 opacity-100">
                                  {service.label}
                                </div>
                                <p className="text-xs text-gray-300 leading-relaxed opacity-100">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-lime-300 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-lime-400 text-black font-medium rounded-lg px-6 py-2.5
                         hover:bg-lime-300 hover:shadow-md hover:scale-[1.02]
                         transition-all"
            >
              <Link href="#register">Đăng Ký Ngay</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="liquid-glass border-gray-800 p-0 w-64 flex flex-col"
              >
                {/* Brand Header */}
                <div className="flex items-center gap-1.5 px-4 py-4 border-b border-gray-800">
                  <Image
                    src="/icons/skitbit-white.svg"
                    alt="Viet My Vibe Code logo"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <span className="font-semibold tracking-wide text-white text-lg">
                    VMVC 2025
                  </span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  <Collapsible
                    open={servicesOpen}
                    onOpenChange={setServicesOpen}
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-900 hover:text-lime-300 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                          <Info className="h-4 w-4" />
                        </span>
                        <span className="text-sm">Thông Tin</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-gray-400 transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="flex flex-col bg-gray-900/50 border-l-2 border-lime-300/30 ml-4">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex items-center gap-3 pl-8 pr-4 py-2.5 hover:bg-gray-900 hover:text-lime-300 transition-colors"
                          >
                            <service.icon className="h-4 w-4 text-lime-300/70" />
                            <span className="text-sm">{service.label}</span>
                          </Link>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-lime-300 transition-colors"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4">
                  <Button
                    asChild
                    className="w-full bg-lime-400 text-black font-medium rounded-lg px-6 py-2.5
                               hover:bg-lime-300 hover:shadow-md hover:scale-[1.02]
                               transition-all"
                  >
                    <Link href="#register">Đăng Ký Ngay</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
