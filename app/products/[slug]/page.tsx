import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import ProductGallery from "../../../components/ProductGallery";
import ProductInfoPanel from "../../../components/ProductInfoPanel";
import TrustHighlights from "../../../components/TrustHighlights";
import ProductSpecs from "../../../components/ProductSpecs";
import RecommendedUses from "../../../components/RecommendedUses";
import FAQAccordion from "../../../components/FAQAccordion";
import RelatedProducts from "../../../components/RelatedProducts";
import ProductCTA from "../../../components/ProductCTA";
import { products } from "../../../data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) return {};

  return {
    title: `${product.name} | Soilva`,
    description: `${product.description} Discover ${product.name} from Soilva — From Soil to Soul.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const faqItems = [
    {
      question: "How should I store this product?",
      answer: "Keep the pouch tightly sealed and store it in a cool, dry place away from direct sunlight and moisture.",
    },
    {
      question: "Which pack sizes are available?",
      answer: `The currently planned pack sizes are ${product.sizes.join(", ")}. Availability may vary when commercial sales begin.`,
    },
    {
      question: "Is this suitable for everyday cooking?",
      answer: `${product.name} is intended for common everyday cooking applications. Suggested uses are shown on this page.`,
    },
    {
      question: "Where can I confirm ingredients and shelf life?",
      answer: "Ingredients, shelf life, MRP, nutrition and statutory details should be taken from the final approved product label. The website will be updated after verification.",
    },
  ] as const;

  return (
    <div className="site-shell">
      <Header />

      <main className="pd-page">
        <nav className="pd-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/#products">Products</Link>
          <span>/</span>
          <strong>{product.name}</strong>
        </nav>

        <section className="pd-hero">
          <ProductGallery
            productName={product.name}
            image={`/products/${product.slug}.jpg`}
            accent={product.accent}
          />
          <ProductInfoPanel
            name={product.name}
            category={product.category}
            description={product.description}
            sizes={product.sizes}
            accent={product.accent}
          />
        </section>

        <TrustHighlights items={product.highlights} />

        <section className="pd-section pd-story-section">
          <div className="pd-section-heading">
            <span>The product story</span>
            <h2>From careful selection to your kitchen</h2>
          </div>
          <div className="pd-story-card">
            <p>{product.story}</p>
            <blockquote>
              “Every spice should retain its natural aroma, authentic taste and traditional essence.”
            </blockquote>
          </div>
        </section>

        <ProductSpecs name={product.name} category={product.category} sizes={product.sizes} />
        <RecommendedUses items={product.uses} />

        <section className="pd-section">
          <div className="pd-section-heading">
            <span>Helpful answers</span>
            <h2>Frequently asked questions</h2>
          </div>
          <FAQAccordion items={faqItems} />
        </section>

        <RelatedProducts slugs={product.related} />
        <ProductCTA productName={product.name} />
      </main>
    </div>
  );
}
