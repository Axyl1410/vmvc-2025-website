import Link from "next/link";
import { QUALIFIED_TEAMS } from "@/lib/qualified-teams";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function QualifiedTeamsSection() {
  // Show first 5 teams as preview
  const previewTeams = QUALIFIED_TEAMS.slice(0, 5);

  return (
    <section className="mt-16" id="qualified-teams">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-4 text-center font-extrabold text-2xl text-white tracking-tight sm:text-3xl">
          Đội Thi Vào Vòng Trong
        </h2>
        <p className="mb-6 text-center text-neutral-300">
          Danh sách các đội thi đã vượt qua vòng sơ loại và vào vòng trong của
          cuộc thi.
        </p>
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30 shadow-sm">
          <div className="p-6">
            <Table>
              <TableHeader>
                <TableRow className="border-white/20">
                  <TableHead className="font-semibold text-white">Tên đội</TableHead>
                  <TableHead className="font-semibold text-white">Đơn vị</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {previewTeams.map((team, index) => (
                  <TableRow
                    key={`${team.name}-${index}`}
                    className="border-white/10"
                  >
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
            <div className="mt-6 text-center">
              <Link
                href="/qualified-teams"
                className="inline-flex items-center justify-center rounded-full border border-lime-400/40 bg-lime-400/20 px-6 py-2 font-semibold text-lime-300 transition-colors hover:bg-lime-400/30 hover:text-lime-200"
              >
                Xem tất cả {QUALIFIED_TEAMS.length} đội
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QualifiedTeamsSection;

