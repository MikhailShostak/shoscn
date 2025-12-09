'use client';

import { FixedArea } from '@/components/ui/layouts/fixed-area';
import { Grid } from '@/components/ui/layouts/grid';
import { HorizontalBox } from '@/components/ui/layouts/horizontal-box';
import { ImageArea } from '@/components/ui/layouts/image-area';
import { Page } from '@/components/ui/layouts/page';
import { VerticalBox } from '@/components/ui/layouts/vertical-box';

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

export function HorizontalBoxBasic() {
  return (
    <HorizontalBox>
      <div className="h-20 w-full bg-primary/20 rounded flex items-center justify-center">First</div>
      <div className="h-20 w-full bg-primary/20 rounded flex items-center justify-center">Second</div>
      <div className="h-20 w-full bg-primary/20 rounded flex items-center justify-center">Third</div>
    </HorizontalBox>
  );
}

export function HorizontalBoxReversed() {
  return (
    <HorizontalBox reversed>
      <div className="h-20 w-full bg-primary/20 rounded flex items-center justify-center">First (right)</div>
      <div className="h-20 w-full bg-primary/20 rounded flex items-center justify-center">Second (middle)</div>
      <div className="h-20 w-full bg-primary/20 rounded flex items-center justify-center">Third (left)</div>
    </HorizontalBox>
  );
}

export function VerticalBoxBasic() {
  return (
    <VerticalBox>
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">First</div>
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Second</div>
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Third</div>
    </VerticalBox>
  );
}

export function VerticalBoxReversed() {
  return (
    <VerticalBox reversed>
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">First (bottom)</div>
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Second (middle)</div>
      <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Third (top)</div>
    </VerticalBox>
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
