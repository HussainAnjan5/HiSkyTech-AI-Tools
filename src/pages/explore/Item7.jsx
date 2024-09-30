import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb";

const ExploreItem7 = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "news_mockup.png";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Breadcrumb />
      <div className="max-w-5xl mx-auto py-10 px-5">
        <h1 className="text-5xl font-bold mb-6 text-center text-white">
          Mockup News
        </h1>
        <p className="mb-10 text-lg text-center text-gray-300">
          Create stunning news mockups for social media or presentations.
        </p>

        <div className="mb-6">
          <label className="block mb-2 text-lg text-white">Upload an Image:</label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="mb-4 text-gray-500"
          />
          <input
            type="text"
            placeholder="Enter News Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-2 border rounded bg-gray-800 text-white"
          />
          <textarea
            placeholder="Enter News Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 mb-4 border rounded bg-gray-800 text-white"
            rows="3"
          />
        </div>

        {imageUrl && (
          <div className="relative mb-6">
            <img src={imageUrl} alt="Uploaded" className="w-full h-64 object-cover rounded-lg" />
            <div className="absolute top-0 left-0 p-4">
              <h2 className="text-2xl font-semibold text-white">{title || "News Title"}</h2>
              <p className="text-gray-300">{description || "News description goes here."}</p>
            </div>
          </div>
        )}

        <button
          onClick={handleDownload}
          className="mt-4 py-3 px-6 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200"
          disabled={!imageUrl}
        >
          Download Mockup
        </button>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Unsplash Images for Mockups */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://plus.unsplash.com/premium_photo-1691852518353-24256e1adb2c?w=500&auto=format&fit=crop&q=60"
              alt="News Mockup 1"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">Breaking News</h2>
              <p className="text-gray-400 mt-2">
                Stay updated with the latest headlines and trending news.
              </p>
              <button className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200">
                View More
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1727402881307-9b2d1cd53ca5?w=500&auto=format&fit=crop&q=60"
              alt="News Mockup 2"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">Tech Updates</h2>
              <p className="text-gray-400 mt-2">
                Explore the latest advancements in technology and innovation.
              </p>
              <button className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200">
                View More
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60"
              alt="News Mockup 3"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">Health News</h2>
              <p className="text-gray-400 mt-2">
                Discover important updates and insights on health and wellness.
              </p>
              <button className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreItem7;
