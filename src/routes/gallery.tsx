import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import s1 from "@/assets/svc-wash.jpg";
import s2 from "@/assets/svc-detailing.jpg";
import s3 from "@/assets/svc-polish.jpg";
import s4 from "@/assets/svc-interior.jpg";
import s5 from "@/assets/svc-audio.jpg";
import s6 from "@/assets/svc-headlight.jpg";
import s7 from "@/assets/svc-accessories.jpg";
import s8 from "@/assets/svc-tint.jpg";
import s9 from "@/assets/svc-seats.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Joe Car Care" },
      { name: "description", content: "Workshop snapshots, before/after detailing, and accessory installations from Joe Car Care." },
      { property: "og:title", content: "Gallery — Joe Car Care" },
      { property: "og:description", content: "See our work — washes, detailing, accessories." },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  { src: g1, span: "md:col-span-2 md:row-span-2", alt: "Joe Car Care workshop interior with cars being serviced" },
  { src: s1, span: "", alt: "Foam wash on a black sedan" },
  { src: s2, span: "", alt: "Premium car detailing in progress" },
  { src: g2, span: "md:col-span-2", alt: "Before and after professional detailing results" },
  { src: s3, span: "", alt: "Paint polishing with a buffer machine" },
  { src: s4, span: "", alt: "Deep interior cabin cleaning" },
  { src: s5, span: "md:col-span-2", alt: "Custom car audio system installation" },
  { src: g3, span: "", alt: "Foam spray covering a car body" },
  { src: s6, span: "", alt: "Headlight restoration and detailing" },
  { src: s7, span: "", alt: "Premium car accessories on display" },
  { src: s8, span: "", alt: "Sun film tinting application on windows" },
  { src: s9, span: "", alt: "Custom leather seat cover installation" },
];

function GalleryPage() {
  return (
    <Layout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">— Our Work</p>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold uppercase leading-[0.95]">
            The <span className="text-primary text-glow">gallery</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-4">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl border border-border ${p.span}`}
            >
              <img src={p.src} alt={p.alt} loading="lazy" className="img-zoom h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                {p.alt}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
