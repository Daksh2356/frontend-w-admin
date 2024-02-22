import React, { useState, useEffect } from "react";

const Stack = () => {
  const [formData, setFormData] = useState({
    stackTitle: "",
    img1: "",
    title1: "",
    img2: "",
    title2: "",
    img3: "",
    title3: "",
    img4: "",
    title4: "",
    img5: "",
    title5: "",
    img6: "",
    title6: "",
    img7: "",
    title7: "",
    img8: "",
    title8: "",
    img9: "",
    title9: "",
    img10: "",
    title10: "",
    img11: "",
    title11: "",
  });

  useEffect(() => {
    // Fetch data from local storage on component mount
    const storedData = localStorage.getItem("adminData");
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    if (parsedData && parsedData.Stack) {
      setFormData(parsedData.Stack); 
    }
  }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "img1" ||
      name === "img2" ||
      name === "img3" ||
      name === "img4" ||
      name === "img5" ||
      name === "img6" ||
      name === "img7" ||
      name === "img8" ||
      name === "img9" ||
      name === "img10" ||
      name === "img11"
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
      Stack: updatedFormData // Store Service data under namespaced key
    }));
    console.log(formData);
    alert("Data updated successfully!");
  };

  return (
    <div>
      <h5 className="text-3xl tracking-tight mb-3">Tech Stack Section</h5>

      <form onSubmit={handleSubmit}>
        <div className="text-2xl tracking-tight mb-6">
          <label className="mr-2">Stack Title: </label>
          <input
            type="text"
            name="stackTitle"
            value={formData.stackTitle}
            onChange={handleChange}
            placeholder="Enter stackTitle here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Category 1 Image 1: </label>
          <input
            type="file"
            name="img1"
            onChange={handleChange}
            placeholder="Choose file..."
            // className='p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Title: </label>
          <input
            type="text"
            name="title1"
            value={formData.title1}
            onChange={handleChange}
            placeholder="Enter title1 here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Category 1 Image 2: </label>
          <input
            type="file"
            name="img2"
            onChange={handleChange}
            placeholder="Choose file..."
            // className='p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Title: </label>
          <input
            type="text"
            name="title2"
            value={formData.title2}
            onChange={handleChange}
            placeholder="Enter title2 here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Category 1 Image 3: </label>
          <input
            type="file"
            name="img3"
            onChange={handleChange}
            placeholder="Choose file..."
            // className='p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Title: </label>
          <input
            type="text"
            name="title3"
            value={formData.title3}
            onChange={handleChange}
            placeholder="Enter title3 here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Category 2 Image 1: </label>
          <input
            type="file"
            name="img4"
            onChange={handleChange}
            placeholder="Choose file..."
            // className='p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Title: </label>
          <input
            type="text"
            name="title4"
            value={formData.title4}
            onChange={handleChange}
            placeholder="Enter title4 here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Category 2 Image 2: </label>
          <input
            type="file"
            name="img5"
            onChange={handleChange}
            placeholder="Choose file..."
            // className='p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Title: </label>
          <input
            type="text"
            name="title5"
            value={formData.title5}
            onChange={handleChange}
            placeholder="Enter title5 here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Category 2 Image 3: </label>
          <input
            type="file"
            name="img6"
            onChange={handleChange}
            placeholder="Choose file..."
            // className='p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Title: </label>
          <input
            type="text"
            name="title6"
            value={formData.title6}
            onChange={handleChange}
            placeholder="Enter title6 here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Category 3 Image 1: </label>
          <input
            type="file"
            name="img7"
            onChange={handleChange}
            placeholder="Choose file..."
            // className='p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Title: </label>
          <input
            type="text"
            name="title7"
            value={formData.title7}
            onChange={handleChange}
            placeholder="Enter title7 here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Category 3 Image 2: </label>
          <input
            type="file"
            name="img8"
            onChange={handleChange}
            placeholder="Choose file..."
            // className='p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Title: </label>
          <input
            type="text"
            name="title8"
            value={formData.title8}
            onChange={handleChange}
            placeholder="Enter title8 here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Category 3 Image 3: </label>
          <input
            type="file"
            name="img9"
            onChange={handleChange}
            placeholder="Choose file..."
            // className='p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Title 9: </label>
          <input
            type="text"
            name="title9"
            value={formData.title9}
            onChange={handleChange}
            placeholder="Enter title9 here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Category 4 Image 1: </label>
          <input
            type="file"
            name="img10"
            onChange={handleChange}
            placeholder="Choose file..."
            // className='p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Title 10: </label>
          <input
            type="text"
            name="title10"
            value={formData.title10}
            onChange={handleChange}
            placeholder="Enter title10 here..."
            className="p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Category 4 Image 2: </label>
          <input
            type="file"
            name="img11"
            onChange={handleChange}
            placeholder="Choose file..."
            // className='p-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className="text-2xl tracking-tight mb-6">
          <label>Title 11: </label>
          <input
            type="text"
            name="title11"
            value={formData.title11}
            onChange={handleChange}
            placeholder="Enter title11 here..."
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

export default Stack;
