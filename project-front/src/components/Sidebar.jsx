import React from "react";
import { CgClose } from "react-icons/cg";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const Sidebar = ({ handleClick }) => {
  return (
    <div className="flex flex-col slide-in-blurred-left w-52 h-screen z-50 bg-redish fixed top-0 left-0 p-8">
      <CgClose
        className="cursor-pointer text-white text-3xl ml-auto"
        onClick={handleClick}
      />
      <ul className="text-white ">
        <li>
          <a href="" className="font-bold">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="font-bold">
            Products
          </a>
        </li>
      </ul>
      <div className="text-white mt-auto ">
        <p className="font-thin  mb-4">Social Media</p>
        <div className="flex gap-4">
          <a href="">
            <FaInstagram className="inline text-2xl" />
          </a>
          <a href="">
            <FaYoutube className="inline text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
