import type { Metadata } from "next";
import { PerangkatSection } from "@/components/sections/PerangkatSection";

export const metadata: Metadata = {
  title: "Perangkat Desa | Desa Gedangan",
  description: "Daftar lengkap perangkat Desa Gedangan.",
};

export default function PerangkatPage() {
  return <PerangkatSection />;
}
