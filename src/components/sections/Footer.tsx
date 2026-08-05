// src/components/sections/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { siteConfig } from "@/lib/data/site-config";
import { NAV_LINKS } from "@/lib/data/nav";
import { InstagramIcon } from "@/components/ui/instagram";
import { FacebookIcon } from "@/components/ui/facebook";
import { YoutubeIcon } from "@/components/ui/youtube";

const SOCIAL_LINKS = [
  { label: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    icon: InstagramIcon,
  },
  { label: "YouTube", href: siteConfig.social.youtube, icon: YoutubeIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer text-white">
      <Container className="flex flex-col gap-10 py-12 md:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
          <Image
            src="/logo/logo-jombang.png"
            alt="Logo Kabupaten Jombang"
            width={200}
            height={200}
            className="size-28 shrink-0 self-center object-contain sm:size-32 sm:-ml-4 sm:self-start md:size-46 md:-ml-6 lg:size-52 lg:-ml-8"
          />

          <div className="grid flex-1 grid-cols-1 gap-20 sm:grid-cols-2">
            {/* Profil */}
            <div className="space-y-3">
              <div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {siteConfig.name}
                </h3>
                <p className="text-lg text-white/70">
                  {siteConfig.district}, Jombang
                </p>
              </div>

              <p className="max-w-xs text-sm leading-relaxed text-white/70">
                {siteConfig.description}
              </p>

              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-footer"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigasi */}
            <div className="space-y-3">
              <h4 className="font-heading text-xl font-semibold tracking-wide text-white/90 ">
                Navigasi
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/20 pt-4 text-xs text-white/60 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.fullName}. Hak cipta dilindungi.
          </p>
          <p>Dibuat dengan ❤️ untuk warga {siteConfig.name}.</p>
        </div>
      </Container>
    </footer>
  );
}
