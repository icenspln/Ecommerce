import Products from "./containers/Products";
import Navbar from "./containers/Navbar";

function App() {
  return (
    <>
      <main className="container mx-auto px-4 bg-whitish">
        <Navbar />
        <main>
          <Products />
        </main>
      </main>
    </>
  );
}

export default App;
