"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../animations/Reveal";

export default function AboutCTA() {
  const reduceMotion = useReducedMotion();
  const message = encodeURIComponent(
    "Hello Soilva, I would like to know more about your products and brand."
  );

  return (
    <section className="about-final-cta">
      <motion.div
        className="about-final-ring"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      />
      <Reveal>
        <div className="about-final-content">
          <span>From Soil to Soul</span>
          <h2>Because every great meal begins with ingredients people can trust.</h2>
          <p>
            Discover Soilva products or speak with us about retail, distribution
            and partnership opportunities.
          </p>
          <div>
            <Link href="/#products" className="shine-button"><span>Explore products</span></Link>
            <a
              href={`https://wa.me/919891985126?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shine-button"
            >
              <span>Talk to Soilva</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
