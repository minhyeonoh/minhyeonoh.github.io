import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';

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
  colors: {
    zinc: [
      "#fafafa",
      "#f4f4f5",
      "#e4e4e7",
      "#d4d4d8",
      "#a1a1aa",
      "#52525b",
      "#3f3f46",
      "#27272a",
      "#18181b",
      "#09090b",
      "#71717A"
    ],
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
