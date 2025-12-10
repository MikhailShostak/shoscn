'use client';

import { useState } from 'react';

import { ChatInput } from '@/components/ui/chat/chat-input';
import { ChatMessage } from '@/components/ui/chat/chat-message';

export function ChatInputBasic() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = (text: string) => {
    setMessages([...messages, text]);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="space-y-2 min-h-[100px]">
        {messages.map((msg, i) => (
          <div key={i} className="p-2 bg-muted rounded text-sm">
            {msg}
          </div>
        ))}
      </div>
      <ChatInput
        value={message}
        onValueChange={setMessage}
        onSend={handleSend}
      />
    </div>
  );
}

export function ChatInputCustomPlaceholder() {
  const [message, setMessage] = useState('');

  return (
    <div className="p-4">
      <ChatInput
        value={message}
        onValueChange={setMessage}
        onSend={(text) => console.log('Sent:', text)}
        placeholder="Type your message here..."
      />
    </div>
  );
}

export function ChatMessageBasic() {
  return (
    <div className="p-4">
      <ChatMessage
        text="Hello, how can I help you?"
        className="bg-muted"
      />
    </div>
  );
}

export function ChatMessageLoading() {
  return (
    <div className="p-4">
      <ChatMessage
        text="..."
        className="bg-muted"
      />
    </div>
  );
}

export function ChatMessageFormatted() {
  return (
    <div className="p-4">
      <ChatMessage
        text="Hello! *waves* How are you today?"
        className="bg-primary text-primary-foreground"
      />
    </div>
  );
}

export function ChatConversation() {
  const messages = [
    { text: 'Hello!', sender: 'user' },
    { text: '...', sender: 'bot' },
    { text: 'Hi! *waves* How can I help?', sender: 'bot' },
    { text: 'Can you help me with something?', sender: 'user' },
    { text: 'Of course! *smiles* What do you need?', sender: 'bot' },
  ];

  return (
    <div className="p-4 space-y-2">
      {messages.map((msg, i) => (
        <ChatMessage
          key={i}
          text={msg.text}
          className={
            msg.sender === 'user'
              ? 'bg-primary text-primary-foreground ml-auto max-w-[80%]'
              : 'bg-muted max-w-[80%]'
          }
        />
      ))}
    </div>
  );
}
