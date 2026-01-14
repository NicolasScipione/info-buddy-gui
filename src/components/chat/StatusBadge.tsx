import { cn } from "@/lib/utils";

export type TicketStatus = 
  | "iniciado" 
  | "revision" 
  | "encurso" 
  | "pendiente" 
  | "finalizado" 
  | "sinresolucion";

interface StatusBadgeProps {
  status: TicketStatus;
  className?: string;
}

const statusConfig: Record<TicketStatus, { label: string; className: string }> = {
  iniciado: {
    label: "Iniciado",
    className: "bg-status-iniciado/15 text-status-iniciado border-status-iniciado/30",
  },
  revision: {
    label: "En revisión",
    className: "bg-status-revision/15 text-status-revision border-status-revision/30",
  },
  encurso: {
    label: "En curso",
    className: "bg-status-encurso/15 text-status-encurso border-status-encurso/30",
  },
  pendiente: {
    label: "Pendiente de información",
    className: "bg-status-pendiente/15 text-status-pendiente border-status-pendiente/30",
  },
  finalizado: {
    label: "Finalizado con éxito",
    className: "bg-status-finalizado/15 text-status-finalizado border-status-finalizado/30",
  },
  sinresolucion: {
    label: "Sin resolución",
    className: "bg-status-sinresolucion/15 text-status-sinresolucion border-status-sinresolucion/30",
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
