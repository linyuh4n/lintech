import { SectionTitle } from "../components/SectionTitle";
import { ServiceCard } from "../components/ServiceCard";
import { serviceCategories, getServicesByCategory, type ServiceCategory } from "../config/services";
import { Monitor, MousePointer, Wrench } from "lucide-react";

const categoryIcons = {
  "digital-presence": Monitor,
  "software-development": MousePointer,
  "maintenance-support": Wrench,
};

export function ServicesSection() {
  return (
    <section id="servicos" className="section services-section" aria-labelledby="services-title">
      <div className="container">
        <SectionTitle
          label="NOSSOS SERVIÇOS"
          title="COMO PODEMOS AJUDAR SEU NEGÓCIO?"
          subtitle="Soluções digitais desenvolvidas de acordo com os objetivos da sua empresa."
        />

        {serviceCategories.map((category) => {
          const categoryServices = getServicesByCategory(category.id as ServiceCategory);
          const Icon = categoryIcons[category.id as keyof typeof categoryIcons];

          return (
            <div key={category.id} className="service-category" style={{ marginBottom: "var(--space-16)" }}>
              <header style={{ marginBottom: "var(--space-8)", textAlign: "center" }}>
                <div
                  className="service-icon"
                  style={{
                    margin: "0 auto var(--space-4)",
                    width: "56px",
                    height: "56px",
                    background: "var(--color-primary-glow)",
                  }}
                  aria-hidden="true"
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 style={{ fontSize: "var(--text-2xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-2)" }}>
                  {category.name}
                </h3>
                <p style={{ color: "var(--color-text-muted)", maxWidth: "600px", margin: "0 auto" }}>
                  {category.description}
                </p>
              </header>

              <div className="grid grid-3 gap-6 services-grid" role="list" aria-label={`${category.name} - Serviços`}>
                {categoryServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={{ ...service, icon: <Icon className="w-7 h-7" /> }}
                    featured={index === 0}
                  />
                ))}
              </div>
            </div>
          );
        })}

        <div style={{ textAlign: "center", marginTop: "var(--space-8)" }}>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
            Não encontrou o que procura? Todos os serviços funcionam mediante orçamento personalizado.
          </p>
          <a
            href="/contato"
            className="btn btn-primary btn-lg"
          >
            SOLICITAR ORÇAMENTO PERSONALIZADO
          </a>
        </div>
      </div>
    </section>
  );
}
