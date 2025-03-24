import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import ProductGrid from "./components/ProductGrid";
import ProductCarousel from "./components/ProductCarousel";
import { FaSun, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const App = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-8 flex justify-center z-50">
        <ul className="flex space-x-8 text-lg font-medium">
          {["Home", "About", "Products", "Contact"].map((section) => (
            <li key={section}>
              <Link
                to={section.toLowerCase()}
                smooth={true}
                duration={800}
                className="cursor-pointer hover:text-orange-500 transition"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-96 flex flex-col items-center justify-center text-center text-white px-6 mt-12"
      >

        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
        >
          <source src="solar.mp4" type="video/mp4" />
        </video>
        <motion.h1 className="text-5xl font-bold mt-8 mb-4 relative z-10 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          >
          Shri Balaji Solar Green Energy

        </motion.h1>
        <motion.p
          className="text-lg relative z-10 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          >
          Powering a Brighter Future.
        </motion.p>
        <motion.p
          className="text-lg mb-6 relative z-10 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Reliable & Sustainable Solar Solutions for Your Home & Business.
        </motion.p>
        <motion.button
          className="bg-white text-orange-500 px-6 py-3 rounded-full shadow-lg text-lg font-semibold relative z-10"
          whileHover={{ scale: 1.1 }}
        >
          <Link to="services" smooth={true} duration={800}>
            Learn More
          </Link>
        </motion.button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-white text-center " >
        <h2 className="text-4xl font-semibold mb-6">Why Solar?</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Solar energy is clean, renewable, and helps reduce electricity costs.
          Our high-efficiency solar panels ensure a reliable and eco-friendly
          energy source for years to come.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-8 bg-gray-100 text-center">
        <h2 className="text-4xl font-semibold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: FaSun, text: "On and Off Grid Solar Panel Installation" },
            { icon: FaSun, text: "Battery Storage Solutions" },
            { icon: FaSun, text: "Maintenance & Support" },
            { icon: FaSun, text: "Consultation Services" },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <service.icon className="text-orange-500 text-4xl mb-4" />
              <p className="text-lg font-medium">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section id="products">
        <ProductGrid />
        <ProductCarousel />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-white text-center">
        <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: FaPhone, text: "+917887256701, +917398269955" },
            { icon: FaEnvelope, text: "info@solarshop.com" },
            { icon: FaMapMarkerAlt, text: "Moh. Kotriyasat bhinga shrawasti Office address opposite deewani kachehri gate no 1, Bhinga bahraich road" },
          ].map((contact, index) => (
            <div key={index} className="flex items-center gap-3 text-lg">
              <contact.icon className="text-orange-500 text-2xl" />
              <p>{contact.text}</p>
            </div>
          ))}
        </div>

        {/* Google Map Embed */}
        <div className="mt-8 w-full flex justify-center">
          <iframe
            title="Store Location"
            className="w-full md:w-2/3 h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d81.919213!3d27.703262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQyJzA5LjgiTiA4McKwNTUnMDkuMiJF!5e0!3m2!1sen!2sus!4v1617250033454"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>


      {/* Footer */}
      <footer className="text-center py-6 bg-gray-900 text-gray-300">
        &copy; {new Date().getFullYear()} Solar Solutions. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;
