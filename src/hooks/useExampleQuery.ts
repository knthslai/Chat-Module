import { useQuery } from '@tanstack/react-query';

// Example API function - replace with your actual API calls
const fetchExampleData = async (): Promise<string> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 'Data loaded successfully!';
};

export const useExampleQuery = () => {
  return useQuery({
    queryKey: ['example'],
    queryFn: fetchExampleData,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
