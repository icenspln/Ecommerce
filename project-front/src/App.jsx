import Contact from "./containers/Contact";
import Products from "./containers/Products";
import Navbar from "./containers/Navbar";

function App() {
  return (
    <>
      <main className="container mx-auto px-4 bg-whitish">
        <Navbar />
        <Products />
        <Contact />
      </main>
    </>
  );
}

export default App;
