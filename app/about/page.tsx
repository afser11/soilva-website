import type { Metadata } from "next";
import Header from "../../components/Header";
import AboutHero from "../../components/about/AboutHero";
import StorySection from "../../components/about/StorySection";
import JourneyTimeline from "../../components/about/JourneyTimeline";
import PromiseCards from "../../components/about/PromiseCards";
import MissionVision from "../../components/about/MissionVision";
import CoreValues from "../../components/about/CoreValues";
import GrowingTogether from "../../components/about/GrowingTogether";
import AboutCTA from "../../components/about/AboutCTA";

export const metadata: Metadata = {
  title: "Our Story | From Soil to Soul | Soilva",
  description:
    "Discover the Soilva story, philosophy, mission, vision and journey from carefully selected spices to the family table.",
};

export default function AboutPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="about-page">
        <AboutHero />
        <StorySection />
        <JourneyTimeline />
        <PromiseCards />
        <MissionVision />
        <CoreValues />
        <GrowingTogether />
        <AboutCTA />
      </main>
    </div>
  );
}
