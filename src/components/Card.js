import React from "react";

export default function Card({ image, name, price, onView, className = "" }) {
  return (
    <div
      className={`group bg-white rounded-2xl shadow hover:shadow-lg transition p-2 border border-gray-200 ${className}`}
    >
      {/* Image container */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          title={name}
          className="w-full h-64 md:h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Info section */}
      <div className="flex justify-between items-center px-2 py-4">
        <h3
          className="text-lg font-bold text-black truncate"
          title={name}
        >
          {name}
        </h3>
        <p
          className="text-red-600 font-bold text-xl transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:text-red-700"
        >
          តម្លៃ : {price}$
        </p>
      </div>

      {/* Button */}
      <button
        type="button"
        onClick={onView}
        aria-label={`View details of ${name}`}
        className="w-full py-2 bg-red-900 text-white rounded-full hover:bg-red-950 transition-colors duration-300"
      >
        មើលលម្អិត
      </button>
    </div>
  );
}
