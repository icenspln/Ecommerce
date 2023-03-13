import CheckoutButton from "../components/checkoutButton";
import { CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";

const Cart = ({ handleClickM, handleClickP, handleCartClick }) => {
  const { cart, total_price } = useCartContext();

  const { removeItem, setIncrement, setDecrease } = useCartContext();
  return (
    <div className="bg-redish z-50 w-80 p-5 h-screen fixed right-0 top-0 slide-in-blurred-right text-white overflow-y-auto">
      <CgClose
        className="absolute text-white text-3xl cursor-pointer"
        onClick={handleCartClick}
      />
      <h1 className="text-3xl leading-7 font-bold text-center mb-8">CART</h1>
      {/* product */}
      {cart.map((curElem) => {
        return (
          <article key={curElem.title} className="flex mb-14">
            <div className="min-w-[100px] ">
              <img src={curElem.img} alt="product" />
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
              <div className="flex gap-2 mt-2 items-center max-w-[170px] ">
                <div
                  className="bg-white text-redish p-2 cursor-pointer"
                  onClick={() =>
                    setIncrement(curElem.id, curElem.flavor, curElem.size)
                  }
                >
                  +
                </div>
                <div className="bg-white text-redish p-2">{curElem.amount}</div>
                <div
                  className="bg-white text-redish p-2 cursor-pointer"
                  onClick={() =>
                    setDecrease(curElem.id, curElem.flavor, curElem.size)
                  }
                >
                  -
                </div>
                <p className="font-bold p-3">
                  {+(curElem.amount * curElem.price).toString().slice(0, 6)}$
                </p>
              </div>
            </div>
            <i>
              <CgClose
                className="cursor-pointer"
                onClick={() =>
                  removeItem(curElem.id, curElem.flavor, curElem.size)
                }
              />
            </i>
          </article>
        );
      })}

      {/* total */}
      <hr className="my-6" />
      <p className="text-base font-bold text-center">
        Total: {total_price.toString().slice(0, 6)}$
      </p>
      <br />
      <CheckoutButton />
    </div>
  );
};

export default Cart;
