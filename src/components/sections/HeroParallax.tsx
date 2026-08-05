"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroParallax() {
  const imgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: prefersReducedMotion ? 0 : 15, // subtle, bukan agresif
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert(); // wajib cleanup (§16)
  }, []);

  return (
    <div ref={imgRef} className="absolute inset-0 -z-10 scale-110">
      <Image
        src="/images/hero-sawah.webp"
        alt="Pemandangan sawah hijau Desa Gedangan saat pagi hari"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* darken untuk keterbacaan teks putih, apa pun foto yang dipakai */}
      <div className="absolute inset-0 bg-black/35" />
      {/* fade halus ke background krem di batas bawah hero */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background md:h-48" />
    </div>
  );
}
