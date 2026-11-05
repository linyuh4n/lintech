import { AnchorHTMLAttributes } from "react";

export interface LogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "white" | "inline";
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "default", size = "md", className = "", ...props }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const variantClasses = {
    default: "",
    white: "",
    inline: "",
  };

  const combinedClasses = [
    "logo",
    sizeClasses[size],
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a href="/" className={combinedClasses} aria-label="LIN TECH - Página inicial" {...props}>
      <svg
        className="logo-icon"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill="currentColor" opacity="0.1" />
        <path
          d="M10 22V10M10 10L14 6M10 10L6 6M22 10V22M22 22L18 26M22 22L26 26"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="logo-text">
        <span className="logo-lin">LIN</span>
        <span className="logo-tech">TECH</span>
      </span>
    </a>
  );
}
