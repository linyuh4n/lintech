import { AnchorHTMLAttributes } from "react";

export interface LogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "white" | "inline";
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "default", size = "md", className = "", ...props }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-auto",
    md: "h-8 w-auto",
    lg: "h-10 w-auto",
  };

  const variantClasses = {
    default: "",
    white: "brightness-0 invert",
    inline: "",
  };

  const combinedClasses = [
    "logo-img",
    sizeClasses[size],
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a href="/" className="logo-link" aria-label="LIN TECH - Página inicial" {...props}>
      <img
        src="/images/logos/logo2.png"
        alt=""
        className={combinedClasses}
        aria-hidden="true"
        width={size === "sm" ? 32 : size === "md" ? 40 : 48}
        height={size === "sm" ? 32 : size === "md" ? 40 : 48}
      />
      <span className="logo-text">

      </span>
    </a>
  );
}
