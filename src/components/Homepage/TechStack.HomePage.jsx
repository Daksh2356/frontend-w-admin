import React, { useState } from "react";
import Card from "./Card";

const TechStackHomePage = () => {
  const [activeTab, setActiveTab] = useState("FrontEnd");

  const storedData = localStorage.getItem("adminData");
  const stackValuesData = storedData ? JSON.parse(storedData).Stack : {};

  const stackTitle = stackValuesData?.stackTitle || "Our Tech Stack";
  const img1 = stackValuesData?.img1 || "https://shorturl.at/foGKM";
  const img2 = stackValuesData?.img2 || "https://shorturl.at/be014";
  const img3 = stackValuesData?.img3 || "https://shorturl.at/tBX47";
  const img4 =
    stackValuesData?.img4 ||
    "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png";
  const img5 = stackValuesData?.img5 || "https://shorturl.at/qBDIR";
  const img6 =
    stackValuesData?.img6 ||
    "https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png";
  const img7 = stackValuesData?.img7 || "https://rb.gy/dliwkn";
  const img8 =
    stackValuesData?.img8 ||
    "https://coralogix.com/wp-content/uploads/2021/06/icon_cloud_192pt_clr-1.png";
  const img9 = stackValuesData?.img9 || "https://rb.gy/m9tulf";
  const img10 = stackValuesData?.img10 || "https://rb.gy/wisxi1";
  const img11 =
    stackValuesData?.img11 ||
    "https://cdn.iconscout.com/icon/free/png-256/free-polygon-token-4086724-3379854.png";
  const title1 = stackValuesData?.title1 || "React";
  const title2 = stackValuesData?.title2 || "Svelte";
  const title3 = stackValuesData?.title3 || "Vue";
  const title4 = stackValuesData?.title4 || "Node.js";
  const title5 = stackValuesData?.title5 || "ExpressJS";
  const title6 = stackValuesData?.title6 || "Python";
  const title7 = stackValuesData?.title7 || "AWS";
  const title8 = stackValuesData?.title8 || "Google Cloud";
  const title9 = stackValuesData?.title9 || "Azure";
  const title10 = stackValuesData?.title10 || "Ethreum";
  const title11 = stackValuesData?.title11 || "Polygon";

  const cardData = {
    FrontEnd: [
      {
        img: img1,
        title: title1,
      },
      {
        img: img2,
        title: title2,
      },
      {
        img: img3,
        title: title3,
      },
    ],
    BackEnd: [
      {
        img: img4,
        title: title4,
      },
      {
        img: img5,
        title: title5,
      },
      {
        img: img6,
        title: title6,
      },
    ],
    Cloud: [
      {
        img: img7,
        title: title7,
      },
      {
        img: img8,
        title: title8,
      },
      {
        img: img9,
        title: title9,
      },
    ],
    Blockchain: [
      {
        img: img10,
        title: title10,
      },
      {
        img: img11,
        title: title11,
      },
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-4 my-2 p-8">
      <h1 className="text-5xl font-bold tracking-tighter mb-4">{stackTitle}</h1>
      <div className="flex justify-center mt-4">
        {Object.keys(cardData).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 mx-2 rounded ${
              activeTab === tab
                ? "bg-blue-950 text-white"
                : "bg-card text-gray-700"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="md:flex lg:flex-row flex-wrap justify-center ">
        {cardData[activeTab].map((card, index) => (
          <div key={index} className="p-4 md:w-full lg:w-1/3 ">
            <Card img={card.img} title={card.title} type={"stack"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackHomePage;
