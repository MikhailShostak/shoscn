'use client';

export interface PageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return (
    <div className="flex-1 p-2">
      {children}
    </div>
  );
};

export default Page;
