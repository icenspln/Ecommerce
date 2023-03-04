import productsData from "../data/productsData";
import Product from "./../components/Product";
import { CgScrollV } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import productOne from "../assets/product1.png";

export default function Products() {
  return (
    <section>
      <h1 className="pt-10 text-3xl font-semibold">ALL PRODUCTS</h1>
      <small className="text-sm font-light flicker-1 ">
        Scroll To See The Rest <CgScrollV className="inline mx-3 text-xl" />
      </small>
      <div className="slide-in-bck-center grid gap-4 grid-cols-auto ">
        {productsData.map((pro) => (
          <Product
            key={pro.id}
            product_id={pro.id}
            img={pro.img}
            desc={pro.desc}
            price={pro.price}
          />
        ))}
      </div>
    </section>
  );
}
