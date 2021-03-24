import { create } from '@storybook/theming';
import themes from '@naturacosmeticos/natds-themes';

export const buildTheme = (theme, mode) => create({
  appBg: theme.color.surface,
  appContentBg: theme.color.background,
  barBg: theme.color.surface,
  barTextColor: theme.color.highEmphasis,
  base: mode,
  brandImage: 'https://placehold.it/350x150',
  brandTitle: 'Natura Design System',
  colorPrimary: theme.color.primary,
  colorSecondary: theme.color.secondary,
  textColor: theme.color.highEmphasis,
  textInverseColor: theme.color.lowEmphasis,
  fontBase: 'Roboto, sans-serif'
})

export const dark = buildTheme(themes.natura.dark, 'dark');
export const light = buildTheme(themes.natura.light, 'light');
