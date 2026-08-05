import { Container } from "@/components/common/Container";
import { SectionBadge } from "@/components/common/SectionBadge";
import { visiMisiSection, visi, misiItems } from "@/lib/data/visi-misi";

export function VisiMisiSection() {
  return (
    <section id="visi-misi" className="bg-background py-12 md:py-20 lg:py-24">
      <Container className="space-y-10 md:space-y-14">
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <SectionBadge>{visiMisiSection.eyebrow}</SectionBadge>
          <h2 className="font-heading text-xl font-semibold text-text-primary md:text-3xl">
            {visiMisiSection.heading}
          </h2>
          <p className="text-sm leading-relaxed text-text-secondary md:text-base">
            {visiMisiSection.lead}
          </p>
        </div>

        {/* Visi — teks besar, sesuai §7 */}
        <div className="mx-auto max-w-3xl rounded-2xl bg-primary/5 p-6 text-center md:p-10">
          <span className="font-heading text-sm font-semibold tracking-wide text-primary uppercase md:text-base">
            {visi.title}
          </span>
          <p className="mt-3 font-heading text-lg leading-snug font-semibold text-text-primary md:text-2xl">
            &ldquo;{visi.text}&rdquo;
          </p>
        </div>

        {/* Misi — grid card, konsisten gaya dengan card Program (§7) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {misiItems.map((item) => (
            <div
              key={item.number}
              className="flex flex-col gap-3 rounded-xl bg-surface p-4 shadow-sm md:p-6"
            >
              <span className="font-heading text-2xl font-bold text-accent">
                {item.number}
              </span>
              <h3 className="font-heading text-base font-semibold text-text-primary md:text-lg">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-text-secondary md:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
