"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Store, CheckCircle, ArrowRight } from "lucide-react";

interface FranchiseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FranchiseModal({ isOpen, onClose }: FranchiseModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    budget: "₹10 Lakh - ₹15 Lakh",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FFF9E9] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border-4 border-[#075B3A] flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#075B3A] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FFC928] flex-shrink-0 relative">
              <Image
                src="/images/logo/profile.jpg"
                alt="Harihar Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight leading-tight">Franchise Inquiry</h3>
              <p className="text-[11px] text-[#FFC928] font-bold">Abhideep Harihar Sandwich</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10 transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Form Body */}
        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center justify-center">
            <CheckCircle className="w-16 h-16 text-[#188A4A] mb-4 animate-bounce" />
            <h4 className="text-2xl font-black text-[#123B2A] mb-2">Application Received!</h4>
            <p className="text-sm text-[#68736C] font-medium mb-6">
              Thank you for your interest in Abhideep Harihar Sandwich. Our franchise development team will reach out to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#075B3A] text-white font-extrabold px-8 py-3 rounded-full text-sm"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 flex flex-col gap-4">
            <div className="bg-[#FFC928]/20 p-3.5 rounded-2xl border border-[#FFC928]">
              <span className="text-xs font-bold text-[#06452D] block">
                Turn your city into the next Harihar Sandwich hub. Complete this short application!
              </span>
            </div>

            <div>
              <label className="text-xs font-bold text-[#075B3A] uppercase block mb-1">Full Name</label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-4 py-3 rounded-xl border border-[#075B3A]/20 bg-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-[#075B3A] uppercase block mb-1">Phone</label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-[#075B3A]/20 bg-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-[#075B3A] uppercase block mb-1">Proposed City</label>
                <input
                  required
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Indore / Gwalior"
                  className="w-full px-4 py-3 rounded-xl border border-[#075B3A]/20 bg-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#075B3A] uppercase block mb-1">Email Address</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rahul@example.com"
                className="w-full px-4 py-3 rounded-xl border border-[#075B3A]/20 bg-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#075B3A] uppercase block mb-1">Investment Budget</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#075B3A]/20 bg-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
              >
                <option>₹10 Lakh - ₹15 Lakh</option>
                <option>₹15 Lakh - ₹25 Lakh</option>
                <option>Above ₹25 Lakh</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-[#075B3A] uppercase block mb-1">Additional Notes</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about location preference or prior experience..."
                className="w-full px-4 py-3 rounded-xl border border-[#075B3A]/20 bg-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-[#FFC928] hover:bg-[#F5B91E] text-[#06452D] font-black py-4 rounded-full text-base flex items-center justify-center gap-2 shadow-md"
            >
              <span>Submit Franchise Application</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
