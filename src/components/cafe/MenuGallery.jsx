import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Plus, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Image } from "@/components/ui/image";

import lebaneseBrekkie from "@/components/cafe/images/Lebanese_breakfast.jpg";
import moesHash from "@/components/cafe/images/Kelby_s_Hash.jpg";
import jengaFrenchToast from "@/components/cafe/images/French_Toast.jpg";
import shakshuka from "@/components/cafe/images/Shakshuka.jpg";

// NOTE: notes/prices below are placeholders written to match the dish photos
// and the site's existing tone — swap in the real menu copy/pricing whenever
// you have it.
const SPECIMENS = [
  {
    id: "01",
    name: "Lebanese Brekkie",
    image: lebaneseBrekkie,
    roots: "Lebanese kitchen",
    notes: "Grilled flatbread · Labneh · Lebanese sausage · Zaatar · Heirloom tomato",
    price: "26.50",
  },
  {
    id: "02",
    name: "Moe's Hash",
    image: moesHash,
    roots: "The house classic",
    notes: "Poached egg · Sujuk · Crispy potatoes · Hollandaise · White Toscano",
    price: "24.90",
  },
  {
    id: "03",
    name: "Jenga French Toast",
    image: jengaFrenchToast,
    roots: "Turkish bread jenga",
    notes: "Bacon · Grilled banana · Burnt ricotta cream · Maple syrup",
    price: "23.90",
  },
  {
    id: "04",
    name: "Shakshuka",
    image: shakshuka,
    roots: "Lebanese kitchen",
    notes: "Baked eggs · Spiced tomato · Crispy pastry · Sprouts · Stringy halloumi",
    price: "22.50",
  },
];

function Specimen({ data, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative flex w-[78vw] shrink-0 snap-center flex-col md:w-[42vw] lg:w-[32vw]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <Image
          src={data.image}
          alt={data.name}
          fittingType="fill"
          className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-90"
        />
        <span className="absolute left-4 top-4 font-mono text-xs tracking-widest text-accent">
          {data.id}
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold leading-tight">{data.name}</h3>
        <span className="font-mono text-sm text-muted-foreground">${data.price}</span>
      </div>

      <dl className="mt-4 divide-y divide-border border-y border-border text-sm">
        <div className="flex justify-between py-2">
          <dt className="text-muted-foreground">Roots</dt>
          <dd>{data.roots}</dd>
        </div>
        <div className="py-2">
          <dt className="text-muted-foreground">Notes</dt>
          <dd className="mt-1 text-accent">{data.notes}</dd>
        </div>
      </dl>

      {/* Add to Order - Calls phone number */}
      <a
        href="tel:+61295645165"
        className="mt-5 flex items-center justify-between border border-border px-4 py-3 text-xs uppercase tracking-[0.25em] transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
      >
        Add to Order
        <Plus className="h-4 w-4" />
      </a>
    </motion.article>
  );
}

export default function MenuGallery() {
  const scrollerRef = useRef(null);

  const scrollByCard = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 560);
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section id="menu" className="relative py-[13vh]">
      <div className="px-[5vw]">
        <div className="flex items-end justify-between border-b border-border pb-6">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              II — The Table
            </p>
            <h2 className="font-display text-[7vw] font-bold leading-none md:text-[5vw]">
              The Menu
            </h2>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <p className="max-w-xs text-sm text-muted-foreground">
              A fusion of Middle Eastern and modern Australian brunch. Scroll
              sideways through the dishes that bring people together.
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous dish"
                className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next dish"
                className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Side Arrows - Always Visible on Desktop */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 hidden items-center justify-between px-2 md:flex">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous dish"
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-lg backdrop-blur-sm transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next dish"
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-lg backdrop-blur-sm transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory scroll-smooth gap-[5vw] overflow-x-auto px-[5vw] pb-6"
      >
        {SPECIMENS.map((s, i) => (
          <Specimen key={s.id} data={s} index={i} />
        ))}
        <a
          href="https://www.google.com/maps/place/Moe's+Table/@-33.9096826,151.1546649,3a,75y,90t/data=!3m7!1e2!3m5!1sCIABIhBFrNTLy6-0C-AniLQMgYjc!2e10!3e12!7i3072!8i4080!4m7!3m6!1s0x6b12b064f61212c3:0xcc77a42d9b4f595c!8m2!3d-33.9095139!4d151.1547559!10e9!16s%2Fg%2F1tmy564c?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="group flex w-[60vw] shrink-0 snap-center flex-col items-center justify-center gap-4 border border-dashed border-border px-6 text-center transition-colors hover:border-accent md:w-[26vw] lg:w-[18vw]"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/60 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
            <ExternalLink className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
            View Full Menu
          </span>
          <span className="text-xs text-muted-foreground">
            Every dish, drink and price on Google
          </span>
        </a>
      </div>

      {/* Mobile-visible arrows */}
      <div className="mt-4 flex justify-center gap-2 px-[5vw] md:hidden">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous dish"
          className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next dish"
          className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}