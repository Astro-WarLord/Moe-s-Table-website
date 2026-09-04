import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { Image } from "@/components/ui/image";
import ReservationWidget from "@/components/cafe/ReservationWidget";

const HOURS = [
  { day: "Mon – Fri", time: "7:00 — 15:00" },
  { day: "Saturday", time: "8:00 — 15:00" },
  { day: "Sunday", time: "8:00 — 15:00" },
];

function useVibe() {
  const [vibe, setVibe] = useState("Quiet");
  useEffect(() => {
    const calc = () => {
      const d = new Date();
      const day = d.getDay();
      const h = d.getHours();
      const isWeekend = day === 0 || day === 6;
      const open = isWeekend ? 8 : 7;
      const close = 15;
      if (h < open || h >= close) setVibe("Closed");
      else if (h < open + 1.5 || h >= close - 1) setVibe("Quiet");
      else if (h >= 9 && h <= 12) setVibe("Peak");
      else setVibe("Lively");
    };
    calc();
    const id = setInterval(calc, 60000);
    return () => clearInterval(id);
  }, []);
  return vibe;
}

export default function Counter({ image }) {
  const vibe = useVibe();
  const [showBooking, setShowBooking] = useState(false);
  const dotColor =
    vibe === "Peak" ? "bg-accent" : vibe === "Lively" ? "bg-lime-400" : vibe === "Quiet" ? "bg-emerald-500" : "bg-red-500";

  return (
    <section id="visit" className="relative py-[13vh]">
      <div className="grid gap-[5vh] px-[5vw] lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full"
        >
          <Image
            src={image}
            alt="The Moe's Table dining room"
            fittingType="fill"
            className="h-full w-full object-cover"
          />
          <div className="absolute left-4 top-4 flex items-center gap-2 border border-border/60 bg-background/40 px-3 py-2 backdrop-blur-md">
            <span className={`h-2 w-2 rounded-full ${dotColor} ${vibe !== "Closed" ? "animate-pulse" : ""}`} />
            <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/90">
              Current Vibe — {vibe}
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col justify-center">
          <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            IV — The Counter
          </p>
          <h2 className="font-display text-[6vw] font-bold leading-[0.9] md:text-[4vw]">
            Book a
            <br />
            table.
          </h2>

          <button
            type="button"
            onClick={() => setShowBooking((v) => !v)}
            className="mt-6 inline-flex w-fit items-center gap-3 border border-accent bg-accent px-6 py-3 text-xs uppercase tracking-[0.25em] text-accent-foreground transition-colors hover:bg-transparent hover:text-accent"
          >
            {showBooking ? "Hide Booking" : "Book Now"}
          </button>

          {showBooking && (
            <div className="mt-6">
              <ReservationWidget />
            </div>
          )}

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <div className="mb-3 flex items-center gap-2 text-accent">
                <MapPin className="h-4 w-4" />
                <span className="text-[11px] uppercase tracking-[0.25em]">Find Us</span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/80">
                293 Marrickville Rd
                <br />
                Marrickville NSW 2204
                <br />
                Sydney, Australia
              </p>
              <a
                href="tel:+61295645165"
                className="mt-4 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4" />
                (02) 9564 5165
              </a>
            </div>
            <div>
              <div className="mb-3 flex items-center gap-2 text-accent">
                <Clock className="h-4 w-4" />
                <span className="text-[11px] uppercase tracking-[0.25em]">Hours</span>
              </div>
              <ul className="space-y-2 text-sm">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-mono">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* UPDATED: Uses auto-routing Google Maps link */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Moe's+Table+293+Marrickville+Rd+Marrickville+NSW+2204"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-fit items-center gap-3 border border-accent bg-accent px-6 py-3 text-xs uppercase tracking-[0.25em] text-accent-foreground transition-colors hover:bg-transparent hover:text-accent"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}