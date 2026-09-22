import Link from "next/link";
import { products } from "../data/products";

export default function RelatedProducts({ slugs }: { slugs: readonly string[] }) {
  const related = products.filter((product) => slugs.includes(product.slug));

  return (
    <section className="pd-section">
      <div className="pd-section-heading pd-heading-row">
        <div>
          <span>Explore more</span>
          <h2>You may also like</h2>
        </div>
        <Link href="/#products" className="pd-text-link">View all products →</Link>
      </div>

      <div className="pd-related-grid">
        {related.map((product) => (
          <Link className="pd-related-card" href={`/products/${product.slug}`} key={product.slug}>
            <div className="pd-related-image">
              <img src={`/products/${product.slug}.jpg`} alt={`${product.name} Soilva pack`} />
            </div>
            <span>{product.category}</span>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
