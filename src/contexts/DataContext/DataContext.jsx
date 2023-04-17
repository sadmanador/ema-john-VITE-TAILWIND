import React, { createContext, useState } from "react";

export const CartContext = createContext({});

const DataContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [grandTotal, setGrandTotal] = useState([]);

  const cartInfo = { cart, setCart, grandTotal, setGrandTotal };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default DataContext;
