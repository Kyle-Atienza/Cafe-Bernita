import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import {
  orderMethodState,
  orderItemsSetState,
  orderItemsState
} from "../../state/orderData";

const CREATE_ORDER = gql`
  mutation addNewOrder(
    $name: String!
    $number: String!
    $address: String!
    $message: String!
    $dateTime: DateTime!
    $cash: Float
    $method: Method!
    $orderItems: [OrderItemCreateInput!]
    $total: Float
    $orderItemsCount: Int
  ) {
    createOrder(
      data: {
        name: $name
        number: $number
        address: $address
        message: $message
        prefferedDateTime: $dateTime
        cash: $cash
        method: $method
        orderItems: { create: $orderItems }
        total: $total
      }
    ) {
      id
      name
      number
      address
      message
      prefferedDateTime
      cash
      method
      orderItems {
        name
        quantity
        amount
        variation
      }
      total
    }

    publishManyOrdersConnection(last: 1) {
      edges {
        node {
          id
        }
      }
    }

    publishManyOrderItemsConnection(last: $orderItemsCount) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

function CustomerDetails() {
  const [method, setMethod] = useRecoilState(orderMethodState);
  const [orderItemsSet, setOrderItemsSet] = useRecoilState(orderItemsSetState);
  const [orderItems, setOrderItems] = useRecoilState(orderItemsState);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [cash, setCash] = useState("");
  const router = useRouter();

  const isImportantFieldsEmpty =
    method == "Deliver"
      ? name === "" || number === "" || address === "" || dateTime === ""
      : name === "" || number === "" || dateTime === "";

  const [addNewOrder, { data, loading, error }] = useMutation(CREATE_ORDER);

  const submitOrder = async () => {
    if (window.confirm("Are you sure about the order?")) {
      await addNewOrder({
        variables: {
          name: name,
          number: number,
          address: address,
          message: message,
          dateTime: new Date(dateTime),
          cash: parseFloat(cash),
          method: method,
          orderItems: orderItemsSet.map((orderItem) => {
            return {
              name: orderItem.name,
              quantity: orderItem.quantity,
              amount: orderItem.amount,
              variation: orderItem.variation
            };
          }),
          total: orderItemsSet
            .map((orderItem) => orderItem.amount)
            .reduce((first, second) => first + second, 0),
          orderItemsCount: orderItemsSet.length + 1
        }
      });
      console.log(`
      Customer Name: ${name}\n
      Contact Number: ${number}\n
      Address: ${address}\n
      ${orderItemsSet
        .map((orderItem) => {
          return `${orderItem.quantity}-${orderItem.name}(${orderItem.variation})\n`;
        })
        .join("")}\n
      Message: ${message}\n
      Preffered date time: ${dateTime} \n
      `);

      setMethod("");
      setOrderItems([]);
      await router.push("/thanks");
    }
  };

  error ? console.log(JSON.stringify(error, null, 2)) : null;

  return (
    <div className="customer-details mt-5">
      <form action="" className="" id="customerDetailsForm">
        <fieldset
          disabled={method === "" || orderItems.length == 0 ? true : false}
          className="gap-5 flex flex-col relative z-20 basis-3/5 lg:mt-0 disabled:opacity-50"
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
          {method === "Deliver" ? (
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
            <span className="text-[.6rem] tracking-normal normal-case">
              *we make your order for a minimum of 20 minutes
            </span>
            <input
              min="2022-01-30"
              required
              type="datetime-local"
              placeholder="Preffered Time*"
              className="mt-2 text-dark w-full bg-transparent py-2 px-4 border-2 border-primary border-solid placeholder:focus:opacity-50 placeholder:text-sm placeholder:uppercase placeholder:text-primary placeholder:tracking-[0.31em]"
              onInput={(event) => setDateTime(event.target.value)}
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
            disabled={isImportantFieldsEmpty ? true : false}
            className="bg-primary w-fit py-3 px-8 text-white mx-auto  hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:pointer-events-none"
            type="button"
            onClick={submitOrder}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default CustomerDetails;
