import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 py-16 px-4 sm:py-24 sm:px-8 text-white overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
   
        <motion.h1
          className="text-4xl sm:text-2xl lg:text-6xl font-extrabold leading-tight mb-6 text-white sm:mt-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transform Your Vision Into Reality
        </motion.h1>

    
        <motion.p
          className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Empower your business with cutting-edge software, expert consulting, 
          and industry-leading training to achieve unparalleled success.
        </motion.p>

        <motion.div
  className="flex flex-col sm:flex-row justify-center gap-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  <a
    href="#services"
    className="bg-blue-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition duration-300"
  >
    Get Started
  </a>
  <a
    href="#"
    className="bg-transparent border-2 border-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300"
  >
    Learn More
  </a>
</motion.div>

      </div>

     
      <motion.div
        className="absolute -top-10 -left-10 w-48 h-48 sm:w-64 sm:h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-10 -right-10 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      ></motion.div>
    </div>
  );
};

export default Hero;
