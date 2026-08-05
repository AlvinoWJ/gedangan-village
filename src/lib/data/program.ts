import type { LucideIcon } from "lucide-react";
import { Sprout, GraduationCap, Leaf, HeartHandshake } from "lucide-react";

export interface ProgramItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const programSection = {
  eyebrow: "Program Unggulan",
  heading: "Program Desa untuk Warga",
  lead: "Berbagai program dirancang khusus untuk meningkatkan kualitas hidup dan kesejahteraan warga Desa Gedangan.",
} as const;

export const programItems: ProgramItem[] = [
  {
    icon: Sprout,
    title: "Pemberdayaan Masyarakat",
    description:
      "Program peningkatan kapasitas warga melalui pelatihan keterampilan dan wirausaha lokal.",
  },
  {
    icon: GraduationCap,
    title: "Pendidikan & Pelatihan",
    description:
      "Beasiswa anak berprestasi, literasi digital, dan kelas keterampilan gratis untuk warga.",
  },
  {
    icon: Leaf,
    title: "Lingkungan Berkelanjutan",
    description:
      "Pengelolaan sampah terpadu, penghijauan, dan program pertanian organik berbasis desa.",
  },
  {
    icon: HeartHandshake,
    title: "Kesehatan & Kepedulian",
    description:
      "Posyandu aktif, layanan BPJS gratis, dan bantuan sosial untuk lansia dan dhuafa.",
  },
];
