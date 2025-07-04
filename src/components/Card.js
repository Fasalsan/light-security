import React from "react";

export default function Card({ image, name, price, onView, className = "" }) {
  return (
    <div
      className={`group bg-white rounded-2xl shadow hover:shadow-lg transition p-2 border border-gray-200 ${className}`}
    >
      <img
        src={image}
        alt={name}
        title={name}
        className="w-full h-64 md:h-80 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex justify-between items-start px-2">
        <h3
          className="text-lg font-bold text-black-800 truncate"
          title={name}
        >
          {name}
        </h3>
        <p
          className="text-red-600 font-bold text-xl mb-4 transition duration-300 transform group-hover:scale-110 group-hover:text-red-700"
        >
          តម្លៃ : {price}$
        </p>
      </div>
      <button
        type="button"
        onClick={onView}
        aria-label={`View details of ${name}`}
        className="w-full py-2 bg-red-900 text-white rounded-full hover:bg-red-950 transition"
      >
        មើលលម្អិត
      </button>
    </div>
  );
}
