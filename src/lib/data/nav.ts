export interface NavItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Visi & Misi", href: "/visi-misi" },
  { label: "Perangkat Desa", href: "/perangkat" },
  { label: "Program", href: "/program" },
  { label: "Berita", href: "/berita" },
  { label: "Kontak", href: "/kontak" },
];
