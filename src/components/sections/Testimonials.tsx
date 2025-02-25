"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "@/context/useTranslation";
import { FaStar, FaQuoteLeft, FaComments } from "react-icons/fa";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  isRTL: boolean;
  darkMode: boolean;
  color: string; // Add color prop
}

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  quote: string;
  date: string;
  image: string | null; // Allow image to be string or null
}

const getInitials = (name: string) => {
  const words = name.split(" ");
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return words[0][0].toUpperCase();
};

const TestimonialCard = ({
  testimonial,
  index,
  isRTL,
  darkMode,
  color, // Destructure color prop
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`${
        darkMode ? "bg-gray-800" : "bg-white"
      } rounded-xl shadow-lg p-6 ${isRTL ? "text-right" : "text-left"}`}
    >
      <div
        className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
      >
        <div className="relative w-16 h-16 flex-shrink-0">
          {testimonial.image ? (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover rounded-full"
            />
          ) : (
            <div
              className={`w-full h-full rounded-full ${color} flex items-center justify-center text-white text-xl font-semibold`}
            >
              {getInitials(testimonial.name)}
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3
            className={`font-bold text-lg ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {testimonial.name}
          </h3>
          <p
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {testimonial.role}
          </p>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <FaQuoteLeft
          className={`text-2xl mb-2 ${
            darkMode ? "text-blue-400" : "text-blue-500"
          } ${isRTL ? "transform rotate-180" : ""}`}
        />
        <p
          className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}
        >
          {testimonial.quote}
        </p>
        <p
          className={`mt-2 text-sm ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {testimonial.date}
        </p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const isRTL = t.direction === "rtl";

  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
  ];

  return (
    <section
      id="testimonials"
      dir={t.direction}
      className={`py-16 sm:py-24 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <div
            className={`flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-4 ${
              isRTL ? "flex-row-start" : ""
            }`}
          >
            <FaComments
              className={`text-3xl sm:text-4xl ${
                darkMode ? "text-blue-400" : "text-blue-500"
              }`}
            />
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {t.testimonials.title}
            </h2>
          </div>
          <p
            className={`text-base sm:text-lg md:text-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t.testimonials.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
              isRTL={isRTL}
              darkMode={darkMode}
              color={colors[index % colors.length]} // Pass color prop
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
