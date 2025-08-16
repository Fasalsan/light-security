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

  const query = new URLSearchParams(location.search);
  const initialCategory = query.get("category") || "ទាំងអស់";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [loading, setLoading] = useState(true);

  // Extract unique categories
  const categories = ["ទាំងអស់", ...new Set(data.map((p) => p.category))];

  // Fake loading for UX
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // short fake delay
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const filteredProducts =
    activeCategory === "ទាំងអស់"
      ? data
      : data.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    navigate(`/?category=${encodeURIComponent(cat)}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeCategory]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Top />

      {/* Sticky Tabs */}
      <div className="sticky top-0 z-20 bg-gray-100 py-4 px-2">
        <h1 className="text-xl font-serif font-bold mb-4 text-gray-800">
          ប្រភេទពិលទាំងអស់
        </h1>

        <div className="flex flex-wrap gap-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-3 rounded-full text-sm font-medium border ${
                activeCategory === cat
                  ? "bg-red-900 text-white"
                  : "bg-white text-gray-700 hover:bg-red-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards */}
      <div className="px-4 mt-4">
        {loading ? (
          // 👇 Spinner
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-900"></div>
          </div>
        ) : filteredProducts.length === 0 ? (
          // 👇 No products
          <div className="text-center text-gray-600 mt-10">
            មិនមានផលិតផលក្នុងប្រភេទនេះទេ
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
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
                      state: {
                        ...product,
                        fromCategory: activeCategory,
                      },
                    })
                  }
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
