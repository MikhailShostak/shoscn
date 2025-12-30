'use client';

import { useState } from 'react';

import { Grid, GridSize } from '@/components/ui/layouts/grid';
import { GridSizeSwitcher } from '@/components/ui/utils/grid-size-switcher';

export function GridSizeSwitcherBasic() {
  const [gridSize, setGridSize] = useState<GridSize>('medium');

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <GridSizeSwitcher value={gridSize} onChange={setGridSize} />
      </div>
      <Grid size={gridSize}>
        <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Item 1</div>
        <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Item 2</div>
        <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Item 3</div>
        <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Item 4</div>
        <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Item 5</div>
        <div className="h-20 bg-primary/20 rounded flex items-center justify-center">Item 6</div>
      </Grid>
    </div>
  );
}
