import React, { useEffect } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useRecoilState } from "recoil";

import Menu from "../../components/menu/menu";
import Cart from "../../components/menu/cart";
import Categories from "../../components/menu/categories";

import { menuState } from "../../state/menuData";
import { orderItemsState } from "../../state/orderData";

function Index({ categories, foodItems, menuItems }) {
  const [menu, setMenu] = useRecoilState(menuState);
  const [orderItems, setOrderItems] = useRecoilState(orderItemsState);

  useEffect(() => {
    setMenu(menuItems.menuItems);
  }, [menu]);

  return (
    <div className="font-lexend mx-5">
      <div className="relative justify-end " id="menu-header">
        <div className="background w-full left-0 h-[30vh] z-10 "></div>
      </div>
      <div className="container mx-auto lg:flex lg:flex-row lg:mt-40 lg:gap-5">
        <div className="sidebar relative basis-1/3 z-50 ">
          <div className="sticky top-0">
            <Categories categories={categories.menuCategories} />
            <Cart />
          </div>
        </div>
        <Menu
          categories={categories.menuCategories}
          foodItems={foodItems.foodItems}
        />
      </div>
    </div>
  );
}

export default Index;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api-ap-northeast-1.graphcms.com/v2/ckyuwf13k01am01y2bun17ywh/master",
    cache: new InMemoryCache()
  });

  const { data: categories } = await client.query({
    query: gql`
      {
        menuCategories {
          name
          description
          icon {
            url
          }
        }
      }
    `
  });

  const { data: menuItems } = await client.query({
    query: gql`
      {
        menuItems {
          id
          name {
            name
            description
          }
          variation {
            name
          }
          price
        }
      }
    `
  });

  const { data: foodItems } = await client.query({
    query: gql`
      {
        foodItems {
          name
          description
          category {
            name
          }
        }
      }
    `
  });

  return {
    props: {
      categories,
      menuItems,
      foodItems
    }
  };
}
