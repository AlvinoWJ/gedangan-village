import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Eye } from "lucide-react";
import type { Berita } from "@/features/berita/types/Berita.types";
import { formatTanggal } from "@/lib/formatTanggal";

interface NewsCardProps {
  berita: Berita;
}

export function NewsCard({ berita }: NewsCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-surface shadow-sm">
      <div className="relative aspect-video w-full">
        <Image
          src={berita.coverImage.src}
          alt={berita.coverImage.alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
        <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          {berita.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4 md:p-6">
        <div className="flex items-center gap-4 text-xs text-text-secondary">
          <span className="flex items-center gap-1">
            <CalendarDays className="size-3.5" aria-hidden />
            {formatTanggal(berita.publishedAt)}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="size-3.5" aria-hidden />
            {berita.views}
          </span>
        </div>

        <h3 className="font-heading text-base leading-snug font-semibold text-text-primary md:text-lg">
          {berita.title}
        </h3>

        <p className="line-clamp-2 text-xs leading-relaxed text-text-secondary md:text-sm">
          {berita.excerpt}
        </p>

        <Link
          href={`/berita/${berita.slug}`}
          className="mt-2 text-xs font-semibold text-primary hover:underline md:text-sm"
        >
          Baca Selengkapnya →
        </Link>
      </div>
    </article>
  );
}
