import type { Metadata, Viewport } from "next";
import { Bruno_Ace_SC, Lato, Rouge_Script } from "next/font/google";
import "./globals.css";

// font-[family-name:var(--font-rouge)]
const rouge = Rouge_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rouge",
});
// font-[family-name:var(--font-lato)]
const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato",
});

// font-[family-name:var(--font-bruno)]
const bruno = Bruno_Ace_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bruno",
});

export const metadata: Metadata = {
  title: "The Serendipitys of Arts",
  description: "discover the serendipitys of arts",
  keywords: [
    "arts",
    "serendipity",
    "music",
    "painting",
    "sculpture",
    "poetry",
    "literature",
    "dance",
    "theater",
    "film",
    "photography",
    "architecture",
    "institue",
    "chicago",
    "illinois",
  ],
  authors: [{ name: "Lilian Brossard" }],
  robots: "index, follow",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rouge.variable} ${lato.variable} ${bruno.variable} antialiased font-[family-name:var(--font-lato)] scrolling-smooth selection:bg-red-200 selection:text-inherit bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
