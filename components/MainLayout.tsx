import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <Navbar />
      <section className="text-white ">{children}</section>
      <Footer />
    </main>
  );
};

export default MainLayout;
