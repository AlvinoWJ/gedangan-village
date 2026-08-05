import { Container } from "@/components/common/Container";
import { SectionBadge } from "@/components/common/SectionBadge";
import { ProgramCard } from "@/components/common/ProgramCard";
import { programSection, programItems } from "@/lib/data/program";

export function ProgramSection() {
  return (
    <section className="bg-accent/10 py-12 md:py-20 lg:py-24">
      <Container className="space-y-10 md:space-y-14">
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <SectionBadge>{programSection.eyebrow}</SectionBadge>
          <h2 className="font-heading text-xl font-semibold text-text-primary md:text-3xl">
            {programSection.heading}
          </h2>
          <p className="text-sm leading-relaxed text-text-secondary md:text-base">
            {programSection.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {programItems.map((item) => (
            <ProgramCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
