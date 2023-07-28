import React from "react";
import Home from "../components/Home";
import Footer from "../components/Footer";
import MainLayout from "../components/MainLayout";

const page = () => {
  return (
    <MainLayout>
      <Home />
      <Footer />
    </MainLayout>
  );
};

export default page;
