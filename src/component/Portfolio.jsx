import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

// ---------- Import Local Images ----------
import project1 from '../assets/images/project.jpg';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.webp';
import project4 from '../assets/images/project4.jpg';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/4.jpg';

const projects = [
  {
    id: 1,
    title: 'Travel Booking Website',
    description: 'Responsive travel booking website with modern user interface.',
    image: project1,
    link: 'https://musfeerakhalid375-source.github.io/react/',
  },
  {
    id: 2,
    title: 'Attendance Management System',
    description: 'Efficient system for managing students attendance.',
    image: project2,
    link: 'https://musfeera.smartjpgtools.com/',
  },
  {
    id: 3,
    title: 'Vegetable E-commerce Dashboard',
    description: 'Modern UI for a health and fitness mobile app.',
    image: project3,
    link: 'https://musfeerakhalid375-source.github.io/react/',
  },
  {
    id: 4,
    title: 'Weather Forecast Dashboard',
    description: 'Interactive dashboard with real-time data.',
    image: project4,
    link: 'https://musfeerakhalid375-source.github.io/react/',
  },
  {
    id: 5,
    title: 'Contact Web App',
    description: 'High-converting landing page for a startup.',
    image: project5,
    link: 'https://musfeerakhalid375-source.github.io/react/',
  },
  {
    id: 6,
    title: 'Brand Identity',
    description: 'Complete branding including logo and style guide.',
    image: project6,
    link: 'https://musfeerakhalid375-source.github.io/react/',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio py-16 md:py-20 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-orange-600 uppercase tracking-wider">
            Portfolio
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            My Amazing Works
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Most common methods for designing websites that work well on desktop is responsive and adaptive design.
          </p>
        </div>

        {/* Card Grid - Centered with wider cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto justify-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

// ---------- Single Card Component (Wider & Full Image) ----------
const ProjectCard = ({ project }) => {
  const { title, description, image, link } = project;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:border-orange-300 w-full max-w-[380px]">
      
      <div className="h-52 md:h-56 lg:h-60 overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <div className="p-5 md:p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 transition-colors duration-300 hover:text-orange-600 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* View Button */}
        <a
          href={link}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all duration-200 text-sm hover:shadow-lg"
        >
          View Project
          <FiExternalLink className="text-sm" />
        </a>
      </div>

    </div>
  );
};

export default Portfolio;