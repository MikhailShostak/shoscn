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
    subsections: [
      {
        title: 'Chat',
        items: [
          { title: 'Typing Dots', href: '/components/typing-dots' },
        ],
      },
      {
        title: 'Input',
        items: [
          { title: 'Searchable Dropdown', href: '/components/searchable-dropdown' },
        ],
      },
      {
        title: 'Layouts',
        items: [
          { title: 'Fixed Area', href: '/components/fixed-area' },
          { title: 'Grid', href: '/components/grid' },
          { title: 'Horizontal Box', href: '/components/horizontal-box' },
          { title: 'Image Area', href: '/components/image-area' },
          { title: 'Named Section', href: '/components/named-section' },
          { title: 'Page', href: '/components/page' },
          { title: 'Vertical Box', href: '/components/vertical-box' },
        ],
      },
      {
        title: 'Media',
        items: [
          { title: 'Video Loop', href: '/components/video-loop' },
        ],
      },
      {
        title: 'Utils',
        items: [
          { title: 'IFrame', href: '/components/iframe' },
          { title: 'Spinner', href: '/components/spinner' },
          { title: 'Status Indicator', href: '/components/status-indicator' },
        ],
      },
    ],
  },
  {
    title: 'Hooks',
    items: [
      { title: 'useDebounce', href: '/hooks/use-debounce' },
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
          {'subsections' in section && section.subsections ? (
            <div className="space-y-3">
              {section.subsections.map((subsection) => (
                <div key={subsection.title}>
                  <h5 className="mb-1 rounded-md px-2 py-1 text-xs font-medium text-muted-foreground">{subsection.title}</h5>
                  <div className="grid grid-flow-row auto-rows-max text-sm">
                    {subsection.items.map((item) => (
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
            </div>
          ) : (
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
          )}
        </div>
      ))}
    </aside>
  );
}
