import Link from 'next/link';

import { DocsLayout } from '@/components/docs-layout';
import { StatusIndicator } from '@/components/status-indicator/status-indicator';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const components = [
  {
    name: 'Status Indicator',
    slug: 'status-indicator',
    description: 'An animated status indicator with multiple color variants',
    preview: <StatusIndicator variant="success" />,
  },
];

export default function ComponentsPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Components</h1>
          <p className="text-lg text-muted-foreground">
            Browse and install custom components from this registry.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((component) => (
            <Link key={component.slug} href={`/components/${component.slug}`}>
              <Card className="h-full transition-colors hover:border-primary">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-center h-20">
                    {component.preview}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {component.name}
                  </CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </DocsLayout>
  );
}
