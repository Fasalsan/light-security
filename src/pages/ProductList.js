import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Import AOS CSS

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
  const [atTop, setAtTop] = useState(false);

  const productGridRef = useRef(null);
  const stickyRef = useRef(null);

  // ✅ Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // ✅ Filter products and trigger AOS refresh
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

      AOS.refresh();
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedCategory, products]);

  // ✅ Sticky bar shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const { top } = stickyRef.current.getBoundingClientRect();
        setAtTop(top <= 5);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-white">
      <div className="max-w-[1024px] mx-auto">
        {/* Header + Banner */}
        <div>
          <Header />
          <PromoBanner />
        </div>

        {/* Category Bar */}
        <div
          ref={stickyRef}
          className={`my-4 sticky top-0 z-10 transition-all duration-300 ${
            atTop ? "rounded-b-xl shadow-lg " : "bg-transparent"
          }`}
        >
          <CategoryNavigation />
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <PulseLoader color="#2563eb" size={10} margin={3} />
          </div>
        ) : (
          <div
            ref={productGridRef}
            className="
              grid 
              grid-cols-2 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4 
              gap-3 
              justify-items-center 
              px-3 
              pb-10
            "
          >
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                data-aos="zoom-in"
                data-aos-delay={index * 50} // small delay per card
                className="w-full flex justify-center"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Telegram Button */}
      <TelegramButton />
    </div>
  );
};

export default ProductList;
