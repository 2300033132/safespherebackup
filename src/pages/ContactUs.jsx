// src/pages/Contact.jsx
import React, { useState } from "react";
import { Mail, User, MessageSquare, Phone } from "lucide-react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.text())
      .then((msg) => {
        alert(msg);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#e2e6ea] via-[#edf0f3] to-[#f3f4f6] py-16 px-6">
      <div className="max-w-lg w-full bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-200 animate-fadeIn">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Mail className="text-cyan-600" size={42} />
          </div>
          <h2 className="text-3xl font-bold text-[#1b263b] mb-2 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            We’d love to hear from you. Whether it’s feedback, questions, or
            support — reach out anytime.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 animate-slideUp"
        >
          <div className="relative">
            <User
              className="absolute top-3.5 left-3 text-gray-400"
              size={20}
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-800 bg-white/70 shadow-sm"
            />
          </div>

          <div className="relative">
            <Mail
              className="absolute top-3.5 left-3 text-gray-400"
              size={20}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-800 bg-white/70 shadow-sm"
            />
          </div>

          <div className="relative">
            <MessageSquare
              className="absolute top-3.5 left-3 text-gray-400"
              size={20}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-800 bg-white/70 shadow-sm resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#1b6ca8] to-[#2a5298] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-500 text-sm mb-2">For urgent help:</p>
          <div className="flex items-center justify-center gap-2 text-[#1b263b] font-semibold">
            <Phone className="text-cyan-600" size={18} />
            9032025629 - HELP
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 1s ease-out; }
          .animate-slideUp { animation: slideUp 1s ease-out; }
        `}
      </style>
    </div>
  );
}

export default ContactUs;
