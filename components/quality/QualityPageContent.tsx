import Link from "next/link";
import {
  InspectIcon,
  DropletIcon,
  PackageIcon,
  TrustIcon,
  CycleIcon,
  SproutIcon,
} from "../icons/SoilvaIcons";

const controls = [
  ["01", "Raw Material Review", "Whole spices are reviewed against defined visual, aroma and acceptance requirements."],
  ["02", "Cleaning & Sorting", "Dust, foreign material and unsuitable pieces are removed before grinding."],
  ["03", "Controlled Processing", "Production follows documented stages for cleaning, grinding, handling and packing."],
  ["04", "In-Process Checks", "Appearance, aroma, texture and batch consistency are reviewed during production."],
  ["05", "Packaging Review", "Pouches, seals, coding and label information are checked before release."],
  ["06", "Batch Records", "Production and packing information is recorded to support traceability and investigation."],
] as const;

export default function QualityPageContent() {
  return (
    <>
      <section className="quality-editorial-hero">
        <div className="quality-number">Q / 01</div>
        <div>
          <span className="about-kicker">Quality at Soilva</span>
          <h1>Trust is not a slogan. It is a system of checks.</h1>
          <p>
            Soilva’s quality approach is built around defined inputs,
            repeatable processing, batch-level review and honest product
            communication.
          </p>
        </div>
        <aside>
          <strong>Our principle</strong>
          <p>Say only what can be verified. Record what was done. Improve what can be improved.</p>
        </aside>
      </section>

      <section className="quality-control-map">
        <header>
          <span className="about-kicker">The control map</span>
          <h2>Six points where quality is protected.</h2>
        </header>
        <div>
          {controls.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quality-evidence">
        <div className="quality-evidence-copy">
          <span className="about-kicker">Evidence before claims</span>
          <h2>Every statement should be supported by the right record.</h2>
          <p>
            Product labels, website copy and sales material should reflect
            verified specifications, applicable licences, approved laboratory
            reports and actual production practices.
          </p>
        </div>
        <div className="quality-evidence-grid">
          <article><InspectIcon /><strong>Inspection records</strong><span>Incoming and in-process observations</span></article>
          <article><DropletIcon /><strong>Moisture checks</strong><span>Where required by product specification</span></article>
          <article><PackageIcon /><strong>Packing records</strong><span>Pack, seal, coding and quantity review</span></article>
          <article><TrustIcon /><strong>Approved claims</strong><span>Only verified statements used publicly</span></article>
          <article><CycleIcon /><strong>Corrective action</strong><span>Issues recorded, reviewed and prevented</span></article>
          <article><SproutIcon /><strong>Supplier records</strong><span>Source and incoming material documentation</span></article>
        </div>
      </section>

      <section className="quality-transparency">
        <div>
          <span>What Soilva can communicate now</span>
          <ul>
            <li>Traditional-inspired Kandap grinding process</li>
            <li>Defined cleaning, processing and packaging steps</li>
            <li>Food-grade packaging where verified and used</li>
            <li>Batch-level production and packing records</li>
          </ul>
        </div>
        <div>
          <span>What requires verification before use</span>
          <ul>
            <li>“100% pure” or “zero adulteration” claims</li>
            <li>Health, medical or nutritional benefit claims</li>
            <li>“Chemical-free” or “preservative-free” claims</li>
            <li>Laboratory-tested or certification logos</li>
          </ul>
        </div>
      </section>

      <section className="quality-cta">
        <h2>Quality information should be clear, specific and honest.</h2>
        <p>Explore the Kandap process or contact Soilva with a product-quality enquiry.</p>
        <div>
          <Link href="/kandap-process">View the process</Link>
          <Link href="/contact">Contact Soilva</Link>
        </div>
      </section>
    </>
  );
}
