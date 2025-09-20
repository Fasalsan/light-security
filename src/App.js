import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Data from "./api/Product"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList products={Data} />} />
        <Route path="/products/:id" element={<ProductDetail products={Data} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
