import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className='m-6'>
            <h2 className='text-2xl'>Number of Items: {cart.length}</h2>
            
        </div>
    );
};

export default Cart;