import React from "react";

const Product = ({ product, handleAddToCart }) => {
  const { id, name, seller, price, ratings, img } = product;
  

  return (
    <div className=" card p-4 border rounded-lg flex flex-col justify-between">
      <div className="">
        <div>
          <img className="" src={img} alt={name} />
          <h2 className="text-2xl font-semibold">{name}</h2>
          <h4 className="text-xl font-medium">Price: ${price}</h4>
        </div>
        <div className="my-6">
          <p className="text-lg">Manufacture: {seller}</p>
          <p className="text-lg">Rating: {ratings}</p>
        </div>
      </div>
      <div className="bottom-0">
        <button onClick={()=> handleAddToCart(id)} className=" btn border-none hover:bg-orange-400 bg-orange-200 w-full font-semibold text-xl normal-case">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
