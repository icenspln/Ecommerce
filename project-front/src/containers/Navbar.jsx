import { Search, Sidebar, Cart } from "./../components";
import { useState } from "react";

import { CgMenuLeft, CgShoppingBag, CgSearch } from "react-icons/cg";

function Navbar() {
  const [sideToggle, setsideToggle] = useState(false);
  const [cartToggle, setcartToggle] = useState(false);
  const [count, setCount] = useState(1);
  const [searchToggle, setsearchToggle] = useState(false);

  const handleCountClickP = () => {
    if (count <= 4) setCount(count + 1);
  };

  const handleCountClickM = () => {
    if (count >= 2) setCount(count - 1);
  };

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
        <Cart
          handleClickP={handleCountClickP}
          handleClickM={handleCountClickM}
          handleCartClick={handleCartClick}
        />
      )}
      <h1 className="flex-1 text-center text-4xl font-semibold text-focus-in">
        B<span className="text-redish">F</span>STORE
      </h1>
      <div className="flex gap-4">
        <CgShoppingBag
          className="text-redish cursor-pointer"
          onClick={handleCartClick}
        />
        <CgSearch
          onClick={() => setsearchToggle(!searchToggle)}
          className="cursor-pointer text-black"
        />
        {searchToggle && <Search />}
      </div>
    </nav>
  );
}

export default Navbar;
