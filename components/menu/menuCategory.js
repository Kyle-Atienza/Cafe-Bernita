import React from "react";
import MenuItem from "./menuItem";

function menuCategory({ category, items }) {
  return (
    <section className=" category-menu pb-10 last:pb-0" id={category.name}>
      <div className="title">
        <h3 className="text-5xl font-semibold">{category.name}</h3>
        <p className=" text-xs mt-1">{category.description}*</p>
      </div>
      <div className="content flex flex-col gap-5 mt-9 md:grid md:grid-cols-2">
        {items.map((item, index) => {
          return <MenuItem foodItem={item} key={item.name} />;
        })}
      </div>
    </section>
  );
}

export default menuCategory;
