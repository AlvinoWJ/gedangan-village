import { Hero } from "@/components/sections/Hero";
import { ProfilDesaSection } from "@/components/sections/ProfilDesaSection";
import { ProgramSection } from "@/components/sections/ProgramSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfilDesaSection />
      <ProgramSection />
      {/* TODO: StatsSection, TentangDesaSection, ProgramSection, NewsSection, ContactSection */}
    </>
  );
}
