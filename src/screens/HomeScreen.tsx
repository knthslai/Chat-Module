import { Stack } from '@tamagui/core';
import { Header, Chat } from '../components';

export const HomeScreen = () => {
  return (
    <Stack flex={1} backgroundColor="$color4" paddingHorizontal="$2">
      <Header />
      <Chat />
    </Stack>
  );
};
