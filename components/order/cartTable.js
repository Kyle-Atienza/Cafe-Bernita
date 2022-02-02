import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import { menuState } from "../../state/menuData";
import { orderItemsState, orderItemsSetState } from "../../state/orderData";

function CartTable() {
  const [orderItems] = useRecoilState(orderItemsState);
  const [orderItemsSet, setOrderItemsSet] = useRecoilState(orderItemsSetState);
  const [menu] = useRecoilState(menuState);
  const [orderTotal, setOrderTotal] = useState(0);
  const router = useRouter();

  const isPathnameOrder = router.pathname === "/order";

  const orderSet = [...new Set(orderItems)];

  useEffect(() => {
    setOrderItemsSet(
      orderSet.map((orderItem) => {
        const menuItem = menu.find((menuItem) => {
          return menuItem.id === orderItem;
        });
        const menuQty = orderItems.filter(
          (orderItem) => orderItem === menuItem.id
        ).length;
        return {
          id: menuItem.id,
          name: menuItem.name.name,
          variation: menuItem.variation.name,
          quantity: menuQty,
          amount: menuItem.price * menuQty
        };
      })
    );
  }, [orderItems]);

  useEffect(() => {
    setOrderTotal(
      orderItemsSet
        .map((orderItem) => orderItem.amount)
        .reduce((first, second) => first + second, 0)
    );
    console.log(orderItemsSet);
  }, [orderItemsSet]);

  return (
    <div
      className={isPathnameOrder ? "cart-table p-5 bg-white" : "cart-table "}
    >
      <div className="items pb-5">
        <div className="items border-t-2 border-b-2 border-dark border-solid py-5 grid gap-y-2">
          <div className="header grid grid-cols-4 gap-x-4 uppercase text-xs tracking-widest">
            <h4 className="col-span-2">Name</h4>
            <h4>Qty</h4>
            <h4>Amount</h4>
          </div>
          {orderItemsSet.map((orderItem, index) => {
            return (
              <div
                className="item grid grid-cols-4 gap-x-4 text-lg leading-5 "
                key={orderItem.id + index}
              >
                <p className="col-span-2">
                  {orderItem.name} ({orderItem.variation})
                </p>
                <p>{orderItem.quantity}</p>
                <p>{orderItem.amount}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={isPathnameOrder ? "total" : "total pb-8 lg:pb-0"}>
        <p className=" uppercase text-xs tracking-widest">Your total is:</p>
        <h2
          className={
            isPathnameOrder ? "amount text-5xl" : "amount text-5xl pb-3"
          }
        >
          {orderTotal}
          <span className="peso ml-2 uppercase text-xs tracking-widest">
            PHP
          </span>
        </h2>
      </div>
      {isPathnameOrder ? (
        <button
          className="bg-primary w-fit py-3 px-8 mt-5 mx-auto block hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/50 text-white"
          onClick={() => router.push("/menu")}
        >
          Order More
        </button>
      ) : (
        <button
          className={
            orderItemsSet.length === 0
              ? "opacity-50 pointer-events-none bg-primary w-fit py-3 px-8 mt-5 mx-auto hidden lg:block hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/50 text-white"
              : "bg-primary w-fit py-3 px-8 mt-5 mx-auto hidden lg:block hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/50 text-white"
          }
          onClick={() => router.push("/order")}
        >
          Checkout
        </button>
      )}
    </div>
  );
}

export default CartTable;
