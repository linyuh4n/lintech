import { describe, it, expect } from "vitest";
import {
  validateForm,
  validateEmail,
  validateWhatsApp,
  validateSafeUrl,
  sanitizeInput,
  budgetFormSchema,
} from "../../src/lib/validation";

describe("Validation Library", () => {
  describe("validateForm", () => {
    it("valida objeto válido", () => {
      const data = { name: "João", email: "joao@teste.com" };
      const schema = {
        name: { required: true, minLength: 2 },
        email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      };
      const result = validateForm(data, schema);
      expect(result.isValid).toBe(true);
      expect(result.errors).toEqual({});
    });

    it("rejeita campo obrigatório vazio", () => {
      const data = { name: "", email: "joao@teste.com" };
      const schema = {
        name: { required: true, message: "Nome é obrigatório" },
        email: { required: true },
      };
      const result = validateForm(data, schema);
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBe("Nome é obrigatório");
    });

    it("rejeita campo abaixo do minLength", () => {
      const data = { name: "J" };
      const schema = {
        name: { required: true, minLength: 2, message: "Mínimo 2 caracteres" },
      };
      const result = validateForm(data, schema);
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBe("Mínimo 2 caracteres");
    });

    it("rejeita campo acima do maxLength", () => {
      const data = { name: "a".repeat(101) };
      const schema = {
        name: { maxLength: 100, message: "Máximo 100 caracteres" },
      };
      const result = validateForm(data, schema);
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBe("Máximo 100 caracteres");
    });

    it("rejeita campo que não corresponde ao pattern", () => {
      const data = { email: "invalido" };
      const schema = {
        email: { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "E-mail inválido" },
      };
      const result = validateForm(data, schema);
      expect(result.isValid).toBe(false);
      expect(result.errors.email).toBe("E-mail inválido");
    });

    it("usa validação customizada", () => {
      const data = { whatsapp: "123" };
      const schema = {
        whatsapp: {
          custom: (v) => v.length >= 10,
          message: "WhatsApp inválido",
        },
      };
      const result = validateForm(data, schema);
      expect(result.isValid).toBe(false);
      expect(result.errors.whatsapp).toBe("WhatsApp inválido");
    });

    it("ignora validação de campo não obrigatório vazio", () => {
      const data = { name: "João", optional: "" };
      const schema = {
        name: { required: true },
        optional: { minLength: 5 },
      };
      const result = validateForm(data, schema);
      expect(result.isValid).toBe(true);
    });

    it("retorna múltiplos erros", () => {
      const data = { name: "", email: "invalido" };
      const schema = {
        name: { required: true, message: "Nome obrigatório" },
        email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "E-mail inválido" },
      };
      const result = validateForm(data, schema);
      expect(result.isValid).toBe(false);
      expect(Object.keys(result.errors)).toHaveLength(2);
    });
  });

  describe("validateEmail", () => {
    it("valida e-mails corretos", () => {
      expect(validateEmail("teste@exemplo.com")).toBe(true);
      expect(validateEmail("joao.silva@empresa.com.br")).toBe(true);
      expect(validateEmail("user+tag@domain.org")).toBe(true);
    });

    it("rejeita e-mails inválidos", () => {
      expect(validateEmail("invalido")).toBe(false);
      expect(validateEmail("@semusuario.com")).toBe(false);
      expect(validateEmail("usuario@")).toBe(false);
      expect(validateEmail("usuario@dominio")).toBe(false);
      expect(validateEmail("")).toBe(false);
    });
  });

  describe("validateWhatsApp", () => {
    it("valida WhatsApp brasileiros", () => {
      expect(validateWhatsApp("(42) 98823-5256")).toBe(true);
      expect(validateWhatsApp("42988235256")).toBe(true);
      expect(validateWhatsApp("(11) 3333-4444")).toBe(true);
    });

    it("rejeita inválidos", () => {
      expect(validateWhatsApp("123")).toBe(false);
      expect(validateWhatsApp("")).toBe(false);
      expect(validateWhatsApp("abcdefghij")).toBe(false);
    });
  });

  describe("validateSafeUrl", () => {
    it("valida URLs seguras", () => {
      expect(validateSafeUrl("https://example.com")).toBe(true);
      expect(validateSafeUrl("http://example.com")).toBe(true);
    });

    it("rejeita URLs perigosas", () => {
      expect(validateSafeUrl("javascript:alert(1)")).toBe(false);
      expect(validateSafeUrl("data:text/html,<script>")).toBe(false);
      expect(validateSafeUrl("ftp://example.com")).toBe(false);
    });
  });

  describe("sanitizeInput", () => {
    it("remove caracteres perigosos", () => {
      expect(sanitizeInput("<script>")).toBe("script");
      expect(sanitizeInput("javascript:alert")).toBe("alert");
      expect(sanitizeInput('onclick="x"')).not.toContain("onclick");
    });

    it("limita tamanho", () => {
      const long = "a".repeat(6000);
      expect(sanitizeInput(long).length).toBe(5000);
    });

    it("faz trim", () => {
      expect(sanitizeInput("  hello  ")).toBe("hello");
    });
  });

  describe("budgetFormSchema", () => {
    it("valida formulário completo válido", () => {
      const data = {
        name: "João Silva",
        companyName: "Empresa",
        email: "joao@teste.com",
        whatsapp: "(42) 98823-5256",
        serviceType: "institutional-site",
        projectDescription: "Quero um site institucional para minha empresa com várias páginas",
        deadline: "2 meses",
        budgetRange: "3000-5000",
      };
      const result = validateForm(data, budgetFormSchema);
      expect(result.isValid).toBe(true);
    });

    it("rejeita nome curto", () => {
      const data = { name: "J" };
      const result = validateForm(data, budgetFormSchema);
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBeDefined();
    });

    it("rejeita e-mail inválido", () => {
      const data = { email: "invalido" };
      const result = validateForm(data, budgetFormSchema);
      expect(result.isValid).toBe(false);
      expect(result.errors.email).toBeDefined();
    });

    it("rejeita WhatsApp inválido", () => {
      const data = { whatsapp: "123" };
      const result = validateForm(data, budgetFormSchema);
      expect(result.isValid).toBe(false);
      expect(result.errors.whatsapp).toBeDefined();
    });

    it("rejeita descrição curta", () => {
      const data = { projectDescription: "Curto" };
      const result = validateForm(data, budgetFormSchema);
      expect(result.isValid).toBe(false);
      expect(result.errors.projectDescription).toBeDefined();
    });

    it("rejeita serviceType vazio", () => {
      const data = { serviceType: "" };
      const result = validateForm(data, budgetFormSchema);
      expect(result.isValid).toBe(false);
      expect(result.errors.serviceType).toBeDefined();
    });
  });
});
