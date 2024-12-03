/* eslint-disable no-unused-vars */

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://api.example.com/submit", form);
      alert("Message sent!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 relative overflow-hidden" id="contact">
  
      <div className="absolute inset-0">
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-blue-500 blur-[150px] opacity-30"></div>
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-purple-500 blur-[150px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          Get in Touch
        </motion.h2>
        <p className="text-lg text-gray-300 mb-10">
          Have any questions? Feel free to reach out, and we’ll get back to you as soon as possible.
        </p>
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
          >
            <motion.input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <motion.input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </motion.div>
          <motion.input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            required
          />
          <motion.textarea
            placeholder="Message"
            className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            rows="5"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <motion.button
            type="submit"
            className={`w-full py-3 rounded-lg font-semibold text-white text-lg transition-all ${loading ? "bg-blue-400" : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"}`}
            disabled={loading}
            whileHover={!loading && { scale: 1.05 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactForm;
