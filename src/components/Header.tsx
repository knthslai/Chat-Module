import { Stack, Text } from '@tamagui/core';

export const Header = () => {
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="$color1"
      padding="$3"
    >
      <Stack>
        <Text fontSize="$4" fontWeight="bold" color="$color" textAlign="center">
          Chat Module Demo
        </Text>
      </Stack>
    </Stack>
  );
};
