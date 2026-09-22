import Link from "next/link";
import { TrustIcon, PackageIcon, FamilyIcon, InspectIcon, CycleIcon, GlobeIcon } from "../icons/SoilvaIcons";

const sections = [
  { Icon: FamilyIcon, title: "Frequently Asked Questions", text: "Answers about products, storage, Kandap grinding, availability and partnerships.", href: "/faq", action: "Read FAQs" },
  { Icon: TrustIcon, title: "Privacy Policy", text: "How Soilva may use information submitted through enquiries and applications.", href: "/privacy", action: "Read privacy policy" },
  { Icon: InspectIcon, title: "Terms of Use", text: "Important conditions for using the website, product information and business content.", href: "/terms", action: "Read terms" },
  { Icon: PackageIcon, title: "Shipping & Returns", text: "Draft delivery, damaged-product, replacement and return guidance.", href: "/shipping-returns", action: "Read policy" },
  { Icon: CycleIcon, title: "Product & Quality Enquiries", text: "Ask about product information, packaging, quality controls or process details.", href: "/contact", action: "Contact Soilva" },
  { Icon: GlobeIcon, title: "Distributor Support", text: "Learn about eligibility, territory review and the distributor application process.", href: "/distributor", action: "View programme" },
] as const;

export default function SupportCenter() {
  return <>
    <section className="support-hero">
      <div className="support-hero-index">S / 01</div>
      <div><span className="about-kicker">Soilva Support</span><h1>Everything important, in one place.</h1><p>You do not need to type separate page addresses. Use this Support Centre—or the footer links—to open FAQs, policies, contact support and distributor information.</p></div>
    </section>
    <section className="support-grid">
      {sections.map(({ Icon, title, text, href, action }, index) => <article key={href}><div className="support-card-top"><span>{String(index + 1).padStart(2, "0")}</span><Icon /></div><h2>{title}</h2><p>{text}</p><Link href={href}>{action} <b>↗</b></Link></article>)}
    </section>
    <section className="support-contact-band"><div><span className="about-kicker">Need direct help?</span><h2>Talk to Soilva.</h2></div><div className="support-contact-actions"><a href="https://wa.me/919891985126" target="_blank" rel="noopener noreferrer">WhatsApp</a><a href="tel:+919560216252">Call now</a><a href="mailto:hello@soilva.in">Email Soilva</a></div></section>
  </>;
}
