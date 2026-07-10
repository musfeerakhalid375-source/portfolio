import React from 'react';
import { TbTargetArrow } from 'react-icons/tb';
import { FcIdea } from 'react-icons/fc';
import { LuPaintbrushVertical } from 'react-icons/lu';
import bg1 from '../assets/images/process/1.png';
import bg2 from '../assets/images/process/2.png';
import bg3 from '../assets/images/process/3.png';

const Features = () => {
  const features = [
    {
      icon: <TbTargetArrow className="text-4xl text-orange-600" />, // ✅ visible color
      bgImage: bg1,
      title: 'Pixel Perfect',
      description:
        'Most common methods for designing websites that work well on desktop is responsive and adaptive design.',
    },
    {
      icon: <LuPaintbrushVertical className="text-4xl text-purple-600" />, // ✅ visible color
      bgImage: bg2,
      title: 'High Quality',
      description:
        'Most common methods for designing websites that work well on desktop is responsive and adaptive design.',
    },
    {
      icon: <FcIdea className="text-4xl" />, // ✅ has built-in color
      bgImage: bg3,
      title: 'Awesome Idea',
      description:
        'Most common methods for designing websites that work well on desktop is responsive and adaptive design.',
    },
  ];

  return (
    <section className="py-16 px-6" aria-label="Features">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Work With Me
        </h2>
        <p className="text-gray-500 mt-2">What I bring to the table</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
          >
            <div
              className="p-5 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 w-20 h-20 flex items-center justify-center"
              style={{
                backgroundImage: `url(${feature.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {feature.icon}
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {feature.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {feature.description}
            </p>

            <div className="w-12 h-1 mx-auto mt-4 rounded-full group-hover:w-20 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;