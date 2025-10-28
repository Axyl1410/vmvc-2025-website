import { AppverseFooter } from "@/components/appverse-footer";
import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thể Lệ Cuộc Thi | Viet My Vibe Code 2025",
  description:
    "Thể lệ chi tiết của cuộc thi lập trình Viet My Vibe Code 2025. Quy định, cách thức tham gia và tiêu chí chấm điểm.",
};

export default function CompetitionRulesPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-white/20 liquid-glass p-6 sm:p-10 shadow-xl">
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">
                    Thể Lệ Cuộc Thi
                  </h1>
                  <p className="text-neutral-400 text-lg">
                    Quy định chi tiết về cách thức tham gia và tổ chức cuộc thi
                    Viet My Vibe Code 2025.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    I. Nội Dung Bài Thi
                  </h2>
                  <ol className="list-decimal list-inside space-y-2 text-neutral-300 ml-4">
                    <li>
                      Thí sinh tham gia theo đội 2 thành viên, cùng nhau giải
                      quyết các đề bài thực tế trong lĩnh vực công nghệ và phần
                      mềm.
                    </li>
                    <li>
                      Mỗi đội cần hoàn thiện một giải pháp phần mềm chạy được
                      ngay trong thời gian giới hạn, thể hiện khả năng kết hợp
                      giữa kỹ năng lập trình, teamwork và ứng dụng AI.
                    </li>
                  </ol>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    II. Cách Thức Tham Gia
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-lime-300 mb-2">
                        Vòng Tuyển Chọn
                      </h3>
                      <p className="text-neutral-300">
                        Các đội thi nộp đề tài và video recap về quá trình làm
                        bài. Ban tổ chức sẽ chọn ra 8 đội xuất sắc nhất để vào
                        vòng chung kết.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-lime-300 mb-2">
                        Vòng Chung Kết
                      </h3>
                      <p className="text-neutral-300">
                        Mỗi đội có 30 phút thực hiện dự án và 5 phút trình diễn
                        sản phẩm trước ban giám khảo và khán giả. Được phép sử
                        dụng AI Chatbot/AI Agent (ví dụ: ChatGPT, Claude,
                        Gemini, Copilot, hay các Agent Mode như Cursor, Zed,
                        GitHub Copilot).
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-lime-300 mb-2">
                        Công Cụ Được Phép
                      </h3>
                      <p className="text-neutral-300">
                        Thí sinh được phép sử dụng bất kỳ công cụ hoặc ngôn ngữ
                        lập trình nào (Python, Java, C#, JavaScript, Flutter,
                        v.v.) miễn sao hoàn thành được sản phẩm đúng yêu cầu đề.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    III. Quy Định Cuộc Thi
                  </h2>
                  <ol className="list-decimal list-inside space-y-2 text-neutral-300 ml-4">
                    <li>
                      <strong>Thời gian:</strong> 17/11/2025 - 29/11/2025
                    </li>
                    <li>
                      <strong>Thành viên:</strong> Mỗi đội gồm 2 thành viên,
                      đăng ký chính thức qua link đăng ký.
                    </li>
                    <li>
                      <strong>Sản phẩm:</strong> Phải do chính đội thi thực hiện
                      trong thời gian quy định, không được sử dụng code có sẵn
                      từ bên ngoài ngoài phạm vi cho phép.
                    </li>
                    <li>
                      <strong>Trình bày:</strong> Các đội phải tuân thủ đúng
                      thời gian làm bài, trình bày và bảo vệ sản phẩm trước ban
                      giám khảo.
                    </li>
                    <li>
                      <strong>Quyết định:</strong> Quyết định của ban giám khảo
                      là cuối cùng và không thể thay đổi.
                    </li>
                  </ol>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    IV. Cách Thức Trình Diễn Sản Phẩm
                  </h2>
                  <p className="text-neutral-300">
                    Mỗi đội sẽ trình diễn và thuyết minh một cách khoa học phản
                    ánh được những gì đội đã thực hiện bao gồm:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400 ml-4">
                    <li>Sản phẩm chạy được và đáp ứng yêu cầu của đề bài</li>
                    <li>Tính năng nổi bật của sản phẩm</li>
                    <li>Cách sử dụng AI trong quá trình phát triển</li>
                    <li>Điều tâm đắc khi thực hiện sản phẩm</li>
                    <li>Phân công công việc trong nhóm</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    V. Tiêu Chí Chấm Điểm
                  </h2>
                  <div className="space-y-4">
                    <div className="liquid-glass border border-white/20 p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          Hiệu quả ứng dụng AI
                        </h3>
                        <span className="text-2xl font-bold text-lime-300">
                          30%
                        </span>
                      </div>
                      <p className="text-sm text-neutral-400">
                        Đánh giá khả năng tận dụng AI để tăng tốc phát triển và
                        cải thiện chất lượng sản phẩm.
                      </p>
                    </div>
                    <div className="liquid-glass border border-white/20 p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          Tính đúng đắn và tối ưu
                        </h3>
                        <span className="text-2xl font-bold text-lime-300">
                          30%
                        </span>
                      </div>
                      <p className="text-sm text-neutral-400">
                        Giải pháp hoạt động đúng, ổn định và được tối ưu hóa
                        hiệu quả.
                      </p>
                    </div>
                    <div className="liquid-glass border border-white/20 p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          Sáng tạo & trình bày
                        </h3>
                        <span className="text-2xl font-bold text-lime-300">
                          20%
                        </span>
                      </div>
                      <p className="text-sm text-neutral-400">
                        Ý tưởng độc đáo, cách tiếp cận sáng tạo và kỹ năng
                        thuyết trình.
                      </p>
                    </div>
                    <div className="liquid-glass border border-white/20 p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          Teamwork & thuyết trình
                        </h3>
                        <span className="text-2xl font-bold text-lime-300">
                          20%
                        </span>
                      </div>
                      <p className="text-sm text-neutral-400">
                        Phối hợp nhóm nhịp nhàng và kỹ năng trình bày chuyên
                        nghiệp.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    VI. Cơ Cấu Giải Thưởng
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="text-left py-3 px-4 text-lime-300">
                            Giải thưởng
                          </th>
                          <th className="text-left py-3 px-4 text-lime-300">
                            Giá trị (VNĐ)
                          </th>
                          <th className="text-left py-3 px-4 text-lime-300">
                            Ghi chú
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4 text-white font-semibold">
                            Giải Nhất
                          </td>
                          <td className="py-3 px-4 text-neutral-300">
                            3.000.000
                          </td>
                          <td className="py-3 px-4 text-neutral-400">
                            Đội có kết quả xuất sắc nhất
                          </td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4 text-white font-semibold">
                            Giải Nhì
                          </td>
                          <td className="py-3 px-4 text-neutral-300">
                            2.000.000
                          </td>
                          <td className="py-3 px-4 text-neutral-400">
                            Đội có giải pháp tốt, sáng tạo
                          </td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4 text-white font-semibold">
                            Giải Ba
                          </td>
                          <td className="py-3 px-4 text-neutral-300">
                            1.000.000
                          </td>
                          <td className="py-3 px-4 text-neutral-400">
                            Đội có nỗ lực và trình bày tốt nhất
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-neutral-400 text-sm italic mt-4">
                    * Ngoài ra, 8 đội vào vòng chung kết đều được cấp giấy chứng
                    nhận tham gia cuộc thi do Cao Đẳng Việt Mỹ cấp.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    VII. Liên Hệ
                  </h2>
                  <p className="text-neutral-300">
                    Mọi thắc mắc về thể lệ cuộc thi, vui lòng liên hệ:
                  </p>
                  <p className="text-neutral-300">
                    Email:{" "}
                    <a
                      href="mailto:mua.tran@caodangvietmy.edu.vn"
                      className="text-lime-300 underline hover:text-lime-200 transition-colors"
                    >
                      mua.tran@caodangvietmy.edu.vn
                    </a>
                  </p>
                  <p className="text-neutral-300">
                    Hotline:{" "}
                    <a
                      href="tel:0914444686"
                      className="text-lime-300 underline hover:text-lime-200 transition-colors"
                    >
                      091 444 46 86
                    </a>
                  </p>
                  <p className="text-neutral-300">
                    Facebook:{" "}
                    <a
                      href="https://www.facebook.com/caodangvietmy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lime-300 underline hover:text-lime-200 transition-colors"
                    >
                      Cao Đẳng Việt Mỹ
                    </a>
                  </p>
                  <p className="text-neutral-300">
                    Website:{" "}
                    <a
                      href="https://caodangvietmy.edu.vn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lime-300 underline hover:text-lime-200 transition-colors"
                    >
                      caodangvietmy.edu.vn
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
