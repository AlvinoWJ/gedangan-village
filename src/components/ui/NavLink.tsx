import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/data/nav";

interface NavLinkProps extends NavItem {
  className?: string;
  isActive?: boolean;
  onNavigate?: () => void;
}

export function NavLink({
  label,
  href,
  className,
  isActive = false,
  onNavigate,
}: NavLinkProps) {
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
