"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";

import { Container } from "@/components/common/Container";
import { buttonVariants } from "@/components/ui/button";

// GSAP hanya di-load di sini (§15/§16), tidak dibundle ke halaman lain
const HeroParallax = dynamic(
  () =>
    import("@/components/sections/HeroParallax").then(
      (mod) => mod.HeroParallax,
    ),
  { ssr: false },
);

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <HeroParallax />

      <Container className="relative py-24 md:py-32">
        <div className="max-w-2xl space-y-6">
          <span className="inline-block rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase shadow-sm backdrop-blur">
            Kecamatan Mojowarno, Kabupaten Jombang
          </span>

          <h1 className="font-heading text-3xl leading-tight font-bold text-white drop-shadow-sm md:text-5xl lg:text-6xl">
            Selamat Datang di Desa Gedangan
          </h1>

          <p className="max-w-md text-base leading-relaxed text-white/90 drop-shadow-sm md:text-lg">
            Website resmi untuk warga, wisatawan, dan siapa pun yang ingin
            mengenal lebih dekat potensi, program, dan kegiatan Desa Gedangan.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/profil" className={cn(buttonVariants({ size: "lg" }))}>
              Kenali Desa Kami
            </Link>
            <Link
              href="/berita"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "bg-white/90",
              )}
            >
              Lihat Berita Terbaru
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
