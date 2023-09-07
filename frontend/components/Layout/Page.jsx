import React from "react";
import Head from "next/head";
import PersistLogin from "../Persist/PersistLogin";
import UserProvider from "../../context/User/UserContext";
import Header from "./Header";

const Page = ({ children }) => {
  return (
    <>
      <PersistLogin>
        <UserProvider>
          <Head>
            <title>Store</title>
          </Head>
          <Header />
          <div> {children}</div>
        </UserProvider>
      </PersistLogin>
    </>
  );
};

export default Page;
