import type { Metadata } from "next";
import { VisiMisiSection } from "@/components/sections/VisiMisiSection";

export const metadata: Metadata = {
  title: "Visi & Misi | Desa Gedangan",
  description: "Visi dan misi pembangunan Desa Gedangan.",
};

export default function VisiMisiPage() {
  return <VisiMisiSection />;
}
