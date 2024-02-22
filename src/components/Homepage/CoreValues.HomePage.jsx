import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";

const CoreValuesHomePage = () => {
  const sectionRef = useRef(null);
  const [showCards, setShowCards] = useState(false);

  const storedData = localStorage.getItem("adminData");
  const coreValuesData = storedData ? JSON.parse(storedData).CoreValues : {};

  const valueTitle = coreValuesData?.valueTitle || "Our Core Values";
  const valueImg1 = coreValuesData?.valueImg1 || "https://shorturl.at/lsLPY";
  const valueTitle1 = coreValuesData?.valueTitle1 || "Quality";
  const valueText1 =
    coreValuesData?.valueText1 ||
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const valueImg2 = coreValuesData?.valueImg2 || "https://shorturl.at/apzST";
  const valueTitle2 = coreValuesData?.valueTitle2 || "Tech";
  const valueText2 =
    coreValuesData?.valueText2 ||
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const valueImg3 = coreValuesData?.valueImg3 || "https://shorturl.at/lsLPY";
  const valueTitle3 = coreValuesData?.valueTitle3 || "Research";
  const valueText3 =
    coreValuesData?.valueText3 ||
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  const cardData = [
    {
      img: valueImg1,
      title: valueTitle1,
      text: valueText1,
    },
    {
      img: valueImg2,
      title: valueTitle2,
      text: valueText2,
    },
    {
      img: valueImg3,
      title: valueTitle3,
      text: valueText3,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state when section enters or exits the viewport
        setShowCards(entry.isIntersecting);
      },
      { threshold: 0.1} // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="mx-4 my-2 p-8">
      <h1 className="text-5xl font-bold tracking-tighter mb-4">{valueTitle}</h1>
      <div
        ref={sectionRef}
        // style={{ height: "110vh", vectorEffect: "non-scaling-stroke" }}
      >
        {showCards && (
          <div className="md:flex lg:flex-row flex-wrap justify-center ">
            {cardData.map((card, index) => (
              <div key={index} className="p-4 md:w-full lg:w-1/3 ">
                <Card
                  key={index}
                  img={card.img}
                  title={card.title}
                  text={card.text}
                  type={"values"}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoreValuesHomePage;
