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
  const [menuOpen, setMenuOpen] = useState(false);

  const isOpen = useOpenStatus();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-gradient-to-b from-background/70 to-transparent"
      }`}
    >
      {/* =====================================================
          MAIN NAVIGATION BAR
      ===================================================== */}

      <div className="flex h-16 items-center justify-between px-5 sm:h-auto sm:px-[5vw] sm:py-4">
        {/* Brand */}
        <a
          href="#top"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-2 text-foreground sm:gap-3"
        >
          {/* Open / Closed indicator */}
          <span
            className={`h-2.5 w-2.5 shrink-0 rounded-full sm:h-3 sm:w-3 ${
              isOpen ? "bg-green-500" : "bg-red-500"
            } shadow-[0_0_8px_rgba(0,0,0,0.3)]`}
          />

          <span className="flex items-baseline gap-1.5 sm:gap-2">
            <span className="whitespace-nowrap font-display text-3xl leading-none sm:text-5xl md:text-6xl">
              Moe's
            </span>

            <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.18em] text-foreground/80 sm:text-sm sm:tracking-[0.35em]">
              Table
            </span>
          </span>
        </a>

        {/* =====================================================
            DESKTOP NAV
        ===================================================== */}

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

        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform duration-300 ${
              menuOpen ? "translate-y-[4px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-px w-6 bg-foreground transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-px w-6 bg-foreground transition-transform duration-300 ${
              menuOpen ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80 border-t border-border" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col bg-background/95 px-5 py-5 backdrop-blur-md">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-border py-4 text-sm uppercase tracking-[0.25em] text-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}

          <a
            href="tel:+61295645165"
            onClick={closeMenu}
            className="mt-4 border border-accent/60 px-4 py-3 text-center text-sm uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Order
          </a>
        </nav>
      </div>
    </header>
  );
}