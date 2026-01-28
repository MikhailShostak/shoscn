import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Shoscn</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-foreground/80">
            Docs
          </Link>
          <Link
            href="https://github.com/MikhailShostak/shoscn"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground/80"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
}
