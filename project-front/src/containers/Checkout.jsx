import React from "react";
import product from "../assets/product2.png";
const Checkout = () => {
  return (
    <>
      <main className="p-4 md:p-12 flex flex-col md:flex-row items-start gap-4">
        <div className="basis-1/2">
          <h1 className="font-bold text-lg mb-11">
            B<span className="text-redish">F</span>STORE
          </h1>
          <h2 className="font-semibold text-lg mb-7">
            Enter your informations so we can deliver your package
          </h2>
          <form action="" className="flex flex-col gap-3">
            <div className="max-w-xs flex flex-col justify-between gap-3 mb-4 ">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                name=""
                id=""
                className="outline-none rounded-sm bg-gray-400 caret-white px-3 py-1 text-base text-white font-bold "
                required
              />
            </div>
            <div className="max-w-xs flex flex-col justify-between gap-3 mb-4">
              <label htmlFor="">Address</label>
              <input
                type="text"
                name=""
                id=""
                className="outline-none rounded-sm bg-gray-400 caret-white px-3 py-1 text-base text-white font-bold "
                required
              />
            </div>
            <div className="max-w-xs flex flex-col justify-between gap-3 mb-4">
              <label htmlFor="">Mobile</label>
              <input
                type="number"
                name=""
                id=""
                className="outline-none rounded-sm bg-gray-400 caret-white px-3 py-1 text-base text-white font-bold "
                required
              />
            </div>
            <div className="max-w-xs flex flex-col justify-between gap-3 mb-4">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name=""
                id=""
                className="outline-none rounded-sm bg-gray-400 caret-white px-3 py-1 text-base text-white font-bold "
                required
              />
            </div>
            <input
              type="submit"
              value="Send Order"
              className="cursor-pointer mr-auto bg-redish text-white font-bold px-4 py-2 text-xl my-8"
            />
          </form>
        </div>
        <div>
          <h1 className="text-base font-bold mb-8">Your Cart</h1>
          <article className="max-w-sm my-4 ">
            <div className="flex ">
              <div className="max-w-[150px] border-l-4 border-gray-400 relative">
                <img src={product} alt="" />
                <i className="absolute right-6 top-0 bg-redish w-6 h-6 rounded-full flex items-center justify-center not-italic text-white z-10  ">
                  1
                </i>
              </div>
              <div className="max-w-[150px] flex flex-col gap-4">
                <h3 className="text-base font-bold">
                  ESSENTIAL AMIN.O. ENERGY
                </h3>
                <small className="text-sm font-bold">$50</small>
              </div>
            </div>
          </article>
          <a href="#" className="font-light">
            Continue Shoping?
          </a>
        </div>
      </main>
    </>
  );
};

export default Checkout;
