import { MessageSquare } from "lucide-react";

export function ChatHeader() {
  return (
    <header className="header-institutional px-6 py-4 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-primary-foreground">
            Consulta del estado de solicitudes
          </h1>
          <p className="text-sm text-primary-foreground/70">
            Asistente institucional – solo consulta informativa
          </p>
        </div>
      </div>
    </header>
  );
}
