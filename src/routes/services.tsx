import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Joe Car Care" },
      { name: "description", content: "Premium car wash, detailing, polishing, accessories, audio, sun film and more at Joe Car Care." },
      { property: "og:title", content: "Services — Joe Car Care" },
      { property: "og:description", content: "Nine premium services to keep your car flawless." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Layout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">— What We Do</p>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold uppercase leading-[0.95]">
            Premium <span className="text-primary text-glow">services</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            From quick washes to full ceramic detailing — every service is delivered
            with showroom-grade precision.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
