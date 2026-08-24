import React, { useEffect, useState } from 'react'
import LOGO from "@/components/cafe/images/font.jpeg";
import { Instagram } from "lucide-react";

export default function SiteFooter() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-AU', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'Australia/Sydney',
        }),
      )

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background py-16">
      {/* Background Logo Watermark */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url(${LOGO})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="relative z-10 px-[5vw]">
        
        {/* Top Row: Brand & Time/Follow */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-border pb-10 md:flex-row">
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Moe's Table
            </h2>
            {/* Marrickville · Sydney below Moe's Table */}
            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Marrickville · Sydney
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Lebanese · Australian Kitchen
            </p>
          </div>
          
          {/* Right side: Time, Coordinates, Instagram, Menu & Visit */}
          <div className="text-center md:text-right">
            {/* Bigger Live Time */}
            <p className="font-mono text-5xl font-bold text-accent md:text-6xl">{time}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Local time at the table
            </p>
            {/* Coordinates below time */}
            <p className="mt-4 font-mono text-sm text-foreground/80">
              33.9095° S, 151.1547° E
            </p>
            
            {/* Instagram - Below Timer/Coordinates */}
            <div className="mt-6">
              <a
                href="https://www.instagram.com/moes_table/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-accent"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </div>

            {/* Menu & Visit */}
            <div className="mt-4 flex justify-center gap-6 md:justify-end">
              <a href="#menu" className="text-sm uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:text-accent">
                Menu
              </a>
              <a href="#visit" className="text-sm uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:text-accent">
                Visit
              </a>
            </div>
          </div>
        </div>

        {/* Middle Row: Find Us & Contact */}
        <div className="mt-10 flex flex-col md:flex-row md:items-start">
          {/* Find Us */}
          <div className="md:pr-24">
            <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Find Us
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Moe's+Table+293+Marrickville+Rd+Marrickville+NSW+2204"
              target="_blank"
              rel="noreferrer"
              className="group text-sm leading-relaxed text-foreground/80 transition-colors hover:text-accent"
            >
              <span className="block">
                293 Marrickville Rd
                <br />
                Marrickville NSW 2204
                <br />
                Sydney, Australia
              </span>
              <span className="mt-2 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Get Directions →
              </span>
            </a>
          </div>

          {/* Contact */}
          <div className="mt-8 md:mt-0">
            <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
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
                className="mt-1 block transition-colors hover:text-accent"
              >
                hello@moestable.com.au
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-border pt-6 md:flex-row">
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60">
            © {new Date().getFullYear()} Moe's Table · Marrickville, Sydney
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60">
            Lebanese · Australian Kitchen
          </p>
        </div>
      </div>
    </footer>
  )
}