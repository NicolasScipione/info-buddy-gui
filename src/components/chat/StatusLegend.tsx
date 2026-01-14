import { StatusBadge, TicketStatus } from "./StatusBadge";

const allStatuses: TicketStatus[] = [
  "iniciado",
  "revision",
  "encurso",
  "pendiente",
  "finalizado",
  "sinresolucion",
];

export function StatusLegend() {
  return (
    <div className="bg-card border border-border rounded-xl p-4 shadow-institutional">
      <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">
        Estados posibles
      </p>
      <div className="flex flex-wrap gap-2">
        {allStatuses.map((status) => (
          <StatusBadge key={status} status={status} />
        ))}
      </div>
    </div>
  );
}
