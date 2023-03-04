import { useState } from "react";
import product2 from "../assets/product2.png";

import { AiOutlineCheck } from "react-icons/ai";
import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

import { useProductContext } from "../context/product_context";



const Details = ({ id }) => {

  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();


  const { addToCart } = useCartContext();

  const params = useParams().id;
  const url = params;

  useEffect(() => {

    getSingleProduct(url);

  }, [url]);

  useEffect(() => {
    if (singleProduct) {
      // console.log(singleProduct.flavors[0]);
      //setFlavor(singleProduct.flavors[0]);
      if (singleProduct && singleProduct.flavors && singleProduct.size && singleProduct.flavors.length > 0 && singleProduct.size.length > 0) {
        setFlavor(singleProduct.flavors[0]);
        setSize(singleProduct.size[0]);
      }

    }
  }, [singleProduct]);




  const [count, setCount] = useState(1);

  const [size, setSize] = useState("");
  const [flavor, setFlavor] = useState("");

  const handleAddQuantity = () => {
    if (count <= 5) setCount(count + 1);
  };
  const handleRemoveQuantity = () => {
    if (count > 1) setCount(count - 1);
  };

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  else
    return (
      <main>
        <div className="flex items-center flex-col md:flex-row">
          <div>
            <img src={product2} alt="" />
          </div>
          <div>
            <h1 className="text-4xl font-bold my-3">{singleProduct['title']}</h1>
            <p className="text-base font-bold my-3">from ${singleProduct['price']}</p>
            <ul className="leading-9">
              {singleProduct['benifits']?.map((pro) => (
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
              <select className="px-3 py-1 bg-white text-redish " value={flavor} onChange={(e) => setFlavor(e.target.value)}>
                {singleProduct['flavors']?.map((pro) => (
                  <option value={pro}>{pro}</option>

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
              <select className=" px-3 py-1 bg-white text-redish " value={size} onChange={(e) => setSize(e.target.value)}>

                {singleProduct['size']?.map((pro) => (
                  <option value={pro}>{pro} servings</option>

                ))}
                {/* <option value="29 servings">29 servings</option>
              <option value="30 servings">30 servings</option>
              <option value="70 servings">70 servings</option> */}
              </select>


              <button className="block md:inline bg-redish text-white px-3 py-2 mx-auto md:mx-6 my-6 " onClick={(e) => {
                e.preventDefault();
                addToCart(params, 1, singleProduct, flavor, size)
              }}>
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
            {singleProduct['description']}
          </p>
        </div>
      </main>
    );
};

export default Details;
