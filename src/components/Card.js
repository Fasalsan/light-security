// src/components/Card.jsx

import React from "react";

export default function Card({ image, name, price, onView, className = "" }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow hover:shadow-lg transition p-2 ${className}`}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover rounded-xl mb-4"
      />
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-blue-600 font-bold text-xl mb-4">
          ${price?.toFixed(2)}
        </p>
      </div>
      <button
        onClick={onView}
        className="w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        មើលលម្អិត
      </button>
    </div>
  );
}
