import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import axios from "axios";

const Checkout = () => {
  const { cart, total_price } = useCartContext();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      full_name: fullName,
      address: address,
      phone_number: phone,
      email: email,
      items: cart,
    };

    console.log(formData);

    axios
      .post("http://localhost:4000/products/addOrder", formData)
      .then((res) => {
        console.log("there is a response");
      })
      .catch((err) => {
        console.log("there is an error");
      });
  };
  console.log(cart);
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="max-w-xs flex flex-col justify-between gap-3 mb-4 ">
              <label>Full Name</label>
              <input
                type="text"
                className="outline-none rounded-sm bg-gray-400 caret-white px-3 py-1 text-base text-white font-bold "
                required
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="max-w-xs flex flex-col justify-between gap-3 mb-4">
              <label>Address</label>
              <input
                type="text"
                className="outline-none rounded-sm bg-gray-400 caret-white px-3 py-1 text-base text-white font-bold "
                required
                onChange={(e) => setAdress(e.target.value)}
              />
            </div>
            <div className="max-w-xs flex flex-col justify-between gap-3 mb-4">
              <label>Mobile</label>
              <input
                type="number"
                className="outline-none rounded-sm bg-gray-400 caret-white px-3 py-1 text-base text-white font-bold "
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="max-w-xs flex flex-col justify-between gap-3 mb-4">
              <label>Email</label>
              <input
                type="email"
                className="outline-none rounded-sm bg-gray-400 caret-white px-3 py-1 text-base text-white font-bold "
                required
                onChange={(e) => setEmail(e.target.value)}
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

          {cart.map((curElem) => {
            return (
              <article className="max-w-sm my-4 ">
                <div className="flex ">
                  <div className="max-w-[150px] border-l-4 border-gray-400 relative">
                    <img src={curElem.img} alt="" />
                    <i className="absolute right-6 top-0 bg-redish w-7 h-7 rounded-full flex items-center justify-center not-italic text-white z-10  ">
                      {curElem.amount}
                    </i>
                  </div>
                  <div className="max-w-[150px] flex flex-col gap-4">
                    <h3 className="text-base font-bold">{curElem.title}</h3>
                    <p className="text-sm">
                      Flavor:
                      <span className="font-bold"> {curElem.flavor}</span>
                    </p>
                    <p className="text-sm m-0">
                      Size:
                      <span className="font-bold">{curElem.size} serving</span>
                    </p>
                    <small className="text-sm font-bold">
                      {curElem.price}{" "}
                    </small>
                  </div>
                </div>
              </article>
            );
          })}
          <h2 className="text-sm mb-12">
            Your totall is
            <span className="font-bold text-base">${total_price}</span>
          </h2>
          <Link to="/">
            <u> Continue Shoping?</u>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Checkout;
