import React, { useContext, useEffect } from "react";
import Cart from "../../Cart/Cart";
import { CartContext } from "../../../contexts/DataContext/DataContext";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../../utilities/fakedb";
import OrderReviewSingleProduct from "../OrderReviewSingleProduct/OrderReviewSingleProduct";

const OrderReview = () => {
    const {cart, setCart} = useContext(CartContext);

    const products = useLoaderData();


    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
          const addedProduct = products.find((product) => product.id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      }, [products]);


  return (
    <div className="lg:grid grid-cols-home gap-10">
      <div className="mx-auto">
        {
            cart.map(product=> <OrderReviewSingleProduct
            product={product} key={product.id}
            ></OrderReviewSingleProduct>)
        }
      </div>
      
      <div className="bg-orange-200 cart sticky top-0">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
