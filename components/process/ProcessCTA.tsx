import Link from "next/link";

export default function ProcessCTA() {
  const message = encodeURIComponent(
    "Hello Soilva, I would like to know more about your Kandap-ground spices."
  );

  return (
    <section className="process-cta">
      <span className="about-kicker">From Soil to Soul</span>
      <h2>Discover spices shaped by care at every stage.</h2>
      <p>Explore the Soilva range or speak with us about retail and distribution.</p>
      <div>
        <Link href="/#products" className="shine-button"><span>Explore products</span></Link>
        <a href={`https://wa.me/919891985126?text=${message}`} target="_blank" rel="noopener noreferrer" className="shine-button"><span>Talk to Soilva</span></a>
      </div>
    </section>
  );
}
