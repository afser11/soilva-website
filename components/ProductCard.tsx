import Link from "next/link";

type Product = {
  slug: string;
  name: string;
  description: string;
  sizes: readonly string[];
  accent: string;
  category: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const message = encodeURIComponent(`Hello Soilva, I want information about ${product.name}.`);

  return (
    <article
      className="real-product-card"
      style={{ "--accent": product.accent } as React.CSSProperties}
    >
      <Link className="product-image-wrap" href={`/products/${product.slug}`}>
        <img
          src={`/products/${product.slug}.jpg`}
          alt={`${product.name} Soilva pack`}
          width={600}
          height={820}
          loading="lazy"
          decoding="async"
        />
      </Link>

      <div className="product-card-content">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-sizes">
          {product.sizes.map((size) => <span key={size}>{size}</span>)}
        </div>

        <div className="product-card-actions">
          <Link className="product-view-button" href={`/products/${product.slug}`}>
            View Product
          </Link>
          <a
            className="product-whatsapp-button"
            href={`https://wa.me/919891985126?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
