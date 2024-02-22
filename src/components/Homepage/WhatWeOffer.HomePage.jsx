import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";

const WhatWeOfferHomePage = () => {
  const sectionRef = useRef(null);
  const [showCards, setShowCards] = useState(false);

  const storedData = JSON.parse(localStorage.getItem("adminData"));
  const offerData = storedData ? storedData.Offers : {};

  const title = offerData?.offerTitle || "What We Offer";
  const text = offerData?.offerText || "We offer a wide range of services to help you achieve your business goals.";
  const offer1Title = offerData?.offer1Title || "Web Development";
  const offer1Text = offerData?.offer1Text || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const offer2Title = offerData?.offer2Title || "Mobile Development";
  const offer2Text = offerData?.offer2Text || "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const offer3Title = offerData?.offer3Title || "Quality Assurance";
  const offer3Text = offerData?.offer3Text || "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  const offer4Title = offerData?.offer4Title || "Cloud Services";
  const offer4Text = offerData?.offer4Text || "We are here to help you with all your business needs.";

  const cardData = [
    {
      title: offer1Title,
      text: offer1Text
    },
    {
      title: offer2Title,
      text: offer2Text
    },
    {
      title: offer3Title,
      text: offer3Text
    },
    {
      title: offer4Title,
      text: offer4Text
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state when section enters or exits the viewport
        setShowCards(entry.isIntersecting);
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="mx-4 my-2 p-8">
      <h1 className="text-5xl font-bold tracking-tighter mb-4">{title}</h1>
      <p className="text-2xl tracking-tight mb-6">
        {text}
      </p>
      <div 
        ref={sectionRef}
        // style={{ height: "105vh"}}
      >
        {showCards && (
          <div className="md:flex lg:flex-row flex-wrap justify-center mt-10 ">
            {cardData.map((card, index) => (
              <div key={index} className="p-4 md:w-full lg:w-1/2 ">
             <Card key={index} title={card.title} text={card.text} type={"offer"} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatWeOfferHomePage;
