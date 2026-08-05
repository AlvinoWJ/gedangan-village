import type { LucideIcon } from "lucide-react";

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ProgramCard({
  icon: Icon,
  title,
  description,
}: ProgramCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-surface p-4 shadow-sm md:p-6">
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden />
      </span>
      <h3 className="font-heading text-base font-semibold text-text-primary md:text-xl">
        {title}
      </h3>
      <p className="text-xs leading-relaxed text-text-secondary md:text-sm">
        {description}
      </p>
    </div>
  );
}
