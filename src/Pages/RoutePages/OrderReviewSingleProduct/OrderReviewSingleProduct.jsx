import React, { useContext, useState } from "react";
import { TbTrashX } from "react-icons/tb";
import { CartContext } from "../../../contexts/DataContext/DataContext";
import { addToLocalStorage, removeFromDb } from "../../../utilities/fakedb";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { toast } from "react-hot-toast";

const OrderReviewSingleProduct = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  const { id, img, name, price, shipping, quantity } = product;

  const handleRemoveProduct = (selectedId) => {
    const rest = cart.filter((cartItem) => cartItem.id !== selectedId);
    let newCart = [...rest];
    setCart(newCart);
    removeFromDb(selectedId);
  };

  const handleQuantity = (id, increase) => {
    let newCart = [];
    const selectedProduct = cart.find((p) => id == p.id);
    const restOfTheProducts = cart.filter((p) => id !== p.id);
    let quantity = selectedProduct.quantity;
    if (increase) {
      if (selectedProduct) {
        selectedProduct.quantity = quantity + 1;
        newCart = [selectedProduct, ...restOfTheProducts];
        addToLocalStorage(id, true);
      }
    } else {
      if (selectedProduct.quantity > 1) {
        selectedProduct.quantity = quantity - 1;
        newCart = [selectedProduct, ...restOfTheProducts];
        addToLocalStorage(id, false);
      } else {
        return toast.error('You cannot select less than "1" products, Else click on cross button');
      }
    }
    setCart(newCart);
  };

  return (
    <div className=" rounded-lg my-6 flex justify-between gap-10 shadow-lg relative">
      <div className="flex">
        <div className="p-4">
          <div className="relative">
            <img className="w-36" src={img} alt="" />
            <p className="text-xl badge badge-primary absolute -right-2 -top-2">
              {quantity}
            </p>
          </div>
        </div>
        <div className="p-4 flex flex-col justify-between">
          <h2 className="text-xl font-semibold">{name}</h2>
          <div className="mb-4 text-lg">
            <p>
              <span className="font-semibold">Price:</span> $
              <span>{price}</span>
            </p>
            <p>
              <span className="font-semibold">Shipping:</span> ${shipping}
            </p>
            <p></p>
            <p>
              <span className="font-semibold">Total Price:</span> $
              <span>{price * quantity + shipping}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="self-center mr-12">
        <button
          onClick={() => handleQuantity(id, false)}
          className="btn btn-sm btn-info btn-outline"
        >
          <AiFillCaretLeft />
        </button>
        <span className="mx-4">{quantity}</span>
        <button
          onClick={() => handleQuantity(id, true)}
          className="btn btn-sm btn-info btn-outline"
        >
          <AiFillCaretRight />
        </button>
      </div>
      <button
        className="btn btn-circle btn-outline absolute -right-4 -top-4 hover:bg-red-600 hover:border-none"
        onClick={() => handleRemoveProduct(id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default OrderReviewSingleProduct;
