import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import FullscreenImage from "./FullscreenImage ";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(product?.mainImage || "");
  const [fullscreen, setFullscreen] = useState(false);

  if (!product) return <div className="text-center mt-10">Product not found</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ← Back
      </button>

      <img
        src={selectedImage}
        alt={product.title}
        className="w-full h-64 object-cover rounded-md cursor-pointer"
        onClick={() => setFullscreen(true)}
      />

      <div className="flex gap-2 mt-3">
        {product.subImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`sub-${idx}`}
            className={`w-24 h-20 object-cover rounded-md cursor-pointer border-2 ${
              selectedImage === img ? "border-blue-600" : "border-transparent"
            }`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      <h2 className="mt-4 text-xl font-bold">{product.title}</h2>
      <p className="text-gray-700">Price: ${product.price}</p>

      {fullscreen && <FullscreenImage src={selectedImage} onClose={() => setFullscreen(false)} />}
    </div>
  );
};

export default ProductDetailPage;
