import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/ABC.png";
import { RiAdminFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 mt-2" />
        </Link>
          <h1 className="font-bold tracking-normal" >ABC TECHNOLOGY</h1>
      </div>
      <div className="sm:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>
      <div className={`sm:flex ${isOpen ? "block" : "hidden"} mt-4 sm:mt-0`}>
        <Link to="/about" className="block md:inline-block mx-4 font-semibold">
          About Us
        </Link>
        <Link to="/services" className="block md:inline-block mx-4 font-semibold">
          Services
        </Link>
        <Link to="/blog" className="block md:inline-block mx-4 font-semibold">
          Blog
        </Link>
        <Link to="/admin" className="block md:inline-block mx-4 font-semibold">
          <RiAdminFill className="inline-block" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
