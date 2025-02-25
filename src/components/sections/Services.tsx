"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "@/context/useTranslation";
import implantology from "../../../public/Implantology.webp";
import Cosmetic from "../../../public/cosmetic.webp";
import Restorative from "../../../public/Restorative.webp";
import Dental from "../../../public/Dental.webp";
import implantology1 from "../../../public/images/Implantology-1.jpg";
import implantology2 from "../../../public/images/Implantology-2.png";
import implantology3 from "../../../public/images/Implantology-3.jpg";

import cometic1 from "../../../public/images/cosmetics-1.jpg";
import cometic2 from "../../../public/images/cosmetics-2.jpg";
import cometic3 from "../../../public/images/cosmetics-3.jpg";
import surgery1 from "../../../public/images/Surgery-1.jpg";
import surgery2 from "../../../public/images/Surgery-2.jpg";
import surgery3 from "../../../public/images/Surgery-3.jpg";
import Restorative1 from "../../../public/images/Restorative-1.jpg";
import Restorative2 from "../../../public/images/Restorative-2.jpg";
import Restorative3 from "../../../public/images/Restorative-3.jpg";
import { StaticImageData } from "next/image";
import {
  FaTooth,
  FaRegSmile,
  FaArrowRight,
  FaCrown,
  FaSyringe,
} from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { IconType } from "react-icons";

const services = [
  {
    title: "Implantology",
    rtlTitle: "زراعة الأسنان",
    description:
      "We are proud to offer NEOSS, a prestigious British implant system, renowned for its excellence and reliability. Our clinic utilizes advanced bone grafting techniques.",
    rtlDescription:
      "نحن فخورون بتقديم نيوس، نظام زراعة الأسنان البريطاني المرموق، المعروف بتميزه وموثوقيته. تستخدم عيادتنا تقنيات متقدمة لتطعيم العظام.",
    image: implantology,
    images: [implantology1, implantology2, implantology3],
    icon: FaTooth,
  },
  {
    title: "Cosmetic Services",
    rtlTitle: "خدمات التجميل",
    description:
      "Transform your smile with our high-quality veneers. Our veneers are designed to create a flawless and natural appearance, with a 10-year guarantee.",
    rtlDescription:
      "حول ابتسامتك مع قشور الأسنان عالية الجودة لدينا. تم تصميم قشور الأسنان لدينا لخلق مظهر خالٍ من العيوب وطبيعي، مع ضمان لمدة 10 سنوات.",
    image: Cosmetic,
    images: [cometic1, cometic2, cometic3],
    icon: FaRegSmile,
  },
  {
    title: "Restorative Services",
    rtlTitle: "خدمات الترميم",
    description:
      "From simple fillings to crowns and bridges, we provide high-quality restorations that look and feel natural.",
    rtlDescription:
      "من الحشوات البسيطة إلى التيجان والجسور، نقدم ترميمات عالية الجودة تبدو وتشعر بأنها طبيعية.",
    image: Restorative,
    images: [
      Restorative1,
      Restorative2,
      Restorative3, // Replace with actual restorative related images
    ],
    icon: FaCrown,
  },
  {
    title: "Dental Surgery",
    rtlTitle: "جراحة الأسنان",
    description:
      "Specialized in wisdom teeth removal and complex oral surgeries with expert care and precision.",
    rtlDescription:
      "متخصصون في إزالة ضرس العقل والجراحات الفموية المعقدة مع رعاية وخبرة عالية الدقة.",
    image: Dental,
    images: [
      surgery1,
      surgery2,
      surgery3, // Replace with actual dental surgery related images
    ],
    icon: FaSyringe,
  },
];

// Update the type definition
type Service = {
  title: string;
  rtlTitle: string;
  description: string;
  rtlDescription: string;
  image: StaticImageData;
  images: StaticImageData[];
  icon: IconType;
};

// Update ServiceCard props type
interface ServiceCardProps {
  service: Service;
  index: number;
  isRTL: boolean;
}

// Add new interface for ServiceDetails
interface ServiceDetailsProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
  isRTL: boolean;
}

const ServiceDetails = ({
  service,
  isOpen,
  onClose,
  isRTL,
}: ServiceDetailsProps) => {
  const { darkMode } = useTheme();
  const displayTitle = isRTL ? service.rtlTitle : service.title;
  const displayDescription = isRTL
    ? service.rtlDescription
    : service.description;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`
                relative w-[95vw] md:w-[90vw] max-w-4xl
                max-h-[85vh] overflow-y-auto
                ${darkMode ? "bg-gray-800" : "bg-white"}
                rounded-2xl shadow-2xl
                mx-4 my-8
              `}
            >
              <div className="p-6 md:p-8">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className={`
                    absolute top-4 ${isRTL ? "left-4" : "right-4"}
                    w-10 h-10 flex items-center justify-center rounded-full
                    ${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                    }
                    transition-colors duration-200 text-2xl z-50
                  `}
                >
                  ×
                </button>

                {/* Content */}
                <div className="space-y-8 mt-6">
                  {/* Title section */}
                  <div className="flex items-center justify-center gap-4">
                    <service.icon
                      className={`text-4xl ${
                        darkMode ? "text-blue-400" : "text-blue-500"
                      }`}
                    />
                    <h2
                      className={`text-3xl font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {displayTitle}
                    </h2>
                  </div>

                  {/* Updated Image Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.images.map((img, index) => (
                      <motion.div
                        key={`${service.title}-image-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="relative h-48 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt={`${service.title} ${index + 1}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </motion.div>
                    ))}
                  </div>

                  <p
                    className={`text-lg leading-relaxed ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {displayDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Update ServiceCard component
const ServiceCard = ({ service, index, isRTL }: ServiceCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const { darkMode } = useTheme();
  const IconComponent = service.icon;

  // Get the appropriate title and description based on direction
  const displayTitle = isRTL ? service.rtlTitle : service.title;
  const displayDescription = isRTL
    ? service.rtlDescription
    : service.description;
  const truncatedDescription =
    displayDescription.length > 94
      ? displayDescription.substring(0, 94) + "..."
      : displayDescription;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative h-[400px] w-full [perspective:1000px]"
      >
        <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front of card */}
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <div
              className={`
            ${darkMode ? "bg-gray-800" : "bg-white"} 
            rounded-xl shadow-lg h-full overflow-hidden
            border-2 border-transparent hover:border-blue-500 transition-all duration-300
            relative
          `}
            >
              {/* Service Icon Header */}
              <div
                className={`
              absolute top-0 left-0 right-0 h-16 z-10
              ${darkMode ? "bg-gray-800/80" : "bg-white/80"}
              backdrop-blur-sm flex items-center px-6
              border-b ${darkMode ? "border-gray-700" : "border-gray-200"}
              ${isRTL ? "flex-row-start" : "flex-row justify-start"} gap-3
            `}
              >
                <IconComponent
                  className={`text-2xl ${
                    darkMode ? "text-blue-400" : "text-blue-500"
                  }`}
                />
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {displayTitle}
                </h3>
              </div>

              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>

          {/* Back of card */}
          <div
            className={`
          absolute inset-0 h-full w-full rounded-xl shadow-lg p-8
          [transform:rotateY(180deg)] [backface-visibility:hidden]
          ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}
          border-2 border-transparent hover:border-blue-500 transition-all duration-300
        `}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse w-20 h-20"></div>
                <div className="relative z-10 w-20 h-20 flex items-center justify-center bg-blue-500/10 rounded-full">
                  <IconComponent
                    className={`text-4xl ${
                      darkMode ? "text-blue-400" : "text-blue-500"
                    }`}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center">
                {displayTitle}
              </h3>
              <p
                className={`text-center text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {truncatedDescription}
              </p>
              <button
                onClick={() => setShowDetails(true)}
                className={`
              mt-4 px-6 py-2 rounded-full text-sm font-medium
              ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              }
              text-white flex items-center gap-2 group/button
              transition-colors duration-300
              ${isRTL ? "flex-row-reverse" : ""}
            `}
              >
                {isRTL ? (
                  <>
                    <FaArrowRight className="transition-transform duration-300 group-hover/button:-translate-x-1 rotate-180" />
                    عرض التفاصيل
                  </>
                ) : (
                  <>
                    View Details
                    <FaArrowRight className="transition-transform duration-300 group-hover/button:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <ServiceDetails
        service={service}
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        isRTL={isRTL}
      />
    </>
  );
};

const Services = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const isRTL = t.direction === "rtl";

  return (
    <section
      id="services"
      dir={t.direction}
      className={`py-24 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div
            className={`flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-4 ${
              isRTL ? "flex-row-start" : ""
            }`}
          >
            <MdHealthAndSafety
              className={`text-3xl sm:text-4xl ${
                darkMode ? "text-blue-400" : "text-blue-500"
              }`}
            />
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {t.services.title}
            </h2>
          </div>
          <p
            className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t.services.description}
          </p>
        </motion.div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ${
            isRTL ? "rtl-grid" : ""
          }`}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isRTL={isRTL}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
