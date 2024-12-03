import { motion } from "framer-motion";
import { FaCode, FaChalkboardTeacher, FaLightbulb, FaTools } from "react-icons/fa";

const services = [
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your needs.",
    icon: <FaCode className="text-blue-500 w-16 h-16 mb-6" />,
  },
  {
    title: "Training",
    description: "Comprehensive skill-building programs to empower your team.",
    icon: <FaChalkboardTeacher className="text-green-500 w-16 h-16 mb-6" />,
  },
  {
    title: "Consulting",
    description: "Expert advice to help your business achieve its goals.",
    icon: <FaLightbulb className="text-yellow-500 w-16 h-16 mb-6" />,
  },
  {
    title: "Hardware Supplies",
    description: "High-quality hardware to support your operations.",
    icon: <FaTools className="text-red-500 w-16 h-16 mb-6" />,
  },
];

const Services = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-gray-100 relative overflow-hidden" id="services">
      {/* Background Design */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-50 blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 0.3 }}
        transition={{ duration: 2, yoyo: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-50 blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 0.3 }}
        transition={{ duration: 2, yoyo: Infinity }}
      />

      {/* Content Section */}
      <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-800">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Our Services
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            {service.icon}
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
