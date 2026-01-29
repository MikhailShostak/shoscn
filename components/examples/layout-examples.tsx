'use client';

import { FixedArea } from '@/components/ui/layouts/fixed-area';
import { Flex } from '@/components/ui/layouts/flex';
import { Grid } from '@/components/ui/layouts/grid';
import { ImageArea } from '@/components/ui/layouts/image-area';
import { NamedSection } from '@/components/ui/layouts/named-section';
import { Page } from '@/components/ui/layouts/page';

export function FlexRow() {
  return (
    <Flex row className="gap-4">
      <div className="h-20 w-full bg-primary/20 rounded flex items-center justify-center">First</div>
      <div className="h-20 w-full bg-primary/20 rounded flex items-center justify-center">Second</div>
      <div className="h-20 w-full bg-primary/20 rounded flex items-center justify-center">Third</div>
    </Flex>
  );
}

export function FlexRowReverse() {
  return (
    <Flex row reversed className="gap-4">
      <div className="h-20 w-full bg-primary/20 rounded flex items-center justify-center">First (right)</div>
      <div className="h-20 w-full bg-primary/20 rounded flex items-center justify-center">Second (middle)</div>
      <div className="h-20 w-full bg-primary/20 rounded flex items-center justify-center">Third (left)</div>
    </Flex>
  );
}

export function FlexCol() {
  return (
    <Flex className="gap-4">
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">First</div>
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Second</div>
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Third</div>
    </Flex>
  );
}

export function FlexColReverse() {
  return (
    <Flex reversed className="gap-4">
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">First (bottom)</div>
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Second (middle)</div>
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Third (top)</div>
    </Flex>
  );
}

export function GridBasic() {
  return (
    <Grid>
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Item 1</div>
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Item 2</div>
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Item 3</div>
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Item 4</div>
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Item 5</div>
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Item 6</div>
    </Grid>
  );
}

export function PageBasic() {
  return (
    <div className="h-64 border rounded overflow-hidden">
      <Page>
        <h1 className="text-2xl font-bold mb-4">Page Title</h1>
        <p>This is the page content with automatic padding.</p>
      </Page>
    </div>
  );
}

export function FixedAreaBasic() {
  return (
    <div className="h-64 border rounded overflow-hidden relative">
      <FixedArea>
        <div className="text-center">
          <h2 className="text-xl font-bold">Centered Content</h2>
          <p className="text-muted-foreground">This content is perfectly centered</p>
        </div>
      </FixedArea>
    </div>
  );
}

export function FixedAreaStyled() {
  return (
    <div className="h-64 border rounded overflow-hidden relative">
      <FixedArea className="bg-gradient-to-br from-blue-500/20 to-purple-600/20">
        <div className="text-center">
          <h2 className="text-xl font-bold">Stylized Container</h2>
          <p className="text-muted-foreground">With gradient background</p>
        </div>
      </FixedArea>
    </div>
  );
}

export function ImageAreaBasic() {
  return (
    <div className="h-64 border rounded overflow-hidden relative">
      <ImageArea src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='400' height='300'/%3E%3C/svg%3E">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Welcome</h1>
          <p className="text-xl">Beautiful blurred background</p>
        </div>
      </ImageArea>
    </div>
  );
}

export function NamedSectionBasic() {
  return (
    <div className="p-4">
      <NamedSection title="User Information">
        <div className="space-y-2">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john@example.com</p>
        </div>
      </NamedSection>
    </div>
  );
}

export function NamedSectionWithMenu() {
  return (
    <div className="p-4">
      <NamedSection
        title="Settings"
        menu={
          <button className="text-sm text-muted-foreground hover:text-foreground">
            Edit
          </button>
        }
      >
        <div className="space-y-2">
          <p>Setting 1: Enabled</p>
          <p>Setting 2: Disabled</p>
        </div>
      </NamedSection>
    </div>
  );
}
