import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";


const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || "ទាំងអស់";

  const product = products.find((p) => p.id === Number(id));

  // Hooks must be called unconditionally
  const subImages = product?.subImage ? product.subImage.slice(0, 3) : [];
  const images = product ? [product.image, ...subImages] : [];
  const [mainImage, setMainImage] = useState(product ? product.image : "");
  const [previewOpen, setPreviewOpen] = useState(false);

  if (!product) return <p className="p-6">Product not found</p>;

  return (
    <div className="mx-auto relative ">
      {/* Back Button */}
      <div className="">
        <div
          onClick={() => navigate(`/?category=${category}`)}
          className=" absolute top-0 p-4 mt-2 ml-2 bg-gray-300 rounded-full"
        >
          <MdArrowBackIos className="text-lg" />
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl shadow">
        {/* Main Image */}
        <div className="w-full flex justify-center mb-4">
          <img
            src={mainImage}
            alt={product.name}
            className="w-64 h-64 object-contain cursor-pointer"
            onClick={() => setPreviewOpen(true)}
          />
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 mb-4">
          {images.slice(0, 3).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${product.name} ${idx + 1}`}
              className={`w-24 h-24 object-contain rounded cursor-pointer border-2 ${mainImage === img ? "border-blue-500" : "border-gray-200"
                }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        {/* Product Info */}
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        {product.description && (
          <p className="mt-2 text-gray-600">{product.description}</p>
        )}
        <div className="mt-3 flex items-center gap-3">
          <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
          {product.oldPrice && (
            <p className="text-red-600 line-through">
              ${product.oldPrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>

      {/* Fullscreen Preview */}
      {previewOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center z-50 p-4"
          onClick={() => setPreviewOpen(false)}
        >
          {/* Close Icon */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={() => setPreviewOpen(false)}
          >
            &times;
          </button>

          {/* Main Preview Image */}
          <img
            src={mainImage}
            alt={product.name}
            className="max-w-full max-h-[80vh] object-contain mb-4"
          />

          {/* Thumbnails in Preview */}
          <div className="flex gap-4">
            {images.slice(0, 3).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} ${idx + 1}`}
                className={`w-24 h-24 object-contain rounded cursor-pointer border-2 ${mainImage === img ? "border-blue-500" : "border-gray-200"
                  }`}
                onClick={(e) => {
                  e.stopPropagation(); // prevent closing modal
                  setMainImage(img);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
