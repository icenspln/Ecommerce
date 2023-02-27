import { CgMenuLeft, CgShoppingBag, CgSearch } from "react-icons/cg";

function Navbar() {
  return (
    <nav className="py-5 flex text-lg  sm:text-xl items-center">
      <CgMenuLeft className="cursor-pointer" />
      <h1 className="flex-1 text-center text-4xl font-semibold text-focus-in">
        B<span className="text-redish">F</span>STORE
      </h1>
      <div className="flex gap-4">
        <CgShoppingBag className="text-redish cursor-pointer" />
        <CgSearch className="cursor-pointer text-black" />
      </div>
    </nav>
  );
}

export default Navbar;
