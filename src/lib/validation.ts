export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface FieldValidation {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean | string;
  message?: string;
}

export type ValidationSchema = Record<string, FieldValidation>;

/**
 * Valida um objeto contra um schema
 */
export function validateForm(data: Record<string, string>, schema: ValidationSchema): ValidationResult {
  const errors: Record<string, string> = {};

  for (const [field, rules] of Object.entries(schema)) {
    const value = data[field]?.trim() || "";

    if (rules.required && !value) {
      errors[field] = rules.message || `${field} é obrigatório`;
      continue;
    }

    if (value && rules.minLength && value.length < rules.minLength) {
      errors[field] = rules.message || `Mínimo de ${rules.minLength} caracteres`;
      continue;
    }

    if (value && rules.maxLength && value.length > rules.maxLength) {
      errors[field] = rules.message || `Máximo de ${rules.maxLength} caracteres`;
      continue;
    }

    if (value && rules.pattern && !rules.pattern.test(value)) {
      errors[field] = rules.message || `Formato inválido`;
      continue;
    }

    if (value && rules.custom) {
      const customResult = rules.custom(value);
      if (customResult !== true) {
        errors[field] = typeof customResult === "string" ? customResult : rules.message || "Valor inválido";
        continue;
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Valida e-mail
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valida WhatsApp brasileiro
 */
export function validateWhatsApp(whatsapp: string): boolean {
  const numbers = whatsapp.replace(/\D/g, "");
  return numbers.length >= 10 && numbers.length <= 11;
}

/**
 * Valida URL segura
 */
export function validateSafeUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * Sanitiza entrada removendo caracteres perigosos
 */
export function sanitizeInput(input: string, maxLength = 5000): string {
  return input
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .trim()
    .slice(0, maxLength);
}

/**
 * Schema de validação para formulário de orçamento
 */
export const budgetFormSchema: ValidationSchema = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 100,
    message: "Nome deve ter entre 2 e 100 caracteres",
  },
  companyName: {
    maxLength: 100,
    message: "Nome da empresa deve ter no máximo 100 caracteres",
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "E-mail inválido",
  },
  whatsapp: {
    required: true,
    custom: validateWhatsApp,
    message: "WhatsApp inválido. Use formato: (XX) XXXXX-XXXX",
  },
  serviceType: {
    required: true,
    message: "Selecione um tipo de serviço",
  },
  projectDescription: {
    required: true,
    minLength: 20,
    maxLength: 3000,
    message: "Descreva seu projeto com pelo menos 20 caracteres (máx. 3000)",
  },
  deadline: {
    maxLength: 50,
    message: "Prazo deve ter no máximo 50 caracteres",
  },
  budgetRange: {
    maxLength: 50,
  },
};
