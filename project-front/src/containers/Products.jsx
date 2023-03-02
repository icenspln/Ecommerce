import productsData from "../data/productsData";
import Product from "./../components/Product";
import { CgScrollV } from "react-icons/cg";
import React, { useEffect,useState  } from 'react'
import productOne from "../assets/product1.png";



export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const response = await fetch("http://localhost:4000/products/getAllProducts");


    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }
    const records = await response.json();
    setProducts(records['result']);

  }


  return (
    <section>
      <h1 className="pt-10 text-3xl font-semibold">ALL PRODUCTS</h1>
      <small className="text-sm font-light flicker-1 ">
        Scroll To See The Rest <CgScrollV className="inline mx-3 text-xl" />
      </small>
      <div className="slide-in-bck-center grid gap-4 grid-cols-auto ">
        {products.map((pro) => (
          <Product
            key={pro._id}
            product_id = {pro._id}
            img={productOne}
            desc={pro.title}
            price={pro.price}
          />
        ))}
      </div>
    </section>
  );
}
