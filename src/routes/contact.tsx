import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Phone, Instagram, MessageCircle, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Joe Car Care" },
      { name: "description", content: "Book your car service at Joe Car Care. Call 9486955358 or message us on WhatsApp / Instagram." },
      { property: "og:title", content: "Contact — Joe Car Care" },
      { property: "og:description", content: "Phone, WhatsApp, Instagram and visit details." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">— Get in Touch</p>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold uppercase leading-[0.95]">
            Book your <span className="text-primary text-glow">service</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Reach out via phone, WhatsApp or the form below. Our team typically responds within minutes during business hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid gap-10 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-1">
          <a href="tel:9486955358" className="card-hover flex items-center gap-4 rounded-xl border border-border bg-card p-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-md yellow-gradient text-primary-foreground"><Phone size={20} /></span>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Call</div>
              <div className="font-display text-lg font-bold">94869 55358</div>
            </div>
          </a>
          <a href="https://wa.me/919486955358" target="_blank" rel="noreferrer" className="card-hover flex items-center gap-4 rounded-xl border border-border bg-card p-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-md yellow-gradient text-primary-foreground"><MessageCircle size={20} /></span>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
              <div className="font-display text-lg font-bold">Book Instantly</div>
            </div>
          </a>
          <a href="https://instagram.com/joe_car_care_" target="_blank" rel="noreferrer" className="card-hover flex items-center gap-4 rounded-xl border border-border bg-card p-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-md yellow-gradient text-primary-foreground"><Instagram size={20} /></span>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</div>
              <div className="font-display text-lg font-bold">@joe_car_care_</div>
            </div>
          </a>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3 text-primary">
              <Clock size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">Business Hours</span>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li className="flex justify-between"><span>Mon – Sat</span><span className="text-foreground">8:00 AM – 8:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="text-foreground">Closed</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 flex items-start gap-3">
            <MapPin className="text-primary mt-0.5" size={18} />
            <p className="text-sm text-muted-foreground">Visit our workshop — see the live map on the right for directions.</p>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              title="Joe Car Care Location"
              src="https://www.google.com/maps?q=Joe+car+care,8.1483215,77.56776&output=embed"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125"
            />
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/919486955358"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full yellow-gradient px-5 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[0_10px_40px_-10px_var(--accent)] pulse-glow"
      >
        <MessageCircle size={18} /> WhatsApp
      </a>
    </Layout>
  );
}
