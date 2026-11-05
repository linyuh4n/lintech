import { describe, it, expect } from "vitest";
import {
  formatPhone,
  formatCurrency,
  truncate,
  slugify,
  capitalize,
  formatDate,
  getCurrentYear,
} from "../../src/lib/formatting";

describe("Formatting Library", () => {
  describe("formatPhone", () => {
    it("formata celular (11 dígitos)", () => {
      expect(formatPhone("42988235256")).toBe("(42) 98823-5256");
      expect(formatPhone("(42) 98823-5256")).toBe("(42) 98823-5256");
    });

    it("formata fixo (10 dígitos)", () => {
      expect(formatPhone("4233334444")).toBe("(42) 3333-4444");
      expect(formatPhone("(42) 3333-4444")).toBe("(42) 3333-4444");
    });

    it("retorna original se não conseguir formatar", () => {
      expect(formatPhone("123")).toBe("123");
      expect(formatPhone("abc")).toBe("abc");
    });
  });

  describe("formatCurrency", () => {
    it("formata valores em BRL", () => {
      // Intl.NumberFormat usa non-breaking space (\u00A0)
      const nbsp = "\u00A0";
      expect(formatCurrency(1000)).toBe(`R$${nbsp}1.000,00`);
      expect(formatCurrency(1500.5)).toBe(`R$${nbsp}1.500,50`);
      expect(formatCurrency(0)).toBe(`R$${nbsp}0,00`);
      expect(formatCurrency(1000000)).toBe(`R$${nbsp}1.000.000,00`);
    });
  });

  describe("truncate", () => {
    it("trunca texto longo", () => {
      // "Hello World" tem 11 chars, truncate para 8 = "Hello Wo" + "..."
      expect(truncate("Hello World", 8)).toBe("Hello Wo...");
      expect(truncate("Short", 10)).toBe("Short");
    });

    it("retorna original se menor que maxLength", () => {
      expect(truncate("Hi", 5)).toBe("Hi");
    });
  });

  describe("slugify", () => {
    it("converte para slug", () => {
      expect(slugify("Meu Projeto Incrível")).toBe("meu-projeto-incrivel");
      expect(slugify("Site Institucional")).toBe("site-institucional");
      expect(slugify("  Espaços  ")).toBe("espacos");
    });

    it("remove caracteres especiais", () => {
      expect(slugify("Projeto @#$%")).toBe("projeto");
      expect(slugify("Já sei!")).toBe("ja-sei");
    });
  });

  describe("capitalize", () => {
    it("capitaliza primeira letra", () => {
      expect(capitalize("hello")).toBe("Hello");
      expect(capitalize("HELLO")).toBe("Hello");
      expect(capitalize("hELLO")).toBe("Hello");
    });

    it("trata string vazia", () => {
      expect(capitalize("")).toBe("");
    });
  });

  describe("formatDate", () => {
    it("formata data para pt-BR", () => {
      // Timezone pode afetar - usar data no meio do dia UTC
      const date = new Date("2024-01-15T12:00:00Z");
      const result = formatDate(date);
      expect(result).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
    });

    it("aceita string ISO", () => {
      const result = formatDate("2024-12-25T12:00:00Z");
      expect(result).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
    });

    it("aceita opções customizadas", () => {
      const date = new Date("2024-01-15T12:00:00Z");
      expect(formatDate(date, { month: "long" })).toContain("janeiro");
    });
  });

  describe("getCurrentYear", () => {
    it("retorna ano atual", () => {
      expect(getCurrentYear()).toBe(new Date().getFullYear());
    });
  });
});
