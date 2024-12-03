import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-800 text-white py-5 relative">
 
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-lg"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col items-center mb-2">
        <p className="text-lg md:text-xl font-semibold text-center mb-2">
          &copy; 2024 Ugo. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-xl">
  
          <a href="#" className="text-gray-200 hover:text-white transition-transform transform hover:scale-110">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-200 hover:text-white transition-transform transform hover:scale-110">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-200 hover:text-white transition-transform transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-200 hover:text-white transition-transform transform hover:scale-110">
            <FaInstagram />
          </a>
        </div>
      </div>
      <p className="text-center text-sm text-gray-400 mt-4">
        Crafted with 💙 by Ugo.
      </p>
    </div>
  </footer>
);

export default Footer;
