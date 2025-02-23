import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { TranslationProvider } from "@/context/useTranslation";
export const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
export const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });

// Create a separate JSON-LD script for location data
export const locationSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dr. Heba Hassan Dental Clinic",
  description:
    "Advanced dental care clinic in Abu Dhabi offering comprehensive dental services",
  address: {
    "@type": "PostalAddress",
    streetAddress: "A-20th - Khalifa City - SE",
    addressLocality: "Abu Dhabi",
    addressCountry: "UAE",
  },
  location: {
    "@type": "Place",
    name: "Lotus Holistic Medical Center",
  },
  telephone: "+971559823321",
  url: "https://hebahassan.dental",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hebahassan.dental"),
  title: "Advanced Dental Care | Dr. Heba Hassan Dental Clinic Abu Dhabi",
  description:
    "Dr. Heba Hassan Mustafa, a renowned specialist oral surgeon with deep knowledge and expertise in dentistry. Offering comprehensive dental care including implants, cosmetic dentistry, and advanced treatments in Khalifa City, Abu Dhabi.",
  keywords: [
    // English Keywords
    "dental clinic abu dhabi",
    "dentist near me",
    "dental implants abu dhabi",
    "cosmetic dentistry",
    "dental veneers",
    "teeth whitening",
    "dental care",
    "wisdom teeth removal",
    "dental surgery",
    "dental clinic khalifa city",
    "best dentist abu dhabi",
    "NEOSS implant system",
    "dental crown",
    "root canal treatment",
    "dental bridges",
    "oral hygiene",
    "dental check-ups",
    "emergency dentist",

    // Arabic Keywords
    "طبيب اسنان",
    "عيادة اسنان",
    "زراعة الأسنان",
    "تجميل الاسنان",
    "تبييض الاسنان",
    "تقويم الاسنان",
    "طب الأسنان التجميلي",
    "عيادة اسنان ابو ظبي",
    "افضل طبيب اسنان",
    "علاج جذور الاسنان",
    "تركيب الاسنان",
    "جراحة الفم والاسنان",
    "عيادة اسنان مدينة خليفة",
    "تنظيف الاسنان",
  ],
  authors: [
    {
      name: "Dr. Heba Hassan Mustafa",
      url: "https://hebahassan.dental",
    },
  ],
  creator: "Dr. Heba Hassan Mustafa",
  publisher: "Lotus Holistic Medical Center",
  openGraph: {
    type: "website",
    title: "Advanced Dental Care | Dr. Heba Hassan Dental Clinic Abu Dhabi",
    description:
      "Achieve a healthy, beautiful smile with Dr. Heba Hassan! We offer comprehensive dental care, including teeth cleaning, whitening, orthodontics, gum treatments, and dental implants using the latest technology.",
    url: "https://hebahassan.dental",
    siteName: "Dr. Heba Hassan Dental Clinic",
    images: [
      {
        url: "https://hebahassan.dental/Implantology.webp",
        width: 1200,
        height: 630,
        alt: "Dental Implantology",
      },
      {
        url: "https://hebahassan.dental/Cosmetic.webp",
        width: 1200,
        height: 630,
        alt: "Cosmetic Dentistry",
      },
      {
        url: "https://hebahassan.dental/Restorative.webp",
        width: 1200,
        height: 630,
        alt: "Restorative Dentistry",
      },
    ],
    locale: "en_US",
    alternateLocale: "ar_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Dental Care | Dr. Heba Hassan Dental Clinic Abu Dhabi",
    description:
      "Expert dental care in Abu Dhabi offering implants, cosmetic dentistry, and advanced treatments. Visit our modern clinic in Khalifa City.",
    images: ["/"],
  },
  alternates: {
    canonical: "https://hebahassan.dental",
    languages: {
      "en-US": "/en",
      "ar-AE": "/ar",
    },
  },
  verification: {
    google: "your-google-verification-code",
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
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <TranslationProvider>
            <main className="flex-grow">{children}</main>
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
