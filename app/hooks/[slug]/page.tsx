import fs from 'fs';
import path from 'path';

import fm from 'front-matter';

import { DocsLayout } from '@/components/docs-layout';
import { getAllMDXSlugs } from '@/lib/mdx';

export async function generateStaticParams() {
  const slugs = getAllMDXSlugs('docs/hooks');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', 'docs', 'hooks', `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { attributes } = fm<{ title: string; description: string }>(fileContent);

  return {
    title: attributes.title,
    description: attributes.description,
  };
}

export default async function HookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', 'docs', 'hooks', `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { attributes } = fm<{ title: string; description: string }>(fileContent);

  const Content = (await import(`@/content/docs/hooks/${slug}.mdx`)).default;

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">{attributes.title}</h1>
          <p className="text-lg text-muted-foreground">{attributes.description}</p>
        </div>
        <Content />
      </div>
    </DocsLayout>
  );
}
