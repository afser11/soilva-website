import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ProductShowcase() {
  return (
    <section className="real-products-section" id="products">
      <div className="real-products-heading">
        <span>Our Products</span>
        <h2>Premium Indian spices, crafted with care</h2>
        <p>
          Explore Soilva’s growing range of ground spices and blended masalas.
          Every product name, pack size and description is now real website text,
          so it remains clear on desktop and mobile.
        </p>
      </div>

      <div className="real-products-grid">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
