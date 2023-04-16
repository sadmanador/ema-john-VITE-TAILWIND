import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../RoutePages/Product/Product";

const Home = () => {
  const products = useLoaderData();

  const handleAddToCart = (product) => {
    console.log(product)
  }
  

  return (
    <div className="grid grid-cols-home gap-10">
      <div className="grid grid-cols-3 gap-5 mt-24 mx-28">
        {products.map((product) => (
          <Product 
            key={product.id} 
            product={product}
            handleAddToCart={handleAddToCart}
        ></Product>
        ))}
      </div>
      <div className="bg-orange-200 cart sticky top-0">Cart</div>
    </div>
  );
};

export default Home;
