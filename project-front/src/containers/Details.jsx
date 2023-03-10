import { Link } from "react-router-dom";
import productsData from "../data/productsData";
import { AiOutlineCheck } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

const Details = ({ id }) => {
  const { addToCart } = useCartContext();
  const [popUpToggle, setpopUpToggle] = useState(false);
  const params = useParams().id;

  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [size, setSize] = useState("");
  const [flavor, setFlavor] = useState("");
  useEffect(() => {
    // console.log(size, flavor);
  }, [size, flavor]);

  async function getProductDetail() {
    for (let i = 0; i < productsData.length; i++) {
      // eslint-disable-next-line
      if (params == productsData[i].id) {
        setProduct(productsData[i]);
      }
    }
  }

  useEffect(() => {
    if (product) {
      // console.log(singleProduct.flavors[0]);
      //setFlavor(singleProduct.flavors[0]);
      if (
        product &&
        product.flavors &&
        product.size &&
        product.flavors.length > 0 &&
        product.size.length > 0
      ) {
        setFlavor(product.flavors[0]);
        setSize(product.size[0]);
      }
    }
  }, [product]);
  const [count, setCount] = useState(1);

  const handleAddQuantity = () => {
    if (count <= 5) setCount(count + 1);
  };
  const handleRemoveQuantity = () => {
    if (count > 1) setCount(count - 1);
  };

  const popUp = () => {
    setpopUpToggle(true);
    setTimeout(() => {
      setpopUpToggle(false);
    }, 3000);
  };

  return (
    <main>
      <div className="flex items-center flex-col lg:flex-row ">
        <div className="basis-1/2">
          <img src={product.img} alt="" />
        </div>
        <div>
          <h1 className="text-4xl font-bold my-3">{product["desc"]}</h1>
          <p className="text-base font-bold my-3">from ${product["price"]}</p>
          <ul className="leading-9">
            {product["benifits"]?.map((pro) => (
              <li>
                <span>
                  <AiOutlineCheck className="inline mr-3" />
                </span>
                {pro}
              </li>
            ))}
          </ul>
          <hr className="my-6" />
          <form className="my-4 min-h-[300px] " action="#" method="get">
            <label className="mr-6" htmlFor="flavor">
              Flavor
            </label>
            <select
              className="px-3 py-1 bg-white text-redish "
              value={flavor}
              onChange={(e) => setFlavor(e.target.value)}
            >
              {product["flavors"]?.map((pro) => (
                <option value={pro}>{pro}</option>
              ))}
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
              <p className="font-bold p-3">
                ${+(count * product.price).toString().slice(0, 6)}
              </p>
            </div>
            <br />
            <label className="mr-6" htmlFor="size">
              Size
            </label>
            <select
              className=" px-3 py-1 bg-white text-redish "
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              {product["size"]?.map((pro) => (
                <option value={pro}>{pro} servings</option>
              ))}
            </select>

            <button
              className="block md:inline bg-redish text-white px-3 py-2 mx-auto md:mx-6 my-6 "
              onClick={(e) => {
                e.preventDefault();
                addToCart(params, 1, product, flavor, size);
                popUp();
              }}
            >
              ADD TO CART
            </button>
            {popUpToggle && (
              <div className="slide-out-blurred-left z-10 mx-auto font-bold bg-redish p-4 text-white">
                Item Added To Your Cart!
              </div>
            )}
          </form>
          {/* <a className="text-base text-gray-500" href="/">
            Continue Shopping?
          </a> */}
          <Link to="/" className="text-base text-gray-500">
            <u> Continue Shoping?</u>
          </Link>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold">PRODUCT OVERVIEW</h3>
        <p className="font-thin text-gray-500">{product["type"]}</p>
        <p className="my-10  ">{product["overview"]}</p>
      </div>
    </main>
  );
};

export default Details;
