import React from "react";
import Navbar from "./Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <Navbar />
      <section className="text-white ">{children}</section>
    </main>
  );
};

export default MainLayout;
