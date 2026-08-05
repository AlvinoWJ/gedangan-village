import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data/site-config";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 md:gap-3">
      <Image
        src="/logo/logo-jombang.png"
        alt="Logo Kabupaten Jombang"
        width={40}
        height={40}
        className="size-9 object-contain md:size-10"
        priority
      />
      <span className="flex flex-col leading-tight">
        <span className="font-heading text-sm font-bold text-text-primary md:text-base">
          {siteConfig.name}
        </span>
        <span className="text-xs text-text-secondary">
          {siteConfig.district}
        </span>
      </span>
    </Link>
  );
}
