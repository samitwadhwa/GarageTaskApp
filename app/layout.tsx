import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Header } from "../components/header";
import { CursorLightEffect } from "../components/cursor-light-effect";

export const metadata: Metadata = {
  title: "CRED Garage Dashboard",
  description: "A modern dashboard inspired by CRED Garage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider>
        <body className="antialiased bg-zinc-50 dark:bg-zinc-950">
          <CursorLightEffect />
          <Header />
          <main className="p-4">{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
