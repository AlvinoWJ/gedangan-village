import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
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
      <Container className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 md:py-20 lg:grid-cols-4">
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-semibold text-white">
            {siteConfig.name}
          </h3>
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            {siteConfig.description}
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold tracking-wide text-white/90 uppercase">
            Tautan Cepat
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

        <div className="space-y-3">
          <h4 className="text-sm font-semibold tracking-wide text-white/90 uppercase">
            Kontak
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2">
              <MapPin className="size-4 shrink-0 text-accent" aria-hidden />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="size-4 shrink-0 text-accent" aria-hidden />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-accent">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="size-4 shrink-0 text-accent" aria-hidden />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold tracking-wide text-white/90 uppercase">
            Ikuti Kami
          </h4>
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
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-4 text-xs text-white/60 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.fullName}. Hak cipta dilindungi.
          </p>
          <p>Dibuat dengan ❤️ untuk warga {siteConfig.name}.</p>
        </Container>
      </div>
    </footer>
  );
}
