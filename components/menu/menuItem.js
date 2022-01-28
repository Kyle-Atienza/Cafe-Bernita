import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/solid";

import MenuVariations from "./menuVariations";

import { menuState } from "../../state/menuData";

function MenuItem({ foodItem }) {
  const [expandMenu, setExpandMenu] = useState(false);
  const [menu, setMenu] = useRecoilState(menuState);

  const menuVariations = menu
    ? menu.filter((menuItem) => {
        return menuItem.name.name === foodItem.name;
      })
    : null;

  return (
    <div className="relative z-20 ">
      <div
        className="menu-item relative flex p-5 items-center justify-between border-solid border-primary border-2 text-primary hover:bg-primary hover:text-white  ease-in-out duration-300"
        onClick={() => setExpandMenu(!expandMenu)}
      >
        <h4 className="text-xl">{foodItem.name}</h4>
        {expandMenu ? (
          <MinusCircleIcon className="w-7 h-7" />
        ) : (
          <PlusCircleIcon className="w-7 h-7" />
        )}
      </div>
      <div
        className={
          expandMenu
            ? "details bg-primary top-full py-5 h-auto text-white  ease-in-out duration-300"
            : "details bg-primary top-full py-0 h-0 overflow-hidden text-white  ease-in-out duration-300"
        }
      >
        <h1 className="pb-5 px-5 uppercase text-xs tracking-widest">
          {foodItem.description}
        </h1>
        <ul className="variations grid">
          {menuVariations
            ? menuVariations.map((variation, index) => {
                return (
                  <MenuVariations
                    variation={variation}
                    menuId={variation.id}
                    key={index}
                  />
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
}

export default MenuItem;
