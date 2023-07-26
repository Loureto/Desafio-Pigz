import type { AppProps } from 'next/app';

import GlobalStyles from '@/styles/globals';
import { Theme } from '@/styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
      <GlobalStyles />
    </Theme>
  );
}
