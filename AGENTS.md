# AGENTS.md — Website Profil Desa Gedangan

> Dokumen ini adalah pedoman tunggal (single source of truth) untuk brand,
> design system, struktur konten, dan aturan teknis penulisan kode.
> Wajib dibaca sebelum menulis, mengubah, atau meninjau kode apa pun.

---

## 1. Project Overview

### 1.1 Nama Project

Website Resmi Desa Gedangan, Kecamatan Mojowarno, Kabupaten Jombang, Jawa Timur.

### 1.2 Tujuan Website

- Menjadi sumber informasi resmi & terpercaya tentang Desa Gedangan.
- **SEO-friendly** — mudah ditemukan di pencarian lokal (Google).
- **Mudah dikelola** — khususnya untuk update berita, tanpa perlu developer.
- **Mudah dikembangkan** — arsitektur modular, siap tambah fitur di masa depan.

### 1.3 Target Pengguna

| Segmen               | Kebutuhan                                           |
| -------------------- | --------------------------------------------------- |
| Warga desa           | Info layanan, berita, pengumuman, kontak perangkat  |
| Petugas pemerintahan | Data administratif, transparansi program & anggaran |
| Wisatawan            | Potensi wisata, budaya, lokasi, galeri              |
| Calon investor       | Data ekonomi, UMKM, potensi desa                    |

### 1.4 Project Scope

✅ **Termasuk scope:**

- Profil desa, visi-misi, struktur perangkat desa
- Program & layanan desa
- Berita/pengumuman (dengan admin panel sederhana)
- Galeri foto/video
- Kontak & lokasi

❌ **TIDAK termasuk scope:**

- Layanan administrasi online (pengajuan surat online, dsb) — hanya ditampilkan sebagai info, bukan sistem
- Sistem transaksi/pembayaran
- Manajemen konten kompleks (CMS multi-role)
- Fitur di luar CRUD berita untuk panel admin

> **Catatan untuk AI/Developer:** Jika ada permintaan fitur di luar scope
> ini (mis. sistem pengajuan surat online, multi-role admin), tolak
> dengan sopan dan arahkan ke _Future Roadmap_ kecuali sudah eksplisit
> disetujui.

---

## 2. Technology Stack

- **Framework:** Next.js (App Router), TypeScript (strict mode)
- **UI Library:** Tailwind CSS + shadcn/ui (komponen form admin, table, dialog)
- **Animasi:** Framer Motion (komponen umum) + GSAP (khusus parallax hero, lihat §16)
- **Data, Auth & Storage:** Supabase — PostgreSQL (tabel `berita`), Supabase Auth (login admin), Supabase Storage (gambar berita/galeri)
- **Form & Validasi (admin):** React Hook Form + Zod
- **Hosting:** Vercel (domain custom menyusul)

> Konten statis (profil, visi-misi, perangkat, program, galeri) **tidak**
> disimpan di Supabase kecuali dibutuhkan nanti — cukup sebagai data lokal
> (`lib/data/`) agar sederhana dan cepat, sesuai prinsip admin panel yang
> scope-nya terbatas hanya untuk berita.

---

## 3. Design Philosophy

**Tema:** "Warm Village Trust" — hangat, ramah, terpercaya, dan profesional
sebagai wajah digital pemerintahan desa. **Bukan** neo-brutalism/bold ala
branding komersial; kesan yang dibangun adalah **approachable, komunal,
dan resmi** sekaligus.

**Inspirasi visual:** sawah, gotong royong, kehangatan pedesaan, warna
alami hasil bumi — dipadukan dengan kejelasan informasi ala website
pemerintahan modern.

**Prinsip:**

- Card dengan shadow lembut, sudut membulat (`rounded-lg`–`rounded-2xl`)
- Warna hangat (krem, hijau, kuning/gold) — bukan warna dingin/korporat
- Badge/pill untuk kategori & tag, konsisten di semua section
- Foto dokumentasi asli kegiatan desa, bukan stock photo generik
- Animasi halus & minim — reveal on scroll ringan + satu titik fokus
  parallax di Hero, tanpa efek berat lain

---

## 4. Color Palette

| Role           | Nama        | Hex (sesuaikan dengan file desain final) |
| -------------- | ----------- | ---------------------------------------- |
| Primary        | Hijau Desa  | `#6B9B37`                                |
| Accent         | Kuning Emas | `#E8A63D`                                |
| Background     | Krem Hangat | `#FBF3DC`                                |
| Surface        | Putih       | `#FFFFFF`                                |
| Footer/Dark    | Coklat Tua  | `#4A2E14`                                |
| Text Primary   | —           | `#2B2418`                                |
| Text Secondary | —           | `#6B6355`                                |
| Success        | —           | `#43A047`                                |
| Warning        | —           | `#F9A825`                                |
| Danger         | —           | `#D32F2F`                                |

> Definisikan sebagai CSS variable di `globals.css`, dipetakan ke Tailwind
> theme (`@theme inline`). **Dilarang hardcode hex** di komponen.

```css
:root {
  --color-primary: #6b9b37;
  --color-accent: #e8a63d;
  --color-background: #fbf3dc;
  --color-surface: #ffffff;
  --color-footer: #4a2e14;
  --color-text-primary: #2b2418;
  --color-text-secondary: #6b6355;
  --color-success: #43a047;
  --color-warning: #f9a825;
  --color-danger: #d32f2f;

  --radius-sm: 0.5rem; /* rounded-lg */
  --radius-md: 0.75rem; /* rounded-xl */
  --radius-lg: 1rem; /* rounded-2xl */

  --font-heading: var(--font-serif-heading); /* mis. Playfair Display / Lora */
  --font-sans: var(--font-body-sans); /* mis. Poppins / Plus Jakarta Sans */
}
```

---

## 5. Typography

| Fungsi                           | Font                                     |
| -------------------------------- | ---------------------------------------- |
| Heading (display, h1-h3)         | Serif — Playfair Display / Lora          |
| Body & UI (nav, paragraf, badge) | Sans-serif — Poppins / Plus Jakarta Sans |

> Font final ditentukan dari file desain asli — pastikan lewat `next/font`.

### 5.1 Typography Scale (Responsive)

| Token         | Tailwind class                     | Ukuran mobile → desktop | Line-height       | Pemakaian                             |
| ------------- | ---------------------------------- | ----------------------- | ----------------- | ------------------------------------- |
| `display`     | `text-3xl md:text-5xl lg:text-6xl` | 30px → 48px → 60px      | `leading-tight`   | Hero headline                         |
| `h1`          | `text-2xl md:text-4xl`             | 24px → 36px             | `leading-tight`   | Judul halaman utama                   |
| `h2`          | `text-xl md:text-3xl`              | 20px → 30px             | `leading-snug`    | Judul section                         |
| `h3`          | `text-lg md:text-2xl`              | 18px → 24px             | `leading-snug`    | Sub-judul, judul card besar           |
| `h4`          | `text-base md:text-xl`             | 16px → 20px             | `leading-snug`    | Judul card kecil, item list           |
| `stat-number` | `text-2xl md:text-4xl`             | 24px → 36px             | `leading-none`    | Angka statistik (5.200 penduduk, dsb) |
| `body-lg`     | `text-base md:text-lg`             | 16px → 18px             | `leading-relaxed` | Lead paragraph, deskripsi desa        |
| `body`        | `text-sm md:text-base`             | 14px → 16px             | `leading-relaxed` | Body text default                     |
| `body-sm`     | `text-xs md:text-sm`               | 12px → 14px             | `leading-normal`  | Caption, meta info                    |
| `caption`     | `text-xs`                          | 12px (tetap)            | `leading-normal`  | Badge, label tag                      |

Aturan:

- Heading selalu `font-heading` (serif), body selalu `font-sans`.
- Berat font: `display`/`h1` → `font-bold`; `h2`–`h4` → `font-semibold`; body → `font-normal`, penekanan → `font-medium`.
- Jangan set `font-size` arbitrary (`text-[17px]`) — selalu pakai token di atas.
- Panjang baris teks body maksimal `max-w-prose` (~65ch).
- Uji tipografi di 3 lebar layar (375px, 768px, 1440px), pastikan heading tidak kepotong di mobile kecil (mis. iPhone SE 375px).

---

## 6. Spacing Rules

| Konteks                      | Token                                                |
| ---------------------------- | ---------------------------------------------------- |
| Gap icon + label             | `gap-2`                                              |
| Padding dalam card           | `p-4` mobile → `p-6 md:p-8` desktop                  |
| Gap antar card dalam grid    | `gap-4 md:gap-6`                                     |
| Padding vertikal per section | `py-12 md:py-20 lg:py-24`                            |
| Padding horizontal container | `px-4 md:px-6 lg:px-8` (lewat `Container` component) |

Jangan gunakan nilai arbitrary (`p-[13px]`) kecuali kasus spesifik yang didokumentasikan di komentar kode.

---

## 7. Struktur Situs & Konten

| Route            | Deskripsi                                                                               |
| ---------------- | --------------------------------------------------------------------------------------- |
| `/`              | Beranda: hero (parallax), stats, tentang desa, program unggulan, berita terbaru, kontak |
| `/profil`        | Sejarah, geografis, demografi                                                           |
| `/visi-misi`     | Visi (teks besar) + Misi (grid card, konsisten gaya dengan card Program)                |
| `/perangkat`     | Daftar perangkat desa — tabel (desktop) / card (mobile), lihat §8                       |
| `/program`       | Program desa untuk warga                                                                |
| `/berita`        | List berita (paginated, ISR)                                                            |
| `/berita/[slug]` | Detail berita                                                                           |
| `/galeri`        | Galeri foto/video kegiatan                                                              |
| `/kontak`        | Info kontak, peta lokasi                                                                |
| `/admin/login`   | Login admin (Supabase Auth)                                                             |
| `/admin/berita`  | CRUD berita (protected)                                                                 |

---

## 8. Responsive Rules

- **Mobile-first**: style default mobile, breakpoint `sm:` `md:` `lg:` `xl:` untuk memperbesar/mengubah layout.
- Breakpoint default: `sm 640px · md 768px · lg 1024px · xl 1280px · 2xl 1536px`.
- Container max-width konsisten lewat satu komponen `Container.tsx`.
- Touch target minimal 44×44px di semua elemen interaktif mobile.
- Uji minimal di 3 lebar: 375px, 768px, 1440px sebelum komponen dianggap selesai.

**Kasus khusus — Tabel Perangkat Desa** (satu sumber data, dua tampilan):

```tsx
<table className="hidden md:table w-full">...</table>
<div className="md:hidden space-y-3">
  {perangkat.map((p) => <PerangkatCard key={p.id} {...p} />)}
</div>
```

Mobile: card per orang (Nama bold + Jabatan badge + Pendidikan kecil). Desktop: tabel penuh sesuai desain.

---

## 9. Coding Rules

- Selalu gunakan App Router. Jangan pernah gunakan Pages Router.
- Utamakan Server Components. Client Component (`"use client"`) hanya jika benar-benar butuh interaktivitas/browser API/hooks state.
- Jangan pernah gunakan `any`. Gunakan `unknown` + narrowing bila tipe belum pasti.
- TypeScript strict mode wajib aktif — jangan diubah di `tsconfig.json`.
- Gunakan async Server Component untuk data fetching, bukan `useEffect`.
- Gunakan Zod untuk validasi semua data eksternal (form input admin, response Supabase).
- Gunakan React Hook Form untuk form admin (login, tambah/edit berita).
- Komponen harus reusable — cek dulu apakah sudah ada sebelum membuat baru.
- Ikuti prinsip Atomic Design (lihat §11).

---

## 10. Architecture Rules

- **Data berita** diakses lewat **Supabase**. Semua query terpusat di `lib/supabase/` (client) dan `lib/api/` (fungsi query per-domain) — dilarang panggil Supabase client langsung di dalam komponen.
- Bentuk layer: `component → lib/api → Supabase client`.
- Route `/admin/**` WAJIB dilindungi lewat `middleware.ts` yang mengecek session Supabase Auth di server.
- Akses tulis (insert/update/delete) ke tabel `berita` HANYA lewat Row Level Security (RLS) policy yang membatasi ke role admin.
- `SUPABASE_SERVICE_ROLE_KEY` hanya dipakai di Server Actions/Route Handlers, tidak pernah di Client Component.
- Konten statis (profil, visi-misi, perangkat, program) disimpan sebagai data lokal di `lib/data/*.ts`, bukan di Supabase.
- Environment variables hanya diakses lewat `lib/env.ts` yang divalidasi Zod saat startup.
- Tidak boleh ada logic bisnis di `components/ui` — logic bisnis tinggal di `features/*` atau `lib/`.
- Error handling: `error.tsx` / `not-found.tsx` per-route, bukan try/catch manual di tiap komponen.

---

## 11. Component Hierarchy (Atomic Design)

components/
├── ui/ # Atoms — shadcn/ui primitives (Button, Badge, Input)
├── common/ # Molecules — StatItem, NewsCard, PerangkatCard, Container
└── sections/ # Organisms — Hero, StatsSection, ProgramSection, NewsGrid

- **Atoms** (`ui/`): tanpa business logic atau fetch data.
- **Molecules** (`common/`): boleh terima props kompleks, tanpa fetch data langsung.
- **Organisms** (`sections/`): boleh jadi Server Component async yang fetch data via `lib/api`, lalu compose molecules & atoms.
- **Pages** (`app/**/page.tsx`): hanya compose `sections/`, tidak berisi markup mentah.
- Dilarang membuat komponen sekali-pakai di `page.tsx` yang melebihi ~30 baris JSX — ekstrak ke `sections/`.

---

## 12. Feature Structure

features/
└── berita/
├── components/ # NewsList, NewsDetail
├── api/ # getBerita, getBeritaBySlug
├── types/ # Berita.types.ts
└── schema/ # beritaSchema.ts (Zod)

└── admin/
├── components/ # form berita, tabel data
├── actions/ # Server Actions create/update/delete berita
├── schema/ # Zod schema form admin
└── utils/

- Komponen di `features/*/components` tidak boleh diimpor lintas fitur. Jika perlu, naikkan ke `components/common/`.
- `app/berita/**` hanya berisi `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx` yang mengimpor dari `features/berita`.

---

## 13. File & Folder Naming Convention

| Jenis                     | Konvensi                                        | Contoh                  |
| ------------------------- | ----------------------------------------------- | ----------------------- |
| Folder route (App Router) | kebab-case                                      | `app/berita/[slug]/`    |
| Komponen React            | PascalCase                                      | `NewsCard.tsx`          |
| Hook custom               | camelCase, prefix `use`                         | `useAdminAuth.ts`       |
| Util/helper               | camelCase                                       | `formatTanggal.ts`      |
| Tipe/interface            | PascalCase, file `*.types.ts`                   | `Berita.types.ts`       |
| Zod schema                | camelCase, suffix `Schema`                      | `beritaSchema.ts`       |
| Constant                  | UPPER_SNAKE_CASE (value), camelCase (nama file) | `siteConfig.ts`         |
| Folder komponen non-route | kebab-case                                      | `components/news-card/` |
| Test file                 | sama nama + `.test.ts(x)`                       | `NewsCard.test.tsx`     |

- Satu komponen = satu file. Sub-komponen kecil boleh co-located di folder yang sama.
- Barrel file (`index.ts`) hanya untuk re-export publik, tidak untuk logic.

---

## 14. Import Order

1. React / Next.js core
2. Library eksternal (`zod`, `react-hook-form`, `framer-motion`, `gsap`)
3. Alias internal `@/lib`, `@/features`
4. Alias internal `@/components`
5. Tipe (`import type { ... }`)
6. Asset/style

```ts
import { useState } from "react";
import Image from "next/image";

import { z } from "zod";

import { getBerita } from "@/lib/api/berita";

import { NewsCard } from "@/components/common/NewsCard";
import { Button } from "@/components/ui/button";

import type { Berita } from "@/features/berita/types/Berita.types";
```

---

## 15. Performance Rules

- Semua gambar wajib lewat `next/image` — dilarang `<img>` mentah.
- Semua font wajib lewat `next/font`.
- Komponen berat non-critical (modal, form admin) wajib `next/dynamic` dengan `ssr: false` bila tidak butuh SEO.
- Hindari `"use client"` di level tinggi (mis. `layout.tsx`).
- Gunakan `loading.tsx` per-route untuk streaming/suspense.
- ISR untuk halaman berita (`export const revalidate = ...`), halaman statis (profil, visi-misi, perangkat) pakai SSG penuh.
- Jangan import seluruh library icon — selalu named import per-icon.
- GSAP di-load via dynamic import hanya di komponen Hero (lihat §16) — jangan bundle ke initial JS semua halaman.
- Target Lighthouse: Performance/SEO/Accessibility/Best Practices semua **> 95**.

---

## 16. Animation Rules

- **Framer Motion** untuk animasi level komponen React (fade/reveal saat scroll, hover state, stagger card).
- **GSAP** (+ `ScrollTrigger`) khusus untuk **parallax Hero single-layer** — satu gambar sawah (`next/image` di dalam wrapper) bergerak dengan `translateY` berkecepatan berbeda dari konten teks di atasnya saat scroll. Ini satu-satunya use case GSAP di proyek ini; komponen lain tetap pakai Framer Motion.
- Setup parallax hero (pola singkat):

```tsx
"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroParallax() {
  const imgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 15, // gerakan halus, bukan agresif
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert(); // wajib cleanup
  }, []);

  return (
    <div ref={imgRef} className="absolute inset-0 -z-10">
      {/* next/image sawah */}
    </div>
  );
}
```

- Komponen `HeroParallax` di-load via `next/dynamic` (`ssr: false`) dari `Hero.tsx` — hanya halaman Beranda yang memuat GSAP.
- `yPercent` maksimal ~15–20% — subtle, bukan parallax agresif yang bisa terasa berat di perangkat low-end atau memicu motion sickness.
- Wajib hormati `prefers-reduced-motion`: cek via `matchMedia("(prefers-reduced-motion: reduce)")` sebelum menjalankan `ScrollTrigger`, atau set `yPercent: 0` jika reduced motion aktif.
- `ctx.revert()` di cleanup `useLayoutEffect` wajib — mencegah memory leak / ScrollTrigger duplikat saat komponen unmount atau re-render.
- Preset animasi lain (di luar parallax hero) yang dipakai: Fade Up, Hover Lift ringan, Scroll Reveal — durasi 200–400ms micro-interaction, 300–500ms section reveal, easing `ease-out` masuk.
- Animasikan `transform`/`opacity` saja, jangan `width`/`height`/`top`/`left`.
- Scroll-triggered animation (Framer Motion) pakai `viewport={{ once: true }}`.

---

## 17. Loading & Skeleton Rules

- **Threshold sebelum skeleton muncul: 300ms.** Jika data selesai fetch sebelum 300ms, skeleton tidak pernah dirender — langsung tampilkan konten (hindari flicker untuk load yang sudah cepat).
- **Minimum display duration setelah skeleton muncul: 500ms.** Jika skeleton sudah terlanjur tampil, tahan minimal 500ms sebelum diganti konten asli.
- Implementasi delay/minimum-hold pakai hook kecil `hooks/useDelayedLoading.ts` (debounce show + minimum hold), dipakai di semua Client Component yang fetch data.
- **Server Component (SSG/ISR)** — halaman publik (Profil, Perangkat, Program) tidak butuh skeleton karena data sudah ada saat HTML dikirim. `loading.tsx` App Router cukup untuk transisi navigasi antar halaman.
- Skeleton **wajib** dipakai di:
  - `/berita` jika ada client-side pagination/filter
  - `/admin/berita` (list, form submit, delete)
  - Komponen apapun yang fetch data di Client Component
- Bentuk skeleton mengikuti shape/dimensi komponen asli (card skeleton setinggi `NewsCard`, tabel skeleton sejumlah kolom tabel asli) — bukan spinner generik.
- Skeleton pakai shimmer/pulse halus (`animate-pulse` Tailwind), warna mengikuti token `--color-surface` dengan variasi opacity.
- Server Action (submit form berita admin) pakai state `isPending` dari `useFormStatus`/`useTransition` — tombol submit disable + label berubah ("Menyimpan...") tanpa perlu skeleton terpisah.

---

## 18. Image Rules

- Semua gambar (hero, berita, galeri) disajikan WebP/AVIF via `next/image` dengan `sizes` yang benar.
- Wajib isi `alt` deskriptif (bukan nama file) — penting untuk SEO Image Search wisatawan.
- Hero image & gambar above-the-fold: `priority`. Gambar lain: lazy-load default.
- Logo/lambang desa pakai SVG.
- `placeholder="blur"` dengan `blurDataURL` untuk gambar berita/galeri — no layout shift.
- Rasio aspek gambar wajib didefinisikan (`width`/`height` atau `aspect-*`).

---

## 19. SEO Guidelines

- `generateMetadata` per halaman (title, description, OG image, canonical URL).
- Structured data JSON-LD: `GovernmentOrganization`/`Place` di `/profil`, `NewsArticle` di setiap berita.
- `app/sitemap.ts` & `app/robots.ts` — sitemap berita generate dinamis dari Supabase.
- SSG untuk halaman statis, ISR untuk berita — bukan `force-dynamic` tanpa alasan.
- Semantic HTML5 (`<nav>`, `<main>`, `<article>`).
- NAP (Nama, Alamat, Phone) konsisten dengan Google Business Profile.

---

## 20. Environment & Secrets

- `NEXT_PUBLIC_SUPABASE_URL` & `NEXT_PUBLIC_SUPABASE_ANON_KEY` boleh publik (client).
- `SUPABASE_SERVICE_ROLE_KEY` WAJIB rahasia — hanya di server, tidak pernah di-log/dikirim ke client.
- Semua secret di `.env.local` (di `.gitignore`) untuk lokal, environment variables Vercel untuk production.

---

## 21. Git

- Commit kecil dan fokus, satu perubahan logis per commit (conventional commits: `feat:`, `fix:`, `docs:`, `style:`).
- Jangan mengubah file yang tidak relevan dengan task.
- Jangan menghapus komentar kecuali diminta eksplisit.

---

## 22. Definition of Done

- [ ] Sesuai Design System (§3–§6) dan Coding/Architecture Rules (§9–§14).
- [ ] Tidak ada `any` atau `// @ts-ignore` tanpa alasan tertulis.
- [ ] `npm run lint` bersih, `npm run build` sukses tanpa error/warning baru.
- [ ] Responsive teruji di mobile/tablet/desktop (§8).
- [ ] Aksesibel via keyboard, `aria-label`/`alt` sesuai §18.
- [ ] Tidak ada `fetch()` langsung di komponen — semua lewat `lib/api/`.
- [ ] Tidak ada komponen/file yang menduplikasi komponen yang sudah ada.
- [ ] Animasi menghormati `prefers-reduced-motion` (Framer Motion & GSAP).
- [ ] GSAP `ScrollTrigger` di-cleanup dengan benar (`ctx.revert()`).
- [ ] Skeleton mengikuti threshold §17 (300ms delay, 500ms minimum hold).
- [ ] Commit message jelas & scoped.

---

## 23. Future Roadmap

- Sistem pengajuan surat online (integrasi form → email/WA notifikasi)
- Transparansi APBDes (visualisasi anggaran)
- Multi-bahasa (untuk wisatawan asing)
- Peta interaktif potensi wisata

---

## 24. Before Writing Code

1. Baca dokumen ini secara penuh (Project Overview → Design System → Coding Rules).
2. Cek struktur proyek & komponen yang sudah ada (`components/`, `features/`, `lib/api/`) — jangan duplikasi.
3. Ikuti arsitektur & pola yang sudah ada, jangan perkenalkan pola baru tanpa didiskusikan.
4. Jika instruksi user bertentangan dengan dokumen ini, tanyakan klarifikasi sebelum melanjutkan — kecuali perubahan kecil yang jelas tidak melanggar prinsip inti.
