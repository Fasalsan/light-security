import React from "react";
import Card from "../components/Card";
import data from "../api/Product";
import Top from "./Top";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function ProductList() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 100, // Animation duration (in ms)
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-gray-100">
      <Top />

      <div className="text-lg font-bold my-2 px-2 ">
        <h1 className="font-serif">ប្រភេទពិលទាំងអស់</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2
    p-2">
        {data.map((product, index) => (
          <div
            key={product.id}
            data-aos="fade-up"
            // data-aos-delay={index * 50} 
            data-aos-duration="800"
          >
            <Card
              image={product.image}
              name={product.name}
              price={product.price}
              onView={() =>
                navigate(`/product/${product.id}`, { state: product })
              }
            />
          </div>
        ))}

      </div>
    </div>
  );
}
