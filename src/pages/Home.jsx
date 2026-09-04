import React from "react";
import Nav from "@/components/cafe/Nav";
import Hero from "@/components/cafe/Hero";
import MenuGallery from "@/components/cafe/MenuGallery";
import Terroir from "@/components/cafe/Terroir";
import Counter from "@/components/cafe/Counter";
import SiteFooter from "@/components/cafe/SiteFooter";

import HERO from "@/components/cafe/images/landingpage.jpg";
import INTERIOR from "@/components/cafe/images/cafe_vibe.jpg";

const PANTRY = "https://media.base44.com/images/public/6a8bb59a69323f7d755d92bf/27970fc38_generated_image.png";

export default function Home() {
  return (
    <div id="top" className="grain min-h-screen bg-background text-foreground">
      <Nav />
      <Hero image={HERO} />
      <MenuGallery />
      <Terroir image={PANTRY} />
      <Counter image={INTERIOR} />
      <SiteFooter />
    </div>
  );
}