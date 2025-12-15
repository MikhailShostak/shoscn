'use client';

import { useEffect, useRef, useState } from 'react';

import { Textarea } from '@/components/ui/textarea';
import { useDebounce } from '@/components/hooks/use-debounce';

export interface ControlledTextareaProps extends Omit<React.ComponentProps<typeof Textarea>, 'onChange' | 'onBlur' | 'onKeyDown'> {
  onValueChanged?: (value: string) => void;
  onAccepted?: (value: string) => void;
  value?: string;
}

export function ControlledTextarea({ value, onValueChanged, onAccepted, ...props }: ControlledTextareaProps) {
  const [text, setText] = useState('');
  const lastValueRef = useRef(value);

  useEffect(() => {
    setText(value || '');
    if (value !== lastValueRef.current) {
      lastValueRef.current = value;
    }
  }, [value]);

  const debouncedChange = useDebounce((value: string) => {
    if (onValueChanged) {
      onValueChanged(value);
    }
  }, 500);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setText(newValue);
    debouncedChange(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== 'Enter' || e.shiftKey) {
      return;
    }
    if (!onAccepted) {
      return;
    }

    e.preventDefault();
    debouncedChange.cancel();

    if (onValueChanged) {
      onValueChanged(text);
    }
    if (onAccepted) {
      onAccepted(text);
    }
  };

  return (
    <Textarea
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
}

export default ControlledTextarea;
