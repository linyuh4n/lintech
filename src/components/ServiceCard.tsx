import { Service } from "../config/services";
import { Button } from "./Button";
import { openWhatsApp, buildServiceMessage } from "../lib/whatsapp";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const handleClick = () => {
    openWhatsApp(buildServiceMessage(service.id));
  };

  return (
    <article
      className={`service-card ${featured ? "featured" : ""}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      role="button"
      aria-label={`Saiba mais sobre ${service.name}`}
    >
      <div className="service-icon" aria-hidden="true">
        {service.icon}
      </div>
      <h3 className="service-title">{service.name}</h3>
      <p className="service-description">{service.description}</p>
      <ul className="service-features" aria-label="Funcionalidades">
        {service.features.slice(0, 5).map((feature, index) => (
          <li key={index} className="service-feature">
            <span aria-hidden="true">✓</span>
            {feature}
          </li>
        ))}
        {service.features.length > 5 && (
          <li className="service-feature">
            <span aria-hidden="true">✓</span>
            E mais {service.features.length - 5} funcionalidades...
          </li>
        )}
      </ul>
      <Button
        variant="primary"
        fullWidth
        onClick={handleClick}
        icon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
        iconPosition="right"
      >
        {service.ctaText}
      </Button>
    </article>
  );
}
