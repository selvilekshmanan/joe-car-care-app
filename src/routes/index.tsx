import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import heroCar from "@/assets/hero-car.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import brandEmblem from "@/assets/joe-car-care-logo.png";
import { ArrowRight, Phone, ShieldCheck, Wrench, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joe Car Care — Premium Car Detailing & Accessories" },
      {
        name: "description",
        content:
          "Joe Car Care delivers premium car washing, detailing, interior cleaning and accessory installation. Book your luxury car care service today.",
      },
      { property: "og:title", content: "Joe Car Care — Premium Car Detailing & Accessories" },
      { property: "og:description", content: "Cinematic car care, detailing and accessories." },
      { property: "og:image", content: heroCar },
    ],
    links: [
      { rel: "preload", as: "image", href: heroCar, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Joe Car Care",
          image: "https://joe-carcare-premium-shine.lovable.app" + heroCar,
          telephone: "+91-94869-55358",
          url: "https://joe-carcare-premium-shine.lovable.app",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nagercoil",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 8.1483215, longitude: 77.56776 },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "08:00",
              closes: "20:00",
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative -mt-20 h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroCar}
          alt="Luxury black sports car in dark garage"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-20">
          <div className="max-w-3xl animate-float-up">
            <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Premium Car Care<br />
              & <span className="text-primary text-glow">Accessories</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-foreground/80 md:text-lg">
              Professional car washing, detailing, interior cleaning and accessory
              installation — engineered for drivers who demand the very best.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-md yellow-gradient px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-primary-foreground hover:shadow-[0_0_40px_-4px_var(--accent)] transition-shadow"
              >
                Explore Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-foreground/30 bg-background/30 backdrop-blur px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-foreground/60">
          scroll
        </div>
      </section>

      {/* MARQUEE STATS */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { v: "15+", l: "Years Experience" },
            { v: "5K+", l: "Happy Customers" },
            { v: "9", l: "Premium Services" },
            { v: "4.9★", l: "Customer Rating" },
          ].map((s) => (
            <div key={s.l} className="px-6 py-8 text-center">
              <div className="font-display text-3xl md:text-5xl font-bold text-primary text-glow">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">— Our Services</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold uppercase">
              Built for <span className="text-primary">performance</span>
            </h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:gap-3 transition-all">
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute -inset-4 yellow-gradient opacity-25 blur-3xl rounded-3xl" />
            <div className="relative rounded-2xl border border-border bg-background/40 p-10 flex items-center justify-center">
              <img
                src={brandEmblem}
                alt="Joe Car Care brand emblem"
                loading="lazy"
                className="max-h-80 w-auto object-contain drop-shadow-[0_0_30px_rgba(234,179,8,0.35)]"
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">— Our Philosophy</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold uppercase leading-[1.05]">
              Your car is an <span className="text-primary text-glow">investment</span>.<br />
              We make sure it looks like one.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At Joe Car Care, we believe that a luxury vehicle deserves more than just a
              standard cleanup — it demands precision care. Our elite high-pressure water
              wash uses advanced techniques and mineral-free water to blast away road grime
              while flawlessly preserving your vehicle's delicate paintwork and exotic wheels.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              But we don't stop at a spotless exterior. We elevate your entire driving
              experience from the floorboards up with custom-fit seat covers and premium
              all-weather floor mats, meticulously installed to guarantee a tight,
              wrinkle-free, factory-like finish. From supercars to luxury SUVs, we combine
              scratch-free methods with premium interior upgrades to protect your investment
              and keep your ride looking showroom-fresh, every single day.
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-3">
          {[
            { i: ShieldCheck, t: "Trusted Quality", d: "Premium-grade chemicals and OEM accessories only." },
            { i: Wrench, t: "Expert Crew", d: "Certified detailers with 15+ years of garage experience." },
            { i: Star, t: "5-Star Service", d: "Loved by 5,000+ customers across the city." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="group">
              <div className="flex h-14 w-14 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary group-hover:yellow-gradient group-hover:text-primary-foreground transition-all">
                <Icon size={26} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold uppercase">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY PEEK */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">— The Workshop</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold uppercase">
              Inside our <span className="text-primary">garage</span>
            </h2>
          </div>
          <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:gap-3 transition-all">
            Open gallery <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { src: gallery1, alt: "Workshop interior with cars under service" },
            { src: gallery2, alt: "Detailing crew polishing a luxury car" },
            { src: gallery3, alt: "Foam spray covering a car body" },
          ].map((g, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-border aspect-[4/3]">
              <img src={g.src} alt={g.alt} loading="lazy" className="img-zoom h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 flex flex-col items-center text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase">
            Ready to <span className="text-primary text-glow">shine?</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Book a slot today and treat your car to the care it deserves.
          </p>
          <a
            href="tel:9486955358"
            className="mt-8 inline-flex items-center gap-3 rounded-md yellow-gradient px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground pulse-glow"
          >
            <Phone size={18} /> Call 94869 55358
          </a>
        </div>
      </section>
    </Layout>
  );
}
