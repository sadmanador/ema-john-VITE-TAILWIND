import React, { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from "../../contexts/DataContext/DataContext";

const Cart = ({cart}) => {
 

  let quantity = 0;
  let total = 0;
  let shipping = 0;
  let tax = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    tax = (total * 0.1).toFixed(2);
  }
  const grandTotal = shipping + total + parseFloat(tax);

  return (
    <div className="m-6">
      <h1 className="font-bold lg:text-4xl text-xl text-center border-b-2 mb-4 pb-2 border-black">
        Order Summary
      </h1>
      <div className="text-end relative">
        {" "}
        <BsFillCartFill className="inline text-6xl" />
        <span className="badge badge-success absolute right-0 top-1 text-lg font-semibold rounded-full">{quantity}</span>
      </div>
      <div className="ml-6 text-md lg:text-2xl font-semibold">
        <p>Total: ${total}</p>
        <p>Shipping: ${shipping}</p>
        <p>Tax: {tax}</p>
      </div>
      <p className="text-lg lg:text-3xl font-semibold ml-4 mt-6">
        <span className="font-bold">Grand Total:</span> ${grandTotal.toFixed(2)}
      </p>
    </div>
  );
};

export default Cart;
