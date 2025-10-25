import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || "ទាំងអស់";

  const product = products.find((p) => p.id === Number(id));

  // ✅ only use product.image for main image
  const subImages = product?.subImage ? product.subImage.slice(0, 3) : [];
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(""); // separate state for fullscreen

  if (!product) return <p className="p-6">Product not found</p>;

  return (
    <div className="mx-auto max-w-[1024px] w-full relative">
      {/* Back Button */}
      <div>
        <div
          onClick={() => navigate(`/?category=${category}`)}
          className="flex items-center justify-center absolute top-0 p-3 mt-2 ml-2 bg-gray-200 rounded-full shadow-lg cursor-pointer"
        >
          <IoMdArrowBack className="text-xl" />
        </div>
      </div>

      <div className="bg-white min-h-screen pb-4">
        {/* Main Image */}
        <div className="flex flex-col gap-4">
          <div className="w-full h-72 flex justify-center items-center mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain cursor-pointer"
              onClick={() => {
                setPreviewImage(product.image); // open fullscreen with main image
                setPreviewOpen(true);
              }}
            />
          </div>

          {/* Thumbnails (subImages only) */}
          {subImages.length > 0 && (
            <div className="flex justify-center gap-4 mb-4">
              {subImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  className="w-24 h-24 object-cover rounded cursor-pointer border-2 border-gray-200"
                  onClick={() => {
                    setPreviewImage(img); // open fullscreen with selected subimage
                    setPreviewOpen(true);
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col mt-6 px-4">
          <h1 className="text-2xl font-semibold">{product.name}</h1>

          <div className="mt-3 flex items-center gap-3">
            <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
            {product.oldPrice && (
              <p className="text-red-600 line-through">
                ${product.oldPrice.toFixed(2)}
              </p>
            )}
          </div>

          <div className="mt-3">
            <div className="text-lg flex items-center gap-3">
              <LiaPhoneVolumeSolid className="text-3xl text-green-600" />
              <span>
                081632687 / <span>085546050 /</span> <span>0975026561</span>
              </span>
            </div>
          </div>

          <div className="mt-3 text-gray-600">
            {product.description && (
              <p className="mt-2 text-gray-600">{product.description}</p>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Preview */}
      {previewOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50 p-4"
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
            src={previewImage}
            alt={product.name}
            className="max-w-full max-h-[80vh] object-contain mb-4"
          />

          {/* Thumbnails in Preview (main + subImages) */}
          <div
            className="flex gap-4"
            style={{
              overflowX: "auto",
              msOverflowStyle: "none",     // IE and Edge
              scrollbarWidth: "none",      // Firefox
              WebkitOverflowScrolling: "touch"
            }}
          >
            {[product.image, ...subImages].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} ${idx + 1}`}
                className={`w-24 h-24 object-contain rounded cursor-pointer border-2 ${previewImage === img ? "border-blue-500" : "border-gray-200"
                  }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setPreviewImage(img);
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

