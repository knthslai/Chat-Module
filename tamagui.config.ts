import { createTamagui } from '@tamagui/core';
import { shorthands } from '@tamagui/shorthands';
import { themes, tokens } from '@tamagui/themes';

const config = createTamagui({
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  themes,
  tokens,
});

export type AppConfig = typeof config;

export default config;
