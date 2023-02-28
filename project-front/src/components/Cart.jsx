import React from "react";
import product2 from "../assets/product2.png";
import { CgClose } from "react-icons/cg";
const Cart = ({ handleClickM, handleClickP, handleCartClick, count }) => {
  return (
    <div className="bg-redish z-50 w-80 p-5 h-screen fixed right-0 top-0 slide-in-blurred-right text-white ">
      <CgClose
        className="absolute text-white text-3xl cursor-pointer"
        onClick={handleCartClick}
      />
      <h1 className="text-3xl leading-7 font-bold text-center mb-8">CART</h1>
      {/* product */}
      <article className="flex">
        <div className="basis-2/4">
          <img src={product2} alt="product2" />
        </div>
        <div className="text-base">
          <p className="font-bold">ESSENTIAL AMIN.O. ENERGY</p>
          <p>Quantity</p>
          <div className="flex gap-2 mt-2 items-center ">
            <div
              className="bg-white text-redish p-2 cursor-pointer"
              onClick={handleClickP}
            >
              +
            </div>
            <div className="bg-white text-redish p-2">{count}</div>
            <div
              className="bg-white text-redish p-2 cursor-pointer"
              onClick={handleClickM}
            >
              -
            </div>
            <p className="font-bold p-3">{count * 50}$</p>
          </div>
        </div>
        <i>
          <CgClose className="cursor-pointer" />
        </i>
      </article>
      {/* total */}
      <hr className="my-6" />
      <p className="text-base font-bold text-center">Total: 50$</p>
    </div>
  );
};

export default Cart;
