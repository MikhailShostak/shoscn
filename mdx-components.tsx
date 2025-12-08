import type { MDXComponents } from 'mdx/types';
import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold tracking-tight mb-2">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-medium mt-6 mb-2">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-muted-foreground mb-4">{children}</p>
    ),
    code: ({ children, className }) => {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : 'tsx';

      if (className) {
        return <CodeBlock code={String(children).trim()} language={language} />;
      }

      return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {children}
        </code>
      );
    },
    pre: ({ children }) => <>{children}</>,
    table: ({ children, className, ...props }) => (
      <div className="my-6 w-full overflow-x-auto rounded-md border">
        <table className={cn('w-full caption-bottom text-sm', className)} {...props}>
          {children}
        </table>
      </div>
    ),
    thead: TableHeader,
    tbody: TableBody,
    tr: TableRow,
    th: TableHead,
    td: TableCell,
    ComponentPreview,
    CodeBlock,
    ...components,
  };
}