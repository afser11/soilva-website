"use client";

import { FormEvent, useState } from "react";
import { FamilyIcon, TrustIcon, FarmerIcon } from "../icons/SoilvaIcons";

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const subject = String(form.get("subject") || "");
    const message = String(form.get("message") || "");

    const text = encodeURIComponent(
      `Hello Soilva,\nName: ${name}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`
    );

    window.open(`https://wa.me/919891985126?text=${text}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <>
      <section className="contact-hero">
        <span className="about-kicker">Let’s connect</span>
        <h1>Questions, partnerships or product enquiries?</h1>
        <p>
          Speak with Soilva about products, retail supply, distribution or the
          story behind our spices.
        </p>
      </section>

      <section className="contact-main">
        <div className="contact-details">
          <span className="about-kicker">Contact Soilva</span>
          <h2>We would be glad to hear from you.</h2>
          <p>
            Choose the most convenient way to contact us. Distributor and retail
            enquiries are welcome.
          </p>

          <div className="contact-detail-grid">
            <a href="https://wa.me/919891985126" target="_blank" rel="noopener noreferrer">
              <FamilyIcon />
              <div><strong>WhatsApp</strong><span>+91 98919 85126</span></div>
            </a>
            <a href="tel:+919560216252">
              <TrustIcon />
              <div><strong>Call Soilva</strong><span>+91 95602 16252</span></div>
            </a>
            <a href="mailto:hello@soilva.in">
              <FarmerIcon />
              <div><strong>Email</strong><span>hello@soilva.in</span></div>
            </a>
          </div>

          <div className="contact-hours">
            <strong>Business enquiries</strong>
            <p>Monday to Saturday · 9:30 AM to 6:30 PM</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <span className="about-kicker">Send an enquiry</span>
          <h2>Tell us how we can help.</h2>

          <label>
            Your name
            <input name="name" type="text" required placeholder="Enter your name" />
          </label>

          <label>
            Phone number
            <input name="phone" type="tel" required placeholder="+91" />
          </label>

          <label>
            Enquiry type
            <select name="subject" required defaultValue="">
              <option value="" disabled>Select an enquiry type</option>
              <option>Product enquiry</option>
              <option>Retail enquiry</option>
              <option>Distributor enquiry</option>
              <option>Recipe request</option>
              <option>General enquiry</option>
            </select>
          </label>

          <label>
            Message
            <textarea name="message" rows={5} required placeholder="Write your message"></textarea>
          </label>

          <button type="submit">Continue on WhatsApp</button>
          {submitted && (
            <p className="contact-success">
              Your WhatsApp message has been prepared in a new window.
            </p>
          )}
        </form>
      </section>

      <section className="contact-partner">
        <span className="about-kicker">Grow with Soilva</span>
        <h2>Interested in becoming a distributor?</h2>
        <p>
          Share your location, business type and market coverage through the
          enquiry form. Our team can then review the opportunity.
        </p>
        <a href="https://wa.me/919891985126?text=Hello%20Soilva%2C%20I%20am%20interested%20in%20becoming%20a%20distributor.">
          Start distributor enquiry
        </a>
      </section>
    </>
  );
}
