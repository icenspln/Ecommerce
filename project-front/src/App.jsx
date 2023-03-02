import Contact from "./containers/Contact";
import Products from "./containers/Products";
import Navbar from "./containers/Navbar";
import Details from "./containers/Details";
import Checkout from "./containers/Checkout";

function App() {
  return (
    <>
      <main className="container mx-auto px-4 bg-whitish">
        {/* <Navbar /> */}
        {/* <Products /> */}
        <Checkout />
        {/* <Details /> */}
        {/* <Contact /> */}
      </main>
    </>
  );
}

export default App;
