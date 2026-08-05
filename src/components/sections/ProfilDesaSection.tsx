import Image from "next/image";
import { Container } from "@/components/common/Container";
import { SectionBadge } from "@/components/common/SectionBadge";
import { StatItem } from "@/components/common/StatItem";
import { desaStats, tentangDesa } from "@/lib/data/profil-desa";

export function ProfilDesaSection() {
  return (
    <section className="bg-background py-12 md:py-20 lg:py-24">
      <Container className="space-y-10 md:space-y-14">
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <SectionBadge>{tentangDesa.eyebrow}</SectionBadge>
          <h2 className="font-heading text-xl font-semibold text-text-primary md:text-3xl">
            {tentangDesa.heading}
          </h2>
          <p className="text-sm leading-relaxed text-text-secondary md:text-base">
            {tentangDesa.lead}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {desaStats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={tentangDesa.image.src}
              alt={tentangDesa.image.alt}
              width={640}
              height={480}
              className="aspect-4/3 w-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-text-primary md:text-2xl">
              {tentangDesa.title}
            </h3>
            {tentangDesa.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm leading-relaxed text-text-secondary md:text-base"
              >
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {tentangDesa.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
