'use client';

import { CodeBlock } from '@/components/code-block';

interface ComponentPreviewProps {
  preview: React.ReactNode;
  code: string;
}

export function ComponentPreview({ preview, code }: ComponentPreviewProps) {
  return (
    <div>
      <div className="border rounded-t-lg p-8 flex items-center justify-center min-h-[200px] bg-background">
        {preview}
      </div>
      <CodeBlock code={code} withPreview />
    </div>
  );
}
