interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  last?: boolean;
}

export function ProcessStep({ number, title, description, last = false }: ProcessStepProps) {
  return (
    <div className="process-step">
      <span className="process-number" aria-label={`Etapa ${number}`}>
        {number.toString().padStart(2, "0")}
      </span>
      <h3 className="process-title">{title}</h3>
      <p className="process-description">{description}</p>
      {!last && <span className="process-connector" aria-hidden="true" />}
    </div>
  );
}
