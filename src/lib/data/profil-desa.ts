import type { LucideIcon } from "lucide-react";
import { Users, Home, Ruler, MapPin } from "lucide-react";

export interface DesaStat {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const desaStats: DesaStat[] = [
  { icon: Users, value: "5.200", label: "Jumlah Penduduk" },
  { icon: Home, value: "1.628", label: "Jumlah KK" },
  { icon: Ruler, value: "204 Ha", label: "Luas Wilayah" },
  { icon: MapPin, value: "3", label: "Dusun" },
];

export const tentangDesa = {
  eyebrow: "Profil Desa",
  heading: "Mengenal Desa Gedangan",
  lead: "Desa Gedangan adalah desa yang terletak di Kecamatan Mojowarno, Kabupaten Jombang, Jawa Timur. Dengan semangat gotong royong, kami terus berbenah demi kesejahteraan warga.",
  title: "Tentang Desa Gedangan",
  paragraphs: [
    "Desa Gedangan berdiri sejak tahun 1820-an dan kini terus berkembang menjadi desa yang mandiri dan berdaya saing. Desa ini memiliki 3 dusun yaitu Dusun Gedangan, Dusun Rejosari, dan Dusun Mojogeneng yang tersebar di wilayah seluas 204 hektare.",
    "Mata pencaharian utama warga adalah pengusaha genteng dan pertanian, khususnya padi dan palawija. Selain itu, sektor UMKM juga terus dikembangkan untuk meningkatkan perekonomian lokal desa.",
  ],
  tags: ["Pertanian", "UMKM", "Pendidikan", "Kesehatan", "Wisata Lokal"],
  image: {
    src: "/images/tentang-desa.webp",
    alt: "Suasana permukiman dan gapura Desa Gedangan",
  },
} as const;
