import { StaggerGroup, StaggerItem } from "../animations/Stagger";
import {
  SproutIcon, SparkIcon, TrustIcon, GlobeIcon,
  HomeIcon, BulbIcon, HeartIcon, CycleIcon,
} from "../icons/SoilvaIcons";

const values = [
  { Icon: SproutIcon, title: "Authenticity", text: "Respecting the natural character and origin of every spice." },
  { Icon: SparkIcon, title: "Quality", text: "Building consistency through defined processes and careful review." },
  { Icon: TrustIcon, title: "Trust", text: "Communicating honestly and delivering on our commitments." },
  { Icon: GlobeIcon, title: "Sustainability", text: "Making responsible choices as the business grows." },
  { Icon: HomeIcon, title: "Tradition", text: "Honouring the food culture and methods that inspire us." },
  { Icon: BulbIcon, title: "Innovation", text: "Improving products, packaging and customer experience." },
  { Icon: HeartIcon, title: "Care", text: "Respecting customers, partners, farmers and every batch." },
  { Icon: CycleIcon, title: "Continuous Improvement", text: "Learning, measuring and improving at every stage." },
] as const;

export default function CoreValues() {
  return (
    <section className="about-values">
      <StaggerGroup className="about-values-heading" stagger={0.08}>
        <StaggerItem><span className="about-kicker">Our core values</span></StaggerItem>
        <StaggerItem><h2>The principles that guide every decision.</h2></StaggerItem>
      </StaggerGroup>

      <StaggerGroup className="values-grid" stagger={0.075}>
        {values.map((value) => (
          <StaggerItem key={value.title}>
            <article className="value-card premium-hover">
              <strong><value.Icon /></strong>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
