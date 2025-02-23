"use client";
import React, { useEffect, useState } from "react";
import { keywords } from "./keywords";
import { useTranslation } from "../context/useTranslation";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import Head from "next/head";
import { Translation } from "@/types/translation";
import { FaArrowUp } from "react-icons/fa";
import { metadata } from "./layout";

type TranslationMap = {
  en: Translation;
  ar: Translation;
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-8 right-8 p-4 rounded-full
            bg-blue-500 text-white shadow-lg
            hover:bg-blue-600 transition-all duration-300
            scroll-to-top z-50
            focus:outline-none focus:ring-2 focus:ring-blue-400
            dark:bg-blue-600 dark:hover:bg-blue-700
          `}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
};

const Page = () => {
  const { setLanguage } = useTranslation();

  useEffect(() => {
    const savedLanguage =
      (localStorage.getItem("language") as keyof TranslationMap) || "en";
    setLanguage(savedLanguage);
  }, [setLanguage]);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>
          Advanced Dental Care | Brighten Your Smile with Dr. Heba Hassan
        </title>
        <meta
          name="description"
          content="Achieve a healthy, beautiful smile with Dr. Heba Hassan! We offer comprehensive dental care, including teeth cleaning, whitening, orthodontics, gum treatments, and dental implants using the latest technology."
        />
        <meta name="keywords" content={keywords?.join(", ") || ""} />
        <meta
          property="og:title"
          content="Advanced Dental Care | Brighten Your Smile with Dr. Heba Hassan"
        />
        <meta
          property="og:description"
          content="Achieve a healthy, beautiful smile with Dr. Heba Hassan! Experience professional and comfortable dental care in a friendly environment."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hebahassan.dental/" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />{" "}
        {/* Reference the SVG favicon */}
        <link
          rel="alternate icon"
          href="/favicon.ico"
          type="image/x-icon"
        />{" "}
        {/* Fallback for older browsers */}
        <meta
          name="google-site-verification"
          content="googledf0c07f29961a0f4"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ar_AE" />
      </Head>

      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Page;
