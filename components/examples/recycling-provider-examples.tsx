'use client';

import { RecyclingProvider } from '@/components/providers/recycling-provider';

export function RecyclingProviderBasic() {
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="p-4">
      <RecyclingProvider items={items} itemsPerPage={20}>
        {({ visibleItems, scrollRef, onScroll }) => (
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="h-[400px] overflow-auto border rounded-lg p-4 space-y-2"
          >
            {visibleItems.map((item, index) => (
              <div key={index} className="p-2 bg-muted rounded">
                {item}
              </div>
            ))}
          </div>
        )}
      </RecyclingProvider>
    </div>
  );
}

export function RecyclingProviderWithObjects() {
  interface User {
    id: number;
    name: string;
    email: string;
  }

  const items: User[] = Array.from({ length: 500 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
  }));

  return (
    <div className="p-4">
      <RecyclingProvider items={items} itemsPerPage={15}>
        {({ visibleItems, scrollRef, onScroll }) => (
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="h-[400px] overflow-auto border rounded-lg"
          >
            <div className="divide-y">
              {visibleItems.map((user) => (
                <div key={user.id} className="p-4 hover:bg-muted/50">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </RecyclingProvider>
    </div>
  );
}

export function RecyclingProviderCustomStyling() {
  const items = Array.from({ length: 2000 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    description: `Description for item ${i + 1}`,
  }));

  return (
    <div className="p-4">
      <RecyclingProvider items={items} itemsPerPage={25}>
        {({ visibleItems, scrollRef, onScroll }) => (
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="h-[500px] overflow-auto border rounded-lg bg-background"
          >
            <div className="grid gap-4 p-4">
              {visibleItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </RecyclingProvider>
    </div>
  );
}
