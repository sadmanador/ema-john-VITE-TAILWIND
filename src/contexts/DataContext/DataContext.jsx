import React, { createContext } from 'react';

export const CartContext = createContext()

const DataContext = ({children}) => {
    const [cart, setCart] = useState([]);

    const cartInfo = {cart, setCart}
    return (
        <CartContext value={cartInfo}>
            {children}
        </CartContext>
    );
};

export default DataContext;