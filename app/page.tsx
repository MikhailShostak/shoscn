import Link from 'next/link';

import { CodeBlock } from '@/components/code-block';
import { DocsLayout } from '@/components/docs-layout';

export default function Home() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Introduction</h1>
          <p className="text-lg text-muted-foreground">
            A collection of custom components built with shadcn/ui. Copy and paste components into your project.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Quick Start</h2>
          <p>Install components from this registry using the shadcn CLI:</p>
          <CodeBlock code="npx shadcn@latest add https://mikhailshostak.github.io/shoscn/r/status-indicator.json" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Configuration</h2>
          <p>Add this registry to your <code className="bg-muted px-2 py-1 rounded text-sm">components.json</code>:</p>
          <CodeBlock code={`{
  "registries": {
    "@shoscn": "https://mikhailshostak.github.io/shoscn/r/{name}.json"
  }
}`} />
          <p className="text-sm text-muted-foreground">
            Then install components using the registry prefix: <code className="bg-muted px-2 py-1 rounded">npx shadcn@latest add @shoscn/status-indicator</code>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Browse Components</h2>
          <p>
            Explore the available components in the sidebar or visit the{' '}
            <Link href="/components" className="text-primary hover:underline">
              components page
            </Link>
            .
          </p>
        </section>
      </div>
    </DocsLayout>
  );
}
