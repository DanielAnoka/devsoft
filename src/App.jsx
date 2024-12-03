import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      className="font-sans bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }} 
    >
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </motion.div>
  );
}

export default App;
