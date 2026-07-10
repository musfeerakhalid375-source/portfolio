import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-evenly">

        {/* Logo */}
        <div className="logo">
          <h1 className="text-2xl font-bold text-orange-600">Musfeera</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-orange-600 border-b-2 border-orange-600"
              className="hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 pb-1 transition-colors cursor-pointer"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-orange-600 border-b-2 border-orange-600"
              className="hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 pb-1 transition-colors cursor-pointer"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="portfolio"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-orange-600 border-b-2 border-orange-600"
              className="hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 pb-1 transition-colors cursor-pointer"
            >
              Portfolio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-orange-600 border-b-2 border-orange-600"
              className="hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 pb-1 transition-colors cursor-pointer"
            >
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-orange-600 border-b-2 border-orange-600"
              className="hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 pb-1 transition-colors cursor-pointer"
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-orange-600 border-b-2 border-orange-600"
              className="hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 pb-1 transition-colors cursor-pointer"
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <a
              href="/CV.pdf"
              download
              className="px-6 py-2 text-black border-2 border-orange-600 rounded-full hover:bg-orange-500 hover:text-white transition-colors sm:px-4 sm:py-1 md:px-6 md:py-2"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Hamburger Toggle (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-4 pb-6 px-6 bg-white/90 backdrop-blur-sm">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-orange-600"
              onClick={toggleMenu}
              className="block hover:text-orange-600 cursor-pointer"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-orange-600"
              onClick={toggleMenu}
              className="block hover:text-orange-600 cursor-pointer"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="portfolio"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-orange-600"
              onClick={toggleMenu}
              className="block hover:text-orange-600 cursor-pointer"
            >
              Portfolio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-orange-600"
              onClick={toggleMenu}
              className="block hover:text-orange-600 cursor-pointer"
            >
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-orange-600"
              onClick={toggleMenu}
              className="block hover:text-orange-600 cursor-pointer"
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-orange-600"
              onClick={toggleMenu}
              className="block hover:text-orange-600 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <a
              href="/CV.pdf"
              download
              className="px-6 py-2 text-black border-2 border-orange-600 rounded-full hover:bg-orange-500 hover:text-white transition-colors sm:px-4 sm:py-1 md:px-6 md:py-2"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;