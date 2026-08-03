import React from 'react'
import  { useState } from "react";
import {User,Phone,Mail,ChevronDown,MessageSquare,AlertCircle,Lightbulb,MoreHorizontal,Send,ShieldCheck,} from "lucide-react";


const Enquiry = () => {
    const messageTypes = [
  { value: "enquiry", label: "Enquiry", icon: MessageSquare },
  { value: "feedback", label: "Feedback", icon: MessageSquare },
  { value: "complaint", label: "Complaint", icon: AlertCircle },
  { value: "suggestion", label: "Suggestion", icon: Lightbulb },
  { value: "other", label: "Other", icon: MoreHorizontal },
];

const subjects = [
  "General Enquiry",
  "Order Issue",
  "Pricing Question",
  "Service Feedback",
  "Partnership",
  "Other",
];

 const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    messageType: "enquiry",
    message: "",
  });
  

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
  };
  return (
       <div className="max-w-3xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-10">
        {/* Heading */}
        <div className="mb-8">
          <p className="text-red-500 text-xs font-semibold tracking-widest mb-2">
            SEND US A MESSAGE
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Enquiry &amp; <span className="text-red-500">Feedback</span> Form
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Please fill out the form below and we will get back to you.
          </p>
          <div className="w-10 h-0.5 bg-red-600" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={handleChange("fullName")}
                  placeholder="Enter your full name"
                  className="w-full bg-transparent border border-white/15 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange("phone")}
                  placeholder="Enter your phone number"
                  className="w-full bg-transparent border border-white/15 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Email + Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border border-white/15 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  required
                  value={form.subject}
                  onChange={handleChange("subject")}
                  className="w-full appearance-none bg-transparent border border-white/15 rounded-lg pl-4 pr-10 py-3 text-sm text-white focus:outline-none focus:border-red-500 transition-colors [&>option]:bg-[#0a0a0a]"
                >
                  <option value="" disabled className="text-gray-500">
                    Select a subject
                  </option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Message Type */}
          <div>
            <label className="block text-sm font-semibold text-white mb-3">
              Message Type <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {messageTypes.map(({ value, label, icon: Icon }) => {
                const active = form.messageType === value;
                return (
                  <button
                    type="button"
                    key={value}
                    onClick={() => setForm((prev) => ({ ...prev, messageType: value }))}
                    className={`relative flex flex-col items-center justify-center gap-2 rounded-lg border px-3 py-5 text-sm font-medium transition-colors ${
                      active
                        ? "border-red-500 text-white"
                        : "border-white/15 text-gray-300 hover:border-white/30"
                    }`}
                  >
                    <span
                      className={`absolute top-2.5 left-2.5 w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                        active ? "border-red-500" : "border-gray-500"
                      }`}
                    >
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-red-500" />}
                    </span>
                    <Icon
                      className={`w-5 h-5 ${active ? "text-red-500" : "text-gray-400"}`}
                    />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={handleChange("message")}
              placeholder="Type your message here..."
              className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-y"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg transition-all"
          >
            <Send className="w-4 h-4" />
            
          </button>

          
          

          {/* Trust note */}
          <p className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            We value your time and respond to all messages within 24 hours.
          </p>
        </form>
      </div>
 
  )
}

export default Enquiry