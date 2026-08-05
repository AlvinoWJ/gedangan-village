import { Container } from "@/components/common/Container";
import { Logo } from "@/components/ui/Logo";
import { DesktopNavMenu } from "@/components/common/DesktopNavMenu";
import { MobileNavMenu } from "@/components/common/MobileNavMenu";
import { NAV_LINKS } from "@/lib/data/nav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <Container className="relative flex h-16 items-center justify-between md:h-20">
        <Logo />
        <DesktopNavMenu navLinks={NAV_LINKS} />
        <MobileNavMenu navLinks={NAV_LINKS} />
      </Container>
    </header>
  );
}
