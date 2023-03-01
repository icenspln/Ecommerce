import { useState } from "react";
import Contact from "./containers/Contact";
import Products from "./containers/Products";
import Navbar from "./containers/Navbar";

import Details from "./containers/Details";

function App() {
  const [count, setCount] = useState(1);
  const handleAddQuantity = () => {
    if (count <= 5) setCount(count + 1);
  };
  const handleRemoveQuantity = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <>
      <main className="container mx-auto px-4 bg-whitish">
        <Navbar />
        {/* <Products /> */}
        <Details
          count={count}
          handleAddQuantity={handleAddQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
        />
        <Contact />
      </main>
    </>
  );
}

export default App;
