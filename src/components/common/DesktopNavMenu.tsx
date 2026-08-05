"use client";

import { usePathname } from "next/navigation";
import { NavLink } from "@/components/ui/NavLink";
import type { NavItem } from "@/lib/data/nav";

interface DesktopNavMenuProps {
  navLinks: NavItem[];
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNavMenu({ navLinks }: DesktopNavMenuProps) {
  const pathname = usePathname();

  return (
    <nav
      className="hidden items-center gap-8 md:flex"
      aria-label="Navigasi utama"
    >
      {navLinks.map((item) => (
        <NavLink
          key={item.href}
          {...item}
          isActive={isActivePath(pathname, item.href)}
        />
      ))}
    </nav>
  );
}
