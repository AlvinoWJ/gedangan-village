import type { Metadata } from "next";
import { ProgramSection } from "@/components/sections/ProgramSection";

export const metadata: Metadata = {
  title: "Program Desa | Desa Gedangan",
  description: "Program unggulan Desa Gedangan untuk warga.",
};

export default function ProgramPage() {
  return <ProgramSection />;
}
