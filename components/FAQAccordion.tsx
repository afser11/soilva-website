"use client";

import { useState } from "react";

type FAQ = { question: string; answer: string };

export default function FAQAccordion({ items }: { items: readonly FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pd-faq-list">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <article className={open ? "pd-faq-item is-open" : "pd-faq-item"} key={item.question}>
            <button
              type="button"
              className="pd-faq-question"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
            >
              <span>{item.question}</span>
              <span aria-hidden="true">{open ? "−" : "+"}</span>
            </button>
            {open && <p className="pd-faq-answer">{item.answer}</p>}
          </article>
        );
      })}
    </div>
  );
}
