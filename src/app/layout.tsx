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
  name: "Dr. Heba Hassan Dental Clinic - Dentist Near Me in Abu Dhabi",
  description:
    "Top-rated dental clinic near me in Abu Dhabi offering comprehensive dental services including teeth whitening, veneers, dental implants, and orthodontic treatments",
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
  sameAs: [
    "https://www.facebook.com/drhebahassan",
    "https://www.instagram.com/drhebahassan"
  ],
  openingHours: "Mo-Sa 09:00-19:00",
  availableService: [
    "Teeth Whitening",
    "Dental Implants",
    "Veneers",
    "Root Canal Treatment",
    "Orthodontic Treatment",
    "Pediatric Dentistry",
    "Teeth Cleaning"
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hebahassan.dental"),
  title: "Dental Clinic Near Me | Dentist Abu Dhabi | Dr. Heba Hassan Dental Care",
  description:
    "Looking for a dentist near me? Dr. Heba Hassan Dental Clinic in Abu Dhabi offers teeth whitening, veneers, dental implants, root canal treatment, and complete dental care close to you. Best dental clinic in Abu Dhabi for all your dental needs.",
  keywords: [
    // High-traffic keywords
    "dental clinic near me",
    "dental clinic close to me",
    "dental clinic abu dhabi",
    "dentist near me",
    "dentist close by me",
    "dental care close to me",
    "dentist near me near me",
    "dental clinic abudhabi",
    "abudhabi dental clinic",
    "dental clinic",
    "dentist",
    "dentist abu dhabi",
    "veneers",
    "teeth whitening",
    "smilerite",
    "canal root treatment",
    "dubai smile dental clinic abu dhabi",
    "dubai smile abu dhabi",
    "medical dental",
    "aesthetic dental center",
    "medical dent",
    "teeth whitening abu dhabi",
    "teeth cleaning",
    "bridge dental",
    "dental flossers",
    "pediatric dentist abu dhabi",
    "vision dental clinic",
    "dental implants",
    "orthodontic",
    "dental center near me",
    "your dentist",
    
    // Original English Keywords
    "dental implants abu dhabi",
    "cosmetic dentistry",
    "dental veneers",
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
    title: "Dental Clinic Near Me | Dentist Abu Dhabi | Dr. Heba Hassan Dental Care",
    description:
      "Looking for a dentist near me? Visit Dr. Heba Hassan Dental Clinic in Abu Dhabi for teeth whitening, veneers, dental implants, orthodontic treatments, and complete dental care close to you.",
    url: "https://hebahassan.dental",
    siteName: "Dr. Heba Hassan Dental Clinic - Your Dentist Near Me",
    images: [
      {
        url: "https://hebahassan.dental/Implantology.webp",
        width: 1200,
        height: 630,
        alt: "Dental Implants Abu Dhabi - Dental Clinic Near Me",
      },
      {
        url: "https://hebahassan.dental/cosmetic.webp",
        width: 1200,
        height: 630,
        alt: "Teeth Whitening and Veneers - Dentist Near Me",
      },
      {
        url: "https://hebahassan.dental/Restorative.webp",
        width: 1200,
        height: 630,
        alt: "Root Canal Treatment - Dental Care Close To Me",
      },
    ],
    locale: "en_US",
    alternateLocale: "ar_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Clinic Near Me | Dentist Abu Dhabi | Dr. Heba Hassan",
    description:
      "Looking for a dentist near me? Dr. Heba Hassan offers teeth whitening, veneers, dental implants, and complete dental care in Abu Dhabi. Visit our dental clinic close to you.",
    images: ["https://hebahassan.dental/dental-clinic-near-me.jpg"],
  },
  alternates: {
    canonical: "https://hebahassan.dental",
    languages: {
      "en-US": "/en",
      "ar-AE": "/ar",
    },
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
