import { useState } from "react";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatContainer } from "@/components/chat/ChatContainer";
import { ChatInput } from "@/components/chat/ChatInput";
import { TicketStatus } from "@/components/chat/StatusBadge";

interface TicketData {
  numero: string;
  asunto: string;
  estado: TicketStatus;
  fechaCreacion: string;
  organismo: string;
  descripcion: string;
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
  "123456": {
    numero: "123456",
    asunto: "Ampliación de Red Cloacal - Zona Sur",
    estado: "revision",
    fechaCreacion: "10/01/2026",
    organismo: "Ministerio de Obras Públicas",
    descripcion:
      "Solicitud de autorización para obra de ampliación de red cloacal en zona sur de la ciudad. Incluye planos técnicos, estudios de impacto ambiental y presupuesto estimado.",
  },
  "2025-001100": {
    numero: "2025-001100",
    asunto: "Habilitación Comercial - Local Gastronómico",
    estado: "encurso",
    fechaCreacion: "05/01/2026",
    organismo: "Secretaría de Comercio",
    descripcion:
      "Trámite de habilitación para apertura de local gastronómico en zona céntrica. Documentación completa presentada.",
  },
  "2024-009876": {
    numero: "2024-009876",
    asunto: "Permiso de Construcción - Vivienda Unifamiliar",
    estado: "pendiente",
    fechaCreacion: "15/12/2024",
    organismo: "Dirección de Obras Particulares",
    descripcion:
      "Se requiere presentación de plano de instalación eléctrica aprobado por ente regulador.",
  },
  "2024-008500": {
    numero: "2024-008500",
    asunto: "Subsidio Educativo - Nivel Superior",
    estado: "finalizado",
    fechaCreacion: "01/11/2024",
    organismo: "Ministerio de Educación",
    descripcion:
      "Solicitud de subsidio para estudiantes de nivel superior. Beneficio otorgado satisfactoriamente.",
  },
  "2024-007200": {
    numero: "2024-007200",
    asunto: "Reclamo por Bache en Vía Pública",
    estado: "sinresolucion",
    fechaCreacion: "20/10/2024",
    organismo: "Secretaría de Obras Públicas",
    descripcion:
      "El reclamo no pudo ser atendido por falta de recursos asignados al área correspondiente.",
  },
  "2025-000050": {
    numero: "2025-000050",
    asunto: "Registro de Marca Comercial",
    estado: "iniciado",
    fechaCreacion: "02/01/2026",
    organismo: "Registro de Propiedad Industrial",
    descripcion:
      "Solicitud de registro de marca comercial para emprendimiento local. Pendiente de asignación.",
  },
};

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "Hola, soy el asistente institucional. Para consultar el estado de una solicitud, ingresá el número de ticket. Por ejemplo: 123456",
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
