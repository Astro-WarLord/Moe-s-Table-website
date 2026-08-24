import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function Hero({ image }) {
  const { scrollYProgress } = useScroll();
  const imgScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 flex justify-between px-[5vw]">
        <div className="h-full w-px bg-foreground/10" />
        <div className="h-full w-px bg-foreground/10" />
        <div className="h-full w-px bg-foreground/10" />
        <div className="h-full w-px bg-foreground/10" />
      </div>

      <motion.div style={{ scale: imgScale }} className="absolute inset-0">
        <Image
          src={image}
          alt="Middle Eastern and Australian fusion brunch spread"
          fittingType="fill"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col justify-between px-[5vw] py-[6vh]">
        {/* Top Row - Slightly increased font */}
        <div className="flex items-start justify-between text-sm uppercase tracking-[0.3em] text-muted-foreground">
          <span>Marrickville · Sydney</span>
          <span>Brunch · Coffee · Good Company</span>
        </div>

        {/* Centered description - BIGGER FONT */}
        <div className="flex flex-col items-center justify-center text-center">
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/90 md:text-xl">
            A table where two kitchens meet — Lebanese heritage and modern
            Australian brunch, plated slow and shared loud.
          </p>
        </div>

        <div className="flex items-end justify-between">
          {/* Slightly increased font */}
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Est. Marrickville
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
            className="flex flex-col items-center gap-2 text-sm uppercase tracking-[0.3em] text-accent"
          >
            <span>Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}