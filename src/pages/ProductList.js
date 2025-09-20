import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CategoryNavigation from "../components/CategoryNavigation";
import Header from "../components/Header";
import PromoBanner from "../components/PromoBanner";
import { PulseLoader } from "react-spinners"; // import PulseLoader
import { FaTelegramPlane } from "react-icons/fa"; // Telegram icon

const ProductList = ({ products }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get("category") || "ទាំងអស់";

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const productGridRef = useRef(null);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const filtered =
        selectedCategory === "ទាំងអស់"
          ? products
          : products.filter((p) => p.category === selectedCategory);

      setFilteredProducts(filtered);
      setLoading(false);

      if (productGridRef.current) {
        productGridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedCategory, products]);

  return (
    <div className="relative p-2">
      <div className="max-w-[1200px] mx-auto">
        <Header />
        <PromoBanner />

        <div className="my-4 sticky top-0 z-10 bg-white">
          <CategoryNavigation />
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <PulseLoader color="#2563eb" size={10} margin={3} />
          </div>
        ) : (
          <div
            ref={productGridRef}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Telegram Button */}
      {/* <a
        href="https://t.me/yourusername" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform transform hover:scale-110 "
      >
        <FaTelegramPlane size={24} />
      </a> */}
      <button
        onClick={() => alert("Telegram clicked!")}
        className="fixed bottom-5 right-5 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
      >
        <FaTelegramPlane size={24} />
      </button>
    </div>
  );
};

export default ProductList;
