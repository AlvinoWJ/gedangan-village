import type { Metadata } from "next";
import { NewsSection } from "@/components/sections/NewsSection";

export const metadata: Metadata = {
  title: "Berita | Desa Gedangan",
  description: "Berita dan pengumuman terbaru Desa Gedangan.",
};

export default function BeritaPage() {
  return <NewsSection />;
}
