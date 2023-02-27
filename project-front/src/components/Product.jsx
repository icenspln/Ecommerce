import { QuickView } from "./QuickView";
import product1 from "../assets/product1.png";
export function Product() {
  return (
    <article className="text-center max-w-sm flex-shrink-0 my-4">
      <div>
        <img src={product1} alt="product 1" className="m-auto" />
      </div>
      <h3>OPTIMUM NUTRITION GOLD STANDARD 100% WHEY PROTEIN</h3>
      <QuickView />
      <h5>from $49.99 $43.99</h5>
    </article>
  );
}
