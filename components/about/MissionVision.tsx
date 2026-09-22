import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="approved-story-section" aria-labelledby="mission-vision-heading">
      <h2 id="mission-vision-heading" className="visually-hidden">
        Soilva mission and vision
      </h2>

      <div className="approved-story-image">
        <Image
          src="/assets/approved-mission-vision.jpg"
          alt="Soilva mission and vision: making trusted spices part of everyday cooking and growing into one of India’s most trusted spice brands"
          width={1327}
          height={589}
          sizes="(max-width: 900px) 100vw, 1327px"
          priority={false}
        />
      </div>

      <div className="visually-hidden">
        <section>
          <h3>Our Mission</h3>
          <p>
            Make trusted spices part of everyday cooking. To offer authentic,
            hygienically processed spices that respect their natural character,
            celebrate India’s culinary heritage and create lasting value for
            customers, partners and communities.
          </p>
        </section>
        <section>
          <h3>Our Vision</h3>
          <p>
            Grow into one of India’s most trusted spice brands by creating
            opportunity for farmers, retailers, distributors and families.
          </p>
        </section>
      </div>
    </section>
  );
}
