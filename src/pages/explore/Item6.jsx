import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb";
import BeforeAfterSlider from "@johanaarstein/react-before-after-slider-component";

const ExploreItem6 = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [backgroundUrls] = useState([
    "https://plus.unsplash.com/premium_photo-1691852518353-24256e1adb2c?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1727684812941-0c8c1e4b3395?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1727402881307-9b2d1cd53ca5?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1725610588097-9ba8efa96b17?w=500&auto=format&fit=crop&q=60"
  ]);
  const [removedBackground, setRemovedBackground] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
        setRemovedBackground(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveBackground = () => {
    if (imageUrl) {
      // Simulate background removal
      setRemovedBackground(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Breadcrumb />
      <div className="max-w-5xl mx-auto py-10 px-5">
        <h1 className="text-5xl font-bold mb-6 text-center text-white">Background Removal Tool</h1>
        <p className="mb-10 text-lg text-center text-gray-300">
          Upload an image to see the background removal effect or choose from our beautiful backgrounds.
        </p>

        <div className="mb-6">
          <label className="block mb-4 text-lg text-white">Upload your image:</label>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-700 transition duration-200">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-sm text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleImageUpload} />
            </label>
          </div>
        </div>

        {imageUrl && (
          <div className="mt-10 text-center">
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">Image Comparison</h2>
            <div className="relative overflow-hidden rounded-lg shadow-lg mb-6">
              {imageUrl && (
                <BeforeAfterSlider
                  before={<img src={imageUrl} alt="Uploaded" className="w-full h-64 object-cover rounded-lg" />}
                  after={<img src={removedBackground ? backgroundUrls[0] : imageUrl} alt="After" className="w-full h-64 object-cover rounded-lg" />}
                  style={{ maxHeight: '400px', borderRadius: '10px' }}
                />
              )}
            </div>

            <button
              onClick={handleRemoveBackground}
              className="mt-4 py-3 px-6 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200 shadow-lg"
            >
              Remove Background
            </button>
          </div>
        )}

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {backgroundUrls.map((url, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg bg-gray-800">
              <img src={url} alt={`Background ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreItem6;
