"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, you would send this data to an API
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-[#050409]">
      <Header />

      <div className="pt-24">
        <section className="bg-[#0f172a] py-16 text-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Have questions or want to collaborate? We'd love to hear from you.
              Contact us today and let's start a conversation.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Contact Information
                  </h3>
                  <p className="mt-3 text-slate-300">
                    Reach out through any of these channels:
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h4 className="font-semibold text-[#d6ab6b]">WhatsApp</h4>
                  <p className="mt-2 text-slate-300">
                    Quick and convenient messaging
                  </p>
                  <a
                    href="https://wa.me/2348125569262"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h4 className="font-semibold text-[#d6ab6b]">Email</h4>
                  <p className="mt-2 text-slate-300">hello@dochessworld.com</p>
                  <a
                    href="mailto:hello@dochessworld.com"
                    className="mt-3 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-semibold text-white transition hover:border-white/20"
                  >
                    Send Email
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h4 className="font-semibold text-[#d6ab6b]">
                    Business Hours
                  </h4>
                  <p className="mt-2 text-sm text-slate-300">
                    Monday - Friday: 9:00 AM - 6:00 PM WAT
                    <br />
                    Saturday: 10:00 AM - 4:00 PM WAT
                    <br />
                    Sunday: Closed
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h4 className="font-semibold text-[#d6ab6b]">Quick Links</h4>
                  <div className="mt-3 space-y-2 text-sm">
                    <a
                      href="/shop"
                      className="block text-slate-300 transition hover:text-[#d6ab6b]"
                    >
                      → Shop Products
                    </a>
                    <a
                      href="/category"
                      className="block text-slate-300 transition hover:text-[#d6ab6b]"
                    >
                      → Browse Categories
                    </a>
                    <a
                      href="/about"
                      className="block text-slate-300 transition hover:text-[#d6ab6b]"
                    >
                      → About Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-2xl font-semibold text-white">
                  Send us a Message
                </h3>

                {submitted && (
                  <div className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4">
                    <p className="text-sm text-green-400">
                      Thank you! Your message has been received. We'll get back
                      to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 transition focus:border-[#d6ab6b]/50 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 transition focus:border-[#d6ab6b]/50 focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-white"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 transition focus:border-[#d6ab6b]/50 focus:outline-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 transition focus:border-[#d6ab6b]/50 focus:outline-none"
                      placeholder="Tell us more..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#e5c185] py-3 text-sm font-semibold text-black transition hover:bg-[#f2d29e]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0f172a] py-16 text-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 text-center">
            <h2 className="text-2xl font-bold">
              Looking for wholesale or bulk orders?
            </h2>
            <p className="mt-3 text-slate-300">
              Our team specializes in custom fragrances and large-scale orders.
            </p>
            <a
              href="https://wa.me/2348125569262?text=Hello!%20I%27m%20interested%20in%20wholesale%20inquiries"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#25D366] px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              WhatsApp Us
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
