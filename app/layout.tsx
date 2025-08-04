import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next"; // Vercel Analytics
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

// ✅ Replace this with your actual domain and OG image path (1200x630)
const siteUrl = "https://hms-seven-green.vercel.app/";
const ogImage = "/assets/images/SEO.png";

export const metadata: Metadata = {
  title: "CarePulse",
  description:
    "A healthcare patient management system designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
  icons: {
    icon: "/assets/icons/logo-icon.svg",
    shortcut: "/assets/icons/logo-icon.svg",
    apple: "/assets/icons/logo-icon.svg",
  },

  // ✅ Open Graph Meta Tags
  openGraph: {
    title: "CarePulse - Healthcare Management System",
    description:
      "Manage patients, appointments, and medical records efficiently with CarePulse.",
    url: siteUrl,
    siteName: "CarePulse",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "CarePulse Web App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter Card Meta Tags
  twitter: {
    card: "summary_large_image",
    title: "CarePulse - Healthcare Management System",
    description:
      "Manage patients, appointments, and medical records efficiently with CarePulse.",
    images: [ogImage],
    creator: "https://x.com/xuhaib_x9", // Optional: add your handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
