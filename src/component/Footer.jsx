import React from 'react';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-6 md:px-10">

        {/* -------- Main Footer Content -------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-gray-700">

          {/* Brand / About */}
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Musfeera</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creative designer passionate about crafting beautiful and functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>20, Somewhere in world</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FaEnvelope className="text-orange-500" />
                <a href="mailto:hello@dizme.com" className="hover:text-orange-500 transition-colors">
                  hello@dizme.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FaPhoneAlt className="text-orange-500" />
                <a href="tel:+1234567890" className="hover:text-orange-500 transition-colors">
                  +123 456 7890
                </a>
              </li>
            </ul>
          </div>

          {/* Social / Newsletter (optional) */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Me</h3>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors text-gray-400 hover:text-white"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors text-gray-400 hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors text-gray-400 hover:text-white"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors text-gray-400 hover:text-white"
              >
                <FaInstagram />
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-4">Let's connect and create something amazing!</p>
          </div>

        </div>

        {/* -------- Copyright -------- */}
        <div className="text-center pt-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-orange-500">Musfeera</span>. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;