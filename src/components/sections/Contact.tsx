"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "@/context/useTranslation";
import { FaEnvelope } from "react-icons/fa";
import { useState, FormEvent } from "react";

const Contact = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const isRTL = t.direction === "rtl";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus({
        type: "success",
        message: isRTL ? t.contact.form.success : "Message sent successfully!",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: isRTL
          ? t.contact.form.error
          : error instanceof Error
          ? error.message
          : "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      dir={t.direction}
      className={`py-24 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
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
            <FaEnvelope
              className={`text-4xl ${
                darkMode ? "text-blue-400" : "text-blue-500"
              }`}
            />
            <h2
              className={`text-4xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {t.contact.title}
            </h2>
          </div>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t.contact.description}
          </p>
        </motion.div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${
            isRTL ? "rtl-grid" : ""
          }`}
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } p-8 rounded-2xl shadow-lg`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Form Fields */}
              <div
                className={`space-y-6 ${isRTL ? "text-right" : "text-left"}`}
              >
                <FormField
                  id="name"
                  label={t.contact.form.name}
                  value={formData.name}
                  onChange={handleChange}
                  darkMode={darkMode}
                  isRTL={isRTL}
                />
                <FormField
                  id="email"
                  type="email"
                  label={t.contact.form.email}
                  value={formData.email}
                  onChange={handleChange}
                  darkMode={darkMode}
                  isRTL={isRTL}
                />
                <FormField
                  id="message"
                  type="textarea"
                  label={t.contact.form.message}
                  value={formData.message}
                  onChange={handleChange}
                  darkMode={darkMode}
                  isRTL={isRTL}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg ${
                  darkMode ? "bg-blue-600" : "bg-blue-500"
                } text-white font-medium hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? t.contact.form.sending : t.contact.form.send}
              </button>
            </form>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`space-y-4 ${isRTL ? "text-right" : "text-left"}`}
          >
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } p-4 rounded-2xl shadow-lg`}
            >
              <h3
                className={`text-xl font-semibold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {t.contact.location.title}
              </h3>
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } mb-4`}
              >
                {t.contact.location.address}
              </p>
            </div>

            {/* Map section remains the same */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.658378497779!2d54.585780500000006!3d24.4279331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e472a69d41b4d%3A0xf2d2776752ae797f!2sDr.%20Heba%20Hassan%20dental!5e0!3m2!1sfr!2stn!4v1740184128785!5m2!1sfr!2stn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface FormFieldProps {
  id: string;
  type?: string;
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  darkMode: boolean;
  isRTL: boolean;
}

// Reusable FormField component
const FormField = ({
  id,
  type = "text",
  label,
  value,
  onChange,
  darkMode,
  isRTL,
}: FormFieldProps) => {
  const baseClasses = `w-full px-4 py-3 rounded-lg ${
    darkMode
      ? "bg-gray-700 border-gray-600 text-white"
      : "bg-gray-50 border-gray-200 text-gray-900"
  } border focus:ring-2 focus:ring-blue-500 transition-all duration-300`;

  return (
    <div>
      <label
        className={`block ${
          darkMode ? "text-gray-300" : "text-gray-700"
        } mb-2 font-medium`}
        htmlFor={id}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          required
          rows={5}
          className={baseClasses}
          dir={isRTL ? "rtl" : "ltr"}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          required
          className={baseClasses}
          dir={isRTL ? "rtl" : "ltr"}
        />
      )}
    </div>
  );
};

export default Contact;
