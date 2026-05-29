import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import detailing from "@/assets/svc-detailing.jpg";
import { Award, Users, Clock, Smile } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Joe Car Care" },
      { name: "description", content: "Joe Car Care is a premium automotive workshop dedicated to detailing, accessories and customer satisfaction." },
      { property: "og:title", content: "About — Joe Car Care" },
      { property: "og:description", content: "Over 15 years of premium car care, built on craftsmanship." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { i: Clock, v: "15+", l: "Years in Business" },
  { i: Users, v: "5,000+", l: "Happy Customers" },
  { i: Award, v: "50+", l: "Premium Brands" },
  { i: Smile, v: "98%", l: "Repeat Clients" },
];

function AboutPage() {
  return (
    <Layout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">— About Us</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold uppercase leading-[0.95]">
              Driven by <span className="text-primary text-glow">passion</span>
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Joe Car Care is a premium automotive workshop built on a single belief —
              that every car deserves dealership-grade care, every visit. Our certified
              crew, professional equipment and high-end products combine to deliver
              results you can see and feel.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From a quick foam wash to a full ceramic detail, accessory installations
              and audio upgrades — we handle it all under one roof, with quality
              products and a customer-first attitude.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At Joe Car Care we believe that a luxury vehicle deserves more than
              just a standard cleanup — it demands precision care. Our elite
              high-pressure water wash uses advanced techniques and mineral-free
              water to blast away road grime while flawlessly preserving your
              vehicle's delicate paintwork and exotic wheels. But we don't stop
              at a spotless exterior. We elevate your entire driving experience
              from the floorboards up with custom-fit seat covers and premium
              all-weather floor mats, meticulously installed to guarantee a tight,
              wrinkle-free, factory-like finish. From supercars to luxury SUVs,
              we combine scratch-free methods with premium interior upgrades to
              protect your investment and keep your ride looking showroom-fresh,
              every single day.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center rounded-md yellow-gradient px-6 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground hover:shadow-[0_0_30px_-4px_var(--accent)] transition-shadow">
              Visit the Workshop
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 yellow-gradient opacity-30 blur-2xl rounded-2xl" />
            <img src={detailing} alt="Workshop detailing" loading="lazy" className="relative rounded-2xl border border-border" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ i: Icon, v, l }) => (
          <div key={l} className="card-hover rounded-xl border border-border bg-card p-8 text-center">
            <Icon className="mx-auto text-primary" size={28} />
            <div className="mt-4 font-display text-4xl font-bold text-primary text-glow">{v}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
