import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { TranslationProvider } from "@/context/useTranslation";
export const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
export const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });
import { keywords } from "./keywords";

// Create a separate JSON-LD script for location data
export const locationSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dr. Heba Hassan Dental Clinic ",
  description:
    "Advanced dental care clinic in Khalifa City offering comprehensive dental services",
  address: {
    "@type": "PostalAddress",
    streetAddress: "CHHP+36J - 3 Al Basmi St - Khalifa City - SE41",
    addressLocality: "Abu Dhabi",
    addressRegion: "Abu Dhabi",
    postalCode: "",
    addressCountry: "UAE",
  },
  location: {
    "@type": "Place",
    name: "Lotus Holistic Medical Center",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.428611,
      longitude: 54.617222,
    },
  },
  telephone: "+971559823321",
  url: process.env.CLINIC_WEBSITE,
  sameAs: [
    "https://www.instagram.com/hebahassan.dental/",
    "https://www.facebook.com/people/Heba-Hassan/pfbid0iQwPxjwzT6N42PEaZfFsTzPYRaG3fP3rHsBunqzCemzDH8zLYchH9YZ4p2HeKVQhl/?rdid=QAJWQCGMQBU7jJxs&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1F3CAHRTVH%2F",
    "https://www.google.com/search?sca_esv=d690b6a826c360f1&rlz=1C1GCEA_enAE1103AE1109&cs=0&output=search&kgmid=/g/11vpz8psy1&q=Heba+Hassan+dental+%D8%B7%D8%A8%D9%8A%D8%A8+%D8%A3%D8%B3%D9%86%D8%A7%D9%86&shndl=30&shem=uaasie&source=sh/x/loc/uni/m1/1&kgs=92830db5d17ff5ad",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hebahassan.dental"),
  title: "Advanced Dental Care | Dr. Heba Hassan Dental Clinic Abu Dhabi",
  description:
    "Dr. Heba Hassan Mustafa, a renowned specialist oral surgeon with deep knowledge and expertise in dentistry. Offering comprehensive dental care including implants, cosmetic dentistry, and advanced treatments in Khalifa City, Abu Dhabi.",
  keywords: keywords,
  authors: [
    {
      name: "Dr. Heba Hassan Mustafa",
      url: process.env.CLINIC_WEBSITE,
    },
  ],
  creator: "Dr. Heba Hassan Mustafa",
  publisher: "Lotus Holistic Medical Center",
  openGraph: {
    type: "website",
    title:
      "Dental clinic | Advanced Dental Care | Dr. Heba Hassan Dental Clinic Khalifa City, Abu Dhabi",
    description:
      "Achieve a healthy, beautiful smile with Dr. Heba Hassan! We offer comprehensive dental care, including teeth cleaning, whitening, orthodontics, gum treatments, and dental implants using the latest technology.",
    url: process.env.CLINIC_WEBSITE,
    siteName: "Dr. Heba Hassan Dental Clinic",
    images: [
      {
        url: `${process.env.CLINIC_WEBSITE}/manifest.png`,
        width: 1200,
        height: 630,
        alt: "Dental Clinic in Khalifa City",
      },
    ],
    locale: "en_US",
    alternateLocale: "ar_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Care | Dr. Heba Hassan Dental Clinic Khalifa City",
    description:
      "Expert dental care in Khalifa City Abu Dhabi offering implants, cosmetic dentistry, and advanced treatments. Visit our modern clinic in Khalifa City.",
    images: [
      {
        url: `${process.env.CLINIC_WEBSITE}/manifest.png`,
        alt: "Dental Clinic in Khalifa City",
      },
    ],
  },
  alternates: {
    canonical: process.env.CLINIC_WEBSITE,
  },
  verification: {
    google: "googledf0c07f29961a0f4",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Healthcare",
  other: {
    "script:ld+json": JSON.stringify(locationSchema),
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W7Q9WZCR');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W7Q9WZCR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ThemeProvider>
          <TranslationProvider>
            <main className="flex-grow">{children}</main>
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
