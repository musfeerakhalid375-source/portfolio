import React from 'react';
import { FaPenFancy, FaPalette, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    title: 'Creative Design',
    price: 'Starts from $99',
    description:
      'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development.',
    icon: <FaPenFancy className="text-4xl text-orange-600" />,
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    iconBg: 'bg-orange-100',
  },
  {
    id: 2,
    title: 'Graphic Design',
    price: 'Starts from $199',
    description:
      'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development.',
    icon: <FaPalette className="text-4xl text-purple-600" />,
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    iconBg: 'bg-purple-100',
  },
  {
    id: 3,
    title: 'Web Development',
    price: 'Starts from $149',
    description:
      'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development.',
    icon: <FaLaptopCode className="text-4xl text-blue-600" />,
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconBg: 'bg-blue-100',
  },
  {
    id: 4,
    title: 'App Design',
    price: 'Starts from $249',
    description:
      'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development.',
    icon: <FaMobileAlt className="text-4xl text-green-600" />,
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    iconBg: 'bg-green-100',
  },
];

const Service = () => {
  return (
    <section className="service py-16 md:py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-6 md:px-10">

        {/* ---------- Section Header ---------- */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-orange-600 uppercase tracking-wider">
            Services
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            What I Do for Clients
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Most common methods for designing websites that work well on desktop is responsive and adaptive design.
          </p>
        </div>

        {/* ---------- Services Grid ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};

// ---------- Single Service Card ----------
const ServiceCard = ({ service }) => {
  const { title, price, description, icon, bgColor, borderColor, iconBg } =
    service;

  return (
    <div
      className={`${bgColor} rounded-2xl p-6 md:p-8 border ${borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
    >
      {/* Icon */}
      <div
        className={`${iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>

      {/* Price */}
      <p className="text-sm font-semibold text-orange-600 mb-3">{price}</p>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Service;