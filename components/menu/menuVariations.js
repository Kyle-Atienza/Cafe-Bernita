import React, { useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";

import { PlusSmIcon, MinusSmIcon } from "@heroicons/react/solid";

import { orderItemsState } from "../../state/orderData";

function MenuVariations({ variation, menuId }) {
  const [orderItems, setOrderItems] = useRecoilState(orderItemsState);
  const [quantity, setQuantity] = useState(0);

  const addItem = () => {
    setQuantity(quantity + 1);
    setOrderItems([...orderItems, variation.id]);
  };

  const removeItem = () => {
    quantity >= 1 ? setQuantity(quantity - 1) : null;
    const removeIndex = orderItems.indexOf(
      orderItems.find((orderItem) => orderItem === variation.id)
    );
    setOrderItems(
      orderItems.filter((orderItem, index) => index !== removeIndex)
    );
  };

  return (
    <li className="variation flex gap-2 py-2 px-5 justify-between hover:bg-primaryDark ease-in-out duration-300">
      <div className="price flex gap-2">
        <p className="capitalize text-lg">{variation.variation.name}</p>
        <p>₱{variation.price}</p>
      </div>
      <div className="add flex gap-2">
        <PlusSmIcon className="w-7 h- cursor-pointer" onClick={addItem} />
        <div className="quantity w-7 h-7 p-1 bg-white text-primary rounded-full grid place-items-center">
          <p className="leading-none">
            {orderItems.filter((orderItem) => orderItem === menuId).length}
          </p>
        </div>
        <MinusSmIcon className="w-7 h-7 cursor-pointer" onClick={removeItem} />
      </div>
    </li>
  );
}

export default MenuVariations;
