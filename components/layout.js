import React from "react";
import Head from "next/head";

import Navbar from "./navbar";
import Footer from "./footer";

function layout({ children }) {
  return (
    <>
      <Head>
        <title>Cafe Bernita</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default layout;
