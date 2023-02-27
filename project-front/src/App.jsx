import { Products } from "./containers/Products";
import "./App.css";
import Navbar from "./containers/Navbar";

function App() {
  return (
    <>
      <main className="container mx-auto px-4 bg-whitish">
        <Navbar />
        <main>
          {/* Products Component */}
          <Products />
        </main>
      </main>
    </>
  );
}

export default App;
