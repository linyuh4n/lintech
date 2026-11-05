import { getServiceById, type ServiceId } from "../config/services";

const WHATSAPP_NUMBER = "5542988235256";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * Codifica uma mensagem para uso em URL do WhatsApp
 */
export function encodeWhatsAppMessage(message: string): string {
  return encodeURIComponent(message);
}

/**
 * Abre o WhatsApp com a mensagem pré-preenchida
 * Não abre automaticamente - requer interação do usuário
 */
export function openWhatsApp(message: string): void {
  const encodedMessage = encodeWhatsAppMessage(message);
  const url = `${WHATSAPP_BASE_URL}?text=${encodedMessage}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Constrói mensagem para serviço específico
 */
export function buildServiceMessage(serviceId: ServiceId): string {
  const service = getServiceById(serviceId);
  if (service) {
    return service.whatsappMessage;
  }
  return buildGeneralMessage();
}

/**
 * Constrói mensagem para orçamento geral
 */
export function buildBudgetMessage(formData: BudgetFormData): string {
  const service = getServiceById(formData.serviceType);
  const serviceName = service ? service.name : formData.serviceType;

  const lines = [
    "Olá! Gostaria de solicitar um orçamento.",
    "",
    `*Serviço:* ${serviceName}`,
    `*Nome:* ${formData.name}`,
  ];

  if (formData.companyName) {
    lines.push(`*Empresa:* ${formData.companyName}`);
  }

  lines.push(`*E-mail:* ${formData.email}`);
  lines.push(`*WhatsApp:* ${formData.whatsapp}`);

  if (formData.deadline) {
    lines.push(`*Prazo desejado:* ${formData.deadline}`);
  }

  if (formData.budgetRange && formData.budgetRange !== "not-defined") {
    lines.push(`*Orçamento estimado:* ${getBudgetRangeLabel(formData.budgetRange)}`);
  }

  lines.push("", `*Descrição do projeto:*`, formData.projectDescription);

  return lines.join("\n");
}

/**
 * Constrói mensagem genérica
 */
export function buildGeneralMessage(): string {
  return "Olá! Conheci a LIN TECH pelo site e gostaria de conversar sobre um projeto.";
}

/**
 * Rótulos para faixas de orçamento
 */
function getBudgetRangeLabel(range: string): string {
  const labels: Record<string, string> = {
    "not-defined": "Ainda não definido",
    "up-to-1000": "Até R$ 1.000",
    "1000-3000": "R$ 1.000 a R$ 3.000",
    "3000-5000": "R$ 3.000 a R$ 5.000",
    "5000-10000": "R$ 5.000 a R$ 10.000",
    "above-10000": "Acima de R$ 10.000",
    "prefer-talk": "Prefiro conversar",
  };
  return labels[range] || range;
}

export interface BudgetFormData {
  name: string;
  companyName?: string;
  email: string;
  whatsapp: string;
  serviceType: ServiceId;
  projectDescription: string;
  deadline?: string;
  budgetRange?: string;
}

export type { ServiceId };

/**
 * Valida número de WhatsApp (formato brasileiro)
 */
export function validateWhatsApp(whatsapp: string): boolean {
  // Remove caracteres não numéricos
  const numbers = whatsapp.replace(/\D/g, "");
  // Verifica se tem 10 ou 11 dígitos (com DDD)
  return numbers.length >= 10 && numbers.length <= 11;
}

/**
 * Formata WhatsApp para exibição
 */
export function formatWhatsApp(whatsapp: string): string {
  const numbers = whatsapp.replace(/\D/g, "");
  if (numbers.length === 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  }
  if (numbers.length === 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
  }
  return whatsapp;
}

/**
 * Sanitiza string para prevenir XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .trim()
    .slice(0, 5000); // Limite de segurança
}

/**
 * Valida URL
 */
export function validateUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}
