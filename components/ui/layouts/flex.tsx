export type FlexDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse';
export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export interface FlexProps {
  children: React.ReactNode;
  direction?: FlexDirection;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: string;
}

const flexDirectionClasses: Record<FlexDirection, string> = {
  'row': 'flex flex-row',
  'row-reverse': 'flex flex-row-reverse',
  'col': 'flex flex-col',
  'col-reverse': 'flex flex-col-reverse',
};

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

export const Flex = ({
  children,
  direction = 'row',
  justify = 'start',
  align = 'start',
  gap = 'gap-4'
}: FlexProps) => {
  return (
    <div className={`${flexDirectionClasses[direction]} ${justifyContentClasses[justify]} ${alignItemsClasses[align]} ${gap}`}>
      {children}
    </div>
  );
};

export default Flex;