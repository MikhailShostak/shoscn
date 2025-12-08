import { SidebarNav } from '@/components/sidebar-nav';

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-6 lg:py-8">
      <div className="items-start lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <SidebarNav />
        <main className="relative w-full min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
