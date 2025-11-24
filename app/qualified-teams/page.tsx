import type { Metadata } from "next";
import { AppverseFooter } from "@/components/appverse-footer";
import { SiteHeader } from "@/components/site-header";
import { QUALIFIED_TEAMS } from "@/lib/qualified-teams";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Đội Thi Vào Vòng Trong | Viet My Vibe Code 2025",
  description:
    "Danh sách các đội thi đã vượt qua vòng sơ loại và vào vòng trong của cuộc thi lập trình Viet My Vibe Code 2025.",
};

export default function QualifiedTeamsPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center text-white md:px-12 lg:px-20">
        <div className="relative">
          <h1 className="mb-6 font-bold text-4xl md:text-6xl">
            Đội Thi{" "}
            <span className="text-lime-300">Vào Vòng Trong</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-neutral-300 md:text-xl">
            Danh sách {QUALIFIED_TEAMS.length} đội thi đã vượt qua vòng sơ loại
            và vào vòng trong của cuộc thi lập trình Viet My Vibe Code 2025.
          </p>
        </div>
      </section>

      {/* Teams Table Section */}
      <section className="px-6 py-16 text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="liquid-glass rounded-3xl border border-white/20 p-8 md:p-12">
            <h2 className="mb-8 text-center font-bold text-3xl text-lime-300">
              Danh Sách Đội Thi
            </h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/20">
                    <TableHead className="font-semibold text-white text-base">
                      STT
                    </TableHead>
                    <TableHead className="font-semibold text-white text-base">
                      Tên đội
                    </TableHead>
                    <TableHead className="font-semibold text-white text-base">
                      Đơn vị
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {QUALIFIED_TEAMS.map((team, index) => (
                    <TableRow
                      key={`${team.name}-${index}`}
                      className="border-white/10"
                    >
                      <TableCell className="font-medium text-white">
                        {index + 1}
                      </TableCell>
                      <TableCell className="font-medium text-white">
                        {team.name}
                      </TableCell>
                      <TableCell className="text-neutral-300">
                        {team.institution}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-8 text-center">
              <p className="text-neutral-400">
                Tổng cộng: <span className="font-semibold text-lime-300">{QUALIFIED_TEAMS.length} đội</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <AppverseFooter />
    </>
  );
}

