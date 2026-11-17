import { useParams, Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { getProjectBySlug } from "../config/portfolio";
import { openWhatsApp, buildGeneralMessage } from "../lib/whatsapp";
import { ArrowLeft, ExternalLink, Github, Check, X } from "lucide-react";

export function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <>
        <SEO
          config={{
            title: "Projeto não encontrado | LIN TECH",
            description: "O projeto solicitado não foi encontrado.",
            canonical: "https://lintech.app/portfolio",
          }}
        />
        <section style={{ padding: "calc(var(--header-height) + var(--space-20)) 0 var(--space-20)", textAlign: "center" }}>
          <div className="container">
            <X className="w-16 h-16" style={{ margin: "0 auto var(--space-6)", color: "var(--color-error)" }} aria-hidden="true" />
            <h1 style={{ fontSize: "var(--text-fluid-3xl)", marginBottom: "var(--space-4)" }}>
              Projeto não encontrado
            </h1>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-8)" }}>
              O projeto que você procura não existe ou foi removido.
            </p>
            <Link to="/portfolio" className="btn btn-primary">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Voltar ao portfólio
            </Link>
          </div>
        </section>
        <WhatsAppButton variant="float" />
      </>
    );
  }

  const handleWhatsApp = () => openWhatsApp(buildGeneralMessage());

  return (
    <>
      <SEO
        config={{
          title: `${project.name} | Portfólio LIN TECH`,
          description: project.shortDescription,
          canonical: `https://lintech.app/portfolio/${project.slug}`,
          ogTitle: `${project.name} | LIN TECH`,
          ogDescription: project.shortDescription,
        }}
      />
      <section className="page-hero" style={{ padding: "calc(var(--header-height) + var(--space-12)) 0 var(--space-8)", background: "var(--gradient-hero)" }}>
        <div className="container">
          <Link to="/portfolio" className="btn btn-ghost btn-sm" style={{ marginBottom: "var(--space-6)", display: "inline-flex" }}>
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Voltar ao portfólio
          </Link>
          <div className="flex flex-wrap gap-3" style={{ marginBottom: "var(--space-4)" }}>
            <span className="badge badge-primary">{getCategoryLabel(project.category)}</span>
            <span className={`badge ${project.isDemo ? "badge-primary" : "badge-success"}`}>
              {project.isDemo ? "Demonstrativo" : "Cliente real"}
            </span>
            {project.year && <span className="badge badge-outline">{project.year}</span>}
          </div>
          <h1 style={{ fontSize: "var(--text-fluid-4xl)", fontWeight: "var(--font-bold)", marginBottom: "var(--space-4)" }}>
            {project.name}
          </h1>
          <p style={{ fontSize: "var(--text-fluid-lg)", color: "var(--color-text-secondary)", maxWidth: "800px" }}>
            {project.fullDescription || project.shortDescription}
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="project-details-title">
        <div className="container">
          <div className="grid grid-2 gap-12" style={{ maxWidth: "1200px" }}>
            <div>
              {project.image && (
                <div className="card" style={{ overflow: "hidden", marginBottom: "var(--space-8)" }}>
                  <img
                    src={project.image}
                    alt={`Screenshot do projeto ${project.name}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              )}

              {project.gallery && project.gallery.length > 0 && (
                <div className="grid grid-2 gap-4" role="list" aria-label="Galeria do projeto">
                  {project.gallery.map((img, index) => (
                    <div key={index} className="card" style={{ overflow: "hidden", aspectRatio: "16/10" }} role="listitem">
                      <img src={img} alt={`${project.name} - Imagem ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  ))}
                </div>
              )}

              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", marginTop: "var(--space-8)" }}>
                <a
                  href="/contato"
                  className="btn btn-primary"
                >
                  Solicitar projeto similar
                </a>
                <WhatsAppButton variant="inline" serviceId="web-system" onClick={handleWhatsApp} fullWidth />
              </div>
            </div>

            <div>
              {project.problem && (
                <div className="card" style={{ marginBottom: "var(--space-6)" }}>
                  <h2 id="project-details-title" style={{ fontSize: "var(--text-fluid-xl)", marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                    <span style={{ color: "var(--color-error)" }} aria-hidden="true">●</span>
                    O desafio
                  </h2>
                  <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)" }}>
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="card" style={{ marginBottom: "var(--space-6)" }}>
                  <h2 style={{ fontSize: "var(--text-fluid-xl)", marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                    <span style={{ color: "var(--color-success)" }} aria-hidden="true">●</span>
                    A solução
                  </h2>
                  <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)" }}>
                    {project.solution}
                  </p>
                </div>
              )}

              <div className="card" style={{ marginBottom: "var(--space-6)" }}>
                <h2 style={{ fontSize: "var(--text-fluid-xl)", marginBottom: "var(--space-4)" }}>
                  Funcionalidades principais
                </h2>
                <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--space-3)" }}>
                  {project.features.map((feature, index) => (
                    <li key={index} style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-2)", color: "var(--color-text-secondary)" }}>
                      <Check className="w-5 h-5 flex-shrink-0" style={{ color: "var(--color-success)", marginTop: "2px" }} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {project.technologies.length > 0 && (
                <div className="card" style={{ marginBottom: "var(--space-6)" }}>
                  <h2 style={{ fontSize: "var(--text-fluid-xl)", marginBottom: "var(--space-4)" }}>
                    Tecnologias utilizadas
                  </h2>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="project-tech">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="card" style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    Ver demonstração
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    Ver código
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton variant="float" />
    </>
  );
}

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    "institutional-site": "Site institucional",
    "landing-page": "Landing page",
    "web-system": "Sistema web",
    "custom-application": "Aplicação personalizada",
  };
  return labels[category] || category;
}
