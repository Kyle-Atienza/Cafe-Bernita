import React from "react";

import CartTable from "../../components/order/cartTable";
import OrderMethod from "../../components/order/orderMethod";
import CustomerDetails from "../../components/order/customerDetails";

function Index() {
  return (
    <div className="font-lexend mx-5 relative">
      <div className="relative justify-end " id="menu-header">
        <div className="background w-full left-0 h-[30vh] z-10 "></div>
      </div>
      <div className="container mx-auto mt-40"></div>
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
