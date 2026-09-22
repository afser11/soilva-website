import Reveal from "../animations/Reveal";

export default function StorySection() {
  return (
    <section className="about-section about-story">
      <Reveal><div className="about-section-label">Why Soilva exists</div></Reveal>

      <div className="about-story-grid">
        <Reveal direction="right">
          <div>
            <h2>Spices carry more than flavour.</h2>
            <p className="about-large-copy">
              They carry the story of the land, the work of farmers and the
              traditions passed from one kitchen to another.
            </p>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <div className="about-story-copy">
            <p>
              India has always been known as the land of spices. Yet many
              customers now worry about adulteration, artificial colour,
              inconsistent quality and the loss of natural aroma.
            </p>
            <p>
              Soilva was created with a simple purpose: to bring care,
              transparency and dependable quality back into everyday spices.
              We are not building another packet on a shelf. We are building a
              brand that respects every step before a spice reaches your kitchen.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <div className="about-belief-card premium-hover">
          <span>Our belief</span>
          <blockquote>
            “We are not simply selling spices. We are helping rebuild trust in
            every kitchen.”
          </blockquote>
        </div>
      </Reveal>
    </section>
  );
}
