import React, { useState } from "react";
import Transition from "../Transition.js";
import { useRouter } from 'next/router'

import MenuLinkMobile from "./Links/MenuLinkMobile";
import MenuLink from "./Links/MenuLink";
import IconButton from "./Buttons/IconButton.jsx";
const Navbar = () => {
  let [menuOpen, toggleMenu] = useState(false);
  return (
    <div className="relative">
      <nav className="flex items-center justify-end sm:h-10">
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
                  width="22"
                  height="18"
                  fill="currentColor"
                  viewBox="0 -2 24 16"
                  strokeWidth="0"
                >
                  <g fillRule="evenodd">
                    <path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:space-x-10">
          <MenuLink slug="/">
            HOME
          </MenuLink>
          <MenuLink slug="/portfolio">
            PORTFOLIO
          </MenuLink>
          <MenuLink slug="/contact">
            CONTACT ME
          </MenuLink>
        </div>
      </nav>
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
        <div className="absolute top-0 right-0   transition transform origin-top-right md:hidden w-64 z-10">
          <div
          className="bg-transparent overflow-hidden z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="main-menu"
          >
            <div className="flex items-center justify-end">
              <div className="-mr-3">
                <IconButton
                  ariaLabel="Close Menu"
                  handler={() => toggleMenu(!menuOpen)}
                >
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="18"
                  viewBox="-1 0 24 18"
                  fill="currentColor"
                  className="text-p3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z"
                      />
                  </svg>
                </IconButton>
              </div>
            </div>
            <div className="mt-6 pt-2 pb-10 bg-p3 text-s1 shadow-md">
              {/* gap-y-X is not going to work on ios or safari, and will need fallback. build it so we don't need multiple implementations */}
              <MenuLinkMobile url="#">
                HOME
              </MenuLinkMobile>
              <MenuLinkMobile url="#">
                PORTFOLIO
              </MenuLinkMobile>
              <MenuLinkMobile url="#">
                CONTACT ME
              </MenuLinkMobile>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Navbar;
