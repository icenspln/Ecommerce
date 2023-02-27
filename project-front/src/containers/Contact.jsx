import {
  TbTruckDelivery,
  TbCashBanknote,
  TbStack2,
  TbMail,
} from "react-icons/tb";
export default function Contact() {
  return (
    <main className="py-12">
      <p className="mb-9">
        <b>Only at BFSTORE</b>
      </p>
      <div className="flex flex-wrap  ">
        <aside className="mb-7 flex flex-auto flex-wrap gap-7  ">
          <div>
            <TbTruckDelivery className="text-3xl text-redish" />
            <p className="font-semibold">Deliver to 58 wilaya</p>
          </div>
          <div>
            <TbCashBanknote className="text-3xl text-redish" />
            <p className="font-semibold">Hand to hand paiment</p>
          </div>
          <div>
            <TbStack2 className="text-3xl text-redish" />
            <p className="font-semibold">“GRO” is available</p>
          </div>
        </aside>
        <div>
          <p className="uppercase font-semibold">
            your order is taking too long ?
          </p>
          <small className="font-thin">CONTACT US ON</small>
          <article className="flex items-center gap-4 mt-5">
            <TbMail className="text-redish" />
            <span>emai@host.com</span>
          </article>
        </div>
      </div>
      <hr className="my-5" />
      <div className="mx-auto  w-fit">
        <span>Copytright &copy; 2023 BFSTORE</span>
        <p className="p-3 text-center  font-display">Since 2008</p>
      </div>
    </main>
  );
}
