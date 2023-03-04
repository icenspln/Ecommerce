import React from "react";
import product2 from "../assets/product2.png";
import { CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";

const Cart = ({ handleClickM, handleClickP, handleCartClick }) => {
  const { cart, total_price } = useCartContext();

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
        return (
          <article className="flex">
            <div className="basis-2/4">
              <img src={product2} alt="product2" />
            </div>
            <div className="text-base">
              <p className="font-bold">{curElem.title}</p>
              <p>
                Flavor <span className="font-bold">{curElem.flavor}</span>
              </p>
              <p>
                Size <span className="font-bold">{curElem.size}</span>
              </p>

              <p>Quantity</p>
              <div className="flex gap-2 mt-2 items-center ">
                <div
                  className="bg-white text-redish p-2 cursor-pointer"
                  onClick={() => setIncrement(curElem.id, curElem.flavor, curElem.size)}
                >
                  +
                </div>
                <div className="bg-white text-redish p-2">{curElem.amount}</div>
                <div
                  className="bg-white text-redish p-2 cursor-pointer"
                  onClick={() => setDecrease(curElem.id, curElem.flavor, curElem.size)}
                >
                  -
                </div>
                <p className="font-bold p-3">
                  {curElem.amount.toFixed(2) * curElem.price.toFixed(2)}$
                </p>
              </div>
            </div>
            <i>
              <CgClose
                className="cursor-pointer"
                onClick={() => removeItem(curElem.id, curElem.flavor, curElem.size)}
              />
            </i>
          </article>
        );
      })}

      {/* total */}
      <hr className="my-6" />
      <p className="text-base font-bold text-center">Total: {total_price}$</p>
      <br />
      <a href="/checkout" className="text-center block ">
        <button className="bg-white text-redish px-3 py-1 transition hover:text-white hover:bg-redish font-bold blink-1">
          CHECKOUT
        </button>
      </a>
    </div>
  );
};

export default Cart;
