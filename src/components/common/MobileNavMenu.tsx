"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/NavLink";
import { useActiveSection } from "@/hooks/useActiveSection";
import type { NavItem } from "@/lib/data/nav";

interface MobileNavMenuProps {
  navLinks: NavItem[];
}

export function MobileNavMenu({ navLinks }: MobileNavMenuProps) {
  const [open, setOpen] = useState(false);

  const sectionIds = navLinks
    .filter((item) => item.href.startsWith("#"))
    .map((item) => item.href.slice(1));
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label={open ? "Tutup menu" : "Buka menu"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Navigasi mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-x-0 top-full overflow-hidden border-b border-black/5 bg-surface shadow-lg"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <NavLink
                    {...item}
                    isActive={item.href === `#${activeId}`}
                    onNavigate={() => setOpen(false)}
                    className="block py-2.5 text-base"
                  />
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
