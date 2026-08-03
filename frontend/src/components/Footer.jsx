import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-red-600 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <h2 className="text-3xl font-bold text-red-500">Spingo</h2>
            <p className="mt-4 text-gray-400 leading-7">
              Premium laundry and dry-cleaning service with fast delivery,
              hygienic cleaning, and exceptional garment care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-red-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-red-500 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-red-500 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#pricing" className="hover:text-red-500 transition">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#enquiry" className="hover:text-red-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-red-500" />
                <span>+91 xxxxxxxxxx</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-red-500" />
                <span>support@spingo.com</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-500 mt-1" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Follow Us
            </h3>

            <p className="text-gray-400 mb-5">
              Stay connected through our social media.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="bg-zinc-900 hover:bg-red-600 transition p-3 rounded-full"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="bg-zinc-900 hover:bg-red-600 transition p-3 rounded-full"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="bg-zinc-900 hover:bg-red-600 transition p-3 rounded-full"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="bg-zinc-900 hover:bg-red-600 transition p-3 rounded-full"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Spingo. All Rights Reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-500 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-red-500 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;