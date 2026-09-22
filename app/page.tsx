import Header from "../components/Header";
import ProductShowcase from "../components/ProductShowcase";

export default function HomePage() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="approved-home-visual" id="home" aria-label="Soilva premium homepage hero">
          <img
            src="/assets/approved-home-hero.jpg"
            alt="Soilva From Soil to Soul premium homepage design"
          />
          <div className="approved-overlay-actions">
            <a className="hero-button primary-hero" href="#products">Explore Products</a>
            <a className="hero-button secondary-hero" href="#partner">Become Distributor</a>
          </div>
        </section>

        <section className="section intro" id="about">
          <div>
            <span className="eyebrow">OUR STORY</span>
            <h2>From fertile soil to the family table</h2>
            <p>
              Soilva was created with a simple belief: trusted food begins with
              trusted ingredients. Our name reflects the complete journey of a
              spice—from the earth where it grows to the meals and memories it
              helps create.
            </p>
            <p>
              We combine respect for traditional methods with a modern focus on
              quality, consistency and thoughtful packaging.
            </p>
            <a className="text-link" href="#process">
              Discover our process →
            </a>
          </div>

          <div className="quote-card">
            <p>
              “Every pack represents our promise to deliver authentic flavour
              with honesty and care.”
            </p>
            <strong>From Soil to Soul</strong>
          </div>
        </section>

        <ProductShowcase />

        <section className="section process" id="process">
          <div className="process-image">
            <img
              src="/assets/kandap-process-clean.jpg"
              alt="Traditional Kandap spice grinding illustration"
            />
          </div>

          <div>
            <span className="eyebrow">OUR PROCESS</span>
            <h2>A careful journey at every stage</h2>
            <ol className="steps">
              <li>
                <b>01</b>
                <span>
                  <strong>Sourcing</strong>
                  Spices selected according to defined quality requirements.
                </span>
              </li>
              <li>
                <b>02</b>
                <span>
                  <strong>Cleaning</strong>
                  Dust and unwanted material are carefully removed.
                </span>
              </li>
              <li>
                <b>03</b>
                <span>
                  <strong>Grinding</strong>
                  Traditional Kandap-inspired processing supports authentic
                  character.
                </span>
              </li>
              <li>
                <b>04</b>
                <span>
                  <strong>Quality Check</strong>
                  Batches are reviewed for appearance, aroma and consistency.
                </span>
              </li>
              <li>
                <b>05</b>
                <span>
                  <strong>Packing</strong>
                  Products are packed and batch-coded before dispatch.
                </span>
              </li>
            </ol>
          </div>
        </section>

        <section className="partner" id="partner">
          <span className="eyebrow light">PARTNER WITH SOILVA</span>
          <h2>Grow with a brand rooted in trust</h2>
          <p>
            We welcome enquiries from retailers, distributors, restaurants and
            bulk buyers.
          </p>
          <a className="button cream" href="#contact">
            Send a Partnership Enquiry
          </a>
        </section>

        <section className="section contact" id="contact">
          <div>
            <span className="eyebrow">CONTACT</span>
            <h2>Let’s start a conversation</h2>
            <p>
              Contact Soilva for customer, retailer, distributor or bulk-order
              enquiries.
            </p>
            <div className="contact-list">
              <p>
                <strong>Primary WhatsApp</strong>
                <br />
                +91 98919 85126
              </p>
              <p>
                <strong>Secondary Contact</strong>
                <br />
                +91 95602 16252
              </p>
              <p>
                <strong>Email</strong>
                <br />
                soilvaspices@gmail.com
              </p>
              <p>
                <strong>Location</strong>
                <br />
                Faridabad, Haryana, India
              </p>
            </div>
          </div>

          <form
            action="https://formsubmit.co/soilvaspices@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Soilva Website Enquiry"
            />
            <input type="hidden" name="_captcha" value="false" />

            <label>
              Name
              <input name="name" required />
            </label>

            <label>
              Phone
              <input name="phone" inputMode="tel" required />
            </label>

            <label>
              Enquiry Type
              <select name="type" defaultValue="Customer enquiry">
                <option>Customer enquiry</option>
                <option>Retailer enquiry</option>
                <option>Distributor enquiry</option>
                <option>Bulk order</option>
              </select>
            </label>

            <label>
              Message
              <textarea name="message" rows={5} required />
            </label>

            <button className="button primary" type="submit">
              Send Enquiry
            </button>
          </form>
        </section>
      
      
      </main>
    </div>
  );
}
