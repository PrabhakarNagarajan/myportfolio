import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "PortFolio" },
    { id: 4, link: "Experience" },
    { id: 5, link: "Contact" },
  ];
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-3xl font-signature ml-1 cursor-pointer">
          Prabhakar Nagarajan
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="px-4 cursor-pointer z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute left-0 top-4 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer py-6 text-4xl">
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;