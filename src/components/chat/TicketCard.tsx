import { FileText, Calendar, Building2, Hourglass } from "lucide-react";
import { StatusBadge, TicketStatus } from "./StatusBadge";

interface TicketData {
  numero: string;
  asunto: string;
  estado: TicketStatus;
  fechaCreacion: string;
  organismo: string;
  descripcion: string;
}

interface TicketCardProps {
  ticket: TicketData;
}

export function TicketCard({ ticket }: TicketCardProps) {
  return (
    <div className="ticket-card overflow-hidden animate-fade-in shadow-institutional">
      {/* Header con número de solicitud */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-muted/30">
        <FileText className="w-5 h-5 text-secondary" />
        <span className="font-semibold text-secondary">
          Solicitud #{ticket.numero}
        </span>
      </div>

      {/* Contenido */}
      <div className="px-5 py-4 space-y-4">
        {/* Asunto */}
        <div>
          <p className="text-xs text-muted-foreground mb-1">Asunto</p>
          <p className="font-semibold text-foreground text-base">
            {ticket.asunto}
          </p>
        </div>

        {/* Estado */}
        <div>
          <p className="text-xs text-muted-foreground mb-1.5">Estado</p>
          <div className="flex items-center gap-2">
            <Hourglass className="w-4 h-4 text-status-revision" />
            <StatusBadge status={ticket.estado} />
          </div>
        </div>

        {/* Fecha de creación */}
        <div>
          <p className="text-xs text-muted-foreground mb-1">Fecha de creación</p>
          <div className="flex items-center gap-2 text-foreground">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span>{ticket.fechaCreacion}</span>
          </div>
        </div>

        {/* Organismo */}
        <div>
          <p className="text-xs text-muted-foreground mb-1">Organismo</p>
          <div className="flex items-center gap-2 text-foreground">
            <Building2 className="w-4 h-4 text-muted-foreground" />
            <span>{ticket.organismo}</span>
          </div>
        </div>

        {/* Descripción */}
        <div>
          <p className="text-xs text-muted-foreground mb-1.5">Descripción</p>
          <div className="bg-muted/50 border-l-4 border-secondary/40 px-4 py-3 rounded-r-md">
            <p className="text-sm text-foreground leading-relaxed">
              {ticket.descripcion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
