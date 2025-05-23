import '@mantine/core/styles.css';
import "katex/dist/katex.min.css";
import "./globals.css";

import type { Metadata } from "next";
import { Figtree, Roboto_Mono } from "next/font/google";
import { 
  ColorSchemeScript, 
  createTheme,
  DEFAULT_THEME,
  mantineHtmlProps, 
  MantineProvider 
} from '@mantine/core';

export const metadata: Metadata = {
  title: "Minhyeon Oh",
  description: "Minhyeon Oh's blog",
};

const body = Figtree({ subsets: ['latin'] });
const heading = Figtree({ subsets: ['latin'] });
const mono = Roboto_Mono({ subsets: ['latin'] });

const theme = createTheme({
  fontFamily: `${body.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  fontFamilyMonospace: `Monaco, ${mono.style.fontFamily}, monospace`,
  headings: {
    fontFamily: `${heading.style.fontFamily}, ${DEFAULT_THEME.fontFamily}` 
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
