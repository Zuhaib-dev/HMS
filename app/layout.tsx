import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

// Replace with your actual domain and OG image path
const siteUrl = "https://hms-seven-green.vercel.app/";
const ogImage =
  "https://private-user-images.githubusercontent.com/151519281/347042676-a7dd73b6-93de-484d-84e0-e7f4e299167b.png";

export const metadata: Metadata = {
  title: "CarePulse - Healthcare Management System | Zuhaib Rashid",
  description:
    "CarePulse is a healthcare patient management system by Zuhaib Rashid. Streamline patient registration, appointment scheduling, and medical records management for hospitals and clinics.",
  keywords:
    "CarePulse, healthcare management system, patient management, appointment scheduling, medical records management, hospital software, Zuhaib Rashid, healthcare web app, Next.js healthcare app, React healthcare system, CarePulse web app",
  author: "Zuhaib Rashid",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/assets/icons/logo-icon.svg",
    shortcut: "/assets/icons/logo-icon.svg",
    apple: "/assets/icons/logo-icon.svg",
  },
  verification: {
    google: "terZRkP5xAisMxUTVWZ_rW6MXSuOeuAFITryD0CBDxA",
  },
  openGraph: {
    title: "CarePulse - Healthcare Management System",
    description:
      "Manage patients, appointments, and medical records efficiently with CarePulse, a Next.js healthcare management system by Zuhaib Rashid.",
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
  twitter: {
    card: "summary_large_image",
    title: "CarePulse - Healthcare Management System",
    description:
      "Manage patients, appointments, and medical records efficiently with CarePulse by Zuhaib Rashid.",
    images: [ogImage],
    creator: "https://x.com/xuhaib_x9",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* PWA / Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4f46e5" />
        <link rel="apple-touch-icon" href="/assets/icons/logo-icon.svg" />

        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "CarePulse",
              url: siteUrl,
              description:
                "CarePulse is a Next.js healthcare management system by Zuhaib Rashid. It helps hospitals and clinics manage patients, appointments, and medical records efficiently.",
              applicationCategory: "BusinessApplication",
              author: {
                "@type": "Person",
                name: "Zuhaib Rashid",
                url: "https://www.zuhaibrashid.com/",
                sameAs: [
                  "https://github.com/Zuhaib-dev",
                  "https://x.com/xuhaib_x9",
                  "https://www.linkedin.com/in/zuhaib-rashid-661345318/",
                ],
              },
              image: ogImage,
              inLanguage: "en",
            }),
          }}
        />
      </head>
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
