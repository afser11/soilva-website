type Props = {
  name: string;
  category: string;
  sizes: readonly string[];
};

export default function ProductSpecs({ name, category, sizes }: Props) {
  const specifications = [
    ["Brand", "Soilva"],
    ["Product", name],
    ["Category", category],
    ["Available pack sizes", sizes.join(" / ")],
    ["Country of origin", "India"],
    ["Packaging", "Food-grade pouch"],
    ["Storage", "Store in a cool, dry place away from direct sunlight"],
    ["Shelf life", "To be confirmed after testing and label approval"],
  ];

  return (
    <section className="pd-section pd-spec-section">
      <div className="pd-section-heading">
        <span>Product details</span>
        <h2>Specifications</h2>
      </div>
      <div className="pd-spec-table" role="table" aria-label={`${name} specifications`}>
        {specifications.map(([label, value]) => (
          <div className="pd-spec-row" role="row" key={label}>
            <strong role="rowheader">{label}</strong>
            <span role="cell">{value}</span>
          </div>
        ))}
      </div>
      <p className="pd-verification-note">
        Final MRP, ingredients, nutrition, manufacturer details, FSSAI information and shelf life must match the approved product label before publication.
      </p>
    </section>
  );
}
