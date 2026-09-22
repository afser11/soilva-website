"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import HeroMotion, { HeroItem } from "../animations/HeroMotion";
import { MillIcon, TrustIcon, SproutIcon } from "../icons/SoilvaIcons";

export default function ProcessHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="process-hero">
      <div className="process-hero-image">
        <Image
          src="/assets/kandap-hero-art.jpg"
          alt="Traditional Kandap grinder surrounded by Indian spices"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="process-hero-overlay"></div>

      <motion.div
        className="process-hero-ring"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      />

      <HeroMotion className="process-hero-content">
        <HeroItem><span className="about-kicker">Our tradition. Your trust.</span></HeroItem>
        <HeroItem><h1>The Traditional <em>Kandap Process</em></h1></HeroItem>
        <HeroItem>
          <h2>Slow, considered and rooted in craft.</h2>
        </HeroItem>
        <HeroItem>
          <p>
            Follow the Soilva journey from carefully selected raw spices to
            grinding, review and food-grade packaging.
          </p>
        </HeroItem>
        <HeroItem>
          <div className="process-hero-actions">
            <a href="#process-journey" className="about-button about-button-gold"><span>Explore the process</span></a>
            <Link href="/#products" className="about-button about-button-outline"><span>View products</span></Link>
          </div>
        </HeroItem>
        <HeroItem>
          <div className="process-hero-trust">
            <div><SproutIcon /><span>Careful selection</span></div>
            <div><MillIcon /><span>Traditional-inspired grinding</span></div>
            <div><TrustIcon /><span>Batch review</span></div>
          </div>
        </HeroItem>
      </HeroMotion>
    </section>
  );
}
