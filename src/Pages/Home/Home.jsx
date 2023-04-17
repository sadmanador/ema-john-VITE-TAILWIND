import React, { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../../contexts/DataContext/DataContext";
import { addToLocalStorage, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Home = () => {
  const products = useLoaderData();
  const {cart, setCart} = useContext(CartContext);

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


  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToLocalStorage(selectedProduct.id);
  };

  
  

  return (
    <div className="lg:grid grid-cols-home gap-10">
      <div className="lg:grid grid-cols-3 gap-5 mt-24 mx-28">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="bg-orange-200 cart sticky top-0">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
