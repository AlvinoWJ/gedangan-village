"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/data/nav";

interface NavLinkProps extends NavItem {
  className?: string;
  onNavigate?: () => void;
}

export function NavLink({ label, href, className, onNavigate }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative text-sm font-medium text-text-secondary transition-colors hover:text-primary",
        isActive && "text-primary",
        className,
      )}
    >
      {label}
      <span
        className={cn(
          "absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-primary transition-transform duration-300",
          isActive && "scale-x-100",
        )}
      />
    </Link>
  );
}
