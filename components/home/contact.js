import { useRouter } from "next/router";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

import swirl from "../../assets/swirl-2.svg";

import React from "react";
import Image from "next/image";

const CREATE_MESSAGE = gql`
  mutation addMessage($name: String!, $email: String!, $message: String!) {
    createContactMessage(
      data: { name: $name, email: $email, message: $message }
    ) {
      name
      email
      message
    }
    publishManyContactMessagesConnection(last: 1) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

function Contact() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [addNewOrder, { data, loading, error }] = useMutation(CREATE_MESSAGE);

  const submitMessage = async (event) => {
    event.preventDefault();
    await addNewOrder({
      variables: {
        name: name,
        email: email,
        message: message
      }
    });
    error
      ? console.log(JSON.stringify(error, null, 2))
      : window.alert("We have recieved your message. Thank you");
  };

  return (
    <div className="container px-5 mt-40 mx-auto flex flex-col lg:flex-row lg:items-start">
      <div className="title text-center lg:text-left relative text-dark basis-2/5">
        <h1 className="font-bold text-5xl lg:text-7xl relative z-20">
          Contact Us
        </h1>
        <p
          className=" uppercase text-xs tracking-widest relative z-20 underline hover:text-primary ease-in-out duration-300 cursor-pointer"
          onClick={() => router.push("/menu")}
        >
          or place an order
        </p>
        <ul className="socials flex justify-center gap-5 sm:gap-10 mt-10 relative z-20">
          <li>
            <i className="fab fa-facebook text-3xl hover:text-primary ease-in-out duration-300"></i>
          </li>
          <li>
            <i className="fas fa-envelope text-3xl hover:text-primary ease-in-out duration-300"></i>
          </li>
        </ul>
        <div className="svg absolute top-0 left-1/2 -translate-x-1/2 z-10">
          <div className="swirl w-96 sm:w-[60vw] lg:w-[40vw]">
            <Image src={swirl} className="" alt="" />
          </div>
        </div>
      </div>
      <form className="mt-10 gap-5 flex flex-col relative z-20 basis-3/5 lg:mt-0">
        <label htmlFor="name">
          <input
            required
            id="name"
            type="text"
            placeholder="Name"
            onInput={(event) => setName(event.target.value)}
            className="w-full bg-transparent py-2 px-4 border-2 border-primary border-solid placeholder:focus:opacity-50 placeholder:text-sm placeholder:uppercase placeholder:text-primary placeholder:tracking-[0.31em]"
          />
        </label>
        <label htmlFor="email">
          <input
            required
            id="email"
            type="email"
            placeholder="Email"
            onInput={(event) => setEmail(event.target.value)}
            className="w-full bg-transparent py-2 px-4 border-2 border-primary border-solid placeholder:focus:opacity-50 placeholder:text-sm placeholder:uppercase placeholder:text-primary placeholder:tracking-[0.31em]"
          />
        </label>
        <label htmlFor="message">
          <textarea
            required
            name="message"
            id="message"
            placeholder="Message"
            onInput={(event) => setMessage(event.target.value)}
            className="w-full bg-transparent py-2 px-4 border-2 border-primary border-solid placeholder:focus:opacity-30opacity-50 placeholder:text-sm placeholder:uppercase placeholder:text-primary placeholder:tracking-[0.31em]"
            rows="8"
          ></textarea>
        </label>
        <button
          onClick={(event) => submitMessage(event)}
          className="bg-primary w-fit py-3 px-8 mt-4 text-white mx-auto  hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/50"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
