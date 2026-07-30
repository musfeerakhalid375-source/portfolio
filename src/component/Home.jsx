import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import image from '../assets/images/about/pic.png';

const Home = () => {
  return (
    <section
      className="Hero min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 pt-24 pb-10"
      aria-label="Introduction" id="home"
    >
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-evenly gap-12">
        
        {/* -------- Image (always first in DOM) -------- */}
        <div className="hero-image md:order-2 relative md:w-80 md:h-80 lg:w-96 lg:h-96">
          {/* Decorative ring */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-300 to-blue-300 opacity-30 blur-2xl -z-10 animate-pulse"></div>
          
          <div className="relative w-64 h-64 md:w-80 rounded-full md:h-80 lg:w-96 lg:h-96 overflow-hidden">
            <img
              src={image}
              alt="Musfeera - Creative Designer"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* -------- Text Content (always second in DOM) -------- */}
        <div className="hero-content md:order-1 flex flex-col items-start gap-4 md:max-w-xl">
      

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            I'm{' '}
            <span className="text-orange-600 relative">
              Musfeera
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-400 rounded-full"></span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-medium text-gray-700">
            A <span className="text-blue-600">Creative Designer</span> from{' '}
            <span className="text-green-600">Pakistan</span>
          </p>

          <p className="text-gray-600 leading-relaxed max-w-md">
           I'm a passionate designer and MERN stack developer based in Pakistan, dedicated to
            crafting beautiful and functional digital experiences.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            {/* Animated "Hire Me" button */}
            <button className="relative w-[150px] overflow-hidden group px-6 py-3 border-2 border-orange-600 rounded-full">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Hire Me
              </span>
              <div className="absolute bottom-0 left-0 w-full h-full bg-orange-600 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="GitHub" className="text-gray-600 hover:text-orange-600 transition-colors text-2xl">
              <FaGithub />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-orange-600 transition-colors text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-orange-600 transition-colors text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;