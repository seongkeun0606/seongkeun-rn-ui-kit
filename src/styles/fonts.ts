import { MD3LightTheme } from 'react-native-paper';
import { MD3Type } from 'react-native-paper/lib/typescript/types';
import { Platform } from 'react-native';

export type CustomFontFamily =
  | 'PretendardBlack'
  | 'PretendardBold'
  | 'PretendardExtraBold'
  | 'PretendardLight'
  | 'PretendardMedium'
  | 'PretendardRegular'
  | 'PretendardSemiBold'
  | 'PretendardThin';

export const FontFamily = {
  PretendardBlack: 'PretendardBlack',
  PretendardBold: 'PretendardBold',
  PretendardExtraBold: 'PretendardExtraBold',
  PretendardLight: 'PretendardLight',
  PretendardMedium: 'PretendardMedium',
  PretendardRegular: 'PretendardRegular',
  PretendardSemiBold: 'PretendardSemiBold',
  PretendardThin: 'PretendardThin',
} as const;

export const fontConfig: Record<string, Partial<MD3Type>> = {
  ...MD3LightTheme.fonts,
  displayLarge: {
    fontFamily: Platform.select({
      web: 'sans-serif',
      android: FontFamily.PretendardBlack,
      ios: FontFamily.PretendardBlack,
      default: FontFamily.PretendardBlack,
    }),
    fontSize: 34,
    lineHeight: 44,
    letterSpacing: 0.3,
  },
  displayMedium: {
    fontFamily: Platform.select({
      web: 'sans-serif',
      android: FontFamily.PretendardBlack,
      ios: FontFamily.PretendardBlack,
      default: FontFamily.PretendardBlack,
    }),
    fontSize: 30,
    lineHeight: 40,
    letterSpacing: 0.3,
  },
  displaySmall: {
    fontFamily: Platform.select({
      web: 'sans-serif',
      android: FontFamily.PretendardExtraBold,
      ios: FontFamily.PretendardExtraBold,
      default: FontFamily.PretendardExtraBold,
    }),
    fontSize: 28,
    letterSpacing: 0.3,
    lineHeight: 36,
  },
  headlineLarge: {
    fontFamily: Platform.select({
      web: 'sans-serif',
      android: FontFamily.PretendardBold,
      ios: FontFamily.PretendardBold,
      default: FontFamily.PretendardBold,
    }),
    fontSize: 26,
    lineHeight: 36,
    letterSpacing: 0.3,
  },
  headlineMedium: {
    fontFamily: Platform.select({
      web: 'sans-serif',
      android: FontFamily.PretendardBold,
      ios: FontFamily.PretendardBold,
      default: FontFamily.PretendardBold,
    }),
    fontSize: 24,
    lineHeight: 34,
    letterSpacing: 0.3,
  },
  headlineSmall: {
    fontFamily: Platform.select({
      web: 'sans-serif',
      android: FontFamily.PretendardBold,
      ios: FontFamily.PretendardBold,
      default: FontFamily.PretendardBold,
    }),
    fontSize: 22,
    lineHeight: 32,
    letterSpacing: 0.3,
  },
  titleLarge: {
    fontFamily: Platform.select({
      web: 'sans-serif',
      android: FontFamily.PretendardSemiBold,
      ios: FontFamily.PretendardSemiBold,
      default: FontFamily.PretendardSemiBold,
    }),
    fontSize: 22,
    lineHeight: 30,
    letterSpacing: 0.15,
  },
  titleMedium: {
    fontFamily: Platform.select({
      web: 'sans-serif',
      android: FontFamily.PretendardMedium,
      ios: FontFamily.PretendardMedium,
      default: FontFamily.PretendardMedium,
    }),
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.15,
  },
  titleSmall: {
    fontFamily: Platform.select({
      web: 'sans-serif',
      android: FontFamily.PretendardMedium,
      ios: FontFamily.PretendardMedium,
      default: FontFamily.PretendardMedium,
    }),
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: 0.15,
  },
  labelLarge: {
    fontFamily: Platform.select({
      web: 'sans-serif',
      android: FontFamily.PretendardRegular,
      ios: FontFamily.PretendardRegular,
      default: FontFamily.PretendardRegular,
    }),
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.3,
  },
  labelMedium: {
    fontFamily: Platform.select({
      web: 'sans-serif',
      android: FontFamily.PretendardRegular,
      ios: FontFamily.PretendardRegular,
      default: FontFamily.PretendardRegular,
    }),
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.3,
  },
  labelSmall: {
    fontFamily: Platform.select({
      web: 'sans-serif',
      android: FontFamily.PretendardRegular,
      ios: FontFamily.PretendardRegular,
      default: FontFamily.PretendardRegular,
    }),
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  bodyLarge: {
    fontFamily: Platform.select({
      web: 'sans-serif',
      android: FontFamily.PretendardLight,
      ios: FontFamily.PretendardLight,
      default: FontFamily.PretendardLight,
    }),
    fontSize: 16,
    letterSpacing: 0.3,
    lineHeight: 22,
  },
  bodyMedium: {
    fontFamily: Platform.select({
      web: 'sans-serif',
      android: FontFamily.PretendardLight,
      ios: FontFamily.PretendardLight,
      default: FontFamily.PretendardLight,
    }),
    fontSize: 14,
    letterSpacing: 0.3,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: Platform.select({
      web: 'sans-serif',
      android: FontFamily.PretendardLight,
      ios: FontFamily.PretendardLight,
      default: FontFamily.PretendardLight,
    }),
    fontSize: 12,
    letterSpacing: 0.3,
    lineHeight: 18,
  },
} as const;

export default fontConfig;
