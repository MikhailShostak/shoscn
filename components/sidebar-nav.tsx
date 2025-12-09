'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/' },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'IFrame', href: '/components/iframe' },
      { title: 'Searchable Dropdown', href: '/components/searchable-dropdown' },
      { title: 'Spinner', href: '/components/spinner' },
      { title: 'Status Indicator', href: '/components/status-indicator' },
      { title: 'Typing Dots', href: '/components/typing-dots' },
      { title: 'Video Loop', href: '/components/video-loop' },
    ],
  },
  {
    title: 'Hooks',
    items: [
      { title: 'useFadeElement', href: '/hooks/use-fade-element' },
      { title: 'useVideoLoop', href: '/hooks/use-video-loop' },
    ],
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-14 z-30 hidden w-[240px] shrink-0 lg:sticky lg:top-20 lg:block lg:max-h-[calc(100vh-5rem)] lg:overflow-y-auto lg:border-r">
      {navigation.map((section) => (
        <div key={section.title}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{section.title}</h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline',
                  pathname === item.href
                    ? 'font-medium text-foreground'
                    : 'text-muted-foreground'
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}
