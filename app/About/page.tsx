import { AppverseFooter } from "@/components/appverse-footer";
import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(163,230,53,0.15),transparent_70%)] pointer-events-none" />
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Về Cuộc Thi{" "}
            <span className="text-lime-300">Viet My Vibe Code 2025</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-neutral-300">
            Sân chơi lập trình dành cho sinh viên, nơi công nghệ AI gặp gỡ kỹ
            năng coding để tạo ra những giải pháp phần mềm sáng tạo.
          </p>
        </div>
      </section>

      {/* Giới thiệu */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="liquid-glass border border-white/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-lime-300">
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
      <section className="py-16 bg-black text-white px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
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
            ].map((item, index) => (
              <div
                key={index}
                className="liquid-glass border border-white/20 p-6 rounded-2xl hover:border-lime-300/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(132,204,22,0.2)]"
              >
                <h3 className="text-xl font-semibold mb-3 text-lime-300">
                  {item.title}
                </h3>
                <p className="text-neutral-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thông tin tổ chức */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="liquid-glass border border-white/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-lime-300">
              Ban Tổ Chức
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Cao Đẳng Việt Mỹ
                </h3>
                <p className="text-neutral-300">
                  Trường Cao đẳng Việt Mỹ tự hào là đơn vị tổ chức cuộc thi lập
                  trình Viet My Vibe Code 2025, nhằm tạo sân chơi bổ ích cho
                  sinh viên đam mê công nghệ.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div>
                  <h4 className="font-semibold text-white mb-2">Thời gian</h4>
                  <p className="text-neutral-300">17/11/2025 - 29/11/2025</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Địa điểm</h4>
                  <p className="text-neutral-300">Cao Đẳng Việt Mỹ</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Liên hệ</h4>
                  <p className="text-neutral-300">
                    <a
                      href="mailto:mua.tran@caodangvietmy.edu.vn"
                      className="hover:text-lime-300 transition-colors"
                    >
                      Email: mua.tran@caodangvietmy.edu.vn
                    </a>
                  </p>
                  <p className="text-neutral-300">
                    <a
                      href="tel:0914444686"
                      className="hover:text-lime-300 transition-colors"
                    >
                      Hotline: 091 444 46 86
                    </a>
                  </p>
                  <p className="text-neutral-300">
                    <a
                      href="https://www.facebook.com/caodangvietmy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300 transition-colors"
                    >
                      Facebook: Cao Đẳng Việt Mỹ
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Giải thưởng</h4>
                  <p className="text-neutral-300">
                    Tổng giải thưởng: 6.000.000 VNĐ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-center text-white px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(163,230,53,0.1),transparent_70%)] pointer-events-none" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sẵn sàng tham gia?
          </h2>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Đăng ký ngay để trở thành một phần của cuộc thi lập trình sáng tạo
            nhất năm!
          </p>
          <a
            href="/#register"
            className="inline-block bg-lime-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-lime-300 transition-all hover:shadow-[0_0_30px_rgba(163,230,53,0.4)]"
          >
            Đăng Ký Ngay
          </a>
        </div>
      </section>

      <AppverseFooter />
    </>
  );
}
