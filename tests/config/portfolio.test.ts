import { describe, it, expect } from "vitest";
import { projects, projectCategories, getProjectsByCategory, getProjectBySlug, getProjectById, getAllProjects, getFeaturedProjects } from "../../src/config/portfolio";

describe("Portfolio Config", () => {
  describe("projects array", () => {
    it("é um array (pode estar vazio inicialmente)", () => {
      expect(projects).toBeInstanceOf(Array);
    });

    it("se houver projetos, têm campos obrigatórios", () => {
      projects.forEach((project) => {
        expect(project.id).toBeTruthy();
        expect(project.slug).toBeTruthy();
        expect(project.name).toBeTruthy();
        expect(project.category).toBeTruthy();
        expect(project.shortDescription).toBeTruthy();
        expect(project.features).toBeInstanceOf(Array);
        expect(project.technologies).toBeInstanceOf(Array);
        expect(project.image).toBeTruthy();
        expect(typeof project.isDemo).toBe("boolean");
        expect(typeof project.year).toBe("number");
        expect(typeof project.order).toBe("number");
      });
    });
  });

  describe("projectCategories", () => {
    it("contém 4 categorias", () => {
      expect(projectCategories).toHaveLength(4);
    });

    it("categorias esperadas", () => {
      const ids = projectCategories.map((c) => c.id);
      expect(ids).toEqual(["institutional-site", "landing-page", "web-system", "custom-application"]);
    });
  });

  describe("getProjectsByCategory", () => {
    it("retorna projetos da categoria", () => {
      const result = getProjectsByCategory("web-system");
      expect(result.every((p) => p.category === "web-system")).toBe(true);
    });

    it("retorna array vazio para categoria inexistente", () => {
      const result = getProjectsByCategory("invalid" as any);
      expect(result).toHaveLength(0);
    });
  });

  describe("getProjectBySlug", () => {
    it("retorna projeto existente", () => {
      if (projects.length > 0) {
        const project = getProjectBySlug(projects[0].slug);
        expect(project).toBeDefined();
        expect(project?.slug).toBe(projects[0].slug);
      }
    });

    it("retorna undefined para slug inexistente", () => {
      const project = getProjectBySlug("slug-inexistente");
      expect(project).toBeUndefined();
    });
  });

  describe("getProjectById", () => {
    it("retorna projeto existente", () => {
      if (projects.length > 0) {
        const project = getProjectById(projects[0].id);
        expect(project).toBeDefined();
        expect(project?.id).toBe(projects[0].id);
      }
    });

    it("retorna undefined para ID inexistente", () => {
      const project = getProjectById("id-inexistente");
      expect(project).toBeUndefined();
    });
  });

  describe("getAllProjects", () => {
    it("retorna todos os projetos ordenados", () => {
      const all = getAllProjects();
      expect(all.length).toBe(projects.length);
      if (all.length > 1) {
        expect(all[0].order).toBeLessThanOrEqual(all[1].order);
      }
    });

    it("retorna cópia", () => {
      const all = getAllProjects();
      all.push({} as any);
      expect(getAllProjects().length).toBe(projects.length);
    });
  });

  describe("getFeaturedProjects", () => {
    it("retorna limite especificado", () => {
      const featured = getFeaturedProjects(2);
      expect(featured.length).toBeLessThanOrEqual(2);
    });

    it("retorna até 3 por padrão", () => {
      const featured = getFeaturedProjects();
      expect(featured.length).toBeLessThanOrEqual(3);
    });
  });
});
