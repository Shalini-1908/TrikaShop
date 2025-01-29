import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "../Product";
import Home from "../Home";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
