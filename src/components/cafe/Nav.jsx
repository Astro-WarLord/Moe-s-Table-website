import React, { useState, useEffect } from "react";

const LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Pantry", href: "#origin" },
  { label: "Visit", href: "#visit" },
];

function useOpenStatus() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const checkStatus = () => {
      const d = new Date();
      const day = d.getDay();
      const h = d.getHours();
      const isWeekend = day === 0 || day === 6;
      const open = isWeekend ? 8 : 7;
      const close = 15;
      setIsOpen(h >= open && h < close);
    };
    checkStatus();
    const id = setInterval(checkStatus, 60000);
    return () => clearInterval(id);
  }, []);
  return isOpen;
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const isOpen = useOpenStatus();
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-gradient-to-b from-background/70 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-[5vw] py-4">
        <a href="#top" className="flex items-center gap-3 text-foreground">
          {/* Status Dot */}
          <span 
            className={`h-3 w-3 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"} shadow-[0_0_8px_rgba(0,0,0,0.3)]`}
          />
          <span className="flex items-baseline gap-2">
            <span className="font-display text-5xl leading-none md:text-6xl">Moe's</span>
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground/80">
              Table
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.25em] text-foreground/85 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-accent">
              {l.label}
            </a>
          ))}
          <a
            href="tel:+61295645165"
            className="border border-accent/60 px-4 py-2 text-white transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Order
          </a>
        </nav>
      </div>
    </header>
  );
}