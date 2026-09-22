const icons = ["✦", "◈", "◎", "□", "♡", "◆"];

export default function TrustHighlights({ items }: { items: readonly string[] }) {
  return (
    <section className="pd-section pd-trust-section">
      <div className="pd-section-heading">
        <span>Product highlights</span>
        <h2>Crafted around trust and care</h2>
      </div>
      <div className="pd-trust-grid">
        {items.map((item, index) => (
          <article className="pd-trust-card" key={item}>
            <strong aria-hidden="true">{icons[index % icons.length]}</strong>
            <h3>{item}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
