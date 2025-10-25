import React from "react";
import { Star } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || "ទាំងអស់";

  const handleViewDetail = () => {
    navigate(`/products/${product.id}?category=${category}`);
  };

  return (
    <div
      className="bg-white rounded-xl overflow-hidden p-4 flex flex-col
                 w-full min-w-[160px]  duration-300 ease-in-out 
                 group border hover:shadow-lg"
    >
      {/* Image */}
      <div className="w-full h-40 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Info */}
      <div className="mt-3 text-start flex flex-col gap-1">
        <p className="text-gray-800 font-medium truncate">{product.name}</p>

        <div className="flex justify-between items-center">
          {/* Price */}
          <div className="mt-1 flex items-center gap-1">
            <span className="text-lg font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-[12px] text-red-600 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Rating (fake for now) */}
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span>(5.0)</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleViewDetail}
        className="mt-3 bg-blue-800 text-white text-sm px-4 py-2 rounded-full font-medium hover:bg-blue-900 w-full"
      >
        មើលលម្អិត
      </button>
    </div>
  );
};

export default ProductCard;
