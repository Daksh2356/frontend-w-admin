import React from "react";

const WelcomeHomePage = () => {

  const storedData = localStorage.getItem("adminData");
  const welcomeData = storedData ? JSON.parse(storedData).Welcome : {};
  
  const title = welcomeData?.title || "Welcome to ABC Technology";

  const text = welcomeData?.text || "Here, we aim to work with the latest technology to solve the needs and requirements of our clients. Passionate about using cutting-edge technology to meet client needs, delivering high-quality solutions for business success.";

  return (
    <div className="mx-4 my-2 p-8">
      <h1 className="text-5xl font-bold tracking-tighter mb-2">{title}</h1>
      <p className="text-2xl tracking-tight">{text}</p>
    </div>
  );
};

export default WelcomeHomePage;
