import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import CartTable from "../../components/order/cartTable";
import OrderMethod from "../../components/order/orderMethod";
import CustomerDetails from "../../components/order/customerDetails";

function Index() {
  return (
    <div className="font-lexend mx-5">
      <div className="relative justify-end " id="menu-header">
        <div className="background w-full left-0 h-[30vh] z-10 "></div>
      </div>
      <div className="container mx-auto mt-40">
        {/* <button className=" bg-primary w-fit py-3 px-8 mb-5 mx-auto hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/50 text-white">
          <Link href="/menu">Go Back</Link>
        </button> */}
      </div>
      <div className="container mx-auto flex flex-col md:flex-row md:gap-5">
        <OrderMethod />
        <div className="md:basis-2/3 mt-10 md:mt-0">
          <CartTable />
          <CustomerDetails />
        </div>
      </div>
    </div>
  );
}

export default Index;
