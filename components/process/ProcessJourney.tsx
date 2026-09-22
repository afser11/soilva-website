"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  SproutIcon, DropletIcon, SortIcon, MillIcon,
  InspectIcon, PackageIcon, BowlIcon,
} from "../icons/SoilvaIcons";

const stages = [
  { Icon: SproutIcon, title: "Raw Spices", text: "The process begins with carefully selected whole spices suited to the intended product." },
  { Icon: DropletIcon, title: "Cleaning", text: "Dust and unwanted material are removed before further processing." },
  { Icon: SortIcon, title: "Sorting", text: "Spices are checked and sorted to support a consistent batch." },
  { Icon: MillIcon, title: "Kandap Grinding", text: "The selected spices are ground using a traditional-inspired Kandap process." },
  { Icon: InspectIcon, title: "Quality Review", text: "Appearance, aroma, texture and batch consistency are reviewed." },
  { Icon: PackageIcon, title: "Packaging", text: "The finished spice is packed in suitable food-grade packaging." },
  { Icon: BowlIcon, title: "Your Kitchen", text: "The journey ends where flavour becomes part of everyday meals." },
] as const;

export default function ProcessJourney() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 70%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="process-journey" id="process-journey" ref={ref}>
      <div className="process-heading">
        <span className="about-kicker">From soil to soul</span>
        <h2>The Soilva Kandap journey</h2>
        <p>Each stage is approached with care, clarity and respect for the spice.</p>
      </div>

      <div className="process-progress" aria-hidden="true">
        <motion.span style={{ scaleX: reduceMotion ? 1 : scaleX }} />
      </div>

      <div className="process-stage-grid">
        {stages.map((stage, index) => (
          <motion.article
            key={stage.title}
            className={index === 3 ? "process-stage featured" : "process-stage"}
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: reduceMotion ? 0 : index * 0.05, duration: reduceMotion ? 0 : 0.65 }}
          >
            <span className="stage-number">{index + 1}</span>
            <div className="stage-icon"><stage.Icon /></div>
            <h3>{stage.title}</h3>
            <p>{stage.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
