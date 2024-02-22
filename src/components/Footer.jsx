import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <div className="mt-10 p-4 flex items-center justify-around">
        <div className="p-2">
        <h1 className="text-5xl font-bold tracking-normal" >ABC TECHNOLOGY</h1>
          <p className=" mt-5 text-2xl tracking-tight mb-6">India | Singapore | Australia</p>
          <h3 className="text-5xl font-bold tracking-tighter mb-4">Socials</h3>
          <div className="flex mt-2 gap-6">
            <SlSocialInstagram className=" text-4xl"/>
            <TiSocialTwitter className=" text-4xl"/>
            <TiSocialLinkedin className=" text-4xl"/>
          </div>
        </div>
        <div className="flex-col gap-12 justify-start  ">
          <div className="flex flex-col gap-3 md:flex-row">
          <p className=" mt-5 text-2xl tracking-tight mb-6">Company</p>
          <p  className=" mt-5 text-2xl tracking-tight mb-6">About Us</p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">

          <p  className=" mt-5 text-2xl tracking-tight mb-6">Services</p>
          <p  className=" mt-5 text-2xl tracking-tight mb-6">Blog</p>
          <p  className=" mt-5 text-2xl tracking-tight mb-6">Contact Us</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 mb-10">
        © Copyright 2024 - 2024 ABC Technology | All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
