"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShowSuccess(false);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setShowSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
          <p className="text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-10 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-10 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-10 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-bold mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-10 focus:border-transparent"
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="quote">Request Quote</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project or question..."
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-10 focus:border-transparent resize-vertical"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={isLoading}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-10 hover:bg-opacity-90 text-white"
              }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {showSuccess && (
              <p className="text-green-10 font-semibold">
                Message sent successfully! We'll get back to you soon.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}