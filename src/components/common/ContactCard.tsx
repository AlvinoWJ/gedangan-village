import type { KontakItem } from "@/lib/data/kontak";

export function ContactCard({ icon: Icon, label, value, href }: KontakItem) {
  const content = (
    <>
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden />
      </span>
      <span className="text-xs font-semibold tracking-wide text-text-secondary uppercase">
        {label}
      </span>
      <span className="text-sm leading-relaxed text-text-primary md:text-base">
        {value}
      </span>
    </>
  );

  const className =
    "flex flex-col items-center gap-2 rounded-xl bg-surface p-4 text-center shadow-sm md:p-6";

  if (href) {
    return (
      <a
        href={href}
        className={`${className} transition-colors hover:bg-primary/5`}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
