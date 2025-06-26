import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Card from "../components/Card";
import data from "../api/Product";
import Top from "./Top";

export default function ProductList() {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("ទាំងអស់");

  // Extract unique categories
  const categories = ["ទាំងអស់", ...new Set(data.map((p) => p.category))];

  // Filter products based on selected category
  const filteredProducts =
    activeCategory === "ទាំងអស់"
      ? data
      : data.filter((p) => p.category === activeCategory);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Top />

      <div className="px-4 mt-4">
        <h1 className="text-xl font-serif font-bold mb-4 text-gray-800">
          ប្រភេទពិលទាំងអស់
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-sm font-medium border ${activeCategory === cat
                  ? "bg-red-900 text-white"
                  : "bg-white text-gray-700 hover:bg-red-50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card
                image={product.image}
                name={product.name}
                price={product.price}
                onView={() =>
                  navigate(`/product/${product.id}`, { state: product })
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
