export type ProjectCategory =
  | "institutional-site"
  | "landing-page"
  | "web-system"
  | "custom-application";

export type ProjectStatus = "completed" | "in-progress" | "demo";

export interface Project {
  id: string;
  slug: string;
  name: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription?: string;
  problem?: string;
  solution?: string;
  features: string[];
  technologies: string[];
  image: string;
  gallery?: string[];
  demoUrl?: string;
  githubUrl?: string;
  status: ProjectStatus;
  isDemo: boolean;
  clientName?: string; // apenas para projetos reais, não para demos
  year: number;
  order: number;
}

// Projetos - NÃO INVENTAR DADOS. Preencher apenas com projetos reais.
// Para projetos demonstrativos, usar isDemo: true e não preencher clientName.
export const projects: Project[] = [
  // Exemplo de estrutura - substituir por projetos reais
  // {
  //   id: "proj-1",
  //   slug: "sistema-gestao-clinica",
  //   name: "Sistema de Gestão para Clínica",
  //   category: "web-system",
  //   shortDescription: "Sistema completo para gestão de agendamentos, prontuários e financeiro.",
  //   fullDescription: "Desenvolvimento de sistema web para clínica médica com módulos de agendamento online, prontuário eletrônico, gestão financeira e relatórios gerenciais.",
  //   problem: "A clínica precisava digitalizar processos manuais de agendamento e prontuários, reduzindo erros e tempo de espera.",
  //   solution: "Sistema web responsivo com painel administrativo, portal do paciente e integração com WhatsApp para confirmações.",
  //   features: ["Agendamento online", "Prontuário eletrônico", "Gestão financeira", "Relatórios", "Integração WhatsApp"],
  //   technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Docker"],
  //   image: "/images/projects/sistema-clinica.jpg",
  //   gallery: ["/images/projects/sistema-clinica-1.jpg", "/images/projects/sistema-clinica-2.jpg"],
  //   demoUrl: "https://demo.lintech.app/clinica",
  //   status: "completed",
  //   isDemo: false,
  //   clientName: "Clínica Exemplo",
  //   year: 2024,
  //   order: 1,
  // },
];

export const projectCategories = [
  {
    id: "institutional-site",
    name: "Sites institucionais",
    order: 1,
  },
  {
    id: "landing-page",
    name: "Landing pages",
    order: 2,
  },
  {
    id: "web-system",
    name: "Sistemas web",
    order: 3,
  },
  {
    id: "custom-application",
    name: "Aplicações personalizadas",
    order: 4,
  },
];

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects
    .filter((p) => p.category === category)
    .sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(limit = 3): Project[] {
  return [...projects].sort((a, b) => a.order - b.order).slice(0, limit);
}
