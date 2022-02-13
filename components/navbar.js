import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

import { ShoppingBagIcon } from "@heroicons/react/solid";

const Header = () => {
  const [navLinksState, setNavLinksState] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const router = useRouter();

  const isMobile = useMediaQuery({ query: `(max-width: 640px)` });

  useEffect(() => {
    //checks if screen is mobile
    //forces the navbart to be closed
    !isMobile ? setNavLinksState(true) : setNavLinksState(false);
  }, [isMobile]);

  useEffect(() => {
    //closes the navbar whenever the route changes
    setNavLinksState(false);
  }, [router]);

  useEffect(() => {
    //checks if the store is open
    const time = new Date().getHours();
    time >= 10 && time <= 19 ? setIsStoreOpen(open) : setIsStoreOpen(false);
    console.log(isStoreOpen);
  }, []);

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
        <div
          className={
            "status-indicator w-4 aspect-square rounded-full h-min my-auto hidden sm:block " +
            (isStoreOpen ? "bg-online" : "bg-offline")
          }
        ></div>
        {isStoreOpen ? "Open" : "Close"}
      </div>
      <div className="brand flex gap-2 items-center">
        <div
          className={
            "status-indicator w-4 aspect-square rounded-full h-min my-auto sm:hidden " +
            (isStoreOpen ? "bg-online" : "bg-offline")
          }
        ></div>
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
          "nav-links absolute w-full h-40 sm:h-auto overflow-hidden top-full sm:relative sm:flex-1 sm:w-auto px-5 ease-in-out duration-300 " +
          (navLinksState ? "h-40" : "h-0")
        }
      >
        <ul
          className="nav-list flex flex-col text-center py-5 bg-primary w-full text-white sm:flex-row sm:flex sm:justify-end sm:gap-7 sm:bg-transparent sm:text-dark  uppercase text-xs tracking-widest"
          id="mobile-menu"
        >
          <li className="hover:bg-primaryDark py-2 sm:hover:bg-transparent sm:hover:text-primary">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:bg-primaryDark py-2 sm:hover:bg-transparent sm:hover:text-primary flex gap-1 items-center justify-center">
            <ShoppingBagIcon className="h-5 w-5" />
            <Link href="/menu">Menu</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
