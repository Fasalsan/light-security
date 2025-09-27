import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CategoryNavigation from "../components/CategoryNavigation";
import Header from "../components/Header";
import PromoBanner from "../components/PromoBanner";
import { PulseLoader } from "react-spinners";
import TelegramButton from "../components/TelegramButton";

const ProductList = ({ products }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get("category") || "ទាំងអស់";

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [atTop, setAtTop] = useState(false); // ✅ for detecting top-0

  const productGridRef = useRef(null);
  const stickyRef = useRef(null); // ✅ reference to sticky element

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
        productGridRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedCategory, products]);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const { top } = stickyRef.current.getBoundingClientRect();
        // consider it at top if within 5px
        setAtTop(top <= 5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    // <div className="relative bg-[#eef0f2]">
    <div className="relative bg-white">
      <div className="max-w-[1024px] mx-auto pt-2">
        <div className="px-3">
          <Header />
          <PromoBanner />
        </div>

        <div
          ref={stickyRef}
          style={{ willChange: "transform" }}
          className={`my-4 sticky top-0 z-10 transition-colors duration-300 ${atTop ? "bg-white rounded-b-xl shadow-lg" : "bg-transparent"
            }`}
        >
          <CategoryNavigation />
        </div>


        {loading ? (
          <div className="flex justify-center items-center h-64">
            <PulseLoader color="#2563eb" size={10} margin={3} />
          </div>
        ) : (
          <div
            ref={productGridRef}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center px-3"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Telegram Button */}
      <div>
        <TelegramButton />
      </div>

    </div>
  );
};

export default ProductList;
