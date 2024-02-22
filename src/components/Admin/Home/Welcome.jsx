import React, { useState, useEffect } from "react";

const Welcome = () => {
  const [formData, setFormData] = useState({
    sliderImg1: "",
    sliderImg2: "",
    sliderImg3: "",
    title: "",
    text: "",
  });

  useEffect(() => {
    // Fetch data from local storage on component mount
    const storedData = localStorage.getItem("adminData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      // Check if Welcome data exists in parsed data
      if (parsedData && parsedData.Welcome) {
        setFormData(parsedData.Welcome); // Set Welcome data
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "sliderImg1" ||
      name === "sliderImg2" ||
      name === "sliderImg3"
    ) {
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
      Welcome: updatedFormData // Store Service data under namespaced key
    }));
    console.log(formData);
    alert("Data updated successfully!");
  };

  return (
    <div>
      <h5 className="text-3xl tracking-tight mb-3">Welcome Section</h5>

      <form onSubmit={handleSubmit}>
        <div className="text-2xl tracking-tight mb-6">
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Text: </label>
          <textarea
            name="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="Enter text here..."
            rows={10}
            cols={50}
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Slider Image 1: </label>
          <input
            type="file"
            name="sliderImg1"
            onChange={handleChange}
            placeholder="Choose file..."
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Slider Image 2: </label>
          <input
            type="file"
            name="sliderImg2"
            // value={formData.imgSrc}
            onChange={handleChange}
            placeholder="Choose file..."
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Slider Image 3: </label>
          <input
            type="file"
            name="sliderImg3"
            // value={formData.imgSrc}
            onChange={handleChange}
            placeholder="Choose file..."
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

export default Welcome;
