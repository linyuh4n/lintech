import { Button } from "./Button";
import { openWhatsApp, buildGeneralMessage, buildServiceMessage, type ServiceId } from "../lib/whatsapp";
import { MessageSquare, Phone } from "lucide-react";

interface WhatsAppButtonProps {
  variant?: "float" | "inline" | "hero";
  serviceId?: ServiceId;
  message?: string;
  className?: string;
  showText?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

export function WhatsAppButton({
  variant = "float",
  serviceId,
  message,
  className = "",
  showText = true,
  fullWidth = false,
  onClick,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    let finalMessage = message;
    if (!finalMessage) {
      if (serviceId) {
        finalMessage = buildServiceMessage(serviceId);
      } else {
        finalMessage = buildGeneralMessage();
      }
    }
    openWhatsApp(finalMessage);
  };

  const variantClasses = {
    float: "whatsapp-float",
    inline: "",
    hero: "",
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`} role="button" tabIndex={0} onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick();
      }
    }}>
      <Button
        variant={variant === "float" ? "primary" : variant === "hero" ? "primary" : "outline"}
        size={variant === "float" ? "md" : "lg"}
        fullWidth={variant === "inline" || fullWidth}
        onClick={handleClick}
        icon={<MessageSquare className="w-5 h-5" aria-hidden="true" />}
        iconPosition="left"
        className={variant === "float" ? "shadow-xl" : ""}
      >
        {showText && (
          <>
            <span>WhatsApp</span>
            {variant !== "float" && <Phone className="w-4 h-4" aria-hidden="true" />}
          </>
        )}
        {variant === "float" && !showText && (
          <span className="sr-only">Abrir WhatsApp</span>
        )}
      </Button>
    </div>
  );
}
