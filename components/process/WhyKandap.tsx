import Image from "next/image";
import Reveal from "../animations/Reveal";
import { MillIcon, SparkIcon, HeartIcon, CycleIcon } from "../icons/SoilvaIcons";

const reasons = [
  { Icon: MillIcon, title: "Respect for the Spice", text: "A traditional-inspired process that treats grinding as a considered craft." },
  { Icon: SparkIcon, title: "Aroma & Character", text: "Designed to help preserve the familiar sensory character expected from the spice." },
  { Icon: CycleIcon, title: "Batch Consistency", text: "Defined steps make the process easier to repeat, review and improve." },
  { Icon: HeartIcon, title: "Rooted in Tradition", text: "A process inspired by the methods and food culture that shaped Indian kitchens." },
] as const;

export default function WhyKandap() {
  return (
    <section className="why-kandap about-section">
      <Reveal direction="right">
        <div className="why-kandap-image">
          <Image
            src="/assets/kandap-detail-art.jpg"
            alt="Traditional grinder with bowls of Indian spices"
            fill
            sizes="(max-width: 800px) 100vw, 40vw"
          />
        </div>
      </Reveal>

      <Reveal direction="left" delay={0.1}>
        <div className="why-kandap-copy">
          <span className="about-kicker">Why Kandap?</span>
          <h2>Why traditional-inspired grinding matters</h2>
          <p>
            Soilva’s Kandap philosophy is about respecting the raw ingredient,
            controlling each stage and creating a process that can be reviewed
            and improved as the brand grows.
          </p>

          <div className="why-kandap-grid">
            {reasons.map(({ Icon, title, text }) => (
              <article key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
