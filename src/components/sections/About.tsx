"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { FaUserMd, FaAward, FaHospital, FaGraduationCap } from "react-icons/fa";
import doc1 from "../../../public/doct-1.jpg";
import doc2 from "../../../public/doc-2.jpg";
import doc3 from "../../../public/doc-3.jpg";
import { useTranslation } from "@/context/useTranslation";

const AnimatedText = ({ text = "", className = "", delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className={`block ${className}`}
    >
      {text}
    </motion.span>
  );
};

const About = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const isRTL = t.direction === "rtl";

  const bioData = {
    name: t.about.doctor.name,
    title: t.about.doctor.title,
    qualifications: t.about.doctor.qualifications,
    experience: t.about.doctor.experience,
    highlights: [
      {
        icon: FaGraduationCap,
        text: t.about.doctor.highlights.graduation,
      },
      {
        icon: FaAward,
        text: t.about.doctor.highlights.fellowship,
      },
      {
        icon: FaUserMd,
        text: t.about.doctor.highlights.specialization,
      },
      {
        icon: FaHospital,
        text: t.about.doctor.highlights.approach,
      },
    ],
  };

  return (
    <section
      id="about"
      dir={t.direction}
      className={`py-24 ${
        darkMode ? "bg-gray-900" : "bg-white"
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
            className={`flex items-center justify-center gap-3 mb-4 ${
              isRTL ? "flex-row-start" : ""
            }`}
          >
            <FaUserMd
              className={`text-4xl ${
                darkMode ? "text-blue-400" : "text-blue-500"
              }`}
            />
            <h2
              className={`text-4xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {t.about.title}
            </h2>
          </div>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t.about.description}
          </p>
        </motion.div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            isRTL ? "direction-rtl" : ""
          }`}
        >
          {/* Text Content Column */}
          <div className={`space-y-8 ${isRTL ? "lg:order-2" : "lg:order-1"}`}>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`flex items-center gap-3 ${
                  isRTL ? "flex-row-start" : ""
                }`}
              >
                <FaUserMd
                  className={`text-3xl ${
                    darkMode ? "text-blue-400" : "text-blue-500"
                  }`}
                />
                <AnimatedText
                  text={bioData.name}
                  className={`text-4xl font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                  delay={0.2}
                />
              </motion.div>

              <AnimatedText
                text={bioData.title}
                className={`text-2xl ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
                delay={0.4}
              />

              <AnimatedText
                text={bioData.qualifications}
                className={`text-xl ${
                  darkMode ? "text-blue-400" : "text-blue-500"
                } font-semibold`}
                delay={0.6}
              />

              <AnimatedText
                text={bioData.experience}
                className={`text-xl ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
                delay={0.8}
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {bioData.highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-4 ${
                    isRTL ? "flex-row-start" : ""
                  }`}
                >
                  <div
                    className={`p-3 rounded-full ${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    }`}
                  >
                    <item.icon
                      className={`text-xl ${
                        darkMode ? "text-blue-400" : "text-blue-500"
                      }`}
                    />
                  </div>
                  <p
                    className={`text-lg ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Images Column */}
          <div
            className={`relative h-[600px] grid grid-cols-2 gap-4 ${
              isRTL ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative h-[280px] col-span-2"
            >
              <Image
                src={doc3}
                alt="Dr. Sarah in surgery"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[280px]"
            >
              <Image
                src={doc1}
                alt="Dr. Sarah with patient"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="relative h-[280px]"
            >
              <Image
                src={doc2}
                alt="Dr. Sarah in consultation"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
