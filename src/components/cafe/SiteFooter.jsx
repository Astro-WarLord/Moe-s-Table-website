import React, { useEffect, useState } from "react";
import LOGO from "@/components/cafe/images/font.jpeg";
import logoMascot from "@/components/cafe/images/MOES_LOGOS_WEB-01.png";
import { Instagram } from "lucide-react";

export default function SiteFooter() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-AU", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Australia/Sydney",
        })
      );

    tick();

    const id = setInterval(tick, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background py-12 sm:py-16">
      {/* Background Logo Watermark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15 sm:opacity-25"
        style={{
          backgroundImage: `url(${LOGO})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 px-5 sm:px-[5vw]">
        {/* =========================================================
            TOP SECTION
        ========================================================= */}
        <div className="flex flex-col gap-8 border-b border-border pb-8 md:flex-row md:items-start md:justify-between md:gap-6 md:pb-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <img
              src={logoMascot}
              alt="Moe's Table"
              className="mx-auto h-24 w-auto sm:h-28 md:mx-0 md:h-32"
            />

            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:mt-3 sm:text-sm sm:tracking-[0.25em]">
              Marrickville · Sydney
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px] sm:tracking-[0.25em]">
              Lebanese · Australian Kitchen
            </p>
          </div>

          {/* Time / Social / Navigation */}
          <div className="min-w-0 text-center md:text-right">
            {/* Local Time */}
            <p className="font-mono text-3xl font-bold leading-none text-accent sm:text-5xl md:text-6xl">
              {time}
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.25em]">
              Local time at the table
            </p>

            {/* Coordinates */}
            <p className="mt-3 font-mono text-xs text-foreground/80 sm:mt-4 sm:text-sm">
              33.9095° S, 151.1547° E
            </p>

            {/* Instagram */}
            <div className="mt-5">
              <a
                href="https://www.instagram.com/moes_table/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-foreground transition-colors hover:text-accent sm:text-lg"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                Instagram
              </a>
            </div>

            {/* Menu / Visit */}
            <div className="mt-4 flex items-center justify-center gap-8 md:justify-end">
              <a
                href="#menu"
                className="text-xs uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-accent sm:text-sm sm:tracking-[0.25em]"
              >
                Menu
              </a>

              <a
                href="#visit"
                className="text-xs uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-accent sm:text-sm sm:tracking-[0.25em]"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            FIND US / CONTACT
        ========================================================= */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-10 md:flex md:flex-row md:items-start">
          {/* Find Us */}
          <div>
            <p className="mb-3 text-[9px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[10px] sm:tracking-[0.25em]">
              Find Us
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Moe's+Table+293+Marrickville+Rd+Marrickville+NSW+2204"
              target="_blank"
              rel="noreferrer"
              className="group block text-sm leading-relaxed text-foreground/80 transition-colors hover:text-accent"
            >
              <span className="block">
                293 Marrickville Rd
                <br />
                Marrickville NSW 2204
                <br />
                Sydney, Australia
              </span>

              <span className="mt-2 inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.18em] text-accent transition-opacity sm:text-[10px] sm:tracking-[0.2em] md:opacity-0 md:group-hover:opacity-100">
                Get Directions →
              </span>
            </a>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 text-[9px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[10px] sm:tracking-[0.25em]">
              Contact
            </p>

            <p className="text-sm leading-relaxed text-foreground/80">
              <a
                href="tel:+61295645165"
                className="block transition-colors hover:text-accent"
              >
                (02) 9564 5165
              </a>

              <a
                href="mailto:hello@moestable.com.au"
                className="mt-1 block break-words transition-colors hover:text-accent"
              >
                hello@moestable.com.au
              </a>
            </p>
          </div>
        </div>

        {/* =========================================================
            BOTTOM
        ========================================================= */}
        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 text-center sm:mt-10 md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-[8px] uppercase tracking-[0.16em] text-muted-foreground/60 sm:text-[10px] sm:tracking-[0.25em]">
            © {new Date().getFullYear()} Moe's Table · Marrickville, Sydney
          </p>

          <p className="text-[8px] uppercase tracking-[0.16em] text-muted-foreground/60 sm:text-[10px] sm:tracking-[0.25em]">
            Lebanese · Australian Kitchen
          </p>
        </div>
      </div>
    </footer>
  );
}