import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Kontak | Desa Gedangan",
  description: "Informasi kontak dan jam pelayanan Kantor Desa Gedangan.",
};

export default function KontakPage() {
  return <ContactSection />;
}
