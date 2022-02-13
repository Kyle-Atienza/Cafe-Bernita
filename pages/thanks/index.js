import React from "react";

function index() {
  return (
    <div className="font-lexend mx-5 relative">
      <div className="relative justify-end " id="menu-header">
        <div className="background w-full left-0 h-[30vh] z-10 "></div>
      </div>
      <div className="container mx-auto mt-40 relative z-50">
        <h1 className="font-bold text-5xl lg:text-7xl text-dark">
          Thank you for ordering from us!
        </h1>
        <p className="uppercase text-xs tracking-widest">
          Your order is now being prepared
        </p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 mt-10 w-1/2">
          <button className="bg-primary w-full md:w-fit py-3 px-8 block hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/50 text-white ">
            Order More
          </button>
          <button className="bg-white w-full md:w-fit py-3 px-8 block hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/50 text-primary ">
            Exit to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
