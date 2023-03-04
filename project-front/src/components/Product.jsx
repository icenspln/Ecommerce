import QuickView from "./QuickView";

export default function Product({ product_id, img, desc, price }) {
  return (
    <article className="text-center max-w-[250px] mx-auto flex-shrink-0 my-4 ">
      <div>
        <img src={img} alt="product 1" className="m-auto" />
      </div>
      <h3 className="font-bold">{desc}</h3>
      <QuickView link={product_id} />
      <p>
        <b>
          <span className="font-light">from:</span> ${price}
        </b>
      </p>
    </article>
  );
}
