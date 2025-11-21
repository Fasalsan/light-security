import React, { useEffect, useRef, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Import AOS CSS

import ProductCard from "../components/ProductCard";
import CategoryNavigation from "../components/CategoryNavigation";
import Header from "../components/Header";
import PromoBanner from "../components/PromoBanner";
import TelegramButton from "../components/TelegramButton";

const ProductList = ({ products }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get("category") || "ទាំងអស់";

  const [atTop, setAtTop] = useState(false);

  const productGridRef = useRef(null);
  const stickyRef = useRef(null);
  const isFirstMount = useRef(true);

  // ✅ Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // ✅ Filter products using useMemo for immediate updates
  const filteredProducts = useMemo(() => {
    return selectedCategory === "ទាំងអស់"
      ? products
      : products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, products]);

  // ✅ Handle scrolling and AOS refresh
  useEffect(() => {
    // On first mount, do NOT scroll (allows browser to restore scroll position)
    if (isFirstMount.current) {
      isFirstMount.current = false;
      setTimeout(() => AOS.refresh(), 100);
      return;
    }

    // On subsequent category changes, scroll to top of grid
    if (productGridRef.current) {
      productGridRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setTimeout(() => AOS.refresh(), 100);
  }, [selectedCategory]);

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
      <div className="max-w-5xl mx-auto">
        {/* Header + Banner */}
        <div>
          <Header />
          <PromoBanner />
        </div>

        {/* Category Bar */}
        <div
          ref={stickyRef}
          className={`my-4 sticky top-0 z-10 transition-all duration-300 ${atTop ? "rounded-b-xl shadow-lg " : "bg-transparent"
            }`}
        >
          <CategoryNavigation />
        </div>

        {/* Product Grid */}
        <div
          ref={productGridRef}
          className="
              scroll-mt-32
              grid 
              grid-cols-2 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4 
              gap-1
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
      </div>

      {/* Telegram Button */}
      <div>

        <TelegramButton />
      </div>
    </div>
  );
};

export default ProductList;
