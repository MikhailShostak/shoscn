'use client';

import { useState } from 'react';

import { ControlledInput } from '@/components/ui/input/controlled-input';
import { ControlledTextarea } from '@/components/ui/input/controlled-textarea';

export function ControlledInputBasic() {
  const [value, setValue] = useState('');

  return (
    <div className="p-4 space-y-2">
      <ControlledInput
        value={value}
        onValueChanged={setValue}
        placeholder="Type something..."
      />
      <p className="text-sm text-muted-foreground">Value: {value}</p>
    </div>
  );
}

export function ControlledInputWithAccept() {
  const [value, setValue] = useState('');
  const [accepted, setAccepted] = useState('');

  return (
    <div className="p-4 space-y-2">
      <ControlledInput
        value={value}
        onValueChanged={setValue}
        onAccepted={setAccepted}
        placeholder="Type and press Enter..."
      />
      <p className="text-sm text-muted-foreground">Current: {value}</p>
      <p className="text-sm text-muted-foreground">Accepted: {accepted}</p>
    </div>
  );
}

export function ControlledTextareaBasic() {
  const [value, setValue] = useState('');

  return (
    <div className="p-4 space-y-2">
      <ControlledTextarea
        value={value}
        onValueChanged={setValue}
        placeholder="Type something..."
        rows={4}
      />
      <p className="text-sm text-muted-foreground">Value: {value}</p>
    </div>
  );
}

export function ControlledTextareaWithAccept() {
  const [value, setValue] = useState('');
  const [accepted, setAccepted] = useState('');

  return (
    <div className="p-4 space-y-2">
      <ControlledTextarea
        value={value}
        onValueChanged={setValue}
        onAccepted={setAccepted}
        placeholder="Type and press Enter (Shift+Enter for new line)..."
        rows={4}
      />
      <p className="text-sm text-muted-foreground">Current: {value}</p>
      <p className="text-sm text-muted-foreground">Accepted: {accepted}</p>
    </div>
  );
}
