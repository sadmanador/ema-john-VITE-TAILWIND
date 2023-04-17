import React, { useContext } from "react";
import { TbTrashX } from "react-icons/tb";
import { CartContext } from "../../../contexts/DataContext/DataContext";
import { removeFromDb } from "../../../utilities/fakedb";

const OrderReviewSingleProduct = ({ product }) => {
    const {cart, setCart} = useContext(CartContext);
    const { id,img, name, price, shipping, quantity } = product;

    const handleRemoveProduct = (selectedId) => {
      const rest = cart.filter(cartItem => cartItem.id !== selectedId)
      let newCart = [...rest,]
      setCart(newCart)
      removeFromDb(selectedId)
    }
    

  return (
    <div className=" rounded-lg my-6 flex justify-between gap-10 shadow-lg">
      <div className="flex">
        <div className="p-4">
          <div className="relative">
            <img className="w-36" src={img} alt="" />
            <p className="text-xl badge badge-primary absolute -right-2 -top-2">{quantity}</p>
          </div>
        </div>
        <div className="p-4 flex flex-col justify-between">
          <h2 className="text-3xl font-semibold">{name}</h2>
          <div className="mb-4 text-xl">
          <p>
            <span className="font-semibold">Price:</span> $<span>{price}</span>
          </p>
          <p><span className="font-semibold">Shipping:</span> ${shipping}</p>
          <p>
            <span className="font-semibold">Total Price:</span> $<span>{(price * quantity)+shipping}</span>
          </p>
          </div>
        </div>
      </div>
      <div className="self-center mr-12">
        <button onClick={()=>handleRemoveProduct(id)} className="btn btn-error rounded-full">
          <TbTrashX className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default OrderReviewSingleProduct;
