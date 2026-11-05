import { Project } from "../config/portfolio";
import { Button } from "./Button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) onClick();
  };

  return (
    <article
      className="project-card"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      role={onClick ? "button" : "article"}
      aria-label={`Ver detalhes do projeto ${project.name}`}
    >
      <div className="project-image">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot do projeto ${project.name}`}
            loading="lazy"
          />
        ) : (
          <div
            className="flex items-center justify-center h-full"
            style={{ background: "var(--color-surface-secondary)" }}
            aria-hidden="true"
          >
            <svg
              className="w-16 h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: "var(--color-text-dim)" }}
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span
            className={`project-status ${project.isDemo ? "demo" : "real"}`}
          >
            {project.isDemo ? "Demonstrativo" : "Cliente real"}
          </span>
        </div>
      </div>
      <div className="project-content">
        <span className="project-category">{getCategoryLabel(project.category)}</span>
        <h3 className="project-title">{project.name}</h3>
        <p className="project-description">{project.shortDescription}</p>
        <div className="project-technologies" aria-label="Tecnologias utilizadas">
          {project.technologies.slice(0, 5).map((tech, index) => (
            <span key={index} className="project-tech">
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="project-tech">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
        <div className="project-footer">
          <div className="flex items-center gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Ver demonstração de ${project.name}`}
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Ver código de ${project.name}`}
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                Código
              </a>
            )}
          </div>
          {onClick && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleClick}
              icon={<ExternalLink className="w-4 h-4" aria-hidden="true" />}
              iconPosition="right"
            >
              Ver detalhes
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

function getCategoryLabel(category: Project["category"]): string {
  const labels: Record<Project["category"], string> = {
    "institutional-site": "Site institucional",
    "landing-page": "Landing page",
    "web-system": "Sistema web",
    "custom-application": "Aplicação personalizada",
  };
  return labels[category] || category;
}
