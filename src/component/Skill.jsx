import React from 'react';
import { FaPaintBrush, FaCode, FaMobileAlt } from 'react-icons/fa';
import skillImage from '../assets/images/1.jpg'; 

const skillsData = [
  {
    name: 'Illustrator',
    percentage: 85,
    color: 'bg-orange-500',
    icon: <FaPaintBrush className="text-orange-500 text-lg" />,
  },
  {
    name: 'Photoshop',
    percentage: 95,
    color: 'bg-blue-500',
    icon: <FaCode className="text-blue-500 text-lg" />,
  },
  {
    name: 'Figma',
    percentage: 75,
    color: 'bg-purple-500',
    icon: <FaMobileAlt className="text-purple-500 text-lg" />,
  },
];

const Skill = () => {
  return (
    <section 
      className="skill min-h-screen flex items-center justify-center bg-white py-12 md:py-16" 
      id="skills"
    >
      {/* Container with max-width and auto margins for centering + padding for left-right spacing */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16">
        
        {/* -------- Left Side: Content + Skills -------- */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
            Design is Life
          </h2>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-3 leading-tight">
            I Develop Skills Regularly <br />
            to Keep Me Update
          </h1>

          <p className="text-gray-600 leading-relaxed mt-3 max-w-lg text-sm md:text-base">
            Most common methods for designing websites that work well on desktop is responsive and adaptive design.
          </p>

          {/* ---------- Skills Bars ---------- */}
          <div className="mt-6">
            {skillsData.map((skill, index) => (
              <div key={index} className="mb-4">
                {/* Skill Name & Percentage */}
                <div className="flex items-center justify-between mb-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-semibold text-gray-800 text-sm">{skill.name}</span>
                  </div>
                  <span className="font-bold text-gray-700 text-sm">{skill.percentage}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-700 ease-out`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -------- Right Side: Image -------- */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px]">
          

            {/* Image Container */}
            <div className="w-full h-full overflow-hidden">
              <img
                src={skillImage}
                alt="Skills & Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skill;