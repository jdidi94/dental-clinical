"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import heroDark from "../../../public/hero-dark.webp";
import heroLight from "../../../public/hero-light.webp";
import { useTranslation } from "../../context/useTranslation";
import { FaWhatsapp, FaPhone, FaInstagram } from "react-icons/fa";

const Hero = () => {
  const { t } = useTranslation();
  const { darkMode } = useTheme();
  const isRTL = t.direction === "rtl";

  return (
    <section
      id="hero"
      className={`relative flex items-center justify-center min-h-screen overflow-hidden ${
        darkMode ? "dark" : ""
      }`}
      dir={t.direction}
    >
      {/* Background with parallax effect */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <Image
          src={darkMode ? heroDark : heroLight}
          alt="Dental clinic background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </motion.div>

      {/* Overlay with gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${
          darkMode
            ? "from-black/80 via-black/70 to-black/90"
            : "from-black/60 via-black/50 to-black/70"
        }`}
      />

      {/* Content */}
      <div
        className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Doctor Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 ${
              darkMode ? "text-blue-300" : "text-blue-400"
            }`}
          >
            {t.hero.doctorName}
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 ${
              darkMode ? "text-gray-100" : "text-white"
            }`}
          >
            {t.hero.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-200"
            }`}
          >
            {t.hero.subtitle}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-8 ${
              darkMode ? "text-gray-400" : "text-gray-300"
            }`}
          >
            {t.hero.description}
          </motion.p>

          {/* Doctor Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className={`text-base sm:text-lg md:text-xl lg:text-2xl italic ${
              darkMode ? "text-blue-200" : "text-blue-300"
            }`}
          >
            {t.hero.doctorTitle}
          </motion.p>
          {/* Social Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className={`flex gap-4 mt-8 ${
              isRTL ? "flex-row-start" : "flex-row"
            }`}
          >
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/971559823321"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full
                bg-green-500 hover:bg-green-600 transition-colors
                text-white font-medium
                ${isRTL ? "flex-row-start" : "flex-row"}
              `}
            >
              <FaWhatsapp className="text-xl" />
              <span className="hidden sm:inline">
                {t.hero.buttons.whatsapp}
              </span>
            </a>

            {/* Call Button */}
            <a
              href="tel:+971559823321"
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full
                bg-blue-500 hover:bg-blue-600 transition-colors
                text-white font-medium
                ${isRTL ? "flex-row-start" : "flex-row"}
              `}
            >
              <FaPhone className="text-xl" />
              <span className="hidden sm:inline">{t.hero.buttons.call}</span>
            </a>

            {/* Instagram Button */}
            <a
              href="https://www.instagram.com/hebahassan.dental"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full
                bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                hover:opacity-90 transition-opacity
                text-white font-medium
                ${isRTL ? "flex-row-start" : "flex-row"}
              `}
            >
              <FaInstagram className="text-xl" />
              <span className="hidden sm:inline">
                {t.hero.buttons.instagram}
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className={`absolute bottom-8 ${
          isRTL ? "right-1/2" : "left-1/2"
        } transform -translate-x-1/2`}
      >
        <div
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            darkMode ? "border-gray-400" : "border-white"
          }`}
        >
          <div
            className={`w-1 h-3 rounded-full mt-2 ${
              darkMode ? "bg-gray-400" : "bg-white"
            }`}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
