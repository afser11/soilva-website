import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://soilva.in"),
  title: {
    default: "Soilva — From Soil to Soul",
    template: "%s | Soilva",
  },
  description:
    "Soilva offers carefully selected Indian spices, traditionally processed and thoughtfully packed. From Soil to Soul.",
  openGraph: {
    title: "Soilva — From Soil to Soul",
    description: "Pure spices, rooted in tradition.",
    url: "https://soilva.in",
    siteName: "Soilva",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
