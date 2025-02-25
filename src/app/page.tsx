"use client";
import React, { useEffect, useState, lazy, Suspense } from "react";
import { useTranslation } from "../context/useTranslation";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import { Translation } from "@/types/translation";
import { FaArrowUp } from "react-icons/fa";

// Lazy load components
const Hero = lazy(() => import("../components/sections/Hero"));
const Services = lazy(() => import("../components/sections/Services"));
const About = lazy(() => import("../components/sections/About"));

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
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
          <About />
          <Services />
        </Suspense>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Page;
