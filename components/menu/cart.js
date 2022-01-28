import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import Link from "next/link";
import { useRecoilState } from "recoil";

import { ShoppingBagIcon, CheckIcon, XIcon } from "@heroicons/react/solid";

import { orderItemsState } from "../../state/orderData";

import CartTable from "../order/cartTable";

function Cart() {
  const [orderItems, setOrderItems] = useRecoilState(orderItemsState);
  const [openCart, setOpenCart] = useState(false);
  const [hoverCart, setHoverCart] = useState(false);
  const router = useRouter();

  const isLarge = useMediaQuery({ query: `(max-width: 1024px)` });

  useEffect(() => {
    setHoverCart(true);
    setTimeout(() => {
      setHoverCart(false);
    }, 1000);
  }, [orderItems]);

  useEffect(() => {
    !isLarge ? setOpenCart(true) : setOpenCart(false);
  }, [isLarge]);

  return (
    <div className="lg:mt-5 relative">
      <div
        className={
          openCart
            ? "fixed top-0 left-0 w-full h-full bg-gray-800/50 z-20 lg:hidden  ease-in-out duration-300"
            : "fixed top-0 left-0 w-full h-full z-20 pointer-events-none  ease-in-out duration-300"
        }
        onClick={() => setOpenCart(!openCart)}
      ></div>
      <div
        className={
          openCart
            ? "mobile-cart fixed w-full px-5 pt-5 bottom-0 h-auto left-0 bg-white z-40 lg:relative lg:p-5  ease-in-out duration-500"
            : "mobile-cart fixed w-full px-5 pt-0 bottom-0 h-0 left-0 bg-white z-40  ease-in-out duration-500"
        }
      >
        <h3 className="text-2xl pb-5">Cart</h3>
        <CartTable />
      </div>
      <button
        className={
          hoverCart
            ? "mobile-cart-btn fixed bg-primaryDark bottom-0 hover:bg-primaryDark lg:hidden right-0 p-5 m-8 rounded-full ring-offset-2 focus:ring focus:ring-primary z-40 -translate-y-5 shadow-lg shadow-primary ease-in-out duration-300"
            : "mobile-cart-btn fixed bg-primary bottom-0 hover:bg-primaryDark lg:hidden right-0 p-5 m-8 rounded-full ring-offset-2 focus:ring focus:ring-primary z-40 translate-y-0 ease-in-out duration-300"
        }
        onClick={() => setOpenCart(true)}
      >
        {openCart ? (
          <CheckIcon
            className="h-7 w-7 fill-white"
            onClick={() => router.push("/order")}
          />
        ) : (
          <ShoppingBagIcon className="h-7 w-7 fill-white" />
        )}
      </button>
    </div>
  );
}

export default Cart;
