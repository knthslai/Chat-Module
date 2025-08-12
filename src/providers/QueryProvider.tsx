import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Platform } from 'react-native';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

interface QueryProviderProps {
  children: React.ReactNode;
}

export const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  // Only render DevTools on web platform
  const [DevTools, setDevTools] = React.useState<React.ComponentType<{
    initialIsOpen?: boolean;
  }> | null>(null);

  React.useEffect(() => {
    if (Platform.OS === 'web') {
      // Dynamic import to avoid bundling DevTools in mobile builds
      import('@tanstack/react-query-devtools').then(
        ({ ReactQueryDevtools }) => {
          setDevTools(() => ReactQueryDevtools);
        }
      );
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {DevTools && <DevTools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};
