export default function RecommendedUses({ items }: { items: readonly string[] }) {
  return (
    <section className="pd-section">
      <div className="pd-section-heading">
        <span>In your kitchen</span>
        <h2>Recommended uses</h2>
      </div>
      <div className="pd-use-grid">
        {items.map((item, index) => (
          <article className="pd-use-card" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
