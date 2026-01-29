'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  ChevronRight,
  Code,
  Component,
  Database,
  Layout,
  MessageSquare,
  Play,
  TextCursor,
  Wrench,
} from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from '@/components/ui/sidebar';

const navigation = [
  {
    title: 'Getting Started',
    icon: BookOpen,
    items: [
      { title: 'Introduction', href: '/' },
    ],
  },
  {
    title: 'Components',
    icon: Component,
    subsections: [
      {
        title: 'Chat',
        icon: MessageSquare,
        items: [
          { title: 'Chat Input', href: '/components/chat-input' },
          { title: 'Chat Message', href: '/components/chat-message' },
          { title: 'Typing Dots', href: '/components/typing-dots' },
        ],
      },
      {
        title: 'Input',
        icon: TextCursor,
        items: [
          { title: 'Controlled Input', href: '/components/controlled-input' },
          { title: 'Controlled Textarea', href: '/components/controlled-textarea' },
          { title: 'Searchable Dropdown', href: '/components/searchable-dropdown' },
        ],
      },
      {
        title: 'Layouts',
        icon: Layout,
        items: [
          { title: 'Fixed Area', href: '/components/fixed-area' },
          { title: 'Flex', href: '/components/flex' },
          { title: 'Grid', href: '/components/grid' },
          { title: 'Image Area', href: '/components/image-area' },
          { title: 'Named Section', href: '/components/named-section' },
          { title: 'Page', href: '/components/page' },
        ],
      },
      {
        title: 'Media',
        icon: Play,
        items: [
          { title: 'Video Loop', href: '/components/video-loop' },
        ],
      },
      {
        title: 'Utils',
        icon: Wrench,
        items: [
          { title: 'Grid Size Switcher', href: '/components/grid-size-switcher' },
          { title: 'IFrame', href: '/components/iframe' },
          { title: 'Spinner', href: '/components/spinner' },
          { title: 'Status Indicator', href: '/components/status-indicator' },
        ],
      },
    ],
  },
  {
    title: 'Providers',
    icon: Database,
    items: [
      { title: 'Recycling Provider', href: '/providers/recycling-provider' },
    ],
  },
  {
    title: 'Hooks',
    icon: Code,
    items: [
      { title: 'useDebounce', href: '/hooks/use-debounce' },
      { title: 'useFadeElement', href: '/hooks/use-fade-element' },
      { title: 'useShortcut', href: '/hooks/use-shortcut' },
      { title: 'useTimer', href: '/hooks/use-timer' },
      { title: 'useUrlState', href: '/hooks/use-url-state' },
      { title: 'useVideoLoop', href: '/hooks/use-video-loop' },
    ],
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <SidebarContent>
        {navigation.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>
              <section.icon className="mr-2 h-4 w-4" />
              {section.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              {'subsections' in section && section.subsections ? (
                <SidebarMenu>
                  {section.subsections.map((subsection) => (
                    <Collapsible key={subsection.title} defaultOpen className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton>
                            <subsection.icon className="h-4 w-4" />
                            <span>{subsection.title}</span>
                            <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {subsection.items.map((item) => (
                              <SidebarMenuSubItem key={item.href}>
                                <SidebarMenuSubButton asChild isActive={pathname === item.href}>
                                  <Link href={item.href}>{item.title}</Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ))}
                </SidebarMenu>
              ) : (
                <SidebarMenu>
                  {section.items.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild isActive={pathname === item.href}>
                        <Link href={item.href}>{item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </SidebarProvider>
  );
}