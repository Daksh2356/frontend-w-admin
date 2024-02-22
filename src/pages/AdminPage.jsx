import React, { useState } from "react";
import Welcome from "../components/Admin/Home/Welcome";
import Service from "../components/Admin/Home/Service";
import Offer from "../components/Admin/Home/Offer";
import Stack from "../components/Admin/Home/Stack";
import Value from "../components/Admin/Home/Value";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("Home"); // Default active tab is Home
  const section = {
    Home: [
      {
        key: "welcome",
        component: <Welcome />,
      },
      {
        key: "service",
        component: <Service />,
      },
      {
        key: "offer",
        component: <Offer />,
      },
      {
        key: "value",
        component: <Value />,
      },
      {
        key: "stack",
        component: <Stack />,
      },
    ],

    AboutUs: [
      {
        key: "welcome",
        component: <Welcome />,
      },
      {
        key: "stack",
        component: <Stack />,
      },
    ],

    Services: [
      {
        key: "service",
        component: <Service />,
      },
      {
        key: "offer",
        component: <Offer />,
      },
    ],

    Blog: [
      {
        key: "value",
        component: <Value />,
      },
      {
        key: "stack",
        component: <Stack />,
      },
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-4 my-2 p-8">
      <h1 className="text-5xl font-bold tracking-tighter mb-4">Admin Page</h1>
      <div className="flex justify-center mt-4">
        {Object.keys(section).map((tab) => (
          <button
            key={tab}
            className={`px-4 w-full py-2 mx-2 rounded ${
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
      <div className="md:flex lg:flex-row flex-wrap gap-2 justify-around ">
        {section[activeTab].map(({ key, component }) => (
          <div key={key} className="mt-8 p-4 border border-5 border-white ">
            {component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
