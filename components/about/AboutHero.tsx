"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import HeroMotion, { HeroItem } from "../animations/HeroMotion";

export default function AboutHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="about-hero">
      <motion.div
        className="about-hero-orbit orbit-one"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="about-hero-orbit orbit-two"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 64, repeat: Infinity, ease: "linear" }}
      />
      <span className="organic-seed seed-one" aria-hidden="true"></span>
      <span className="organic-seed seed-two" aria-hidden="true"></span>
      <span className="organic-leaf leaf-one" aria-hidden="true"></span>

      <HeroMotion className="about-hero-content">
        <HeroItem><span className="about-kicker">The Soilva Story</span></HeroItem>
        <HeroItem>
          <h1>
            From Soil
            <em>to Soul</em>
          </h1>
        </HeroItem>
        <HeroItem>
          <p>
            Every great meal begins with ingredients people can trust. Soilva
            honours the journey of spices—from the earth where they grow to the
            meals and memories they help create.
          </p>
        </HeroItem>
        <HeroItem>
          <div className="about-hero-actions">
            <a href="#journey" className="about-button about-button-gold">
              <span>Follow the journey</span>
            </a>
            <Link href="/#products" className="about-button about-button-outline">
              <span>Explore products</span>
            </Link>
          </div>
        </HeroItem>
      </HeroMotion>

      <motion.div
        className="about-hero-seal"
        aria-label="Soilva brand philosophy"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.82, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 4 }}
        transition={{ delay: reduceMotion ? 0 : 0.7, duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
        whileHover={reduceMotion ? undefined : { scale: 1.035, rotate: 0 }}
      >
        <span>Rooted in</span>
        <strong>Trust</strong>
        <small>Crafted with care</small>
      </motion.div>
    </section>
  );
}
