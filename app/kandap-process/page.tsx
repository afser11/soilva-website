import type { Metadata } from "next";
import Header from "../../components/Header";
import ProcessHero from "../../components/process/ProcessHero";
import ProcessJourney from "../../components/process/ProcessJourney";
import WhyKandap from "../../components/process/WhyKandap";
import QualityPromise from "../../components/process/QualityPromise";
import ProcessCTA from "../../components/process/ProcessCTA";

export const metadata: Metadata = {
  title: "Traditional Kandap Process | Soilva",
  description:
    "Follow Soilva’s traditional-inspired Kandap journey from raw-spice selection and cleaning to grinding, quality review and packaging.",
};

export default function KandapProcessPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="process-page">
        <ProcessHero />
        <ProcessJourney />
        <WhyKandap />
        <QualityPromise />
        <ProcessCTA />
      </main>
    </div>
  );
}
