import { Container } from "@/components/common/Container";
import { PerangkatCard } from "@/components/common/PerangkatCard";
import { perangkatSection, perangkatDesa } from "@/lib/data/perangkat";

export function PerangkatSection() {
  return (
    <section className="bg-background py-12 md:py-20 lg:py-24">
      <Container className="space-y-8 md:space-y-10">
        <h2 className="text-center font-heading text-xl font-semibold text-text-primary md:text-3xl">
          {perangkatSection.heading}
        </h2>

        {/* Desktop: tabel penuh */}
        <div className="hidden overflow-hidden rounded-xl bg-surface shadow-sm md:table md:w-full">
          <table className="w-full text-left text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-3 font-semibold">No</th>
                <th className="px-6 py-3 font-semibold">Nama</th>
                <th className="px-6 py-3 font-semibold">Jabatan</th>
                <th className="px-6 py-3 font-semibold">Pendidikan</th>
              </tr>
            </thead>
            <tbody>
              {perangkatDesa.map((p, index) => (
                <tr
                  key={p.id}
                  className="border-b border-border last:border-none odd:bg-accent/5"
                >
                  <td className="px-6 py-3 text-text-secondary">{index + 1}</td>
                  <td className="px-6 py-3 font-medium text-text-primary">
                    {p.nama}
                  </td>
                  <td className="px-6 py-3 text-text-secondary">{p.jabatan}</td>
                  <td className="px-6 py-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {p.pendidikan}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: card per orang */}
        <div className="space-y-3 md:hidden">
          {perangkatDesa.map((p) => (
            <PerangkatCard key={p.id} {...p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
