"use client";

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
        <div className="liquid-glass-header flex h-14 items-center justify-between rounded-full px-6">
          {/* Brand Logo */}
          <Link className="flex items-center gap-1.5" href="/">
            <Image
              alt="Viet My Vibe Code logo"
              className="h-5 w-5"
              height={20}
              src="/icons/skitbit-white.svg"
              width={20}
            />
            <span className="font-semibold text-white tracking-wide">
              VMVC 2025
            </span>
          </Link>

          {/* Desktop Nav with Services Dropdown */}
          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white/90 transition-colors hover:bg-transparent hover:text-lime-300 focus:bg-transparent data-[active=true]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-lime-300 data-[state=open]:hover:bg-transparent">
                    Thông Tin
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-9999 border-0! bg-transparent! shadow-none!">
                    <ul className="relative z-10000 grid w-[280px] gap-2 p-4 opacity-100">
                      {services.map((service) => (
                        <li className="opacity-100" key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              className="group visible relative flex items-start gap-3 rounded-lg border border-white/20 bg-gray-900 p-3.5 opacity-100 transition-all hover:border-lime-300/50 hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(132,204,22,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300/70"
                              href={service.href}
                            >
                              <service.icon className="mt-0.5 h-5 w-5 shrink-0 text-lime-400 opacity-100 group-hover:text-lime-300" />
                              <div className="flex-1 opacity-100">
                                <div className="mb-1 font-semibold text-sm text-white opacity-100 group-hover:text-lime-300">
                                  {service.label}
                                </div>
                                <p className="text-gray-300 text-xs leading-relaxed opacity-100">
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
                className="transition-colors hover:text-lime-300"
                href={l.href}
                key={l.href}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="rounded-lg bg-lime-400 px-6 py-2.5 font-medium text-black transition-all hover:scale-[1.02] hover:bg-lime-300 hover:shadow-md"
            >
              <Link href="#register">Đăng Ký Ngay</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                  size="icon"
                  variant="outline"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                className="liquid-glass flex w-64 flex-col border-gray-800 p-0"
                side="right"
              >
                {/* Brand Header */}
                <div className="flex items-center gap-1.5 border-gray-800 border-b px-4 py-4">
                  <Image
                    alt="Viet My Vibe Code logo"
                    className="h-6 w-6"
                    height={24}
                    src="/icons/skitbit-white.svg"
                    width={24}
                  />
                  <span className="font-semibold text-lg text-white tracking-wide">
                    VMVC 2025
                  </span>
                </div>

                {/* Nav Links */}
                <nav className="mt-2 flex flex-col gap-1 text-gray-200">
                  <Collapsible
                    onOpenChange={setServicesOpen}
                    open={servicesOpen}
                  >
                    <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 transition-colors hover:bg-gray-900 hover:text-lime-300">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-5 w-5 items-center justify-center text-gray-400">
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
                      <div className="ml-4 flex flex-col border-lime-300/30 border-l-2 bg-gray-900/50">
                        {services.map((service) => (
                          <Link
                            className="flex items-center gap-3 py-2.5 pr-4 pl-8 transition-colors hover:bg-gray-900 hover:text-lime-300"
                            href={service.href}
                            key={service.href}
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
                      className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-gray-900 hover:text-lime-300"
                      href={l.href}
                      key={l.href}
                    >
                      <span className="inline-flex h-5 w-5 items-center justify-center text-gray-400">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-gray-800 border-t p-4">
                  <Button
                    asChild
                    className="w-full rounded-lg bg-lime-400 px-6 py-2.5 font-medium text-black transition-all hover:scale-[1.02] hover:bg-lime-300 hover:shadow-md"
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
