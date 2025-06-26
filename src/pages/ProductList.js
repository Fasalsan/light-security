import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Card from "../components/Card";
import data from "../api/Product";
import Top from "./Top";

export default function ProductList() {
  const navigate = useNavigate();
  const location = useLocation();

  // Load selected category from location state if returning from detail
  const initialCategory = location.state?.selectedCategory || "ទាំះអស់";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // Extract unique categories
  const categories = ["ទាំះអស់", ...new Set(data.map((p) => p.category))];

  // Filter products by active category
  const filteredProducts =
    activeCategory === "ទាំះអស់"
      ? data
      : data.filter((p) => p.category === activeCategory);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // Clear state after reading
    if (location.state?.selectedCategory) {
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Top />

      <div className="px-4 mt-4">
        <h1 className="text-xl font-serif font-bold mb-4 text-gray-800">
          ប្រភេទពិលទាំងអស់
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
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

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                  navigate(`/product/${product.id}`, {
                    state: { ...product, fromCategory: activeCategory },
                  })
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
