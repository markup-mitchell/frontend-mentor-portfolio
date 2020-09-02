import React, { useState } from "react";
import Transition from "../Transition.js";

import MenuLink from "../components/MenuLink";
const Navbar = () => {
  let [menuOpen, toggleMenu] = useState(false);
  return (
    <div className="relative pt-8 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
      <div className="max-w-screen-xl mx-auto sm:px-6">
        <nav className="relative px-8 flex items-center justify-between sm:h-10 md:justify-center">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#" aria-label="Home">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="images/logo.svg"
                  alt="Logo"
                ></img>
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:shadow-outline
                  focus:outline-none
                  transition duration-150 ease-in-out border-p1"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                  onClick={() => toggleMenu(!menuOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="16"
                    stroke="currentColor"
                    viewBox="0 -2 24 16"
                  >
                    <g  fillRule="evenodd">
                      <path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10">
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Product
            </a>
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Features
            </a>
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Company
            </a>
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out"
              >
                Log in
              </a>
            </span>
          </div>
        </nav>
      </div>

      {/* mobile menu */}
      <Transition
        show={menuOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 right-0 pt-8 pr-8 transition transform origin-top-right md:hidden w-64">
          <div
            className="bg-transparent overflow-hidden z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div className="flex items-center justify-end">
         
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2
                  bg-white rounded-md focus:outline-none  transition duration-150 ease-in-out"
                  aria-label="Close menu"
                  onClick={() => toggleMenu(!menuOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    fill="currentColor"
                    className="text-p3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z"
                    />
                  </svg>
                </button>
           
            </div>
            <div className="mt-6 pt-2 pb-10 bg-p3 text-s1 shadow-md flex flex-col">
              {/* gap-y-X is not going to work on ios or safari, and will need fallback. build it so we don't need multiple implementations */}
              <MenuLink url="#">HOME</MenuLink>
              <MenuLink url='#'>PORTFOLIO</MenuLink>
              <MenuLink url="#">CONTACT ME</MenuLink>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Navbar;
