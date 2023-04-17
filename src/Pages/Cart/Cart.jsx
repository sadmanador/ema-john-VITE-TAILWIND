import React, { useContext } from "react";
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
      <h1 className="font-bold text-3xl text-center border-b-2 mb-4 pb-2 border-black">
        Order Summary
      </h1>
      <h2 className="text-xl font-semibold">Number of Items: {quantity}</h2>
      <div className="ml-4">
        <p>Total: ${total}</p>
        <p>Shipping: ${shipping}</p>
        <p>Tax: {tax}</p>
      </div>
      <p className="text-lg font-semibold">
        Grand Total: ${grandTotal.toFixed(2)}
      </p>
    </div>
  );
};

export default Cart;
