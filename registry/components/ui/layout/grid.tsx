export type GridSize = 'tiny' | 'small' | 'medium' | 'large';

export interface GridProps {
  children: React.ReactNode;
  size?: GridSize;
}

const gridSizeClasses: Record<GridSize, string> = {
  tiny: 'grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-10',
  small: 'grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8',
  medium: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6',
  large: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4',
};

export const Grid = ({ children, size = 'medium' }: GridProps) => {
  return (
    <div className={`${gridSizeClasses[size]} gap-2`}>
      {children}
    </div>
  );
};

export default Grid;
