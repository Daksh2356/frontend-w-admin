import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import Slider from "../components/Homepage/swiper";
import WelcomeHomePage from "../components/Homepage/WelcomeHomePage";
import ServicesHomePage from "../components/Homepage/Services.HomePage";
import WhatWeOfferHomePage from "../components/Homepage/WhatWeOffer.HomePage";
import CoreValuesHomePage from "../components/Homepage/CoreValues.HomePage";
import TechStackHomePage from "../components/Homepage/TechStack.HomePage";

const Home = () => {
  return (
    <>
      <div className="mx-6 my-4 p-12">
        <Slider/>
      </div>
     <WelcomeHomePage/>
     <ServicesHomePage/>
     <WhatWeOfferHomePage/>
     <CoreValuesHomePage/>
     <TechStackHomePage/>
    </>
  );
};

export default DefaultLayout(Home);
