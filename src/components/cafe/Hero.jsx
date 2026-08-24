import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function Hero({ image }) {
  const { scrollYProgress } = useScroll();

  const imgScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  return (
    <section
      id="top"
      className="relative h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Decorative vertical lines */}
      <div className="pointer-events-none absolute inset-0 flex justify-between px-[5vw]">
        <div className="h-full w-px bg-foreground/10" />
        <div className="h-full w-px bg-foreground/10" />
        <div className="h-full w-px bg-foreground/10" />
        <div className="h-full w-px bg-foreground/10" />
      </div>

      {/* Background image */}
      <motion.div style={{ scale: imgScale }} className="absolute inset-0">
        <Image
          src={image}
          alt="Middle Eastern and Australian fusion brunch spread"
          fittingType="fill"
          className="h-full w-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex h-full flex-col justify-between px-5 py-24 sm:px-[5vw] sm:py-[6vh]"
      >
        {/* =====================================================
            TOP INFORMATION
        ===================================================== */}

        {/* Desktop */}
        <div className="hidden items-start justify-between text-sm uppercase tracking-[0.3em] text-muted-foreground sm:flex">
          <span>Marrickville · Sydney</span>

          <span>Brunch · Coffee · Good Company</span>
        </div>

        {/* Mobile */}
        <div className="flex flex-col items-center gap-3 text-center sm:hidden">
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Marrickville · Sydney
          </span>

          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground/80">
            Brunch · Coffee · Good Company
          </span>
        </div>

        {/* =====================================================
            CENTER CONTENT
        ===================================================== */}

        <div className="flex flex-col items-center justify-center px-2 text-center">
          <p className="max-w-2xl text-base leading-relaxed text-foreground/90 sm:text-lg md:text-xl">
            A table where two kitchens meet — Lebanese heritage and modern
            Australian brunch, plated slow and shared loud.
          </p>
        </div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="flex items-end justify-between">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-sm sm:tracking-[0.3em]">
            Est. Marrickville
          </span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
            }}
            className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-accent sm:text-sm sm:tracking-[0.3em]"
          >
            <span>Scroll</span>

            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}