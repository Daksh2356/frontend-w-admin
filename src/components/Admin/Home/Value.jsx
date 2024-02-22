import React, { useState, useEffect } from "react";

const Value = () => {
  const [formData, setFormData] = useState({
    valueTitle: "",
    valueImg1: "",
    valueTitle1: "",
    valueText1: "",
    valueImg2: "",
    valueTitle2: "",
    valueText2: "",
    valueImg3: "",
    valueTitle3: "",
    valueText3: "",
  });

  useEffect(() => {
    // Fetch data from local storage on component mount
    const storedData = localStorage.getItem("adminData");
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    if (parsedData && parsedData.CoreValues) {
      setFormData(parsedData.CoreValues); 
    }
  }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "valueImg1" || name === "valueImg2" || name === "valueImg3") {
      // Handle image upload
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: reader.result, // Store image as base64 string
        }));

        // localStorage.setItem('adminImageData', base64String);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      // Handle other form fields
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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
      CoreValues: updatedFormData // Store Service data under namespaced key
    }));
    console.log(formData);
    alert("Data updated successfully!");
  };

  return (
    <div>
      <h5 className="text-3xl tracking-tight mb-3">Value Section</h5>
      <form onSubmit={handleSubmit}>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Value Title: </label>
          <input
            type="text"
            name="valueTitle"
            value={formData.valueTitle}
            onChange={handleChange}
            placeholder="Enter valueTitle here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Image 1: </label>
          <input
            type="file"
            name="valueImg1"
            // value={formData.imgSrc}
            onChange={handleChange}
            placeholder="Choose file..."
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Title: </label>
          <input
            type="text"
            name="valueTitle1"
            value={formData.valueTitle1}
            onChange={handleChange}
            placeholder="Enter valueTitle1 here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Text: </label>
          <input
            type="text"
            name="valueText1"
            value={formData.valueText1}
            onChange={handleChange}
            placeholder="Enter valueText1 here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Image 2: </label>
          <input
            type="file"
            name="valueImg2"
            // value={formData.imgSrc}
            onChange={handleChange}
            placeholder="Choose file..."
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Title: </label>
          <input
            type="text"
            name="valueTitle2"
            value={formData.valueTitle2}
            onChange={handleChange}
            placeholder="Enter valueTitle2 here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Text: </label>
          <input
            type="text"
            name="valueText2"
            value={formData.valueText2}
            onChange={handleChange}
            placeholder="Enter valueText2 here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Image 3: </label>
          <input
            type="file"
            name="valueImg3"
            // value={formData.imgSrc}
            onChange={handleChange}
            placeholder="Choose file..."
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Title: </label>
          <input
            type="text"
            name="valueTitle3"
            value={formData.valueTitle3}
            onChange={handleChange}
            placeholder="Enter valueTitle3 here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Text: </label>
          <input
            type="text"
            name="valueText3"
            value={formData.valueText3}
            onChange={handleChange}
            placeholder="Enter valueText3 here..."
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

export default Value;
