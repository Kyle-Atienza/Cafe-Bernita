import React from "react";
import Image from "next/image";

function menuCategoryCard({ data }) {
  const { name, icon } = data;
  return (
    <div className="category bg-white hover:bg-primary flex md:flex-col ease-in-out duration-300 aspect-[5/2] sm:aspect-[8/2] md:aspect-[unset] md:w-36">
      {/* <div className="category bg-white hover:bg-primary flex md:flex-col min-h-20 h-[15vh] max-h-36  md:aspect-[3/2]  ease-in-out duration-300"> */}
      <div className="name basis-1/2 md:basis-0 p-5 grid place-items-center">
        <h3 className="text-2xl font-semibold">{name}</h3>
      </div>
      <div className="icon relative hidden md:block">
        <Image
          src={icon.url}
          className=""
          layout="responsive"
          width="100%"
          height="100%"
          alt=""
        />
      </div>
      <div className="icon relative basis-1/2 md:hidden">
        <Image
          src={icon.url}
          className=""
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          alt=""
        />
      </div>
    </div>
  );
}

export default menuCategoryCard;
