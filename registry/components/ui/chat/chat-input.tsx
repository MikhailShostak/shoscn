'use client';

import { Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export interface ChatInputProps {
  value: string;
  onValueChange: (text: string) => void;
  onSend: (text: string) => void;
  placeholder?: string;
}

export const ChatInput = ({ value, onValueChange, onSend, placeholder = 'Write a message...' }: ChatInputProps) => {
  const handleSend = () => {
    if (!value.trim()) {
      return;
    }
    onSend(value);
    onValueChange('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex gap-2 w-full items-end">
      <Textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 resize-none min-h-0"
      />
      <Button onClick={handleSend} disabled={!value}>
        <Send className="h-4 w-4" />
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
