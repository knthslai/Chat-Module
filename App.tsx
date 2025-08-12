import { QueryProvider } from './src/providers/QueryProvider';
import { HomeScreen } from './src/screens/HomeScreen';

export default function App() {
  return (
    <QueryProvider>
      <HomeScreen />
    </QueryProvider>
  );
}
