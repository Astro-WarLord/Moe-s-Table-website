import React, { useState, useEffect } from "react";
import logoWordmark from "@/components/cafe/images/MOES_LOGOS_WEB-02.png";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const isOpen = useOpenStatus();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-gradient-to-b from-background/70 to-transparent"
      }`}
    >
      {/* Main bar */}
      <div className="flex min-h-16 items-center justify-between px-4 py-3 sm:px-[5vw] sm:py-4">

        {/* Brand */}
        <a
          href="#top"
          onClick={() => setMenuOpen(false)}
          className="flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <span
            className={`h-2 w-2 shrink-0 rounded-full sm:h-3 sm:w-3 ${
              isOpen ? "bg-green-500" : "bg-red-500"
            }`}
          />

          <img
            src={logoWordmark}
            alt="Moe's Table"
            className="h-8 w-auto shrink-0 sm:h-10 md:h-12"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.25em] text-foreground/85 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}

          <a
            href="tel:+61295645165"
            className="border border-accent/60 px-4 py-2 text-white transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Order
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-px w-5 bg-foreground transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`block h-px w-5 bg-foreground transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block h-px w-5 bg-foreground transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${
          menuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <nav className="border-t border-border bg-background/95 px-5 py-3 backdrop-blur-md">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-border py-3 text-xs uppercase tracking-[0.22em] text-foreground"
            >
              {link.label}
            </a>
          ))}

          <a
            href="tel:+61295645165"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block border border-accent/60 px-4 py-3 text-center text-xs uppercase tracking-[0.22em]"
          >
            Order
          </a>
        </nav>
      </div>
    </header>
  );
}