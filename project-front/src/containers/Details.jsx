import { useState } from "react";
import product2 from "../assets/product2.png";

import { AiOutlineCheck } from "react-icons/ai";
import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useCartContext } from "../context/cart_context";




const Details = ({ id }) => {
  const { addToCart } = useCartContext();

  const params = useParams().id;
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductDetail()
  }, []);

  async function getProductDetail() {
    const response = await fetch(`http://localhost:4000/products/getProductById/${params}`);


    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }
    const records = await response.json();
    setProduct(records['result']);
  }


  const [count, setCount] = useState(1);

  const handleAddQuantity = () => {
    if (count <= 5) setCount(count + 1);
  };
  const handleRemoveQuantity = () => {
    if (count > 1) setCount(count - 1);
  };
  return (
    <main>
      <div className="flex items-center flex-col md:flex-row">
        <div>
          <img src={product2} alt="" />
        </div>
        <div>
          <h1 className="text-4xl font-bold my-3">{product['title']}</h1>
          <p className="text-base font-bold my-3">from ${product['price']}</p>
          <ul className="leading-9">
            {product['benifits']?.map((pro) => (
              <li>
                <span>
                  <AiOutlineCheck className="inline mr-3" />
                </span>
                {pro}
              </li>
            ))}
          </ul>
          <hr className="my-6" />
          <form className="my-4" action="#" method="get">
            <label className="mr-6" htmlFor="flavor">
              Flavor
            </label>
            <select className="px-3 py-1 bg-white text-redish ">
              {product['flavors']?.map((pro) => (
                <option value="orange">{pro}</option>

              ))}

              {/* <option value="orange">Orange</option>
              <option value="orange">Apple</option> */}
            </select>
            <br className="mb-6" />
            <label htmlFor="">Quantity</label>
            <div className="flex gap-2 items-center ">
              <div
                className="bg-white text-redish p-2 cursor-pointer"
                onClick={handleAddQuantity}
              >
                +
              </div>
              <div className="bg-white text-redish p-2">{count}</div>
              <div
                className="bg-white text-redish p-2 cursor-pointer"
                onClick={handleRemoveQuantity}
              >
                -
              </div>
              <p className="font-bold p-3">{count * 30}$</p>
            </div>
            <br />
            <label className="mr-6" htmlFor="size">
              Size
            </label>
            <select className=" px-3 py-1 bg-white text-redish " name="">


              <option value="29 servings">29 servings</option>
              <option value="30 servings">30 servings</option>
              <option value="70 servings">70 servings</option>
            </select>


            <button className="block md:inline bg-redish text-white px-3 py-2 mx-auto md:mx-6 my-6 " onClick={() => addToCart(params, 1, product)}>
              ADD TO CART
            </button>
          </form>
          <a className="text-base text-gray-500" href="/">
            Continue Shopping?
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold">PRODUCT OVERVIEW</h3>
        <p className="font-thin text-gray-500">
          Anytime Energy & Muscle Recovery
        </p>
        <p className="my-10  ">
          Mix up ESSENTIAL AMIN.O. ENERGY anytime you want a boost of energy,
          focus and muscle recovery support. Each serving provides 100 mg of
          caffeine from natural sources to support energy and focus along with 5
          grams of amino acids for muscle support.¹
        </p>
      </div>
    </main>
  );
};

export default Details;
