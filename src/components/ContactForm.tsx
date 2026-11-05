import { useState, FormEvent, ChangeEvent } from "react";
import { Button } from "./Button";
import { type ServiceId, getAllServices } from "../config/services";
import { validateForm, budgetFormSchema, sanitizeInput } from "../lib/validation";
import { buildBudgetMessage, openWhatsApp } from "../lib/whatsapp";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  companyName: string;
  email: string;
  whatsapp: string;
  serviceType: ServiceId;
  projectDescription: string;
  deadline: string;
  budgetRange: string;
  privacy: boolean;
}

const initialFormData: FormData = {
  name: "",
  companyName: "",
  email: "",
  whatsapp: "",
  serviceType: "institutional-site",
  projectDescription: "",
  deadline: "",
  budgetRange: "not-defined",
  privacy: false,
};

const budgetRanges = [
  { value: "not-defined", label: "Ainda não definido" },
  { value: "up-to-1000", label: "Até R$ 1.000" },
  { value: "1000-3000", label: "R$ 1.000 a R$ 3.000" },
  { value: "3000-5000", label: "R$ 3.000 a R$ 5.000" },
  { value: "5000-10000", label: "R$ 5.000 a R$ 10.000" },
  { value: "above-10000", label: "Acima de R$ 10.000" },
  { value: "prefer-talk", label: "Prefiro conversar" },
];

function formDataToRecord(data: FormData): Record<string, string> {
  return {
    name: data.name,
    companyName: data.companyName,
    email: data.email,
    whatsapp: data.whatsapp,
    serviceType: data.serviceType,
    projectDescription: data.projectDescription,
    deadline: data.deadline,
    budgetRange: data.budgetRange,
  };
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const sanitized = sanitizeInput(value);
    setFormData((prev) => ({ ...prev, [name]: sanitized }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validation = validateForm(formDataToRecord(formData), budgetFormSchema);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setSubmitStatus("error");
      setSubmitMessage("Por favor, corrija os erros no formulário.");
      return;
    }

    if (!formData.privacy) {
      setErrors((prev) => ({ ...prev, privacy: "Você deve aceitar a política de privacidade" }));
      setSubmitStatus("error");
      setSubmitMessage("Por favor, aceite a política de privacidade.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simula um pequeno delay para UX
      await new Promise((resolve) => setTimeout(resolve, 500));

      const message = buildBudgetMessage(formData);
      openWhatsApp(message);

      setSubmitStatus("success");
      setSubmitMessage(
        "Formulário validado com sucesso! O WhatsApp será aberto para você revisar e enviar a mensagem."
      );
      setFormData(initialFormData);
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Ocorreu um erro ao processar. Tente novamente ou entre em contato direto pelo WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const allServices = getAllServices();

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nome <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`form-input ${errors.name ? "error" : ""}`}
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome completo"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            autoComplete="name"
            disabled={isSubmitting}
          />
          {errors.name && (
            <span id="name-error" className="form-error" role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="companyName" className="form-label">
            Nome da empresa (opcional)
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className={`form-input ${errors.companyName ? "error" : ""}`}
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Nome da sua empresa"
            aria-invalid={!!errors.companyName}
            aria-describedby={errors.companyName ? "companyName-error" : undefined}
            autoComplete="organization"
            disabled={isSubmitting}
          />
          {errors.companyName && (
            <span id="companyName-error" className="form-error" role="alert">
              {errors.companyName}
            </span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            E-mail <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-input ${errors.email ? "error" : ""}`}
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            autoComplete="email"
            disabled={isSubmitting}
          />
          {errors.email && (
            <span id="email-error" className="form-error" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="whatsapp" className="form-label">
            WhatsApp <span aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            className={`form-input ${errors.whatsapp ? "error" : ""}`}
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="(42) 98823-5256"
            required
            aria-required="true"
            aria-invalid={!!errors.whatsapp}
            aria-describedby={errors.whatsapp ? "whatsapp-error" : "whatsapp-hint"}
            autoComplete="tel"
            disabled={isSubmitting}
          />
          {errors.whatsapp && (
            <span id="whatsapp-error" className="form-error" role="alert">
              {errors.whatsapp}
            </span>
          )}
          <span id="whatsapp-hint" className="form-hint">
            Inclua DDD. Ex: (42) 98823-5256
          </span>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="serviceType" className="form-label">
          Tipo de serviço <span aria-hidden="true">*</span>
        </label>
        <select
          id="serviceType"
          name="serviceType"
          className={`form-input form-select ${errors.serviceType ? "error" : ""}`}
          value={formData.serviceType}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.serviceType}
          aria-describedby={errors.serviceType ? "serviceType-error" : undefined}
          disabled={isSubmitting}
        >
          {allServices.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <span id="serviceType-error" className="form-error" role="alert">
            {errors.serviceType}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="projectDescription" className="form-label">
          Descrição do projeto <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          className={`form-input form-textarea ${errors.projectDescription ? "error" : ""}`}
          value={formData.projectDescription}
          onChange={handleChange}
          placeholder="Conte-nos sobre seu projeto, objetivos, funcionalidades desejadas, referências..."
          required
          aria-required="true"
          aria-invalid={!!errors.projectDescription}
          aria-describedby={errors.projectDescription ? "projectDescription-error" : "projectDescription-hint"}
          disabled={isSubmitting}
          rows={5}
        />
        {errors.projectDescription && (
          <span id="projectDescription-error" className="form-error" role="alert">
            {errors.projectDescription}
          </span>
        )}
        <span id="projectDescription-hint" className="form-hint">
          Mínimo 20 caracteres. Quanto mais detalhes, melhor o orçamento.
        </span>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="deadline" className="form-label">
            Prazo desejado (opcional)
          </label>
          <input
            type="text"
            id="deadline"
            name="deadline"
            className={`form-input ${errors.deadline ? "error" : ""}`}
            value={formData.deadline}
            onChange={handleChange}
            placeholder="Ex: 2 meses, até dezembro/2024, urgente..."
            aria-invalid={!!errors.deadline}
            aria-describedby={errors.deadline ? "deadline-error" : undefined}
            disabled={isSubmitting}
          />
          {errors.deadline && (
            <span id="deadline-error" className="form-error" role="alert">
              {errors.deadline}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="budgetRange" className="form-label">
            Orçamento estimado (opcional)
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            className={`form-input form-select ${errors.budgetRange ? "error" : ""}`}
            value={formData.budgetRange}
            onChange={handleChange}
            aria-invalid={!!errors.budgetRange}
            aria-describedby={errors.budgetRange ? "budgetRange-error" : "budgetRange-hint"}
            disabled={isSubmitting}
          >
            {budgetRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
          {errors.budgetRange && (
            <span id="budgetRange-error" className="form-error" role="alert">
              {errors.budgetRange}
            </span>
          )}
          <span id="budgetRange-hint" className="form-hint">
            Apenas para qualificação. Não representa preços fixos.
          </span>
        </div>
      </div>

      <div className="form-group">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={(e) => setFormData((prev) => ({ ...prev, privacy: e.target.checked }))}
            className="mt-1 w-4 h-4 accent-primary border-border"
            required
            aria-required="true"
            disabled={isSubmitting}
          />
          <span className="text-sm text-text-secondary leading-relaxed">
            Li e concordo com a <a href="/privacidade" className="text-primary-light underline hover:text-primary">Política de Privacidade</a> e autorizo o uso dos meus dados para contato comercial via WhatsApp.
          </span>
        </label>
        {errors.privacy && (
          <span className="form-error" role="alert">{errors.privacy}</span>
        )}
      </div>

      <div className="form-group" style={{ marginTop: "var(--space-6)" }}>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={isSubmitting}
          icon={<Send className="w-5 h-5" aria-hidden="true" />}
          iconPosition="right"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
              Enviando...
            </>
          ) : (
            "SOLICITAR ORÇAMENTO VIA WHATSAPP"
          )}
        </Button>
      </div>

      {submitStatus !== "idle" && (
        <div
          className={`toast ${submitStatus === "success" ? "success" : "error"}`}
          role="alert"
          aria-live="polite"
        >
          <span className="toast-icon" aria-hidden="true">
            {submitStatus === "success" ? (
              <CheckCircle className="w-5 h-5 text-success" />
            ) : (
              <AlertCircle className="w-5 h-5 text-error" />
            )}
          </span>
          <div className="toast-content">
            <div className="toast-title">
              {submitStatus === "success" ? "Sucesso!" : "Erro"}
            </div>
            <div className="toast-message">{submitMessage}</div>
          </div>
        </div>
      )}

      <p className="text-xs text-text-dim text-center mt-4">
        Ao clicar no botão, você será redirecionado para o WhatsApp com a mensagem pré-preenchida.
        Revise e envie quando quiser. Nenhum dado é armazenado em nossos servidores.
      </p>
    </form>
  );
}
