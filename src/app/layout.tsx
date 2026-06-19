import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Space_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display-custom",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans-custom",
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono-custom-var",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SSWIBE — South Sudan Women in the Built Environment",
  description:
    "A professional collective of female South Sudanese architects, planners, and engineers shaping the future of the built environment. Founded August 2025.",
  keywords: [
    "SSWIBE",
    "South Sudan",
    "women architects",
    "built environment",
    "engineering",
    "architecture",
    "urban planning",
  ],
  openGraph: {
    title: "SSWIBE — Elevating Women, Shaping Spaces",
    description:
      "Founded August 2025. Mentorship, careers, and community for women in South Sudan's built environment.",
    url: "https://sswibe.space",
    siteName: "SSWIBE",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSWIBE — Elevating Women, Shaping Spaces",
    description:
      "Professional collective of female architects, planners & engineers building South Sudan's future.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${dmSans.variable} ${spaceMono.variable} bg-background text-foreground antialiased`}
        style={{
          fontFamily:
            "var(--font-sans-custom), ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
