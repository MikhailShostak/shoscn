import { cn } from '@/lib/utils';

export interface FixedAreaProps {
  children: React.ReactNode;
  className?: string;
}

export const FixedArea = ({ children, className }: FixedAreaProps) => {
  return (
    <div className="relative flex-1">
      <div className={cn('absolute inset-0 flex items-center justify-center', className)}>
        {children}
      </div>
    </div>
  );
};

export default FixedArea;
