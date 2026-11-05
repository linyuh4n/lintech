import { useState, useMemo } from "react";
import { SEO } from "../components/SEO";
import { SectionTitle } from "../components/SectionTitle";
import { ProjectCard } from "../components/ProjectCard";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { projects, projectCategories, getAllProjects } from "../config/portfolio";
import { Filter, ExternalLink } from "lucide-react";
import { openWhatsApp, buildGeneralMessage } from "../lib/whatsapp";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return getAllProjects();
    return getAllProjects().filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleWhatsApp = () => openWhatsApp(buildGeneralMessage());

  return (
    <>
      <SEO page="portfolio" />
      <section className="page-hero" style={{ padding: "calc(var(--header-height) + var(--space-16)) 0 var(--space-16)", textAlign: "center", background: "var(--gradient-hero)" }}>
        <div className="container">
          <span className="section-label" style={{ display: "inline-block", marginBottom: "var(--space-3)" }}>
            PORTFÓLIO
          </span>
          <h1 style={{ fontSize: "var(--text-5xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-4)", color: "var(--color-text)" }}>
            Projetos que transformam ideias em realidade
          </h1>
          <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-muted)", maxWidth: "720px", margin: "0 auto" }}>
            Conheça alguns dos projetos desenvolvidos pela LIN TECH. Cada case representa um desafio único resolvido com tecnologia e estratégia.
          </p>
        </div>
      </section>

      <section id="portfolio" className="section" aria-labelledby="portfolio-title">
        <div className="container">
          <SectionTitle
            label="PROJETOS REALIZADOS"
            title="NOSSO PORTFÓLIO"
            subtitle="Filtre por categoria para ver projetos específicos."
          />

          <div className="flex flex-wrap gap-3 justify-center" style={{ marginBottom: "var(--space-10)" }} role="group" aria-label="Filtrar projetos por categoria">
            <button
              className={`btn ${activeCategory === "all" ? "btn-primary" : "btn-outline"}`}
              onClick={() => setActiveCategory("all")}
              aria-pressed={activeCategory === "all"}
            >
              Todos ({getAllProjects().length})
            </button>
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                className={`btn ${activeCategory === cat.id ? "btn-primary" : "btn-outline"}`}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-3 gap-6 portfolio-grid" role="list" aria-label="Lista de projetos">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="card" style={{ textAlign: "center", padding: "var(--space-16)", gridColumn: "1 / -1" }}>
              <Filter className="w-12 h-12" style={{ margin: "0 auto var(--space-4)", color: "var(--color-text-dim)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-2)" }}>
                Nenhum projeto encontrado
              </h3>
              <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                Não há projetos cadastrados nesta categoria no momento.
              </p>
              <button
                className="btn btn-outline"
                onClick={() => setActiveCategory("all")}
              >
                Ver todas as categorias
              </button>
            </div>
          )}

          {projects.length === 0 && (
            <div className="card" style={{ textAlign: "center", padding: "var(--space-16)", marginTop: "var(--space-10)" }}>
              <ExternalLink className="w-12 h-12" style={{ margin: "0 auto var(--space-4)", color: "var(--color-text-dim)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-2)" }}>
                Portfólio em construção
              </h3>
              <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-6)", maxWidth: "500px", margin: "0 auto var(--space-6)" }}>
                Estamos preparando a apresentação dos nossos projetos. 
                Enquanto isso, você pode conhecer nossos serviços ou entrar em contato para conversar sobre seu projeto.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/servicos" className="btn btn-primary">
                  Ver serviços
                </a>
                <WhatsAppButton variant="inline" onClick={handleWhatsApp} />
              </div>
            </div>
          )}
        </div>
      </section>

      <WhatsAppButton variant="float" />
    </>
  );
}
