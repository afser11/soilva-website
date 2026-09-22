import { StaggerGroup, StaggerItem } from "../animations/Stagger";

const promises = [
  { number: "01", title: "Authentic Character", text: "Spices should bring their familiar colour, aroma and flavour to everyday cooking." },
  { number: "02", title: "Thoughtful Processing", text: "Each stage is approached with care, from raw-spice selection to grinding and packing." },
  { number: "03", title: "Everyday Trust", text: "We aim to build dependable quality and honest communication over the long term." },
] as const;

export default function PromiseCards() {
  return (
    <section className="about-section about-promise">
      <StaggerGroup className="about-section-heading" stagger={0.08}>
        <StaggerItem><span className="about-kicker">Our promise</span></StaggerItem>
        <StaggerItem><h2>Care that can be felt in every meal.</h2></StaggerItem>
      </StaggerGroup>

      <StaggerGroup className="promise-grid" stagger={0.12}>
        {promises.map((promise) => (
          <StaggerItem key={promise.title}>
            <article className="promise-card premium-hover">
              <span>{promise.number}</span>
              <h3>{promise.title}</h3>
              <p>{promise.text}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <StaggerGroup delay={0.15}>
        <StaggerItem>
          <p className="about-compliance-note">
            Soilva avoids unsupported purity, health or certification claims.
            Product information will always be updated according to verified labels,
            testing and applicable regulations.
          </p>
        </StaggerItem>
      </StaggerGroup>
    </section>
  );
}
