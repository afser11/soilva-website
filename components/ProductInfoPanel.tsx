type Props = {
  name: string;
  category: string;
  description: string;
  sizes: readonly string[];
  accent: string;
};

export default function ProductInfoPanel({ name, category, description, sizes, accent }: Props) {
  const productMessage = encodeURIComponent(`Hello Soilva, I want information about ${name}.`);
  const distributorMessage = encodeURIComponent(`Hello Soilva, I want distributor information for ${name}.`);

  return (
    <aside className="pd-info-panel" style={{ "--product-accent": accent } as React.CSSProperties}>
      <span className="pd-eyebrow">{category}</span>
      <h1>{name}</h1>
      <p className="pd-tagline">From Soil to Soul</p>
      <p className="pd-lead">{description}</p>

      <div className="pd-trust-strip">
        <span>Carefully selected</span>
        <span>Hygienically processed</span>
        <span>Crafted with care</span>
      </div>

      <div className="pd-size-block">
        <h2>Available pack sizes</h2>
        <div className="pd-size-list">
          {sizes.map((size) => <span key={size}>{size}</span>)}
        </div>
      </div>

      <div className="pd-primary-actions">
        <a href={`https://wa.me/919891985126?text=${productMessage}`} target="_blank" rel="noopener noreferrer">
          Enquire on WhatsApp
        </a>
        <a href={`https://wa.me/919891985126?text=${distributorMessage}`} target="_blank" rel="noopener noreferrer">
          Distributor enquiry
        </a>
      </div>

      <p className="pd-honesty-note">
        Product claims and statutory information will be updated only after verification against the approved label.
      </p>
    </aside>
  );
}
