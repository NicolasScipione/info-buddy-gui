import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";
import { TicketCard } from "./TicketCard";
import { TicketStatus } from "./StatusBadge";

interface TicketData {
  numero: string;
  asunto: string;
  estado: TicketStatus;
  fechaCreacion: string;
  organismo: string;
  descripcion: string;
}

interface ChatMessageProps {
  role: "assistant" | "user";
  content: string;
  ticket?: TicketData;
  isError?: boolean;
}

export function ChatMessage({ role, content, ticket, isError }: ChatMessageProps) {
  const isAssistant = role === "assistant";

  return (
    <div
      className={cn(
        "flex gap-3 animate-fade-in",
        isAssistant ? "justify-start" : "justify-end"
      )}
    >
      {isAssistant && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
          <Bot className="w-4 h-4 text-secondary-foreground" />
        </div>
      )}

      <div
        className={cn(
          "max-w-[75%] space-y-3",
          isAssistant ? "items-start" : "items-end"
        )}
      >
        <div
          className={cn(
            "px-4 py-3 text-sm leading-relaxed",
            isAssistant
              ? "chat-bubble-assistant"
              : "chat-bubble-user",
            isError && "border-l-4 border-status-sinresolucion bg-status-sinresolucion/5"
          )}
        >
          {content}
        </div>

        {ticket && <TicketCard ticket={ticket} />}
      </div>

      {!isAssistant && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <User className="w-4 h-4 text-muted-foreground" />
        </div>
      )}
    </div>
  );
}
