import React, { useState, useEffect } from "react";

const Offer = () => {
  const [formData, setFormData] = useState({
    offerTitle: "",
    offerText: "",
    offer1Title: "",
    offer1Text: "",
    offer2Title: "",
    offer2Text: "",
    offer3Title: "",
    offer3Text: "",
    offer4Title: "",
    offer4Text: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("adminData");
    if (storedData) {
      const parsedData = JSON.parse(storedData).Offer;
      if (parsedData && parsedData.Offers) {
        setFormData(parsedData.Offers); 
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
      Offers: updatedFormData // Store Service data under namespaced key
    }));
    console.log(formData);
    alert("Data updated successfully!");
  };

  return (
    <div>
      <h5 className="text-3xl tracking-tight mb-3">Offer Section</h5>
      <form onSubmit={handleSubmit}>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Offer Title: </label>
          <input
            type="text"
            name="offerTitle"
            value={formData.offerTitle}
            onChange={handleChange}
            placeholder="Enter title here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Offer Text: </label>
          <input
            type="text"
            name="offerText"
            value={formData.offerText}
            onChange={handleChange}
            placeholder="Enter title here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 1 Title: </label>
          <input
            type="text"
            name="offer1Title"
            value={formData.offer1Title}
            onChange={handleChange}
            placeholder="Enter title here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 1 Text: </label>
          <input
            type="text"
            name="offer1Text"
            value={formData.offer1Text}
            onChange={handleChange}
            placeholder="Enter title here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 2 Title:</label>
          <input
            type="text"
            name="offer2Title"
            value={formData.offer2Title}
            onChange={handleChange}
            placeholder="Enter title here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 2 Text:</label>
          <input
            type="text"
            name="offer2Text"
            value={formData.offer2Text}
            onChange={handleChange}
            placeholder="Enter title here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />{" "}
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 3 Title: </label>
          <input
            type="text"
            name="offer3Title"
            value={formData.offer3Title}
            onChange={handleChange}
            placeholder="Enter title here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />{" "}
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 3 Text:</label>
          <input
            type="text"
            name="offer3Text"
            value={formData.offer3Text}
            onChange={handleChange}
            placeholder="Enter title here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 4 Title:</label>
          <input
            type="text"
            name="offer4Title"
            value={formData.offer4Title}
            onChange={handleChange}
            placeholder="Enter title here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Card 4 Text:</label>
          <input
            type="text"
            name="offer4Text"
            value={formData.offer4Text}
            onChange={handleChange}
            placeholder="Enter title here..."
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
          <button
            onClick={() => setFormData({})}
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

export default Offer;
