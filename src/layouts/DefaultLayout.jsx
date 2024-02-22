import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DefaultLayout =
  (Component) =>
  ({ ...props }) => {
    return (
        <>
          <Navbar />
          <Component {...props} />
          <Footer/>
        </>
      
    );
  };

export default DefaultLayout;
