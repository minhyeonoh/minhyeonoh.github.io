import '@mantine/core/styles.css';
import "katex/dist/katex.min.css";
import "./globals.css";

import type { Metadata } from "next";
import { 
  ColorSchemeScript, 
  createTheme,
  mantineHtmlProps, 
  MantineProvider 
} from '@mantine/core';

export const metadata: Metadata = {
  title: "Minhyeon Oh",
  description: "Minhyeon Oh's blog",
};

const theme = createTheme({
  /** Put your mantine theme override here */
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
