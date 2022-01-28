import React from "react";
import MenuCategory from "./menuCategory";

function menuItems({ categories, foodItems }) {
  return (
    <div className="basis-2/3 mt-28 flex flex-col gap-5 lg:mt-0 lg:px-0 mx-auto">
      {categories.map((category) => {
        const categoryItems = foodItems.filter((foodItem) => {
          return foodItem.category.name === category.name;
        });
        return categoryItems.length !== 0 ? (
          <MenuCategory
            category={category}
            items={categoryItems}
            key={category.name}
          />
        ) : null;
      })}
    </div>
  );
}

export default menuItems;
