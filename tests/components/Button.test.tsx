import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../../src/components/Button";

describe("Button", () => {
  it("renderiza botão com texto", () => {
    render(<Button>Clique aqui</Button>);
    expect(screen.getByRole("button", { name: /clique aqui/i })).toBeInTheDocument();
  });

  it("aplica variant primary por padrão", () => {
    render(<Button>Teste</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn-primary");
  });

  it("aplica variant secondary quando especificado", () => {
    render(<Button variant="secondary">Teste</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-secondary");
  });

  it("aplica variant outline quando especificado", () => {
    render(<Button variant="outline">Teste</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-outline");
  });

  it("aplica variant ghost quando especificado", () => {
    render(<Button variant="ghost">Teste</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-ghost");
  });

  it("aplica size lg quando especificado", () => {
    render(<Button size="lg">Teste</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-lg");
  });

  it("aplica size sm quando especificado", () => {
    render(<Button size="sm">Teste</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-sm");
  })

  it("aplica fullWidth quando especificado", () => {
    render(<Button fullWidth>Teste</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-full");
  });

  it("desabilita botão quando disabled", () => {
    render(<Button disabled>Teste</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("mostra loading spinner quando loading", () => {
    render(<Button loading>Teste</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("aria-busy", "true");
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("chama onClick quando clicado", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Teste</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("não chama onClick quando disabled", () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Teste</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renderiza ícone à esquerda quando iconPosition=left", () => {
    const icon = <span data-testid="icon">★</span>;
    render(<Button icon={icon} iconPosition="left">Teste</Button>);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renderiza ícone à direita quando iconPosition=right", () => {
    const icon = <span data-testid="icon">★</span>;
    render(<Button icon={icon} iconPosition="right">Teste</Button>);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
