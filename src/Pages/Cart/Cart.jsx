import React from "react";

const Cart = ({ cart }) => {
    console.log(cart)

  let total = 0;
  let shipping = 0;
  let tax = 0;
  for (const product of cart) {
    console.log(product.price)
      total = total + product.price;
      shipping = shipping + product.shipping;
      tax = (total * 0.1).toFixed(2);
    }
    const grandTotal = shipping + total + parseFloat(tax);
    // console.log(total,tax,shipping,grandTotal)

  return (
    <div className="m-6">
      <h1 className="font-bold text-3xl text-center border-b-2 mb-4 pb-2 border-black">
        Order Summary
      </h1>
      <h2 className="text-xl font-semibold">Number of Items: {cart.length}</h2>
      <div>
        <p>Total: ${total}</p>
        <p>Shipping: ${shipping}</p>
        <p>Tax: {tax}</p>
      </div>
      <p className="text-lg font-semibold">Grand Total: ${grandTotal}</p>
    </div>
  );
};

export default Cart;
