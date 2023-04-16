import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../RoutePages/Product/Product';

const Home = () => {
    const products = useLoaderData()



    return (
        <div className='grid grid-cols-home gap-10'>
            <div className="grid grid-cols-3 gap-5 mt-24">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className='bg-orange-200 cart'>Cart</div>
        </div>
    );
};

export default Home;