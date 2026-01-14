import { useState } from "react";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatContainer } from "@/components/chat/ChatContainer";
import { ChatInput } from "@/components/chat/ChatInput";
import { TicketStatus } from "@/components/chat/StatusBadge";

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

// Datos de ejemplo para la maqueta
const mockTickets: Record<string, TicketData> = {
  "12345678": {
    numero: "12345678",
    estado: "encurso",
    descripcion: "La solicitud se encuentra en tratamiento por el área responsable.",
    ultimaActualizacion: "10/04/2024",
    mesaTrabajo: "Gestión Administrativa",
  },
  "11111111": {
    numero: "11111111",
    estado: "iniciado",
    descripcion: "La solicitud ha sido registrada y está pendiente de asignación.",
    ultimaActualizacion: "08/04/2024",
    mesaTrabajo: "Mesa de Entrada",
  },
  "22222222": {
    numero: "22222222",
    estado: "revision",
    descripcion: "La documentación presentada está siendo revisada por el equipo técnico.",
    ultimaActualizacion: "09/04/2024",
    mesaTrabajo: "Control Documental",
  },
  "33333333": {
    numero: "33333333",
    estado: "pendiente",
    descripcion: "Se requiere documentación adicional para continuar con el trámite.",
    ultimaActualizacion: "07/04/2024",
    mesaTrabajo: "Gestión Administrativa",
  },
  "44444444": {
    numero: "44444444",
    estado: "finalizado",
    descripcion: "El trámite ha sido completado satisfactoriamente.",
    ultimaActualizacion: "05/04/2024",
    mesaTrabajo: "Resoluciones",
  },
  "55555555": {
    numero: "55555555",
    estado: "sinresolucion",
    descripcion: "El trámite no pudo ser resuelto debido a inconsistencias en la documentación.",
    ultimaActualizacion: "03/04/2024",
    mesaTrabajo: "Gestión Administrativa",
  },
};

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "Hola, soy el asistente institucional. Para consultar el estado de una solicitud, ingresá el número de ticket.",
  },
  {
    id: "2",
    role: "user",
    content: "12345678",
  },
  {
    id: "3",
    role: "assistant",
    content: "Encontré la siguiente información para el ticket consultado:",
    ticket: mockTickets["12345678"],
  },
  {
    id: "4",
    role: "user",
    content: "99999999",
  },
  {
    id: "5",
    role: "assistant",
    content:
      "No se encontró una solicitud con el número de ticket ingresado. Verificá el identificador o realizá una nueva consulta.",
    isError: true,
  },
];

export default function Index() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simular respuesta del asistente
    setTimeout(() => {
      const ticket = mockTickets[content];

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: ticket
          ? "Encontré la siguiente información para el ticket consultado:"
          : "No se encontró una solicitud con el número de ticket ingresado. Verificá el identificador o realizá una nueva consulta.",
        ticket: ticket,
        isError: !ticket,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    }, 800);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <ChatHeader />
      <ChatContainer messages={messages} />
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}
