'use client';

import { ReactNode } from 'react';
import { RecyclingProvider } from '@/components/providers/recycling-provider';
import { ScrollArea } from '@/components/ui/layouts/scroll-area';

interface RecyclingViewBaseProps<T> {
  items: T[];
  itemsPerPage?: number;
  className?: string;
  innerClassName?: string;
}

interface RecyclingViewRenderItemProps<T> extends RecyclingViewBaseProps<T> {
  renderItem: (item: T, index: number) => ReactNode;
  children?: never;
}

interface RecyclingViewChildrenProps<T> extends RecyclingViewBaseProps<T> {
  children: (visibleItems: T[]) => ReactNode;
  renderItem?: never;
}

type RecyclingViewProps<T> = RecyclingViewRenderItemProps<T> | RecyclingViewChildrenProps<T>;

export function RecyclingView<T>({
  items,
  itemsPerPage = 20,
  className,
  innerClassName,
  ...props
}: RecyclingViewProps<T>) {
  return (
    <RecyclingProvider items={items} itemsPerPage={itemsPerPage}>
      {({ visibleItems, scrollRef, onScroll }) => (
        <ScrollArea
          className={className}
          innerClassName={innerClassName}
          ref={scrollRef}
          onScroll={onScroll}
        >
          {'children' in props && props.children
            ? props.children(visibleItems)
            : 'renderItem' in props && props.renderItem
              ? visibleItems.map((item, index) => props.renderItem(item, index))
              : null}
        </ScrollArea>
      )}
    </RecyclingProvider>
  );
}
