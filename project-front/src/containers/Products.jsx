import productsData from "../data/productsData";
import Product from "./../components/Product";
import { CgScrollV } from "react-icons/cg";
import React, { useEffect, useState } from 'react'
import productOne from "../assets/product1.png";
import { useProductContext } from "../context/product_context";
import styled from "styled-components";




export default function Products() {

  const { products, isLoading } = useProductContext();


  // useEffect(() => {
  //   getProducts();
  // }, []);

  if (isLoading) {
    console.log("loaddiiiiing");
    return <div className="loader-container">
      <div className="spinner"></div>
    </div>
  }

  return (
    <Wrapper>
    <section>
      <h1 className="pt-10 text-3xl font-semibold">ALL PRODUCTS</h1>
      <small className="text-sm font-light flicker-1 ">
        Scroll To See The Rest <CgScrollV className="inline mx-3 text-xl" />
      </small>
      <div className="slide-in-bck-center grid gap-4 grid-cols-auto ">
        {products.map((pro) => (
          <Product
            key={pro._id}
            product_id={pro._id}
            img={productOne}
            desc={pro.title}
            price={pro.price}
          />
        ))}
      </div>
    </section>
    </Wrapper>
  );

  
}
const Wrapper = styled.section`
.loader-container {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.834)
      url("https://media.giphy.com/media/8agqybiK5LW8qrG3vJ/giphy.gif") center
      no-repeat;
  z-index: 1;
}

`;