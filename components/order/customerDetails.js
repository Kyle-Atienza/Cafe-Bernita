import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import {
  orderMethodState,
  orderState,
  orderItemsSetState
} from "../../state/orderData";

function CustomerDetails() {
  const [method] = useRecoilState(orderMethodState);
  const [orderRecord, setOrderRecord] = useRecoilState(orderState);
  const [orderItemsSet] = useRecoilState(orderItemsSetState);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");
  const [cash, setCash] = useState("");

  const submitOrder = () => {
    setOrderRecord({
      name: name,
      number: number,
      address: address,
      message: message,
      time: time,
      cash: cash,
      method: method,
      items: orderItemsSet
    });
  };

  return (
    <div className="customer-details mt-5">
      {method !== "" && orderItemsSet.length > 0 ? (
        <form
          action=""
          className="gap-5 flex flex-col relative z-20 basis-3/5 lg:mt-0"
        >
          <p className="text-xs tracking-widest uppercase">
            Enter your information here
          </p>
          <label htmlFor="name">
            <input
              required
              type="text"
              placeholder="Name"
              className="w-full bg-transparent py-2 px-4 border-2 border-primary border-solid placeholder:focus:opacity-50 placeholder:text-sm placeholder:uppercase placeholder:text-primary placeholder:tracking-[0.31em] text-dark"
              onInput={(event) => setName(event.target.value)}
            />
          </label>
          <label htmlFor="name">
            <input
              required
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-transparent py-2 px-4 border-2 border-primary border-solid placeholder:focus:opacity-50 placeholder:text-sm placeholder:uppercase placeholder:text-primary placeholder:tracking-[0.31em] text-dark"
              onInput={(event) => setNumber(event.target.value)}
            />
          </label>
          {method === "delivery" ? (
            <label htmlFor="name">
              <input
                required
                type="text"
                placeholder="Address"
                className="w-full bg-transparent py-2 px-4 border-2 border-primary border-solid placeholder:focus:opacity-50 placeholder:text-sm placeholder:uppercase placeholder:text-primary placeholder:tracking-[0.31em] text-dark"
                onInput={(event) => setAddress(event.target.value)}
              />
            </label>
          ) : null}
          <label htmlFor="message">
            <textarea
              name="message"
              id="message"
              placeholder="Additional Notes*"
              className="w-full bg-transparent py-2 px-4 border-2 border-primary border-solid placeholder:focus:opacity-50 placeholder:text-sm placeholder:uppercase placeholder:text-primary placeholder:tracking-[0.31em] text-dark"
              onInput={(event) => setMessage(event.target.value)}
              rows="5"
            ></textarea>
          </label>
          <label
            htmlFor="time"
            className="uppercase text-sm text-primary tracking-[0.31em]"
          >
            <span className="pl-5 ">Preffered Date & Time</span>
            <input
              required
              type="datetime-local"
              placeholder="Preffered Time*"
              className="mt-2 text-dark w-full bg-transparent py-2 px-4 border-2 border-primary border-solid placeholder:focus:opacity-50 placeholder:text-sm placeholder:uppercase placeholder:text-primary placeholder:tracking-[0.31em]"
              onInput={(event) => setTime(event.target.value)}
            />
          </label>
          <label htmlFor="name">
            <input
              type="number"
              placeholder="Cash on hand*"
              className="w-full bg-transparent py-2 px-4 border-2 border-primary border-solid placeholder:focus:opacity-50 placeholder:text-sm placeholder:uppercase placeholder:text-primary placeholder:tracking-[0.31em] text-dark"
              onInput={(event) => setCash(event.target.value)}
            />
          </label>
          <button
            className="bg-primary w-fit py-3 px-8 text-white mx-auto  hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/50"
            type="button"
            onClick={submitOrder}
          >
            Submit
          </button>
        </form>
      ) : (
        <form
          action=""
          className="gap-5 flex flex-col relative z-20 basis-3/5 lg:mt-0"
        >
          <p className="text-xs tracking-widest uppercase">
            Enter your information here
          </p>
          <label htmlFor="name">
            <input
              disabled
              required
              type="text"
              placeholder="Name"
              className="w-full bg-transparent py-2 px-4 border-2 border-primary border-solid placeholder:focus:opacity-50 placeholder:text-sm placeholder:uppercase placeholder:text-primary placeholder:tracking-[0.31em] text-dark disabled:opacity-50"
              onInput={(event) => setName(event.target.value)}
            />
          </label>
          {method === "delivery" ? (
            <label htmlFor="name">
              <input
                disabled
                required
                type="text"
                placeholder="Address"
                className="w-full bg-transparent py-2 px-4 border-2 border-primary border-solid placeholder:focus:opacity-50 placeholder:text-sm placeholder:uppercase placeholder:text-primary placeholder:tracking-[0.31em] text-dark disabled:opacity-50"
                onInput={(event) => setAddress(event.target.value)}
              />
            </label>
          ) : null}
          <label htmlFor="message">
            <textarea
              disabled
              name="message"
              id="message"
              placeholder="Additional Notes*"
              className="w-full bg-transparent py-2 px-4 border-2 border-primary border-solid placeholder:focus:opacity-50 placeholder:text-sm placeholder:uppercase placeholder:text-primary placeholder:tracking-[0.31em] text-dark disabled:opacity-50"
              onInput={(event) => setMessage(event.target.value)}
              rows="5"
            ></textarea>
          </label>
          <label
            htmlFor="time"
            className="uppercase text-sm text-primary tracking-[0.31em]"
          >
            <span className="pl-5 opacity-50">Preffered Date & Time</span>
            <input
              disabled
              required
              type="datetime-local"
              placeholder="Preffered Time*"
              className="mt-2 text-dark w-full bg-transparent py-2 px-4 border-2 border-primary border-solid placeholder:focus:opacity-50 placeholder:text-sm placeholder:uppercase placeholder:text-primary placeholder:tracking-[0.31em] disabled:opacity-50"
              onInput={(event) => setTime(event.target.value)}
            />
          </label>
          <label htmlFor="name">
            <input
              disabled
              type="number"
              placeholder="Cash on hand*"
              className="w-full bg-transparent py-2 px-4 border-2 border-primary border-solid placeholder:focus:opacity-50 placeholder:text-sm placeholder:uppercase placeholder:text-primary placeholder:tracking-[0.31em] text-dark disabled:opacity-50"
              onInput={(event) => setCash(event.target.value)}
            />
          </label>
          <button
            disabled
            className="bg-primary w-fit py-3 px-8 text-white mx-auto  hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50"
            type="button"
            onClick={submitOrder}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default CustomerDetails;
