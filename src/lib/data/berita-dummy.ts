import type { Berita } from "@/features/berita/types/Berita.types";

// TODO: ganti dengan getBerita() dari lib/api/berita setelah Supabase terhubung (§10)
export const beritaTerbaru: Berita[] = [
  {
    slug: "musyawarah-desa-tetapkan-apbdes-2026",
    title: "Musyawarah Desa Tetapkan APBDes Tahun 2026",
    excerpt:
      "Melalui musyawarah desa yang dihadiri seluruh perangkat desa dan tokoh masyarakat, APBDes 2026 resmi ditetapkan dengan total anggaran sebesar Rp1,2 miliar.",
    category: "Pemerintahan",
    publishedAt: "2026-07-28",
    views: 241,
    coverImage: {
      src: "/images/berita/apbdes-2026.webp",
      alt: "Suasana musyawarah desa penetapan APBDes 2026",
    },
  },
  {
    slug: "beasiswa-anak-desa-gedangan-2026",
    title: "Program Beasiswa Anak Desa Gedangan Tahun 2026 Dibuka",
    excerpt:
      "Pemerintah Desa Gedangan kembali membuka pendaftaran program beasiswa bagi anak berprestasi dan kurang mampu untuk tahun ajaran 2026/2027.",
    category: "Pendidikan",
    publishedAt: "2026-07-22",
    views: 312,
    coverImage: {
      src: "/images/berita/beasiswa-2026.webp",
      alt: "Anak-anak Desa Gedangan menerima bantuan beasiswa",
    },
  },
  {
    slug: "panen-raya-padi-organik-dusun-gedangan",
    title: "Panen Raya Padi Organik Dusun Gedangan Meningkat 30%",
    excerpt:
      "Program pertanian organik yang dijalankan sejak 2024 kini menuai hasil. Produksi padi Dusun Gedangan meningkat signifikan dibanding tahun lalu.",
    category: "Pertanian",
    publishedAt: "2026-07-14",
    views: 189,
    coverImage: {
      src: "/images/berita/panen-organik.webp",
      alt: "Petani memanen padi organik di sawah Dusun Gedangan",
    },
  },
];

export const newsSectionMeta = {
  eyebrow: "Berita Terbaru",
  heading: "Kabar Desa Gedangan",
  viewAllHref: "/berita",
  viewAllLabel: "Lihat Semua Berita",
} as const;
