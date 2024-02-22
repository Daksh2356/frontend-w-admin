import React, { useState, useEffect } from "react";

const Service = () => {
  const [formData, setFormData] = useState({
    servicesTitle: "",
    servicesText: "",
    card1Title: "",
    card1Text: "",
    card2Title: "",
    card2Text: "",
    card3Title: "",
    card3Text: "",
    card4Title: "",
    card4Text: "",
    card5Title: "",
    card5Text: "",
    subText : "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("adminData");
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    if (parsedData && parsedData.Services) {
      setFormData(parsedData.Services); 
    }
  }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = { ...formData };
    for (const key in updatedFormData) {
      if (updatedFormData[key] === null || updatedFormData[key] === undefined) {
        updatedFormData[key] = ""; // Update to empty string
      }
    }

    // Update data in local storage
    localStorage.setItem("adminData", JSON.stringify({
      ...JSON.parse(localStorage.getItem("adminData")), // Preserve existing data
      Services: updatedFormData // Store Service data under namespaced key
    }));
    console.log(formData);
    alert("Data updated successfully!");
  };

  return (
    <div>
      <h5 className="text-3xl tracking-tight mb-3">Service Section</h5>
      <form onSubmit={handleSubmit}>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Services Title: </label>
          <input
            type="text"
            name="servicesTitle"
            value={formData.servicesTitle}
            onChange={handleChange}
            placeholder="Enter services title here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Services Text: </label>
          <input
            type="text"
            name="servicesText"
            value={formData.servicesText}
            onChange={handleChange}
            placeholder="Enter servics text here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 1 Title: </label>
          <input
            type="text"
            name="card1Title"
            value={formData.card1Title}
            onChange={handleChange}
            placeholder="Enter card1Title here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 1 Text: </label>
          <input
            type="text"
            name="card1Text"
            value={formData.card1Text}
            onChange={handleChange}
            placeholder="Enter card1Text here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 2 Title:</label>
          <input
            type="text"
            name="card2Title"
            value={formData.card2Title}
            onChange={handleChange}
            placeholder="Enter card2Title here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 2 Text:</label>
          <input
            type="text"
            name="card2Text"
            value={formData.card2Text}
            onChange={handleChange}
            placeholder="Enter card2Text here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />{" "}
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 3 Title: </label>
          <input
            type="text"
            name="card3Title"
            value={formData.card3Title}
            onChange={handleChange}
            placeholder="Enter card3Title here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />{" "}
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 3 Text:</label>
          <input
            type="text"
            name="card3Text"
            value={formData.card3Text}
            onChange={handleChange}
            placeholder="Enter card3Text here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 4 Title:</label>
          <input
            type="text"
            name="card4Title"
            value={formData.card4Title}
            onChange={handleChange}
            placeholder="Enter card4Title here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 4 Text:</label>
          <input
            type="text"
            name="card4Text"
            value={formData.card4Text}
            onChange={handleChange}
            placeholder="Enter card4Text here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 5 Title: </label>
          <input
            type="text"
            name="card5Title"
            value={formData.card5Title}
            onChange={handleChange}
            placeholder="Enter card5Title here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 5 Text: </label>
          <input
            type="text"
            name="card5Text"
            value={formData.card5Text}
            onChange={handleChange}
            placeholder="Enter card5Text here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Sub Text: </label>
          <input
            type="text"
            name="subText"
            value={formData.subText}
            onChange={handleChange}
            placeholder="Enter subText here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-wrap gap-6">
          <button
            className="p-2 bg-white text-black rounded-lg border-4 focus:outline-none hover:bg-cyan-500"
            type="submit"
          >
            Update Data
          </button>
          <button onClick={() => setFormData({})}
            className="p-2 bg-white text-black rounded-lg border-4 focus:outline-none hover:bg-cyan-500"
            type="reset"
          >
            Reset Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default Service;
