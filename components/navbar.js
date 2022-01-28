import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

import { ShoppingBagIcon } from "@heroicons/react/solid";

const Header = () => {
  const [navLinksState, setNavLinksState] = useState(false);
  const router = useRouter();

  const isMobile = useMediaQuery({ query: `(max-width: 640px)` });

  useEffect(() => {
    !isMobile ? setNavLinksState(true) : setNavLinksState(false);
  }, [isMobile]);

  useEffect(() => {
    setNavLinksState(false);
  }, [router]);

  return (
    <nav className="container p-5 flex mx-auto justify-center relative z-30 font-lexend">
      <div
        className={
          navLinksState
            ? "absolute w-screen top-0 h-screen z-0"
            : "absolute w-screen top-0 h-screen z-0 pointer-events-none"
        }
        onClick={() => setNavLinksState(false)}
      ></div>
      <div className="operating-status hidden sm:flex flex-1 items-center gap-3  uppercase text-xs tracking-widest">
        <div className="status-indicator w-4 aspect-square rounded-full bg-online h-min my-auto hidden sm:block"></div>
        Open
      </div>
      <div className="brand flex gap-2 items-center">
        <div className="status-indicator w-4 aspect-square rounded-full bg-online h-min my-auto sm:hidden"></div>
        <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl">
          Cafe Bernita
        </h1>
      </div>
      <button
        className="block absolute top-0 right-0 p-5 h-full sm:hidden cursor-pointer"
        data-collapse-toggle="mobile-menu"
        onClick={() => {
          setNavLinksState(!navLinksState);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={
          navLinksState
            ? "nav-links absolute w-full h-40 sm:h-auto overflow-hidden top-full sm:relative sm:flex-1 sm:w-auto px-5 ease-in-out duration-300"
            : "nav-links absolute w-full h-0 sm:h-auto overflow-hidden top-full sm:relative sm:flex-1 sm:w-auto px-5 ease-in-out duration-300"
        }
      >
        <ul
          className="nav-list flex flex-col text-center py-5 bg-primary w-full text-white sm:flex-row sm:flex sm:justify-end sm:gap-7 sm:bg-transparent sm:text-dark  uppercase text-xs tracking-widest"
          id="mobile-menu"
        >
          <li className="hover:bg-primaryDark py-2 sm:hover:bg-transparent sm:hover:text-primary">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:bg-primaryDark py-2 sm:hover:bg-transparent sm:hover:text-primary flex gap-1 items-center">
            <ShoppingBagIcon className="h-5 w-5" />
            <Link href="/menu">Menu</Link>
          </li>
          {/* <li className="hover:bg-primaryDark py-2 sm:hover:bg-transparent sm:hover:text-primary flex items-center gap-1 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
            <Link href="/order">Cart</Link>
          </li>*/}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
