import Contact from "./containers/Contact";
import Products from "./containers/Products";
import Navbar from "./containers/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Details from "./containers/Details";
import Checkout from "./containers/Checkout";

function App() {
  // const location = useLocation();

  return (
    <>
      <main className="container mx-auto px-4 sm:px-8 lg:px-12 bg-whitish">
        {/* {location.pathname !== "/checkout" && <Navbar />} */}
        <Navbar />
        {/* <Products /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route exact path="/detail/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
        <Contact />
      </main>
    </>
  );
}

export default App;
