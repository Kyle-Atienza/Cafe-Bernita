import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRecoilState } from "recoil";

import deliverIcon from "../../assets/deliver-icon.svg";
import pickupIcon from "../../assets/pickup-icon.svg";

import { orderMethodState } from "../../state/orderData";

function OrderMethod() {
  const [method, setMethod] = useRecoilState(orderMethodState);

  return (
    <div className="order-method md:basis-1/3">
      <p className="uppercase text-xs tracking-widest pb-5">
        select order method
      </p>
      <div className="methods flex gap-5">
        <div
          className={
            method === "Deliver"
              ? "method flex flex-col shadow-lg shadow-primary/50 ease-in-out duration-300 -translate-y-2 bg-primary"
              : "method flex flex-col bg-white hover:shadow-lg hover:shadow-primary/50 ease-in-out duration-300 hover:-translate-y-2"
          }
          onClick={() => setMethod("Deliver")}
        >
          <h3 className="text-2xl font-semibold p-5 ">Deliver</h3>
          <div className="icon relative pr-5">
            <Image src={deliverIcon} className="" layout="responsive" alt="" />
          </div>
        </div>
        <div
          className={
            method === "PickUp"
              ? "method flex flex-col shadow-lg shadow-primary/50 ease-in-out duration-300 -translate-y-2 bg-primary"
              : "method flex flex-col bg-white hover:shadow-lg hover:shadow-primary/50 ease-in-out duration-300 hover:-translate-y-2"
          }
          onClick={() => setMethod("PickUp")}
        >
          <h3 className="text-2xl font-semibold p-5">Pickup</h3>
          <div className="icon relative pr-5">
            <Image src={pickupIcon} className="" layout="responsive" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderMethod;
