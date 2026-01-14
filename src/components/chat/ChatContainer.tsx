import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { TicketStatus } from "./StatusBadge";

interface TicketData {
  numero: string;
  estado: TicketStatus;
  descripcion: string;
  ultimaActualizacion: string;
  mesaTrabajo: string;
}

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
  ticket?: TicketData;
  isError?: boolean;
}

interface ChatContainerProps {
  messages: Message[];
}

export function ChatContainer({ messages }: ChatContainerProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6">
      <div className="max-w-4xl mx-auto space-y-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            role={message.role}
            content={message.content}
            ticket={message.ticket}
            isError={message.isError}
          />
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
