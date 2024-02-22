import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
// import { trimAndCheckEmpty } from "../../assets/helper/functions";

const ServicesHomePage = () => {
  const sectionRef = useRef(null);
  const [showCards, setShowCards] = useState(false);

  const storedData = JSON.parse(localStorage.getItem("adminData"));
  const services = storedData ? storedData.Services : {};

  const title = services?.servicesTitle || "Our Services";
  const text = services?.servicesText || "We provide a wide range of services to help you achieve your business goals.";
  const subText = services?.subText || "We are here to help you with all your business needs.";
  const card1Title = services?.card1Title || "Web Development";
  const card1Text = services?.card1Text || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const card2Title = services?.card2Title || "Mobile Development";
  const card2Text = services?.card2Text || "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const card3Title = services?.card3Title || "Quality Assurance";
  const card3Text = services?.card3Text || "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  const card4Title = services?.card4Title || "Cloud Services";
  const card4Text = services?.card4Text || "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const card5Title = services?.card5Title || "Consulting";
  const card5Text = services?.card5Text || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const cardData = [
    {
      title: card1Title,
      text: card1Text,
    },
    {
      title: card2Title,
      text: card2Text,
    },
    {
      title: card3Title,
      text: card3Text,
    },
    {
      title: card4Title,
      text: card4Text,
    },
    {
      title:card5Title,
      text: card5Text
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state when section enters or exits the viewport
        setShowCards(entry.isIntersecting);
      },
      { threshold: 0.3 } // Adjust threshold as needed
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
        // style={{ height: "125vh", vectorEffect: "non-scaling-stroke"}}
      >
        {showCards && (
          <div className="md:flex lg:flex-row flex-wrap justify-center ">
            {cardData.map((card, index) => (
              <div key={index} className="p-4 md:w-full lg:w-1/2 lg:h-1/2 ">
             <Card key={index} title={card.title} text={card.text} type={"services"}/>
              </div>
            ))}
          </div>
        )}
      </div>
      <p className="text-2xl tracking-tight mb-6">
        {subText}
      </p>
    </div>
  );
};

export default ServicesHomePage;
