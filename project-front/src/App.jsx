import { useState } from "react";
import Contact from "./containers/Contact";
import Products from "./containers/Products";
import Navbar from "./containers/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


import Details from "./containers/Details";

function App() {
  return (
    <>
      <main className="container mx-auto px-4 bg-whitish">
        <Navbar />
        {/* <Products /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products />} />

            <Route
              exact
              path="/detail/:id"
              element={<Details />}
            />

            {/* <Route path="/detail/:id" children={(props) => <Details id={props.match.params.id}  />} /> */}

            {/* <Route path="/detail/:id"
            element={<Details
            id={props.match.params.id} 
              count={count}
              handleAddQuantity={handleAddQuantity}
              handleRemoveQuantity={handleRemoveQuantity}
            />} 
            /> */}
          </Routes>
        </BrowserRouter>
        {/* <Details
          count={count}
          handleAddQuantity={handleAddQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
        />
        <Contact /> */}
      </main>
    </>
  );
}



export default App;
