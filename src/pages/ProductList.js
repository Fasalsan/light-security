import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CategoryNavigation from "../components/CategoryNavigation";
import Header from "../components/Header";
import PromoBanner from "../components/PromoBanner";
import { PulseLoader } from "react-spinners";
import { FaTelegramPlane } from "react-icons/fa";
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

  // ✅ detect if sticky element is at top-0
  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const { top } = stickyRef.current.getBoundingClientRect();
        setAtTop(top === 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check immediately
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openTelegram = () => {
    window.open("https://t.me/Electronic_sansan", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative bg-[#F3EFFF]">
      <div className="max-w-[1200px] mx-auto">
        <div className="px-3">
          <Header />
          <PromoBanner />
        </div>

        {/* ✅ sticky element changes bg if at top */}
        <div
          ref={stickyRef}
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
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center px-3"
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
