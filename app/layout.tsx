import type { Metadata, Viewport } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "Lumina - Architecture & Interiors",
    template: "%s | Lumina",
  },
  description:
    "We organize light, shadow, and material to create rigorous, atmospheric environments that elevate the human experience.",
  keywords: [
    "interior design",
    "architecture",
    "Lumina",
    "brutalist",
    "minimalist",
    "spatial design",
  ],
  authors: [{ name: "Lumina Collective" }],
  creator: "Lumina",
  publisher: "Lumina Collective",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --font-sans: 'Inter', sans-serif;
                --font-display: 'Space Grotesk', sans-serif;
              }
              .material-symbols-outlined {
                font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
              }
              html.lenis { height: auto; }
              .lenis.lenis-smooth { scroll-behavior: auto !important; }
              .lenis.lenis-smooth [data-lenis-prevent] { overflow: auto; }
              .lenis.lenis-stopped { overflow: hidden; }
              .lenis.lenis-scrolling iframe { pointer-events: none; }
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-full bg-background text-foreground antialiased",
          "font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
