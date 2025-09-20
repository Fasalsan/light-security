import React from "react";
import { useParams } from "react-router-dom";
import Data from "../api/Product"
import ProductCard from "./ProductCard";

const CategoryPage = () => {
    const { categoryName } = useParams();

    // Filter products by category, or show all if categoryName === "All"
    const filteredProducts =
        categoryName === "All"
            ? Data
            : Data.filter((p) => p.category === categoryName);

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">{categoryName}</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
