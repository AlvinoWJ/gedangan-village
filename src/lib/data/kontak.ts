import type { LucideIcon } from "lucide-react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export const kontakSection = {
  eyebrow: "Hubungi Kami",
  heading: "Layanan & Kontak",
  lead: "Kantor Desa Gedangan siap melayani warga setiap hari kerja. Jangan ragu untuk menghubungi kami.",
} as const;

export interface KontakItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export const kontakItems: KontakItem[] = [
  {
    icon: MapPin,
    label: "Alamat",
    value: siteConfig.address,
  },
  {
    icon: Phone,
    label: "Telepon",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock,
    label: "Jam Pelayanan",
    value: siteConfig.operationalHours,
  },
];
