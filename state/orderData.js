import { atom } from "recoil";

export const orderItemsState = atom({
  key: "orderItems",
  default: []
});

export const orderItemsSetState = atom({
  key: "orderItemsState",
  default: []
});

export const orderMethodState = atom({
  key: "orderMethod",
  default: ""
});

export const orderState = atom({
  key: "orderRecord",
  default: {
    name: null,
    address: null,
    message: null,
    time: null,
    cash: null,
    items: []
  }
});
