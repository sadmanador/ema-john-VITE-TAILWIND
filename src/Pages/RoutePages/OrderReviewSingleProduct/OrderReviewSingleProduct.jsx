import React from "react";
import { TbTrashX } from "react-icons/tb";

const OrderReviewSingleProduct = ({ product }) => {
  const { img, name, price, shipping, quantity } = product;

  return (
    <div className=" rounded-lg my-6 flex justify-between gap-10 shadow-lg">
      <div className="flex">
        <div className="p-4">
          <div className="relative">
            <img className="w-36" src={img} alt="" />
            <p className="text-xl badge badge-primary absolute -right-2 -top-2">{quantity}</p>
          </div>
        </div>
        <div className="p-4 flex flex-col justify-between">
          <h2 className="text-3xl font-semibold">{name}</h2>
          <div className="mb-4 text-xl">
          <p>
            <span className="font-semibold">Price:</span> $<span>{price}</span>
          </p>
          <p><span className="font-semibold">Shipping:</span> ${shipping}</p>
          <p>
            <span className="font-semibold">Total Price:</span> $<span>{(price * quantity)+shipping}</span>
          </p>
          </div>
        </div>
      </div>
      <div className="self-center mr-12">
        <button className="btn btn-error rounded-full">
          <TbTrashX className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default OrderReviewSingleProduct;
