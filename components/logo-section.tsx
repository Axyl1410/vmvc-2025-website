import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import StarBorder from "./StarBorder";

export function LogoSection() {
  return (
    <section className="bg-[#0a0a0a] py-16 text-white sm:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-600/20 to-purple-500/20 px-4 py-2 font-medium text-purple-300 text-sm">
            Our Clients
          </div>

          {/* Heading */}
          <h2 className="mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text font-bold text-4xl text-transparent sm:text-5xl md:text-6xl">
            Over 100+ company
          </h2>

          {/* Subtitle */}
          <p className="mb-12 max-w-2xl text-lg text-neutral-400 sm:text-xl">
            Helping you to protect all your digital activity and data
          </p>

          {/* Logo Grid */}
          <div className="mb-12 w-full max-w-5xl">
            {/* Desktop & Tablet Grid */}
            <div className="hidden gap-4 sm:grid sm:grid-cols-3 lg:grid-cols-5">
              {/* Row 1 */}
              <div className="liquid-glass col-span-2 flex items-center justify-center rounded-2xl px-8 py-6">
                <span className="font-light text-neutral-300 text-xl tracking-[0.2em]">
                  NORDSTROM
                </span>
              </div>
              <div className="liquid-glass flex items-center justify-center rounded-2xl p-6">
                <div className="flex h-8 w-8 items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-neutral-400 to-neutral-600" />
                </div>
              </div>
              <div className="liquid-glass col-span-2 flex items-center justify-center rounded-2xl px-8 py-6">
                <span className="font-light text-neutral-300 text-xl tracking-[0.3em]">
                  TESLA
                </span>
              </div>

              {/* Row 2 */}
              <div className="liquid-glass flex items-center justify-center rounded-2xl p-6">
                <div className="text-2xl text-neutral-300">🍎</div>
              </div>
              <div className="liquid-glass flex items-center justify-center rounded-2xl px-6 py-6">
                <div className="rounded-full border-2 border-neutral-400 px-4 py-1">
                  <span className="font-serif text-neutral-300 text-sm italic">
                    Ford
                  </span>
                </div>
              </div>
              <div className="liquid-glass flex items-center justify-center rounded-2xl p-6">
                <span className="font-bold text-lg text-neutral-300 tracking-wider">
                  GAP
                </span>
              </div>
              <div className="liquid-glass flex items-center justify-center rounded-2xl px-6 py-6">
                <span className="font-light text-lg text-neutral-300 tracking-wide">
                  LACOSTE
                </span>
              </div>
              <div className="liquid-glass flex items-center justify-center rounded-2xl px-6 py-6">
                <span className="font-bold text-neutral-300 text-xl">ca</span>
              </div>

              {/* Row 3 */}
              <div className="liquid-glass flex items-center justify-center rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div
                      className="h-2 w-2 rounded-sm bg-neutral-400"
                      key={i}
                    />
                  ))}
                </div>
              </div>
              <div className="liquid-glass col-span-2 flex items-center justify-center rounded-2xl px-8 py-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-neutral-400">
                    <div className="text-neutral-300 text-xs">★</div>
                  </div>
                  <span className="font-light text-lg text-neutral-300">
                    Mercedes-Benz
                  </span>
                </div>
              </div>
              <div className="liquid-glass flex items-center justify-center rounded-2xl p-6">
                <div className="text-2xl text-neutral-300">🍎</div>
              </div>
              <div className="liquid-glass flex items-center justify-center rounded-2xl p-6">
                <div className="text-2xl text-neutral-300">🎮</div>
              </div>
            </div>

            {/* Mobile Stack */}
            <div className="flex flex-col gap-4 sm:hidden">
              <div className="liquid-glass flex items-center justify-center rounded-2xl px-8 py-8">
                <span className="font-light text-2xl text-neutral-300 tracking-[0.2em]">
                  NORDSTROM
                </span>
              </div>
              <div className="liquid-glass flex items-center justify-center rounded-2xl p-8">
                <div className="flex h-10 w-10 items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-neutral-400 to-neutral-600" />
                </div>
              </div>
              <div className="liquid-glass flex items-center justify-center rounded-2xl px-8 py-8">
                <span className="font-light text-2xl text-neutral-300 tracking-[0.3em]">
                  TESLA
                </span>
              </div>
              <div className="liquid-glass flex items-center justify-center rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      className="h-3 w-3 rounded-sm bg-neutral-400"
                      key={i}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <StarBorder>
            <Button asChild className="group rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-8 py-3 text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105 hover:shadow-purple-500/40 hover:shadow-xl">
              <a href="#register">
                Try now for free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </StarBorder>
        </div>
      </div>
    </section>
  );
}
