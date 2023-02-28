import { useState } from "react";
import Sidebar from "../components/Sidebar";

import product2 from "../assets/product2.png";

import { CgMenuLeft, CgShoppingBag, CgSearch, CgClose } from "react-icons/cg";

function Navbar() {
  const [sideToggle, setsideToggle] = useState(false);
  const [cartToggle, setcartToggle] = useState(false);

  const handleSideClick = () => {
    setsideToggle(!sideToggle);
  };
  const handleCartClick = () => {
    setcartToggle(!cartToggle);
  };

  return (
    <nav className="py-5 flex text-lg  sm:text-xl items-center">
      <CgMenuLeft className="cursor-pointer" onClick={handleSideClick} />
      {sideToggle && <Sidebar handleClick={handleSideClick} />}
      {cartToggle && (
        // cart
        <div className="bg-redish z-50 w-80 p-5 h-screen fixed right-0 top-0 slide-in-blurred-right text-white ">
          <CgClose
            className="absolute  text-white text-3xl cursor-pointer"
            onClick={handleCartClick}
          />
          <h1 className="text-3xl leading-7 font-bold text-center mb-8">
            CART
          </h1>
          {/* product */}
          <article className="flex">
            <div className="basis-2/4">
              <img src={product2} alt="product2" />
            </div>
            <div className="text-base ">
              <p className="font-bold">ESSENTIAL AMIN.O. ENERGY</p>
              <p>Quantity</p>
              <div className="flex gap-2 mt-2 items-center ">
                <div className="bg-white text-redish p-2 cursor-pointer">+</div>
                <div className="bg-white text-redish p-2">1</div>
                <div className="bg-white text-redish p-2 cursor-pointer">-</div>
                <p className="font-bold p-3">50$</p>
              </div>
            </div>
            <i className="">
              <CgClose />
            </i>
          </article>
        </div>
      )}
      <h1 className="flex-1 text-center text-4xl font-semibold text-focus-in">
        B<span className="text-redish">F</span>STORE
      </h1>
      <div className="flex gap-4">
        <CgShoppingBag
          className="text-redish cursor-pointer"
          onClick={handleCartClick}
        />
        <CgSearch className="cursor-pointer text-black" />
      </div>
    </nav>
  );
}

export default Navbar;
