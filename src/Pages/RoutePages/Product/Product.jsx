import React from "react";

const Product = ({ product }) => {
  const { id, name, seller, price, rating, img } = product;

  return (
    <div className=" card p-4 border rounded-lg flex flex-col justify-between">
      <div>
        <img className="" src={img} alt={name} />
        <h2>{name}</h2>
        <h4>Price: ${price}</h4>
        <p>Manufacture: {seller}</p>
      </div>
      <div className="bottom-0">
        <button className=" btn border-none hover:bg-orange-400 bg-orange-200 w-full ">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
