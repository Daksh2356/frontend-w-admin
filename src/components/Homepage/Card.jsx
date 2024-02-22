import { useState } from "react";
import React from "react";
import "./Card.css";

const Card = ({ title, text, type, img }) => {
  let cardContent;

  const[isHovered, setIsHovered] = useState(false);

  if (type === "services") {
    cardContent = (
      <div className=" border-t-green-200 border-t-8 border border-transparent rounded-2xl bg-gradient-to-r from-card to-[#050117] card-animation">
        <h1 className="mt-4 text-green-200 font-semibold text-2xl">{title}</h1>
        <p className="mt-2 text-md mb-8 px-36">{text}</p>
      </div>
    );
  } else if (type === "offer") {
    cardContent = (
      <div className="rounded-2xl bg-card card-animation-2">
        <h1 className="mt-4 text-green-200 font-semibold text-2xl">{title}</h1>
        <p className="mt-2 text-md mb-4 px-32">{text}</p>
        <button className="rounded-md p-2 border mb-4 tracking-tighter text-lg">
          Learn More
        </button>
      </div>
    );
  } else if (type === "values" || type === "stack") {
    cardContent = (
      <div
        className={`rounded-2xl bg-card card-animation-3 ${isHovered && type === "stack" ? "card-4" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={img} alt="title" className="rounded-lg pt-4 w-48 h-48" />
        <h1 className="mt-4 text-green-200 font-semibold text-2xl">{title}</h1>
        <p
          className={`mt-2 text-md pb-4 px-12 ${
            type === "stack" ? "hidden" : ""
          }`}
        >
          {text}
        </p>
      </div>
    );
  }

  return <center>{cardContent}</center>;
};

export default Card;
