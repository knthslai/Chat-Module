import { TamaguiProvider } from '@tamagui/core';
import config from './tamagui.config';
import { QueryProvider } from './src/providers/QueryProvider';
import { HomeScreen } from './src/screens/HomeScreen';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaView style={{ flex: 1 }}>
        <QueryProvider>
          <HomeScreen />
        </QueryProvider>
      </SafeAreaView>
    </TamaguiProvider>
  );
}
