import type { PerangkatDesa } from "@/lib/data/perangkat";

export function PerangkatCard({ nama, jabatan, pendidikan }: PerangkatDesa) {
  return (
    <div className="rounded-xl bg-surface p-4 shadow-sm">
      <p className="font-heading text-sm font-semibold text-text-primary">
        {nama}
      </p>
      <div className="mt-2 flex items-center justify-between gap-2">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {jabatan}
        </span>
        <span className="text-xs text-text-secondary">{pendidikan}</span>
      </div>
    </div>
  );
}
