"use client";

import { useState } from "react";

type Props = {
  productName: string;
  image: string;
  accent: string;
};

export default function ProductGallery({ productName, image, accent }: Props) {
  const [activeLabel, setActiveLabel] = useState("Front");

  const gallery = [
    { label: "Front", image },
    { label: "Pack View", image },
    { label: "Detail", image },
    { label: "Close-up", image },
  ];

  const active = gallery.find((item) => item.label === activeLabel) ?? gallery[0];

  return (
    <section className="pd-gallery" aria-label={`${productName} image gallery`}>
      <div className="pd-main-image" style={{ "--product-accent": accent } as React.CSSProperties}>
        <img src={active.image} alt={`${productName} ${active.label.toLowerCase()} view`} />
        <span className="pd-image-badge">{active.label}</span>
      </div>

      <div className="pd-thumbnails" role="list" aria-label="Product image views">
        {gallery.map((item) => (
          <button
            type="button"
            key={item.label}
            className={activeLabel === item.label ? "pd-thumb is-active" : "pd-thumb"}
            onClick={() => setActiveLabel(item.label)}
            aria-pressed={activeLabel === item.label}
          >
            <img src={item.image} alt="" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <p className="pd-gallery-note">
        Front image is available now. Back, angled and close-up photographs can be added later without changing this layout.
      </p>
    </section>
  );
}
