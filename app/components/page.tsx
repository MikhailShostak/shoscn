import Link from 'next/link';

import { DocsLayout } from '@/components/docs-layout';
import IFrame from '@/components/ui/utils/iframe';
import { SearchableDropdown } from '@/components/ui/input/searchable-dropdown';
import { Spinner } from '@/components/ui/utils/spinner';
import { StatusIndicator } from '@/components/ui/utils/status-indicator';
import { TypingDots } from '@/components/ui/chat/typing-dots';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const components = [
  {
    name: 'IFrame',
    slug: 'iframe',
    description: 'A flexible iframe component with support for URL or port-based sources',
    preview: <div className="w-32 h-20 border rounded"><IFrame title="Preview" url="about:blank" /></div>,
  },
  {
    name: 'Searchable Dropdown',
    slug: 'searchable-dropdown',
    description: 'A searchable dropdown component with support for groups, subgroups, and custom colors',
    preview: <SearchableDropdown value="" onChange={() => {}} options={['Option 1', 'Option 2', 'Option 3']} placeholder="Select..." />,
  },
  {
    name: 'Spinner',
    slug: 'spinner',
    description: 'A loading spinner component',
    preview: <Spinner />,
  },
  {
    name: 'Status Indicator',
    slug: 'status-indicator',
    description: 'An animated status indicator with multiple color variants',
    preview: <StatusIndicator variant="success" />,
  },
  {
    name: 'Typing Dots',
    slug: 'typing-dots',
    description: 'An animated typing indicator with customizable size and color variants',
    preview: <TypingDots />,
  },
  {
    name: 'Video Loop',
    slug: 'video-loop',
    description: 'A video player that loops through multiple videos with fade transitions',
    preview: <div className="w-32 h-20 border rounded bg-muted flex items-center justify-center text-xs text-muted-foreground">Video Loop</div>,
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
