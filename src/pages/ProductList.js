import React from "react";
import Card from "../components/Card";
import data from "../api/Product";
import Top from "./Top";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-100">
            <Top />

            <div className="text-lg font-bold my-2 px-2">
                <h1>ប្រភេទនៃផលិតផល</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2
    p-2">
                  {data.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            onView={() =>
              navigate(`/product/${product.id}`, { state: product })
            }
          />
        ))}
            </div>
        </div>
    );
}
