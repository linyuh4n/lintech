import { describe, it, expect } from "vitest";
import { services, serviceCategories, getServicesByCategory, getServiceById, getAllServices } from "../../src/config/services";

describe("Services Config", () => {
  describe("services array", () => {
    it("contém 4 serviços", () => {
      expect(services).toHaveLength(4);
    });

    it("tem IDs únicos", () => {
      const ids = services.map((s) => s.id);
      expect(new Set(ids).size).toBe(ids.length);
    });

    it("todos têm campos obrigatórios", () => {
      services.forEach((service) => {
        expect(service.id).toBeTruthy();
        expect(service.name).toBeTruthy();
        expect(service.description).toBeTruthy();
        expect(service.category).toBeTruthy();
        expect(service.features).toBeInstanceOf(Array);
        expect(service.features.length).toBeGreaterThan(0);
        expect(service.ctaText).toBeTruthy();
        expect(service.whatsappMessage).toBeTruthy();
        expect(typeof service.order).toBe("number");
      });
    });

    it("categorias são válidas", () => {
      const validCategories = ["digital-presence", "software-development", "maintenance-support"];
      services.forEach((service) => {
        expect(validCategories).toContain(service.category);
      });
    });
  });

  describe("serviceCategories", () => {
    it("contém 3 categorias", () => {
      expect(serviceCategories).toHaveLength(3);
    });

    it("ordem está correta", () => {
      expect(serviceCategories[0].id).toBe("digital-presence");
      expect(serviceCategories[1].id).toBe("software-development");
      expect(serviceCategories[2].id).toBe("maintenance-support");
    });
  });

  describe("getServicesByCategory", () => {
    it("retorna serviços de presença digital", () => {
      const result = getServicesByCategory("digital-presence");
      expect(result).toHaveLength(2);
      expect(result.map((s) => s.id)).toEqual(["institutional-site", "landing-page"]);
    });

    it("retorna serviços de desenvolvimento de software", () => {
      const result = getServicesByCategory("software-development");
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe("web-system");
    });

    it("retorna serviços de manutenção", () => {
      const result = getServicesByCategory("maintenance-support");
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe("maintenance-support");
    });

    it("retorna array vazio para categoria inexistente", () => {
      const result = getServicesByCategory("invalid" as any);
      expect(result).toHaveLength(0);
    });
  });

  describe("getServiceById", () => {
    it("retorna serviço existente", () => {
      const service = getServiceById("institutional-site");
      expect(service).toBeDefined();
      expect(service?.name).toBe("Sites institucionais");
    });

    it("retorna undefined para ID inexistente", () => {
      const service = getServiceById("invalid-id");
      expect(service).toBeUndefined();
    });
  });

  describe("getAllServices", () => {
    it("retorna todos os serviços ordenados", () => {
      const all = getAllServices();
      expect(all).toHaveLength(4);
      expect(all[0].order).toBeLessThanOrEqual(all[1].order);
    });

    it("retorna cópia (não muta original)", () => {
      const all = getAllServices();
      all.push({} as any);
      expect(getAllServices()).toHaveLength(4);
    });
  });
});
