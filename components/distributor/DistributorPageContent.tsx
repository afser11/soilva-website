"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  TrustIcon,
  PackageIcon,
  CycleIcon,
  GlobeIcon,
  FarmerIcon,
  FamilyIcon,
} from "../icons/SoilvaIcons";

const metrics = [
  ["Product Range", "7 launch-ready spice categories"],
  ["Partner Model", "Territory-focused distribution"],
  ["Sales Support", "Digital catalogue and enquiry support"],
  ["Brand Position", "Premium, trust-led Indian spices"],
] as const;

const requirements = [
  "Relevant FMCG, food or grocery-market experience",
  "Established retailer or wholesale relationships",
  "Capacity for local stock handling and market servicing",
  "Commitment to approved pricing and brand presentation",
  "Willingness to share regular sales and market feedback",
] as const;

export default function DistributorPageContent() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = encodeURIComponent(
      [
        "Hello Soilva, I am applying for the distributor program.",
        `Name: ${form.get("name") || ""}`,
        `Phone: ${form.get("phone") || ""}`,
        `Business: ${form.get("business") || ""}`,
        `Market: ${form.get("market") || ""}`,
        `State: ${form.get("state") || ""}`,
        `Experience: ${form.get("experience") || ""}`,
        `Retail reach: ${form.get("reach") || ""}`,
        `Notes: ${form.get("notes") || ""}`,
      ].join("\n")
    );
    window.open(`https://wa.me/919891985126?text=${message}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <>
      <section className="commercial-hero">
        <div className="commercial-hero-topline">
          <span>Soilva Partner Network</span>
          <span>Distributor Programme · India</span>
        </div>

        <div className="commercial-hero-grid">
          <div className="commercial-hero-copy">
            <span className="about-kicker">Build your territory</span>
            <h1>A serious partnership for serious market builders.</h1>
            <p>
              Soilva is inviting experienced distributors, wholesalers and
              retail suppliers to help develop selected markets with a
              premium packaged-spice range.
            </p>
            <div>
              <a href="#partner-application">Apply for your market</a>
              <Link href="/#products">Review product range</Link>
            </div>
          </div>

          <aside className="commercial-summary-card">
            <span>Programme summary</span>
            <strong>Distribution Partnership</strong>
            <dl>
              <div><dt>Category</dt><dd>Packaged spices</dd></div>
              <div><dt>Model</dt><dd>Territory based</dd></div>
              <div><dt>Market</dt><dd>India</dd></div>
              <div><dt>Status</dt><dd>Applications open</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="commercial-metrics">
        {metrics.map(([title, text], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <strong>{title}</strong>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="commercial-opportunity">
        <div className="commercial-opportunity-copy">
          <span className="about-kicker">The opportunity</span>
          <h2>Develop a differentiated brand—not another undirected product line.</h2>
          <p>
            The Soilva proposition combines a premium visual identity, an
            origin-led brand story and a focused product range. The aim is to
            help partners build repeat retail demand through disciplined market
            development.
          </p>
        </div>

        <div className="commercial-pillars">
          <article><TrustIcon /><h3>Brand Clarity</h3><p>Consistent positioning, packaging and communication.</p></article>
          <article><PackageIcon /><h3>Focused Portfolio</h3><p>Core everyday spices designed for structured expansion.</p></article>
          <article><CycleIcon /><h3>Repeat Business</h3><p>A category built around frequent household consumption.</p></article>
          <article><GlobeIcon /><h3>Regional Growth</h3><p>A territory model that can scale market by market.</p></article>
        </div>
      </section>

      <section className="commercial-fit">
        <div className="commercial-fit-heading">
          <span className="about-kicker">Partner criteria</span>
          <h2>What Soilva will look for.</h2>
        </div>

        <div className="commercial-checklist">
          {requirements.map((requirement, index) => (
            <div key={requirement}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{requirement}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="commercial-workflow">
        <header>
          <span className="about-kicker">Application workflow</span>
          <h2>Four decisions before a market launch.</h2>
        </header>

        <div>
          <article><span>01</span><h3>Market Review</h3><p>Territory, population, retail structure and existing reach.</p></article>
          <article><span>02</span><h3>Capability Review</h3><p>Experience, infrastructure, sales team and working approach.</p></article>
          <article><span>03</span><h3>Commercial Discussion</h3><p>Product mix, margins, ordering expectations and launch plan.</p></article>
          <article><span>04</span><h3>Written Approval</h3><p>Final appointment only after mutually accepted written terms.</p></article>
        </div>
      </section>

      <section className="commercial-application" id="partner-application">
        <aside>
          <span className="about-kicker">Application form</span>
          <h2>Present your business clearly.</h2>
          <p>
            Strong applications explain the market, current retail reach,
            infrastructure and the applicant’s plan for developing Soilva.
          </p>
          <div className="commercial-contact-note">
            <FarmerIcon />
            <div><strong>For prepared applicants</strong><span>Complete the form and continue directly on WhatsApp.</span></div>
          </div>
          <div className="commercial-contact-note">
            <FamilyIcon />
            <div><strong>For initial discussions</strong><span>Use the Contact page for general questions before applying.</span></div>
          </div>
        </aside>

        <form onSubmit={handleSubmit}>
          <div className="commercial-form-row">
            <label>Contact person<input name="name" required placeholder="Full name" /></label>
            <label>Phone number<input name="phone" required placeholder="+91" /></label>
          </div>
          <label>Business name and type<input name="business" required placeholder="Example: FMCG distributor" /></label>
          <div className="commercial-form-row">
            <label>Primary market<input name="market" required placeholder="City / district" /></label>
            <label>State<input name="state" required placeholder="State" /></label>
          </div>
          <label>Relevant experience<select name="experience" required defaultValue="">
            <option value="" disabled>Select experience</option>
            <option>Less than 2 years</option>
            <option>2–5 years</option>
            <option>5–10 years</option>
            <option>More than 10 years</option>
          </select></label>
          <label>Current retail reach<textarea name="reach" rows={3} required placeholder="Retailers served, areas covered, team and infrastructure"></textarea></label>
          <label>Additional notes<textarea name="notes" rows={4} placeholder="Why are you interested in Soilva?"></textarea></label>
          <button type="submit">Submit through WhatsApp</button>
          {submitted && <p className="commercial-success">Your application message has been opened in WhatsApp.</p>}
        </form>
      </section>

      <section className="commercial-disclaimer">
        <strong>Appointment notice</strong>
        <p>
          An enquiry or application does not create dealership, exclusivity or
          commercial rights. All appointments require review, verification and
          a separate written agreement signed by authorised parties.
        </p>
      </section>
    </>
  );
}
