import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

// NOTE: origin/coords/note copy is placeholder written to match the site's
// existing tone — swap in real sourcing details whenever you have it.
const PROVENANCE = [
  {
    name: "Zaatar",
    origin: "The Levant",
    coords: "33.85°N 35.86°E",
    note: "Wild thyme, toasted sesame and sumac — dusted over eggs, bread and everything else.",
  },
  {
    name: "Dukkah",
    origin: "Hand-toasted in-house",
    coords: "33.90°S 151.15°E",
    note: "Toasted nuts, seeds and spice, crushed fresh for crunch on every plate.",
  },
  {
    name: "Labneh",
    origin: "Strained Yoghurt",
    coords: "33.90°S 151.15°E",
    note: "Yogurt hung until thick and tangy — served with olive oil, zaatar and warm bread.",
  },
];

export default function Terroir({ image }) {
  const [active, setActive] = useState(0);

  return (
    <section id="origin" className="relative overflow-hidden bg-secondary py-[13vh]">
      <p className="pointer-events-none absolute left-[5vw] top-[10vh] select-none font-display text-[18vw] font-bold leading-none text-foreground/[0.03]">
        PANTRY
      </p>

      <div className="relative grid gap-[6vh] px-[5vw] lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/3] overflow-hidden"
        >
          <Image
            src={image}
            alt="Middle Eastern spices and herbs"
            fittingType="fill"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 to-transparent" />
          <span className="absolute bottom-4 left-4 font-mono text-xs tracking-widest text-accent">
            {PROVENANCE[active].coords}
          </span>
        </motion.div>

        <div>
          <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            III — The Pantry
          </p>
          <h2 className="font-display text-[6vw] font-bold leading-[0.9] md:text-[4vw]">
            Where two
            <br />
            kitchens meet.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/70">
            We cook from two larders at once — the spice route of the Levant and
            the produce of the Australian east coast. Every dish is a small
            conversation between Beirut and Marrickville.
          </p>

          <ul className="mt-10 divide-y divide-border border-y border-border">
            {PROVENANCE.map((r, i) => (
              <li
                key={r.name}
                onMouseEnter={() => setActive(i)}
                className={`flex cursor-pointer items-center justify-between py-5 transition-colors ${
                  active === i ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                <div>
                  <h3 className="font-display text-xl font-semibold">{r.name}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {r.origin}
                  </p>
                </div>
                <p className="max-w-[16rem] text-right text-xs text-foreground/60">{r.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}