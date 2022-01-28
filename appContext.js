import React, { useContext, useState } from "react";

const MenuItemsContext = React.createContext();

export function useMenuItems() {
  return useContext(MenuItemsContext);
}

export function AppProvider({ children }) {
  const [menuFoodItems, setMenuFoodItems] = useState();

  return (
    <MenuItemsContext.Provider
      value={{
        menuFoodItems,
        setMenuFoodItems
      }}
    >
      {children}
    </MenuItemsContext.Provider>
  );
}
