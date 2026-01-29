import { cn } from '@/lib/utils';

export type FlexDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse';
export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export interface FlexProps extends React.ComponentProps<"div"> {
  justify?: JustifyContent;
  align?: AlignItems;
  row?: boolean;
  reversed?: boolean;
  withPaddings?: boolean;
  expanded?: boolean;
  className?: string;
}

const justifyContentClasses: Record<JustifyContent, string> = {
  'start': 'justify-start',
  'end': 'justify-end',
  'center': 'justify-center',
  'between': 'justify-between',
  'around': 'justify-around',
  'evenly': 'justify-evenly',
};

const alignItemsClasses: Record<AlignItems, string> = {
  'start': 'items-start',
  'end': 'items-end',
  'center': 'items-center',
  'baseline': 'items-baseline',
  'stretch': 'items-stretch',
};

export function Flex({
  justify = 'start',
  align = 'stretch',
  row,
  reversed,
  withPaddings,
  expanded,
  className,
  ...props
}: FlexProps) {
  const direction = `${row ? 'flex-row' : 'flex-col'}${reversed ? '-reverse' : ''}`;
  return (
    <div
      className={cn(
        'flex',
        direction,
        justifyContentClasses[justify],
        alignItemsClasses[align],
        withPaddings && 'p-(--flex-padding) gap-(--flex-gap)',
        expanded && 'flex-1',
        className
      )}
      {...props}
    />
  );
}
