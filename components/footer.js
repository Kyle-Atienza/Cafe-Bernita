import React from "react";
import Image from "next/image";

import footerSvg from "../assets/footer-svg.svg";
import footerSvgLg from "../assets/footer-svg-lg.svg";

function footer() {
  return (
    <div className="bg-secondary relative px-5 py-24 lg:py-32 mt-40 flex justify-center text-dark font-lexend">
      <div className="w-5/12 lg:w-6/12 flex flex-col lg:flex-row gap-5 lg:items-center relative z-20 text-center">
        <div className="content flex flex-col gap-5">
          <p className="address text-center lg:text-left uppercase text-xs tracking-widest">
            Sitio 2, Ilag, San Teodoro, <br /> Oriental Mindoro
          </p>
          <p className="operation text-center lg:text-left uppercase text-xs tracking-widest">
            Open from 10:00 am - 6:00 pm <br /> Teusday - Friday
          </p>
        </div>
        <div className="brand py-10 lg:flex-1 lg:text-right ">
          <h1 className="font-bold text-4xl lg:text-5xl">Cafe Bernita</h1>
          <p>
            <i className="far fa-copyright"></i>
            Copyright 2022
          </p>
        </div>
      </div>
      <div className="svgs absolute w-full h-full top-0 left-0 z-10 pointer-events-none">
        <div className="h-fit w-full absolute md:hidden bottom-0">
          <Image src={footerSvg} layout="responsive" alt="" />
        </div>
        <div className="h-fit w-full absolute hidden md:block bottom-0">
          <Image src={footerSvgLg} layout="responsive" alt="" />
        </div>
      </div>
    </div>
  );
}

export default footer;
