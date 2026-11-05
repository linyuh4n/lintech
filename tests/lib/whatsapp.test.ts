import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  encodeWhatsAppMessage,
  buildGeneralMessage,
  buildServiceMessage,
  buildBudgetMessage,
  validateWhatsApp,
  formatWhatsApp,
  sanitizeInput,
  validateUrl,
} from "../../src/lib/whatsapp";

describe("WhatsApp Library", () => {
  describe("encodeWhatsAppMessage", () => {
    it("codifica espaços como %20", () => {
      expect(encodeWhatsAppMessage("ola mundo")).toBe("ola%20mundo");
    });

    it("codifica caracteres especiais", () => {
      // encodeURIComponent não codifica ! por padrão
      expect(encodeWhatsAppMessage("olá!")).toBe("ol%C3%A1!");
    });

    it("retorna string vazia para entrada vazia", () => {
      expect(encodeWhatsAppMessage("")).toBe("");
    });
  });

  describe("buildGeneralMessage", () => {
    it("retorna mensagem padrão", () => {
      const msg = buildGeneralMessage();
      expect(msg).toContain("LIN TECH");
      expect(msg).toContain("projeto");
    });
  });

  describe("buildServiceMessage", () => {
    it("retorna mensagem para site institucional", () => {
      const msg = buildServiceMessage("institutional-site");
      expect(msg).toContain("site institucional");
    });

    it("retorna mensagem para landing page", () => {
      const msg = buildServiceMessage("landing-page");
      expect(msg).toContain("landing page");
    });

    it("retorna mensagem para sistema web", () => {
      const msg = buildServiceMessage("web-system");
      expect(msg).toContain("sistema web");
    });

    it("retorna mensagem para manutenção", () => {
      const msg = buildServiceMessage("maintenance-support");
      expect(msg).toContain("suporte ou manutenção");
    });

    it("retorna mensagem genérica para ID inválido", () => {
      const msg = buildServiceMessage("invalid-id" as any);
      expect(msg).toContain("LIN TECH");
    });
  });

  describe("buildBudgetMessage", () => {
    const formData = {
      name: "João Silva",
      companyName: "Empresa Teste",
      email: "joao@teste.com",
      whatsapp: "(42) 98823-5256",
      serviceType: "institutional-site" as const,
      projectDescription: "Quero um site para minha empresa",
      deadline: "2 meses",
      budgetRange: "3000-5000",
    };

    it("inclui nome do solicitante", () => {
      const msg = buildBudgetMessage(formData);
      expect(msg).toContain("João Silva");
    });

    it("inclui nome da empresa quando fornecido", () => {
      const msg = buildBudgetMessage(formData);
      expect(msg).toContain("Empresa Teste");
    });

    it("inclui e-mail", () => {
      const msg = buildBudgetMessage(formData);
      expect(msg).toContain("joao@teste.com");
    });

    it("inclui WhatsApp", () => {
      const msg = buildBudgetMessage(formData);
      expect(msg).toContain("(42) 98823-5256");
    });

    it("inclui tipo de serviço (nome completo)", () => {
      const msg = buildBudgetMessage(formData);
      expect(msg).toContain("Sites institucionais");
    });

    it("inclui descrição do projeto", () => {
      const msg = buildBudgetMessage(formData);
      expect(msg).toContain("Quero um site para minha empresa");
    });

    it("inclui prazo quando fornecido", () => {
      const msg = buildBudgetMessage(formData);
      expect(msg).toContain("2 meses");
    });

    it("inclui faixa de orçamento quando fornecida", () => {
      const msg = buildBudgetMessage(formData);
      expect(msg).toContain("R$ 3.000 a R$ 5.000");
    });

    it("não inclui empresa quando não fornecida", () => {
      const dataWithoutCompany = { ...formData, companyName: "" };
      const msg = buildBudgetMessage(dataWithoutCompany);
      expect(msg).not.toContain("Empresa:");
    });

    it("não inclui linha de orçamento quando é not-defined", () => {
      const dataNotDefined = { ...formData, budgetRange: "not-defined" };
      const msg = buildBudgetMessage(dataNotDefined);
      // Quando budgetRange é "not-defined", a linha de orçamento não é incluída
      expect(msg).not.toContain("Orçamento estimado:");
    });
  });

  describe("validateWhatsApp", () => {
    it("valida WhatsApp com 11 dígitos (celular)", () => {
      expect(validateWhatsApp("(42) 98823-5256")).toBe(true);
      expect(validateWhatsApp("42988235256")).toBe(true);
    });

    it("valida WhatsApp com 10 dígitos (fixo)", () => {
      expect(validateWhatsApp("(42) 3333-4444")).toBe(true);
      expect(validateWhatsApp("4233334444")).toBe(true);
    });

    it("rejeita WhatsApp com menos de 10 dígitos", () => {
      expect(validateWhatsApp("123456789")).toBe(false);
      expect(validateWhatsApp("(42) 98823")).toBe(false);
    });

    it("rejeita WhatsApp com mais de 11 dígitos", () => {
      expect(validateWhatsApp("55429882352561")).toBe(false);
    });

    it("rejeita string vazia", () => {
      expect(validateWhatsApp("")).toBe(false);
    });
  });

  describe("formatWhatsApp", () => {
    it("formata celular (11 dígitos)", () => {
      expect(formatWhatsApp("42988235256")).toBe("(42) 98823-5256");
    });

    it("formata fixo (10 dígitos)", () => {
      expect(formatWhatsApp("4233334444")).toBe("(42) 3333-4444");
    });

    it("retorna original se não conseguir formatar", () => {
      expect(formatWhatsApp("abc")).toBe("abc");
    });
  });

  describe("sanitizeInput", () => {
    it("remove tags HTML", () => {
      expect(sanitizeInput("<script>alert(1)</script>")).toBe("scriptalert(1)/script");
    });

    it("remove javascript:", () => {
      expect(sanitizeInput("javascript:alert(1)")).toBe("alert(1)");
    });

    it("remove event handlers", () => {
      expect(sanitizeInput('onclick="alert(1)"')).toBe('onclick="alert(1)"'.replace(/on\w+=/gi, ""));
    });

    it("limita tamanho", () => {
      const long = "a".repeat(6000);
      expect(sanitizeInput(long).length).toBe(5000);
    });

    it("faz trim", () => {
      expect(sanitizeInput("  hello  ")).toBe("hello");
    });
  });

  describe("validateUrl", () => {
    it("valida URLs HTTPS", () => {
      expect(validateUrl("https://example.com")).toBe(true);
      expect(validateUrl("https://lintech.app/contato")).toBe(true);
    });

    it("valida URLs HTTP", () => {
      expect(validateUrl("http://example.com")).toBe(true);
    });

    it("rejeita URLs com protocolo inválido", () => {
      expect(validateUrl("ftp://example.com")).toBe(false);
      expect(validateUrl("javascript:alert(1)")).toBe(false);
      expect(validateUrl("data:text/html,<script>")).toBe(false);
    });

    it("rejeita strings inválidas", () => {
      expect(validateUrl("not a url")).toBe(false);
      expect(validateUrl("")).toBe(false);
    });
  });
});
