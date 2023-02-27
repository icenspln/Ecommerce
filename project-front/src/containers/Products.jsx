import productsData from "../data/productsData";
import Product from "./../components/Product";
import { CgScrollH } from "react-icons/cg";
export default function Products() {
  return (
    <section>
      <h1 className="pt-10 text-3xl font-semibold">ALL PRODUCTS</h1>
      <small className="text-sm font-light flicker-1 ">
        Scroll horizontally To See The Rest{" "}
        <CgScrollH className="inline mx-3 text-xl" />
      </small>
      <div className="products-section flex gap-5 items-center overflow-x-auto overflow-y-hidden touch-auto touch-pan-x  ">
        {productsData.map((pro) => (
          <Product
            key={pro.id}
            img={pro.img}
            desc={pro.desc}
            price={pro.price}
            link={pro.link}
          />
        ))}
      </div>
    </section>
  );
}
