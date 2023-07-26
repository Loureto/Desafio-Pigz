import React, { ReactNode } from 'react';

import { DefaultTheme, ThemeProvider } from 'styled-components';

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px: number) => `${round(px / 16)}rem`;

export const theme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    black: '##000000',

    gray200: '#FAFAFA',
    gray300: '#CCCCCC',
    gray400: '#00000052',
    gray500: '##666666',
    gray600: '#676767',
    gray700: '#999999',
    gray800: '#333333',

    orange100: '#FF671F52',
    orange300: '#FF881F',
    orange400: '#FA641E',
    orange500: '#FF671F'
  },
  fontSize: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    base: rem(16),
    lg: rem(18),
    xl: rem(20),
    _2xl: rem(24),
    _3xl: rem(32),
    _4xl: rem(40),
    _5xl: rem(64)
  }
};

interface ThemeProps {
  children: ReactNode;
}

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
