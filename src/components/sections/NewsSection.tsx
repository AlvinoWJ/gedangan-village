import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionBadge } from "@/components/common/SectionBadge";
import { NewsCard } from "@/components/common/NewsCard";
import { beritaTerbaru, newsSectionMeta } from "@/lib/data/berita-dummy";

export function NewsSection() {
  return (
    <section className="bg-accent/10 py-12 md:py-20 lg:py-24">
      <Container className="space-y-8 md:space-y-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <SectionBadge>{newsSectionMeta.eyebrow}</SectionBadge>
            <h2 className="font-heading text-xl font-semibold text-text-primary md:text-3xl">
              {newsSectionMeta.heading}
            </h2>
          </div>

          <Link
            href={newsSectionMeta.viewAllHref}
            className="text-sm font-semibold text-primary hover:underline"
          >
            {newsSectionMeta.viewAllLabel} →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {beritaTerbaru.map((berita) => (
            <NewsCard key={berita.slug} berita={berita} />
          ))}
        </div>
      </Container>
    </section>
  );
}
