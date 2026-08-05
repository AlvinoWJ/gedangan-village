export const visiMisiSection = {
  eyebrow: "Visi Misi",
  heading: "Desa Gedangan",
  lead: "Adanya Visi Misi Desa sebagai pedoman dan arah pembangunan desa agar seluruh program serta kegiatan dapat berjalan secara terencana dan sesuai dengan kebutuhan masyarakat.",
} as const;

export const visi = {
  title: "Visi",
  text: "Terwujudnya Desa Gedangan yang Mandiri, Sejahtera, dan Berbudaya melalui Tata Kelola Pemerintahan yang Transparan dan Partisipatif.",
} as const;

export interface MisiItem {
  number: string;
  title: string;
  description: string;
}

export const misiItems: MisiItem[] = [
  {
    number: "01",
    title: "Tata Kelola Transparan",
    description:
      "Meningkatkan tata kelola pemerintahan desa yang transparan, akuntabel, dan partisipatif.",
  },
  {
    number: "02",
    title: "Ekonomi Kerakyatan",
    description:
      "Mengembangkan potensi ekonomi desa berbasis pertanian, UMKM, dan pemberdayaan masyarakat.",
  },
  {
    number: "03",
    title: "Infrastruktur Merata",
    description:
      "Membangun dan memelihara infrastruktur desa yang merata demi kenyamanan seluruh warga.",
  },
  {
    number: "04",
    title: "SDM Unggul",
    description:
      "Meningkatkan kualitas pendidikan, kesehatan, dan kesejahteraan sosial masyarakat desa.",
  },
  {
    number: "05",
    title: "Lingkungan Lestari",
    description:
      "Menjaga kelestarian lingkungan hidup dan mendorong praktik pertanian berkelanjutan.",
  },
  {
    number: "06",
    title: "Budaya & Gotong Royong",
    description:
      "Melestarikan nilai budaya lokal dan memperkuat semangat gotong royong antarwarga.",
  },
];
