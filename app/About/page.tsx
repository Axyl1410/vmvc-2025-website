import type { Metadata } from "next";
import Script from "next/script";
import { AppverseFooter } from "@/components/appverse-footer";
import { SiteHeader } from "@/components/site-header";
import { RegistrationFormSection } from "@/components/registration-form";
import { Timeline } from "@/components/timeline";

export const metadata: Metadata = {
  title: "Về Cuộc Thi | Viet My Vibe Code 2025",
  description:
    "Tìm hiểu về cuộc thi lập trình Viet My Vibe Code 2025 dành cho sinh viên. Kết hợp AI và kỹ năng lập trình để xây dựng giải pháp phần mềm.",
};

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Viet My Vibe Code 2025",
    description:
      "Cuộc thi lập trình dành cho sinh viên, nơi thí sinh vận dụng AI và kỹ năng lập trình",
    startDate: "2025-11-17",
    endDate: "2025-11-29",
    location: {
      "@type": "Place",
      name: "Cao Đẳng Việt Mỹ",
      address: {
        "@type": "PostalAddress",
        addressCountry: "VN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Cao Đẳng Việt Mỹ",
      url: "https://vietmy.edu.vn",
    },
  };

  return (
    <>
      <Script id="about-ldjson" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center text-white md:px-12 lg:px-20">
        <div className="relative">
          <h1 className="mb-6 font-bold text-4xl md:text-6xl">
            Về Cuộc Thi{" "}
            <span className="text-lime-300">Viet My Vibe Code 2025</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-neutral-300 md:text-xl">
            Sân chơi lập trình dành cho sinh viên, nơi công nghệ AI gặp gỡ kỹ
            năng coding để tạo ra những giải pháp phần mềm sáng tạo.
          </p>
        </div>
      </section>

      {/* Giới thiệu */}
      <section className="px-6 py-16 text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="liquid-glass rounded-3xl border border-white/20 p-8 md:p-12">
            <h2 className="mb-6 font-bold text-3xl text-lime-300">
              Giới Thiệu
            </h2>
            <div className="space-y-4 text-neutral-300 leading-relaxed">
              <p>
                <strong className="text-white">Viet My Vibe Code 2025</strong>{" "}
                là cuộc thi lập trình dành cho sinh viên, nơi thí sinh được thử
                thách vận dụng các công cụ AI hiện đại cùng những ngôn ngữ lập
                trình để xây dựng nên một giải pháp phần mềm hoàn chỉnh trong
                thời gian rất ngắn.
              </p>
              <p>
                Mỗi đội thi không chỉ cần kỹ năng coding vững vàng, mà còn phải
                biết cách kết hợp sức mạnh của AI Chatbot/AI Agent để tăng tốc
                phát triển, xử lý thông minh và mang lại trải nghiệm khác biệt
                cho sản phẩm.
              </p>
              <p>
                Cuộc thi đề cao sự sáng tạo, khả năng teamwork và tinh thần thực
                chiến, bởi chỉ khi phối hợp nhịp nhàng và tận dụng tối đa công
                nghệ, các đội mới có thể biến ý tưởng thành ứng dụng thực tiễn
                trong giới hạn thời gian.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mục tiêu */}
      <section className="px-6 py-16 text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-bold text-3xl md:text-4xl">
            Mục Tiêu Cuộc Thi
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Rèn luyện kỹ năng AI",
                desc: "Giúp sinh viên biết cách khai thác AI Chatbot, AI Agent và các công cụ AI khác để giải quyết bài toán thực tế thay vì sử dụng một cách thụ động.",
              },
              {
                title: "Lập trình thực chiến",
                desc: "Tạo cơ hội cho sinh viên vận dụng các ngôn ngữ lập trình, framework và công cụ hiện đại để hoàn thiện giải pháp trong thời gian giới hạn.",
              },
              {
                title: "Tư duy sáng tạo",
                desc: "Khuyến khích thí sinh đưa ra ý tưởng mới, áp dụng AI như một 'trợ thủ' thông minh nhằm tăng tốc độ và chất lượng sản phẩm.",
              },
              {
                title: "Kỹ năng teamwork",
                desc: "Giúp sinh viên trải nghiệm môi trường làm việc nhóm, chia sẻ vai trò, phối hợp nhịp nhàng để tạo ra sản phẩm hoàn chỉnh.",
              },
              {
                title: "Kết nối cộng đồng",
                desc: "Xây dựng sân chơi để sinh viên gặp gỡ, học hỏi lẫn nhau, đồng thời tiếp cận xu hướng công nghệ mới.",
              },
              {
                title: "Định hướng nghề nghiệp",
                desc: "Mở ra cơ hội nghề nghiệp trong lĩnh vực AI và phần mềm cho thế hệ trẻ Việt Nam.",
              },
            ].map((item) => (
              <div
                className="liquid-glass rounded-2xl border border-white/20 p-6 transition-all duration-300 hover:border-lime-300/50 hover:shadow-[0_0_30px_rgba(132,204,22,0.2)]"
                key={item.title}
              >
                <h3 className="mb-3 font-semibold text-lime-300 text-xl">
                  {item.title}
                </h3>
                <p className="text-neutral-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thông tin tổ chức */}
      <section className="px-6 py-16 text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="liquid-glass rounded-3xl border border-white/20 p-8 md:p-12">
            <h2 className="mb-6 font-bold text-3xl text-lime-300">
              Ban Tổ Chức
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold text-white text-xl">
                  Cao Đẳng Việt Mỹ
                </h3>
                <p className="text-neutral-300">
                  Trường Cao đẳng Việt Mỹ tự hào là đơn vị tổ chức cuộc thi lập
                  trình Viet My Vibe Code 2025, nhằm tạo sân chơi bổ ích cho
                  sinh viên đam mê công nghệ.
                </p>
              </div>
              <div className="grid gap-6 border-white/10 border-t pt-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-white">Thời gian</h4>
                  <p className="text-neutral-300">17/11/2025 - 29/11/2025</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">Địa điểm</h4>
                  <p className="text-neutral-300">Cao Đẳng Việt Mỹ</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">Liên hệ</h4>
                  <p className="text-neutral-300">
                    <a
                      className="transition-colors hover:text-lime-300"
                      href="mailto:mua.tran@caodangvietmy.edu.vn"
                    >
                      Email: mua.tran@caodangvietmy.edu.vn
                    </a>
                  </p>
                  <p className="text-neutral-300">
                    <a
                      className="transition-colors hover:text-lime-300"
                      href="tel:0914444686"
                    >
                      Hotline: 091 444 46 86
                    </a>
                  </p>
                  <p className="text-neutral-300">
                    <a
                      className="transition-colors hover:text-lime-300"
                      href="https://www.facebook.com/caodangvietmy"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Facebook: Cao Đẳng Việt Mỹ
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">Giải thưởng</h4>
                  <p className="text-neutral-300">
                    Tổng giải thưởng: 6.000.000 VNĐ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Timeline />
      <RegistrationFormSection />
      <AppverseFooter />
    </>
  );
}
