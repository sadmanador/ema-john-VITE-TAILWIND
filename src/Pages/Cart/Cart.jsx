import React, { useContext } from "react";
import { CartContext } from "../../contexts/DataContext/DataContext";

const Cart = () => {
  const {cart} = useContext(CartContext);

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
      <div className="ml-4 text-md lg:text-2xl font-semibold">
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
