import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "next-themes";

import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const siteUrl = "https://hms-seven-green.vercel.app";
const ogImage =
  "https://private-user-images.githubusercontent.com/151519281/347042676-a7dd73b6-93de-484d-84e0-e7f4e299167b.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CarePulse - Healthcare Management System | Zuhaib Rashid",
    template: "%s | CarePulse",
  },
  manifest: "/manifest.json",
  description:
    "CarePulse is a healthcare management web app built by Zuhaib Rashid using Next.js. Manage patients, appointments, and medical records efficiently for hospitals and clinics.",
  keywords:
    "CarePulse, healthcare management, hospital software, patient management, Next.js healthcare app, medical records, React healthcare system, Zuhaib Rashid, CarePulse web app",
  authors: [{ name: "Zuhaib Rashid", url: "https://www.zuhaibrashid.com" }],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "CarePulse - Healthcare Management System",
    description:
      "Streamline hospital operations with CarePulse — a Next.js healthcare management system by Zuhaib Rashid.",
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
      "Manage patients, appointments, and records efficiently with CarePulse by Zuhaib Rashid.",
    images: [ogImage],
    creator: "@xuhaib_x9",
  },

  icons: {
    icon: "/assets/icons/logo-icon.svg",
    apple: "/assets/icons/logo-icon.svg",
  },

  verification: {
    google: "terZRkP5xAisMxUTVWZ_rW6MXSuOeuAFITryD0CBDxA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Canonical tag for SEO */}
        <link rel="canonical" href={siteUrl} />

        {/* Viewport & accessibility */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="theme-color" content="#0f172a" />
        <meta name="robots" content="index, follow" />

        {/* ✅ JSON-LD Structured Data */}
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "CarePulse",
              url: siteUrl,
              description:
                "CarePulse is a healthcare management web app built by Zuhaib Rashid using Next.js. Manage patients, appointments, and medical records efficiently.",
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

        {/* ✅ Microsoft Clarity Analytics */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tq16bkuguy");
            `,
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
