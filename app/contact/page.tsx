import type { Metadata } from "next";
import Header from "../../components/Header";
import ContactPageContent from "../../components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Soilva | Product and Distributor Enquiries",
  description:
    "Contact Soilva for product information, retail supply, distributor opportunities and general spice enquiries.",
};

export default function ContactPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="contact-page">
        <ContactPageContent />
      </main>
    </div>
  );
}
