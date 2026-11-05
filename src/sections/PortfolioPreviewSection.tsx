import { Link } from "react-router-dom";
import { SectionTitle } from "../components/SectionTitle";
import { ProjectCard } from "../components/ProjectCard";
import { getFeaturedProjects } from "../config/portfolio";
import { ArrowRight } from "lucide-react";

export function PortfolioPreviewSection() {
  const featuredProjects = getFeaturedProjects(3);

  if (featuredProjects.length === 0) {
    return (
      <section id="portfolio-preview" className="section portfolio-preview-section" aria-labelledby="portfolio-preview-title">
        <div className="container">
          <SectionTitle
            label="PORTFÓLIO"
            title="PROJETOS QUE TRANSFORMAM IDEIAS EM REALIDADE."
            subtitle="Conheça alguns dos projetos desenvolvidos pela LIN TECH."
          />
          <div className="card" style={{ textAlign: "center", padding: "var(--space-16)" }}>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
              Nenhum projeto cadastrado ainda. Acesse a página de portfólio para ver os projetos futuros.
            </p>
            <Link to="/portfolio" className="btn btn-primary">
              Ver portfólio completo
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio-preview" className="section portfolio-preview-section" aria-labelledby="portfolio-preview-title">
      <div className="container">
        <SectionTitle
          label="PORTFÓLIO"
          title="PROJETOS QUE TRANSFORMAM IDEIAS EM REALIDADE."
          subtitle="Conheça alguns dos projetos desenvolvidos pela LIN TECH."
        />

        <div className="grid grid-3 gap-6 portfolio-grid" role="list" aria-label="Projetos em destaque">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "var(--space-10)" }}>
          <Link to="/portfolio" className="btn btn-outline btn-lg">
            Ver todos os projetos
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
