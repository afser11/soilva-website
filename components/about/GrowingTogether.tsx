import Reveal from "../animations/Reveal";
import { StaggerGroup, StaggerItem } from "../animations/Stagger";

const groups = [
  ["Farmers", "Respecting the people and knowledge behind every harvest."],
  ["Retailers", "Supporting local businesses with a brand built for long-term trust."],
  ["Distributors", "Creating transparent partnerships and opportunities to grow together."],
  ["Families", "Serving the kitchens where daily meals become lasting memories."],
] as const;

export default function GrowingTogether() {
  return (
    <section className="about-section growing-together">
      <Reveal direction="right">
        <div className="growing-copy">
          <span className="about-kicker">Looking ahead</span>
          <h2>Growth is meaningful when it is shared.</h2>
          <p>
            Soilva’s journey will be shaped by everyone connected to it—from the
            people who grow spices to the families who use them every day.
          </p>
        </div>
      </Reveal>

      <StaggerGroup className="growing-grid" stagger={0.11}>
        {groups.map(([title, text], index) => (
          <StaggerItem key={title}>
            <article className="premium-hover">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
