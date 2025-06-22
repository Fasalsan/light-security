import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state;

    if (!product) {
        return (
            <div className="p-4 text-center text-gray-500">
                Product not found or missing state.
                <div className="mt-4">
                    <button
                        onClick={() => navigate("/")}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-4 bg-white shadow rounded">
            <button
                onClick={() => navigate("/")}
                className=" px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                ត្រឡប់ក្រោយ
            </button>
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto mb-4 rounded"
            />
            <p className="text-lg text-gray-700">Price: ${product.price}</p>


        </div>
    );
}
