import React from "react";
import product2 from "../assets/product2.png";
import { CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";

const Cart = ({ handleClickM, handleClickP, handleCartClick }) => {


  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  const { removeItem, setIncrement, setDecrease } = useCartContext();


  return (
    <div className="bg-redish z-50 w-80 p-5 h-screen fixed right-0 top-0 slide-in-blurred-right text-white ">
      <CgClose
        className="absolute text-white text-3xl cursor-pointer"
        onClick={handleCartClick}
      />
      <h1 className="text-3xl leading-7 font-bold text-center mb-8">CART</h1>
      {/* product */}

      {cart.map((curElem) => {

        return <article className="flex">
          <div className="basis-2/4">
            <img src={product2} alt="product2" />
          </div>
          <div className="text-base">
            <p className="font-bold">{curElem.title}</p>
            <p>Quantity</p>
            <div className="flex gap-2 mt-2 items-center ">
              <div
                className="bg-white text-redish p-2 cursor-pointer"
                onClick={() => setIncrement(curElem.id)}
              >
                +
              </div>
              <div className="bg-white text-redish p-2">{curElem.amount}</div>
              <div
                className="bg-white text-redish p-2 cursor-pointer"
                onClick={() => setDecrease(curElem.id)}
              >
                -
              </div>
              <p className="font-bold p-3">{curElem.amount * curElem.price}$</p>
            </div>
          </div>
          <i>
            <CgClose className="cursor-pointer" onClick={() => removeItem(curElem.id)} />
          </i>
        </article>;
      })}

      {/* total */}
      <hr className="my-6" />
      <p className="text-base font-bold text-center">Total: {total_price}$</p>
    </div>
  );
};



export default Cart;
