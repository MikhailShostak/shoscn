'use client';

import { Check, Copy } from 'lucide-react';
import { useState, useEffect } from 'react';
import { codeToHtml } from 'shiki';

import { Button } from '@/components/ui/button';


interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  withPreview?: boolean;
}

export function CodeBlock({ code, language = 'tsx', showLineNumbers = true, withPreview = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [html, setHtml] = useState('');

  useEffect(() => {
    const highlight = async () => {
      try {
        const lineCount = code.split('\n').length;
        const maxDigits = lineCount.toString().length;

        const result = await codeToHtml(code, {
          lang: language,
          theme: 'github-dark-default',
        });

        if (showLineNumbers) {
          const withLineNumbers = result
            .replace(/<code>/, `<code data-line-numbers data-line-numbers-max-digits="${maxDigits}">`)
            .replace(/<span class="line">/g, '<span class="line" data-line>');
          setHtml(withLineNumbers);
        } else {
          setHtml(result);
        }
      } catch {
        setHtml(`<pre><code>${code}</code></pre>`);
      }
    };
    highlight();
  }, [code, language, showLineNumbers]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <Button
        size="sm"
        variant="ghost"
        onClick={copyToClipboard}
        className="absolute right-4 top-4 h-7 w-7 p-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      </Button>
      <div
        className={`overflow-x-auto bg-zinc-950 [&_pre]:p-4 [&_pre]:m-0 [&_code]:text-sm ${
          withPreview
            ? 'rounded-b-lg border border-t-0'
            : 'rounded-lg border'
        }`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
