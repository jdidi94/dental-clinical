"use client";
import React from "react";

import { useTranslation } from "@/context/useTranslation";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {

  const { t } = useTranslation();
  const isRTL = t.direction === "rtl";
  const currentYear = new Date().getFullYear();

  return (
    <footer dir={t.direction} className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className={`space-y-4 ${isRTL ? "text-right" : "text-left"}`}>
            <h3 className="text-xl font-bold mb-4">{t.footer.contactUs}</h3>
            <div
              className={`flex items-center ${
                isRTL ? "flex-row-start space-x-reverse space-x-2" : "space-x-2"
              }`}
            >
              <FaPhone className="text-blue-400" />
              <a
                href="tel:+212123456789"
                className="hover:text-blue-400 transition-colors"
              >
                {t.footer.phone}
              </a>
            </div>
            <div
              className={`flex items-center ${
                isRTL ? "flex-row-start space-x-reverse space-x-2" : "space-x-2"
              }`}
            >
              <FaWhatsapp className="text-green-400" />
              <a
                href="https://wa.me/212123456789"
                className="hover:text-green-400 transition-colors"
              >
                {t.footer.whatsapp}
              </a>
            </div>
            <div
              className={`flex items-center ${
                isRTL ? "flex-row-start space-x-reverse space-x-2" : "space-x-2"
              }`}
            >
              <FaEnvelope className="text-red-400" />
              <a
                href="mailto:contact@dentalclinic.com"
                className="hover:text-red-400 transition-colors"
              >
                {t.footer.email}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className={`space-y-4 ${isRTL ? "text-right" : "text-left"}`}>
            <h3 className="text-xl font-bold mb-4">
              {t.footer.location.title}
            </h3>
            <div
              className={`flex items-start ${
                isRTL ? "flex-row-start space-x-reverse space-x-2" : "space-x-2"
              }`}
            >
              <FaMapMarkerAlt className="text-red-500 mt-1" />
              <div>
                {t.footer.location.address.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
                <p className="text-sm text-gray-400 mt-2">
                  {t.footer.location.nearBy}
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className={`space-y-4 ${isRTL ? "text-right" : "text-left"}`}>
            <h3 className="text-xl font-bold mb-4">{t.footer.followUs}</h3>
            <div
              className={`flex ${
                isRTL ? "flex-row-start space-x-4" : "space-x-4"
              }`}
            >
              <a
                href="https://www.facebook.com/share/1F3CAHRTVH/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.instagram.com/hebahassan.dental"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://g.co/kgs/y61P2U6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <FaMapMarkerAlt size={24} />
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className={`space-y-4 ${isRTL ? "text-right" : "text-left"}`}>
            <h3 className="text-xl font-bold mb-4">
              {t.footer.workingHours.title}
            </h3>
            <div className="space-y-2">
              <p>{t.footer.workingHours.weekdays}</p>
              <p>{t.footer.workingHours.saturday}</p>
              <p>{t.footer.workingHours.sunday}</p>
              <p className="text-sm text-gray-400 mt-2">
                {t.footer.workingHours.emergency}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="mb-4 md:mb-0">
            © {currentYear} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
