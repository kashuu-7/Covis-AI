"use client";

import React, { useState } from "react";
import { MessageSquare, Upload, Send, X } from "lucide-react";

export default function ContactForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedFile(file);

    if (file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview("");
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setPreview("");

    const input = document.getElementById("attachment");
    if (input) {
      input.value = "";
    }
  };

  return (
    <div className="p-8 md:p-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-white" />
        </div>
        Send us a message
      </h3>
      <form className="space-y-6">
        <div className="group">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={150}
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-gray-50 border-2 rounded-xl text-gray-900 placeholder-gray-400 outline-none focus:bg-white transition-all duration-300 border-gray-200 focus:border-purple-500"
          />
        </div>
        <div className="group">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            placeholder="john@company.com"
            className="w-full px-4 py-3 bg-gray-50 border-2 rounded-xl text-gray-900 placeholder-gray-400 outline-none focus:bg-white transition-all duration-300 border-gray-200 focus:border-purple-500"
          />
        </div>
        <div className="group">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            required
            maxLength={200}
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 bg-gray-50 border-2 rounded-xl text-gray-900 placeholder-gray-400 outline-none focus:bg-white transition-all duration-300 border-gray-200 focus:border-purple-500"
          />
        </div>
        <div className="group">
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            maxLength={200}
            placeholder="Your Company"
            className="w-full px-4 py-3 bg-gray-50 border-2 rounded-xl text-gray-900 placeholder-gray-400 outline-none focus:bg-white transition-all duration-300 border-gray-200 focus:border-purple-500"
          />
        </div>
        <div className="group">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            maxLength={1500}
            placeholder="Tell us about your project..."
            className="w-full px-4 py-3 bg-gray-50 border-2 rounded-xl text-gray-900 placeholder-gray-400 outline-none focus:bg-white transition-all duration-300 resize-none border-gray-200 focus:border-purple-500"
          />
          <div className="mt-1.5 flex items-start justify-between gap-2">
            <span></span>
            <span className="shrink-0 text-xs text-gray-400">0/1500</span>
          </div>
        </div>
        <div className="group">
          <div className="w-full">
            <label
              data-slot="label"
              className="text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-2 flex items-center gap-1.5"
            >
              Attachment (Optional)
            </label>
            <div className="relative">
              <input
                type="file"
                id="attachment"
                name="attachment"
                accept="*/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="attachment"
                className="
    flex items-center gap-3 px-4 py-3
    border-2 border-dashed rounded-xl
    transition-all duration-300
    border-gray-300 hover:border-[#8500db]
    hover:bg-gray-50 cursor-pointer
  "
              >
                <div className="shrink-0">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-12 h-12 rounded-lg object-cover border border-gray-300"
                    />
                  ) : (
                    <Upload className="w-5 h-5 text-gray-400" />
                  )}
                </div>

                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-medium text-gray-700 truncate">
                    {selectedFile
                      ? selectedFile.name
                      : "Click to upload or drag and drop (Max 20MB)"}
                  </p>

                  <p className="text-xs text-gray-500 mt-0.5">
                    {selectedFile
                      ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB`
                      : "Any file up to 20 MB"}
                  </p>
                </div>

                {selectedFile && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      removeFile();
                    }}
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-100 transition"
                  >
                    <X className="w-4 h-4 text-red-500" />
                  </button>
                )}
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-4 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none bg-linear-to-r from-purple-700 via-fuchsia-600 to-purple-700 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-[1.02] disabled:opacity-60"
        >
          Send Message
          <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
        <p className="text-xs leading-relaxed text-gray-400 text-center">
          This site is protected by reCAPTCHA and the Google&nbsp;
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            className="underline hover:text-gray-600"
          >
            Privacy Policy
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://policies.google.com/terms"
            className="underline hover:text-gray-600"
          >
            Terms of Service
          </a>
          &nbsp;apply.
        </p>
      </form>
    </div>
  );
}
