import React from 'react';
import { FaDownload } from 'react-icons/fa';
import profileImg from '../assets/images/about/1.jpg';


const About = () => {
  return (
    <section className="about relative py-16 md:py-20" id="about">
  
     
      <div className="container mx-auto  px-6 md:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* -------- Profile / Image Section -------- */}
        <div className="profile-wrapper relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">

            {/* Decorative Background Ring */}
          

            {/* Profile Image - Circular with object-cover */}
            <div className="w-full h-full">
              <img
                src={profileImg}
                alt="Musfeera - Web Designer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* -------- Badge 1 – Top Left (Years of Success) -------- */}
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-white rounded-xl shadow-lg p-3 md:p-4 flex items-center gap-2 md:gap-3 z-10">
              <span className="text-2xl md:text-3xl font-bold text-orange-600">18</span>
              <div>
                <p className="text-xs md:text-sm font-semibold text-gray-800 leading-tight">Years of</p>
                <p className="text-xs md:text-sm font-semibold text-gray-800 leading-tight">Success</p>
              </div>
            </div>

            {/* -------- Badge 2 – Bottom Right (Total Projects) -------- */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-xl shadow-lg p-3 md:p-4 flex items-center gap-2 md:gap-3 z-10">
              <span className="text-2xl md:text-3xl font-bold text-purple-600">9K</span>
              <div>
                <p className="text-xs md:text-sm font-semibold text-gray-800 leading-tight">Total</p>
                <p className="text-xs md:text-sm font-semibold text-gray-800 leading-tight">Projects</p>
              </div>
            </div>          

          </div>
        </div>

        {/* -------- Text Content -------- */}
        <div className="content-wrapper w-full lg:w-1/2 flex flex-col items-start gap-4">

          <h3 className="text-2xl md:text-3xl font-bold text-orange-600">
            I'm a Designer
          </h3>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            I Can Design Anything <br className="hidden sm:block" />
            <span className="relative">
              You Want
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-orange-400 rounded-full"></span>
            </span>
          </h1>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-lg mt-2">
            Hello there! I'm a web designer, and I'm very passionate and dedicated to my work.
            With <span className="font-semibold text-orange-600">6 months</span> of experience as a professional web developer,
            I have acquired the skills and knowledge necessary to make your project a success.
            I enjoy every step of the design process, from discussion and collaboration.
          </p>

          {/* Stats Row */}
          <div className="flex gap-8 mt-2">
            <div>
              <p className="text-2xl font-bold text-orange-600">18+</p>
              <p className="text-xs text-gray-500">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-600">9K+</p>
              <p className="text-xs text-gray-500">Projects Done</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">100%</p>
              <p className="text-xs text-gray-500">Satisfaction</p>
            </div>
          </div>

          {/* Hire Me Button */}
          <button className="mt-4 px-8 py-3 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:bg-orange-700 hover:scale-105 transition-all duration-200 flex items-center gap-2">
            Hire Me
            <FaDownload className="text-sm" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default About;