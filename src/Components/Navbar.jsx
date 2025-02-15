import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="text-white flex justify-between items-center min-h-[15vh] px-5 w-full bg-gray-950 rounded-br-lg rounded-bl-lg bg-fixed opacity-70 xl:px-24 2xl:px-28">
        <div className="text-xl lg:text-4xl font-bold cursor-pointer hover:bg-gray-800 py-3 rounded-full transition-transform duration-500 ease-in-out transform hover:scale-105">
          Weather<span className="text-orange-500">ly</span>
        </div>
        <div className="hidden lg:block">
          <ul className="flex justify-center items-center gap-10 text-2xl">
            <Link to={"/"}>
              <li className="btn btn-primary bg-transparent hover:bg-gray-800 py-2 px-5 font-semibold rounded-full cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105">
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="btn btn-primary bg-transparent hover:bg-gray-800 py-2 px-5 font-semibold rounded-full cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105">
                About
              </li>
            </Link>
            <Link to={"/forecast"}>
              <li className="btn btn-primary bg-transparent hover:bg-gray-800 py-2 px-5 font-semibold rounded-full cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105">
                Forecast
              </li>
            </Link>
          </ul>
        </div>
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          <ul className="text-xl lg:text-3xl">
            <li className="btn btn-ghost cursor-pointer bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-400">
              <FaBars />
            </li>
          </ul>
        </div>
      </div>
      <div className={open ? 'w-full bg-gray-900 text-white flex flex-col justify-center items-center' : 'hidden'}>
        <ul>
          <Link to={"/"}>
            <li className="btn btn-primary bg-transparent hover:bg-gray-800 py-2 px-5 font-semibold rounded-full cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="btn btn-primary bg-transparent hover:bg-gray-800 py-2 px-5 font-semibold rounded-full cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105">
              About
            </li>
          </Link>
          <Link to={"/forecast"}>
            <li className="btn btn-primary bg-transparent hover:bg-gray-800 py-2 px-5 font-semibold rounded-full cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105">
              Forecast
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
