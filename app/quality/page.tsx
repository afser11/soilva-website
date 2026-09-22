import type { Metadata } from "next";
import Header from "../../components/Header";
import QualityPageContent from "../../components/quality/QualityPageContent";

export const metadata: Metadata = {
  title: "Quality Standards and Process Controls | Soilva",
  description:
    "Learn how Soilva approaches raw-material review, cleaning, controlled processing, batch checks, packaging and traceability.",
};

export default function QualityPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="quality-page">
        <QualityPageContent />
      </main>
    </div>
  );
}
