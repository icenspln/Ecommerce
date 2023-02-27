import QuickView from "./QuickView";

export default function Product({ img, desc, price, link }) {
  return (
    <article className="text-center max-w-[250px] mx-auto flex-shrink-0 my-4 ">
      <div>
        <a href={link}>
          <img src={img} alt="product 1" className="m-auto" />
        </a>
      </div>
      <h3>{desc}</h3>
      <QuickView link={link} />
      <p>
        <b>{price}</b>
      </p>
    </article>
  );
}
