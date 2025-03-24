import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Mono-Crystalline Panel",
    image: "/solar-panel1.jpg",
    feature: "22% Efficiency - 400W",
  },
  {
    id: 2,
    name: "Poly-Crystalline Panel",
    image: "/solar-panel2.jpg",
    feature: "18% Efficiency - 350W",
  },
  {
    id: 3,
    name: "Hybrid Inverter",
    image: "/inverter.jpg",
    feature: "5kW - Battery Compatible",
  },
  {
    id: 4,
    name: "Solar Battery",
    image: "/battery.jpg",
    feature: "10kWh - Lithium-ion",
  },
  {
    id: 5,
    name: "Mono-Crystalline Panel",
    image: "/solar-panel1.jpg",
    feature: "22% Efficiency - 400W",
  },
  {
    id: 6,
    name: "Poly-Crystalline Panel",
    image: "/solar-panel2.jpg",
    feature: "18% Efficiency - 350W",
  },
  {
    id: 7,
    name: "Hybrid Inverter",
    image: "/inverter.jpg",
    feature: "5kW - Battery Compatible",
  },
  {
    id: 8,
    name: "Solar Battery",
    image: "/battery.jpg",
    feature: "10kWh - Lithium-ion",
  },
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-20 px-8 bg-gray-100 text-center">
      <h2 className="text-4xl font-semibold mb-6">Products</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.feature}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
