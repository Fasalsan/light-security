

import React from "react";
import { PiFlashlightLight, PiFlashlightFill } from "react-icons/pi";
import { MdOutlineWindow, MdWindow } from "react-icons/md";
import { RiFlashlightLine, RiFlashlightFill } from "react-icons/ri";
import { GiChisel } from "react-icons/gi";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { label: "ទាំងអស់", icon: <MdOutlineWindow size={24} />, activeIcon: <MdWindow size={24} /> },
  { label: "ពិលឆក់", icon: <RiFlashlightLine size={24} />, activeIcon: <RiFlashlightFill size={24} /> },
  { label: "ពិលភ្លឺខ្លាំង", icon: <PiFlashlightLight size={24} />, activeIcon: <PiFlashlightFill size={24} /> },
  { label: "ដំបងរលាស់", icon: <GiChisel size={24} />, activeIcon: <GiChisel size={24} /> },
];

const CategoryNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activeCategory = params.get("category") || "ទាំងអស់";

  const handleCategoryChange = (label) => {
    navigate(`/?category=${label}`);
  };

  return (
    <div className="flex overflow-x-auto space-x-6 px-3 py-2 scrollbar-hide">
      {menuItems.map((item, index) => {
        const isActive = activeCategory === item.label;
        return (
          <div
            key={index}
            onClick={() => handleCategoryChange(item.label)}
            className="flex flex-col items-center space-y-2 cursor-pointer flex-shrink-0"
          >
            <div
              className={`
            w-16 h-16 flex items-center justify-center rounded-full transition-all duration-200 transform
            ${isActive ? "bg-blue-800 text-white scale-105" : "text-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"}
          `}
            >
              {isActive ? item.activeIcon : item.icon}
            </div>
            <span
              className={`text-sm font-medium transition-colors duration-200 ${isActive ? "text-blue-800" : "text-black"
                }`}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>

  );
};

export default CategoryNavigation;

