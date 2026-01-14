import { FileText, Calendar, Building2, ExternalLink } from "lucide-react";
import { StatusBadge, TicketStatus } from "./StatusBadge";

interface TicketData {
  numero: string;
  estado: TicketStatus;
  descripcion: string;
  ultimaActualizacion: string;
  mesaTrabajo: string;
}

interface TicketCardProps {
  ticket: TicketData;
}

export function TicketCard({ ticket }: TicketCardProps) {
  return (
    <div className="ticket-card p-4 space-y-4 animate-fade-in shadow-institutional">
      {/* Header con número y estado */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-secondary" />
          <div>
            <p className="text-xs text-muted-foreground">Número de ticket</p>
            <p className="font-semibold text-foreground">{ticket.numero}</p>
          </div>
        </div>
        <StatusBadge status={ticket.estado} />
      </div>

      {/* Descripción */}
      <div className="pl-7">
        <p className="text-sm text-foreground leading-relaxed">
          {ticket.descripcion}
        </p>
      </div>

      {/* Metadata */}
      <div className="pl-7 flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>Última actualización: {ticket.ultimaActualizacion}</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Building2 className="w-4 h-4" />
          <span>{ticket.mesaTrabajo}</span>
        </div>
      </div>

      {/* Enlace de documentación */}
      <div className="pl-7 pt-2 border-t border-border">
        <button className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-secondary/80 transition-colors font-medium">
          <ExternalLink className="w-4 h-4" />
          Ver documentación relacionada
        </button>
      </div>
    </div>
  );
}
