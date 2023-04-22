import React from "react";
import Sidebar from "./Sidebar";
import Sidebum from "./Sidebum";

const RootLayout = () => {
  return (
    <section className="flex w-[100vw] h-[100vh] justify-center items-center">
      <div className=" mx-auto flex ">
        <Sidebar />
        <Sidebum />
      </div>
    </section>
  );
};

export default RootLayout;
