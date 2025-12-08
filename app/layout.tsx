import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

import { SiteHeader } from '@/components/site-header';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Shoscn Registry',
  description: 'A collection of custom components built with shadcn/ui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
