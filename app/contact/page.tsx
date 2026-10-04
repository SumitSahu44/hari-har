"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FFF9E9]">
      <Header />

      <section className="pt-[100px] md:pt-[130px] pb-16 px-4 md:px-8 max-w-[1340px] mx-auto w-full flex-1">
        
        {/* Banner */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#075B3A] mb-2 block">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#123B2A] mb-4">
            Contact <span className="text-[#075B3A]">Harihar Sandwich</span>
          </h1>
          <p className="text-base text-[#68736C] font-medium">
            Have questions about catering, corporate orders, feedback, or general inquiries? We’d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 bg-[#075B3A] text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-black mb-4 text-[#FFC928]">Harihar HQ Bhopal</h2>
              <p className="text-sm text-white/80 font-medium mb-8 leading-relaxed">
                Connect with our team directly for catering bookings, customer support, or business partnerships.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFC928] text-[#06452D] flex items-center justify-center font-bold flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#FFC928] font-bold block uppercase">Phone</span>
                    <a href="tel:+919876543210" className="text-base font-extrabold hover:underline">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFC928] text-[#06452D] flex items-center justify-center font-bold flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#FFC928] font-bold block uppercase">Email</span>
                    <a href="mailto:hello@harihar-sandwich.in" className="text-base font-extrabold hover:underline">
                      hello@harihar-sandwich.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFC928] text-[#06452D] flex items-center justify-center font-bold flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#FFC928] font-bold block uppercase">Head Office</span>
                    <span className="text-sm font-semibold leading-snug block">
                      Plot No. 12, Zone - 1, MP Nagar, Bhopal, MP 462011
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10">
              <span className="font-handwriting text-2xl font-bold text-[#FFC928]">
                Bhopal’s Sandwich Obsession!
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#075B3A]/10 shadow-card">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <CheckCircle className="w-16 h-16 text-[#188A4A] mb-4 animate-bounce" />
                <h3 className="text-2xl font-black text-[#123B2A] mb-2">Message Sent Successfully!</h3>
                <p className="text-sm text-[#68736C] font-medium max-w-md">
                  Thank you for reaching out. A representative from Abhideep Harihar Sandwich will respond to your inquiry shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-xl font-black text-[#123B2A] mb-2">Send Us a Message</h3>

                <div>
                  <label className="text-xs font-bold text-[#075B3A] uppercase block mb-1">Your Name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 rounded-xl border border-[#075B3A]/20 bg-[#FFF9E9] text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#075B3A] uppercase block mb-1">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#075B3A]/20 bg-[#FFF9E9] text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#075B3A] uppercase block mb-1">Phone</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-[#075B3A]/20 bg-[#FFF9E9] text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#075B3A] uppercase block mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 rounded-xl border border-[#075B3A]/20 bg-[#FFF9E9] text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#075B3A] hover:bg-[#06452D] text-white font-extrabold px-8 py-4 rounded-full text-base flex items-center justify-center gap-2 shadow-md transition-all self-start"
                >
                  <span>Submit Message</span>
                  <Send className="w-4 h-4 text-[#FFC928]" />
                </button>
              </form>
            )}
          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}
