import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !disabled) {
      onSend(value.trim());
      setValue("");
    }
  };

  return (
    <div className="border-t border-border bg-card px-4 py-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto flex items-center gap-3"
      >
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ingresá el número de ticket…"
          className="flex-1 h-12 text-base input-institutional"
          disabled={disabled}
        />
        <Button
          type="submit"
          disabled={!value.trim() || disabled}
          className="h-12 px-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium"
        >
          <Send className="w-4 h-4 mr-2" />
          Enviar
        </Button>
      </form>
    </div>
  );
}
