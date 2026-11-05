import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export function FAQ({ items, className = "" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={`faq-list ${className}`} role="region" aria-label="Perguntas frequentes">
      {items.map((item, index) => (
        <details
          key={index}
          className={`faq-item ${openIndex === index ? "open" : ""}`}
          open={openIndex === index}
          onToggle={() => toggle(index)}
        >
          <summary className="faq-question">
            <span>{item.question}</span>
            <ChevronDown className="faq-icon" aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            <div className="faq-answer-content">{item.answer}</div>
          </div>
        </details>
      ))}
    </div>
  );
}
