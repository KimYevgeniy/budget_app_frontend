import React from "react";
import logo from "../assets/piggy-bank.png";

const Header = () => {
  return (
    <>
      <header className="w-screen h-auto">
        <nav className="flex justify-between items-center pr-8 pl-8 ml-12 mr-12 border-b-2 border-gray-400">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-12 w-12 p-2 hover:rotate-[359deg] transition duration-1000 ease-in-out"
            />
            <p className="text-2xl font-extrabold">Tiynka</p>
          </div>
          <div className="flex items-center pr-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
            <button className="btn">
              Log In
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
