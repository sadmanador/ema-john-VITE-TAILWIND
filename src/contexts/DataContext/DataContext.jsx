import React, { createContext, useState } from 'react';

export const CartContext = createContext({})

const DataContext = ({children}) => {
    const [cart, setCart] = useState([]);

    const cartInfo = {cart, setCart}
    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    );
};

export default DataContext;