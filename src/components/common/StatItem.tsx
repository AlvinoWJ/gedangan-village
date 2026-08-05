import type { LucideIcon } from "lucide-react";

interface StatItemProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export function StatItem({ icon: Icon, value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl bg-surface p-4 text-center shadow-sm md:p-6">
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden />
      </span>
      <span className="font-heading text-2xl leading-none font-bold text-text-primary md:text-4xl">
        {value}
      </span>
      <span className="text-xs text-text-secondary md:text-sm">{label}</span>
    </div>
  );
}
