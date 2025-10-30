import type { Metadata } from "next";
import { AppverseFooter } from "@/components/appverse-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "FAQ | Viet My Vibe Code 2025",
  description:
    "Câu hỏi thường gặp về cuộc thi lập trình Viet My Vibe Code 2025. Tìm hiểu về quy định, cách thức tham gia và giải thưởng.",
};

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <section className="py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="liquid-glass relative overflow-hidden rounded-3xl border border-white/20 p-6 shadow-xl sm:p-10">
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="font-bold text-4xl text-lime-300 tracking-tight">
                    Câu Hỏi Thường Gặp
                  </h1>
                  <p className="text-lg text-neutral-400">
                    Những câu hỏi phổ biến về cuộc thi lập trình Viet My Vibe
                    Code 2025.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="font-semibold text-2xl text-white">
                    1. Cuộc thi dành cho ai?
                  </h2>
                  <p className="text-neutral-300">
                    Cuộc thi dành cho tất cả sinh viên đang theo học tại các
                    trường cao đẳng, đại học tại Việt Nam. Mỗi đội thi gồm 2
                    thành viên.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-semibold text-2xl text-white">
                    2. Cuộc thi diễn ra khi nào và ở đâu?
                  </h2>
                  <p className="text-neutral-300">
                    Cuộc thi diễn ra từ ngày <strong>17/11/2025</strong> đến{" "}
                    <strong>29/11/2025</strong> tại{" "}
                    <strong>Cao Đẳng Việt Mỹ</strong>. Vòng chung kết sẽ được tổ
                    chức trực tiếp tại trường.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-semibold text-2xl text-white">
                    3. Có bao nhiêu vòng thi?
                  </h2>
                  <p className="text-neutral-300">Cuộc thi có 2 vòng:</p>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-neutral-400">
                    <li>
                      <strong className="text-neutral-300">
                        Vòng Tuyển Chọn:
                      </strong>{" "}
                      Nộp đề tài và video recap về quá trình làm bài. Ban tổ
                      chức sẽ chọn 8 đội xuất sắc nhất.
                    </li>
                    <li>
                      <strong className="text-neutral-300">
                        Vòng Chung Kết:
                      </strong>{" "}
                      8 đội thi trực tiếp, mỗi đội có 30 phút thực hiện dự án và
                      5 phút trình bày sản phẩm.
                    </li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="font-semibold text-2xl text-white">
                    4. Được phép sử dụng công cụ gì?
                  </h2>
                  <p className="text-neutral-300">
                    Thí sinh được phép sử dụng:
                  </p>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-neutral-400">
                    <li>
                      <strong className="text-neutral-300">
                        AI Chatbot/AI Agent:
                      </strong>{" "}
                      ChatGPT, Claude, Gemini, Copilot, Cursor, Zed, GitHub
                      Copilot, v.v.
                    </li>
                    <li>
                      <strong className="text-neutral-300">
                        Ngôn ngữ lập trình:
                      </strong>{" "}
                      Python, Java, C#, JavaScript, Flutter, và bất kỳ ngôn ngữ
                      nào khác.
                    </li>
                    <li>
                      <strong className="text-neutral-300">
                        Framework & Tools:
                      </strong>{" "}
                      Bất kỳ framework, thư viện hay công cụ nào miễn sao hoàn
                      thành được sản phẩm đúng yêu cầu.
                    </li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="font-semibold text-2xl text-white">
                    5. Tiêu chí chấm điểm như thế nào?
                  </h2>
                  <p className="text-neutral-300">
                    Ban giám khảo đánh giá theo 4 tiêu chí:
                  </p>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-neutral-400">
                    <li>
                      <strong className="text-neutral-300">
                        Hiệu quả ứng dụng AI (30%):
                      </strong>{" "}
                      Khả năng tận dụng AI để tăng tốc và cải thiện chất lượng
                    </li>
                    <li>
                      <strong className="text-neutral-300">
                        Tính đúng đắn & tối ưu (30%):
                      </strong>{" "}
                      Giải pháp hoạt động đúng và hiệu quả
                    </li>
                    <li>
                      <strong className="text-neutral-300">
                        Sáng tạo & trình bày (20%):
                      </strong>{" "}
                      Ý tưởng độc đáo và cách thuyết trình
                    </li>
                    <li>
                      <strong className="text-neutral-300">
                        Teamwork & thuyết trình (20%):
                      </strong>{" "}
                      Phối hợp nhóm và kỹ năng trình bày
                    </li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="font-semibold text-2xl text-white">
                    6. Giải thưởng là gì?
                  </h2>
                  <p className="text-neutral-300">Cơ cấu giải thưởng:</p>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-neutral-400">
                    <li>
                      <strong className="text-lime-300">Giải Nhất:</strong>{" "}
                      3.000.000 VNĐ + Giấy chứng nhận
                    </li>
                    <li>
                      <strong className="text-neutral-300">Giải Nhì:</strong>{" "}
                      2.000.000 VNĐ + Giấy chứng nhận
                    </li>
                    <li>
                      <strong className="text-neutral-300">Giải Ba:</strong>{" "}
                      1.000.000 VNĐ + Giấy chứng nhận
                    </li>
                    <li>
                      Tất cả 8 đội vào chung kết đều nhận{" "}
                      <strong className="text-neutral-300">
                        giấy chứng nhận tham gia
                      </strong>{" "}
                      do Cao Đẳng Việt Mỹ cấp.
                    </li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="font-semibold text-2xl text-white">
                    7. Có được sử dụng code có sẵn không?
                  </h2>
                  <p className="text-neutral-300">
                    Sản phẩm phải do chính đội thi thực hiện trong thời gian quy
                    định. Không được sử dụng code có sẵn từ bên ngoài ngoài phạm
                    vi cho phép (như thư viện open-source tiêu chuẩn).
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-semibold text-2xl text-white">
                    8. Làm thế nào để đăng ký?
                  </h2>
                  <p className="text-neutral-300">
                    Mỗi đội gồm 2 thành viên đăng ký chính thức qua{" "}
                    <a
                      className="text-lime-300 underline"
                      href={
                        process.env.NEXT_PUBLIC_REGISTRATION_URL || "/#register"
                      }
                    >
                      link đăng ký
                    </a>{" "}
                    trên trang chủ. Đảm bảo điền đầy đủ thông tin của cả 2 thành
                    viên.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-semibold text-2xl text-white">
                    9. Quyết định của ban giám khảo có thể thay đổi không?
                  </h2>
                  <p className="text-neutral-300">
                    Quyết định của ban giám khảo là cuối cùng và không thể thay
                    đổi.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-semibold text-2xl text-white">
                    10. Liên hệ ai để biết thêm thông tin?
                  </h2>
                  <p className="text-neutral-300">
                    Để biết thêm chi tiết, vui lòng liên hệ:
                  </p>
                  <p className="text-neutral-300">
                    Email:{" "}
                    <a
                      className="text-lime-300 underline transition-colors hover:text-lime-200"
                      href="mailto:mua.tran@caodangvietmy.edu.vn"
                    >
                      mua.tran@caodangvietmy.edu.vn
                    </a>
                  </p>
                  <p className="text-neutral-300">
                    Hotline:{" "}
                    <a
                      className="text-lime-300 underline transition-colors hover:text-lime-200"
                      href="tel:0914444686"
                    >
                      091 444 46 86
                    </a>
                  </p>
                  <p className="text-neutral-300">
                    Facebook:{" "}
                    <a
                      className="text-lime-300 underline transition-colors hover:text-lime-200"
                      href="https://www.facebook.com/caodangvietmy"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Cao Đẳng Việt Mỹ
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppverseFooter />
    </>
  );
}
