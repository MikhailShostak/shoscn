'use client';

import { TypingDots } from '@/components/ui/chat/typing-dots';

export interface ChatMessageProps {
  text: string;
  className?: string;
}

export const ChatMessage = ({ text, className = '' }: ChatMessageProps) => {
  const isLoading = text === '...';

  return (
    <div className={`flex flex-col rounded-md p-2 text-sm ${className}`}>
      {isLoading ? (
        <div className="flex flex-1 gap-1.5 items-center justify-center">
          <TypingDots variant="primary" />
        </div>
      ) : (
        <div className="whitespace-pre-wrap">
          {text.split(/(\*.*?\*)/).map((part, i) =>
            part.startsWith('*') && part.endsWith('*') ? (
              <span key={i} className="text-muted-foreground">{part.slice(1, -1)}</span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
