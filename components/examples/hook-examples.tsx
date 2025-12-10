'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/components/hooks/use-debounce';
import { useTimer } from '@/components/hooks/use-timer';

export function UseDebounceBasic() {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  const debouncedUpdate = useDebounce((val: string) => {
    setDebouncedValue(val);
  }, 500);

  return (
    <div className="space-y-4 p-4">
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          debouncedUpdate(e.target.value);
        }}
        placeholder="Type to see debouncing..."
      />
      <div className="text-sm">
        <p className="text-muted-foreground">Current: {value}</p>
        <p className="text-primary">Debounced (500ms): {debouncedValue}</p>
      </div>
    </div>
  );
}

export function UseDebounceWithCancel() {
  const [value, setValue] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const debouncedSearch = useDebounce((val: string) => {
    if (val) {
      setResults([`Result for "${val}"`]);
    } else {
      setResults([]);
    }
  }, 300);

  const handleReset = () => {
    setValue('');
    setResults([]);
    debouncedSearch.cancel();
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex gap-2">
        <Input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            debouncedSearch(e.target.value);
          }}
          placeholder="Search..."
        />
        <Button onClick={handleReset} variant="outline">
          Reset
        </Button>
      </div>
      {results.length > 0 && (
        <div className="text-sm text-muted-foreground">
          {results.map((result, i) => (
            <p key={i}>{result}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export function UseTimerBasic() {
  const [message, setMessage] = useState('');

  const timer = useTimer({
    delay: 3000,
    onTimeout: () => setMessage('Timer completed!'),
  });

  return (
    <div className="space-y-4 p-4">
      <Button onClick={timer.start}>Start 3s Timer</Button>
      {timer.isActive && (
        <p className="text-sm text-muted-foreground">
          Time remaining: {(timer.remainingTime / 1000).toFixed(1)}s
        </p>
      )}
      {message && <p className="text-sm text-green-500">{message}</p>}
    </div>
  );
}

export function UseTimerWithControls() {
  const [count, setCount] = useState(0);

  const timer = useTimer({
    delay: 5000,
    onTimeout: () => setCount(c => c + 1),
  });

  return (
    <div className="space-y-4 p-4">
      <div className="flex gap-2">
        <Button onClick={timer.start}>Start</Button>
        <Button onClick={timer.stop} variant="destructive">Stop</Button>
        <Button onClick={() => timer.restart(true)} variant="outline">Restart</Button>
      </div>
      {timer.isActive && (
        <div className="text-sm">
          <p className="text-muted-foreground">Status: Active</p>
          <p className="text-muted-foreground">Remaining: {(timer.remainingTime / 1000).toFixed(1)}s</p>
        </div>
      )}
      <p className="text-sm">Completed count: {count}</p>
    </div>
  );
}
