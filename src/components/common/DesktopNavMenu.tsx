"use client";

import { NavLink } from "@/components/ui/NavLink";
import { useActiveSection } from "@/hooks/useActiveSection";
import type { NavItem } from "@/lib/data/nav";

interface DesktopNavMenuProps {
  navLinks: NavItem[];
}

export function DesktopNavMenu({ navLinks }: DesktopNavMenuProps) {
  const sectionIds = navLinks
    .filter((item) => item.href.startsWith("#"))
    .map((item) => item.href.slice(1));

  const activeId = useActiveSection(sectionIds);

  return (
    <nav
      className="hidden items-center gap-8 md:flex"
      aria-label="Navigasi utama"
    >
      {navLinks.map((item) => (
        <NavLink
          key={item.href}
          {...item}
          isActive={item.href === `#${activeId}`}
        />
      ))}
    </nav>
  );
}
