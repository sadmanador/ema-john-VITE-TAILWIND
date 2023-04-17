import React, { createContext, useState } from 'react';

export const CartContext = createContext({})

const DataContext = ({children}) => {
    const [text, setText] = useState("hello");

    const cartInfo = {text, setText}
    return (
        <CartContext value={cartInfo}>
            {children}
        </CartContext>
    );
};

export default DataContext;