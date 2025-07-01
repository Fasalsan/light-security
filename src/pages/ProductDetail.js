// ProductDetail.jsx
import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

export default function ProductDetail() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const product = location.state;
    const fromCategory = product?.fromCategory || "ទាំងអស់";

    if (!product) {
        return (
            <div className="p-6 text-center text-gray-500">
                <p>Product not found or missing state.</p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Go Back Home
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            <button
                onClick={() => navigate(`/?category=${encodeURIComponent(fromCategory)}`)}
                className="px-4 py-2 mb-4 bg-red-900 text-white rounded hover:bg-red-950"
            >
                <MdOutlineArrowBackIosNew className="inline-block mr-2" />
                ត្រឡប់ក្រោយ
            </button>

            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            {/* {product.category && (
                <p className="text-sm text-gray-500 mb-4">ប្រភេទ: {product.category}</p>
            )} */}


            <div className="mb-4">
                <label htmlFor="">ទំនាក់ទំនងតាមលេខ :</label>
                <p className="text-gray-700 flex gap-2"><span>081632687</span><span> 081632687</span><span> 081632687</span></p>
            </div>

            <img
                src={product.image}
                alt={product.name}
                className="w-full max-h-[400px] object-cover mb-4 rounded"
            />

            <p className="text-lg font-semibold text-gray-800">តម្លៃ: ${product.price}</p>
            <p className="mt-4 text-gray-700 leading-relaxed">&gt; {product.description}</p>
        </div>
    );
}
