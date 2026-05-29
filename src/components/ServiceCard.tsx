import type { Service } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({ s }: { s: Service }) {
  return (
    <article className="group card-hover relative overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={s.image}
          alt={s.title}
          loading="lazy"
          className="img-zoom h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            {s.title}
          </h2>
          <ArrowUpRight className="text-primary opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
        </div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
      </div>
    </article>
  );
}
