import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-md yellow-gradient text-primary-foreground font-display text-xl font-bold">J</span>
            <span className="font-display text-lg font-bold tracking-wider">
              JOE <span className="text-primary">CAR CARE</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            Premium car care & accessories. Professional washing, detailing, interior
            cleaning and accessory installation — built on craftsmanship and trust.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://instagram.com/joe_car_care_" target="_blank" rel="noreferrer" aria-label="Joe Car Care on Instagram" className="flex h-10 w-10 items-center justify-center rounded-md border border-border hover:border-primary hover:text-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="tel:9486955358" aria-label="Call Joe Car Care" className="flex h-10 w-10 items-center justify-center rounded-md border border-border hover:border-primary hover:text-primary transition-colors">
              <Phone size={18} />
            </a>
            <a href="https://wa.me/919486955358" target="_blank" rel="noreferrer" aria-label="Message Joe Car Care on WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-md border border-border hover:border-primary hover:text-primary transition-colors">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone size={16} className="text-primary mt-0.5" /> 94869 55358</li>
            <li className="flex gap-2"><Instagram size={16} className="text-primary mt-0.5" /> @joe_car_care_</li>
            <li className="flex gap-2"><MapPin size={16} className="text-primary mt-0.5" /> Mon – Sat · 8:00 AM – 8:00 PM (Sun closed)</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Joe Car Care. All rights reserved.</p>
          <p>Crafted with <span className="text-primary">precision</span>.</p>
        </div>
      </div>
    </footer>
  );
}
