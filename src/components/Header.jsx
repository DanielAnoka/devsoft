import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    
    if (targetId === "home") {
      // For "Home", scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // For other links, scroll to the respective section
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    setIsOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 fixed w-full z-50 shadow-lg" id="home">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-3xl font-bold text-white tracking-wide"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          onClick={(e) => handleScroll(e, "home")} // Scroll to the top when clicked
        >
          Dev<span className="text-blue-400">Soft</span>
        </motion.a>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-lg text-white hover:text-blue-300 transition-all duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              onClick={(e) => handleScroll(e, link.href.slice(1))}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-gradient-to-br from-blue-800 via-indigo-700 to-purple-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="flex flex-col space-y-6 p-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-xl text-gray-300 hover:text-blue-600 transition-all"
                onClick={(e) => handleScroll(e, link.href.slice(1))}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
