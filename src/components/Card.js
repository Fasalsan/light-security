import React from "react";

export default function Card({ image, name, price, onView, className = "" }) {
  return (
    <div
      className={`group bg-white rounded-2xl shadow hover:shadow-lg transition border border-gray-200 overflow-hidden ${className}`}
    >
      {/* Image section */}
      <div className="w-full h-64 md:h-80 flex items-center justify-center bg-white">
        <img
          src={image}
          alt={name}
          title={name}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text section */}
      <div className="flex justify-between items-start px-2 mt-3">
        <h3
          className="text-lg font-bold text-gray-800 truncate"
          title={name}
        >
          {name}
        </h3>
        <p
          className="text-red-600 font-bold text-xl transition duration-300 transform group-hover:scale-110 group-hover:text-red-700"
        >
          តម្លៃ : {price}$
        </p>
      </div>

      {/* Button */}
      <div className="p-6">
        <button
          type="button"
          onClick={onView}
          aria-label={`View details of ${name}`}
          className="w-full py-2 mt-3 bg-red-900 text-white rounded-full hover:bg-red-950 transition"
        >
          មើលលម្អិត
        </button>
      </div>
    </div>
  );
}
