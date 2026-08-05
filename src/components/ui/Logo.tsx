import Link from "next/link";
import { Sprout } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-heading text-lg font-bold text-primary md:text-xl"
    >
      <span className="flex size-9 items-center justify-center rounded-full bg-primary text-white">
        <Sprout className="size-5" />
      </span>
      <span>{siteConfig.name}</span>
    </Link>
  );
}
