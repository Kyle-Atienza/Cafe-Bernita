import React from "react";

function categories({ categories }) {
  return (
    <div className="bg-white py-5  hidden lg:block">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              className="py-2 px-5 hover:bg-primary hover:text-white ease-in-out duration-300"
              key={index}
            >
              <a href={"#" + category.name}>{category.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default categories;
