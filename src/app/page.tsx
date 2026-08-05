import { Hero } from "@/components/sections/Hero";
import { ProfilDesaSection } from "@/components/sections/ProfilDesaSection";
import { ProgramSection } from "@/components/sections/ProgramSection";
import { VisiMisiSection } from "@/components/sections/VisiMisiSection";
import { PerangkatSection } from "@/components/sections/PerangkatSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfilDesaSection />
      <ProgramSection />
      <VisiMisiSection />
      <PerangkatSection />
      <NewsSection />
      <ContactSection />
      {/* TODO: StatsSection, TentangDesaSection, ProgramSection, NewsSection, ContactSection */}
    </>
  );
}
