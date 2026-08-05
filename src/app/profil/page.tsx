import type { Metadata } from "next";
import { ProfilDesaSection } from "@/components/sections/ProfilDesaSection";

export const metadata: Metadata = {
  title: "Profil Desa | Desa Gedangan",
  description:
    "Profil, sejarah, dan data demografi Desa Gedangan, Kecamatan Mojowarno, Kabupaten Jombang.",
};

export default function ProfilPage() {
  return <ProfilDesaSection />;
}
