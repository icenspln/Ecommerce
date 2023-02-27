import { Product } from "./../components/Product";

export function Products() {
  return (
    <section>
      <h1 className="py-10 text-3xl font-semibold">ALL PRODUCTS</h1>
      <div className="flex gap-5 items-center overflow-x-scroll overflow-y-hidden">
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
}
