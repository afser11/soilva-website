"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "../animations/Reveal";
import {
  SproutIcon, FarmerIcon, BasketIcon, DropletIcon, MillIcon,
  InspectIcon, PackageIcon, HomeIcon, FamilyIcon, SparkIcon,
} from "../icons/SoilvaIcons";

const steps = [
  { number: "01", Icon: SproutIcon, title: "Healthy Soil", text: "The journey begins where every spice takes root." },
  { number: "02", Icon: FarmerIcon, title: "Responsible Farmers", text: "Respect for the people whose work brings spices to life." },
  { number: "03", Icon: BasketIcon, title: "Careful Selection", text: "Raw spices are selected according to defined requirements." },
  { number: "04", Icon: DropletIcon, title: "Cleaning", text: "Dust and unwanted material are carefully removed." },
  { number: "05", Icon: MillIcon, title: "Kandap Grinding", text: "Traditional-inspired grinding supports authentic character." },
  { number: "06", Icon: InspectIcon, title: "Quality Review", text: "Appearance, aroma and consistency are reviewed batch by batch." },
  { number: "07", Icon: PackageIcon, title: "Food-Grade Packaging", text: "Products are packed thoughtfully for handling and storage." },
  { number: "08", Icon: HomeIcon, title: "Your Kitchen", text: "The spice reaches the place where everyday meals are created." },
  { number: "09", Icon: FamilyIcon, title: "Family Table", text: "Food brings people together and turns meals into memories." },
  { number: "10", Icon: SparkIcon, title: "Soul", text: "The journey is complete when flavour becomes connection." },
] as const;

export default function JourneyTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 55%", "end 72%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="about-journey" id="journey" ref={sectionRef}>
      <Reveal>
        <div className="about-journey-intro">
          <span className="about-kicker">The complete journey</span>
          <h2>Every stage deserves respect.</h2>
          <p>
            From the first seed to the final meal, Soilva’s philosophy connects
            origin, process, quality and human experience.
          </p>
        </div>
      </Reveal>

      <div className="journey-line" aria-hidden="true">
        <motion.span style={{ scaleY: reduceMotion ? 1 : lineScale }} />
      </div>

      <div className="journey-grid">
        {steps.map((step, index) => (
          <motion.article
            className={index % 2 === 0 ? "journey-card journey-left" : "journey-card journey-right"}
            key={step.title}
            initial={reduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -45 : 45, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reduceMotion ? 0 : 0.72, delay: reduceMotion ? 0 : 0.04, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduceMotion ? undefined : { y: index % 2 === 0 ? -5 : 60 }}
          >
            <motion.div
              className="journey-marker"
              initial={reduceMotion ? false : { scale: 0.6 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.2 }}
            >
              <step.Icon />
            </motion.div>
            <div className="journey-copy">
              <small>{step.number}</small>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
