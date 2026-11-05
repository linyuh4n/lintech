import { ReactNode } from "react";

export interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: "center" | "left" | "right";
  className?: string;
}

export function SectionTitle({
  label,
  title,
  subtitle,
  children,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignClasses = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <header className={`section-header ${alignClasses[align]} ${className}`}>
      {label && (
        <span className="section-label animate-slide-up">{label}</span>
      )}
      <h2 className="section-title animate-slide-up delay-1">{title}</h2>
      {subtitle && (
        <p className="section-subtitle animate-slide-up delay-2">{subtitle}</p>
      )}
      {children && <div className="animate-slide-up delay-3">{children}</div>}
    </header>
  );
}
