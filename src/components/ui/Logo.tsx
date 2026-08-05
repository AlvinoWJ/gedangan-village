import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data/site-config";

export function Logo() {
  return (
    <div className="flex items-center gap-1.5 md:gap-2">
      <Image
        src="/logo/logo-jombang.png"
        alt="Logo Kabupaten Jombang"
        width={40}
        height={40}
        className="size-13 object-contain md:size-14"
        priority
      />

      <div className="h-10 w-px bg-black md:h-12" />

      <span className="flex flex-col leading-tight">
        <span className="font-heading text-lg font-bold text-text-primary md:text-xl">
          {siteConfig.name}
        </span>
        <span className="text-sm text-text-secondary md:text-base">
          {siteConfig.district}
        </span>
      </span>
    </div>
  );
}
