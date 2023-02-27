import QuickView from "./QuickView";

export default function Product({ img, desc, price, link }) {
  return (
    <article className="text-center max-w-[250px] flex-shrink-0 my-4 ">
      <div>
        <img src={img} alt="product 1" className="m-auto" />
      </div>
      <h3>{desc}</h3>
      <QuickView link={link} />
      <h5>{price}</h5>
    </article>
  );
}
