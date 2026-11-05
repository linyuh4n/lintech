import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      icon,
      iconPosition = "left",
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = "btn";
    const variantClasses = `btn-${variant}`;
    const sizeClasses = size !== "md" ? `btn-${size}` : "";
    const widthClasses = fullWidth ? "btn-full" : "";
    const loadingClasses = loading ? "loading" : "";

    const combinedClasses = [
      baseClasses,
      variantClasses,
      sizeClasses,
      widthClasses,
      loadingClasses,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={combinedClasses}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <span className="spinner spinner-sm" aria-hidden="true" />
        )}
        {!loading && icon && iconPosition === "left" && (
          <span aria-hidden="true">{icon}</span>
        )}
        <span>{children}</span>
        {!loading && icon && iconPosition === "right" && (
          <span aria-hidden="true">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
