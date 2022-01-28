import React from "react";

import MenuCategoryCard from "./menuCategoryCard";

function menuHeader({ categories }) {
  return (
    <div
      className="mx-5 flex relative justify-end md:flex-col"
      id="menu-header"
    >
      <div className="background absolute w-2/4 md:ml-0 md:w-full md:mx-5 left-0 h-full md:h-[30vh] z-10 top-0"></div>
      {/* <div className="categories mx-auto flex md:flex-wrap flex-col md:flex-row gap-5 w-3/4 md:w-full md:justify-center md:mt-[15vh] relative py-5 z-20">
        {categories
          ? categories.map((category, index) => {
              return <MenuCategoryCard data={category} key={index} />;
            })
          : null}
      </div> */}
    </div>
  );
}

export default menuHeader;
