import Script from "next/script";
import { AppverseFooter } from "@/components/appverse-footer";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { Pricing } from "@/components/pricing";
import { SiteHeader } from "@/components/site-header";

// ✅ Force static generation for low TTFB
export const dynamic = "force-static";

export default function Page() {
  // Structured data for competition prizes
  const prizesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Viet My Vibe Code 2025",
    description:
      "Cuộc thi lập trình dành cho sinh viên, nơi thí sinh vận dụng AI và kỹ năng lập trình",
    startDate: "2025-11-17",
    endDate: "2025-11-29",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Cao Đẳng Việt Mỹ",
      address: {
        "@type": "PostalAddress",
        addressCountry: "VN",
      },
    },
    offers: [
      {
        "@type": "Offer",
        name: "Giải Nhất",
        price: "3000000",
        priceCurrency: "VND",
        description: "Đội có kết quả xuất sắc nhất",
      },
      {
        "@type": "Offer",
        name: "Giải Nhì",
        price: "2000000",
        priceCurrency: "VND",
        description: "Đội có giải pháp tốt và sáng tạo",
      },
      {
        "@type": "Offer",
        name: "Giải Ba",
        price: "1000000",
        priceCurrency: "VND",
        description: "Đội có nỗ lực và trình bày tốt",
      },
    ],
  };

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Viet My Vibe Code 2025 | Cuộc Thi Lập Trình Sinh Viên",
    description:
      "Cuộc thi lập trình dành cho sinh viên, nơi thí sinh vận dụng AI và kỹ năng lập trình để xây dựng giải pháp phần mềm hoàn chỉnh. Giải thưởng lên đến 6 triệu đồng.",
    mainEntity: {
      "@type": "Organization",
      name: "Cao Đẳng Việt Mỹ",
    },
  };

  return (
    <>
      <main className="min-h-dvh text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <LogoMarquee />
        <Pricing />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(prizesStructuredData),
        }}
        id="prizes-structured-data"
        strategy="afterInteractive"
        type="application/ld+json"
      />

      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
        id="page-structured-data"
        strategy="afterInteractive"
        type="application/ld+json"
      />
    </>
  );
}
