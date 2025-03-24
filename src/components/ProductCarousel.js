import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Adani",
    image: "/solar-panel1.jpg",
    feature: "22% Efficiency - 400W",
  },
  {
    id: 2,
    name: "Luminous",
    image: "/solar-panel2.jpg",
    feature: "18% Efficiency - 350W",
  },
  {
    id: 3,
    name: "Tata",
    image: "/inverter.jpg",
    feature: "5kW - Battery Compatible",
  },
  {
    id: 4,
    name: "Vikram",
    image: "/battery.jpg",
    feature: "10kWh - Lithium-ion",
  },
  {
    id: 5,
    name: "Microtek",
    image: "/inverter.jpg",
    feature: "5kW - Battery Compatible",
  },
  {
    id: 6,
    name: "Utl",
    image: "/battery.jpg",
    feature: "10kWh - Lithium-ion",
  },
];

const ProductCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <section id="products" className="py-20 px-8 bg-gray-100 text-center">
      <h2 className="text-4xl font-semibold mb-6">Brands We Offer</h2>
      <div className="relative max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={products[current].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center"
          >
            <img
              src={products[current].image}
              alt={products[current].name}
              className="w-60 h-60 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">{products[current].name}</h3>
            <p className="text-sm text-gray-600">{products[current].feature}</p>
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;
