import React, { useState } from 'react';
import Breadcrumb from "../Breadcrumb";

const ExploreItem1 = () => {
  const [inputText, setInputText] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const dummyImages = [
    'https://source.unsplash.com/random/300x200',
    'https://source.unsplash.com/random/301x200',
    'https://source.unsplash.com/random/302x200',
    'https://source.unsplash.com/random/303x200',
    'https://source.unsplash.com/random/304x200',
    'https://source.unsplash.com/random/305x200',
    'https://source.unsplash.com/random/306x200',
    'https://source.unsplash.com/random/307x200',
    'https://source.unsplash.com/random/308x200',
    'https://source.unsplash.com/random/309x200'
  ]; // Dummy image URLs

  const handleGenerateImage = async () => {
    // Simulating image generation with a static URL for demonstration
    setGeneratedImage('https://hyperhuman-file.deemos.com/9e5902b7-8b8f-4338-b5ae-5a7c1ee2112e/preview/render_basic.jpg');
  };

  return (
    <div className="min-h-screen">
      <Breadcrumb />
      <div className="max-w-4xl mx-auto py-10 px-5">
        <h1 className="text-5xl font-bold mb-6 text-center text-white">AI Image Generation</h1>
        <p className="mb-10 text-lg text-center text-white ">
          Generate stunning images by inputting descriptive text.
        </p>

        <div className="mb-6">
  <div className="flex flex-col md:flex-row items-center mb-4">
    <input
      type="text"
      className="flex-grow h-12 p-4 rounded-lg outline-none shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 mb-2 md:mb-0 md:mr-2"
      placeholder="Describe the image you want to generate..."
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
    />
    <button
      onClick={handleGenerateImage}
      className="w-full md:w-auto py-4 px-6 text-base font-medium text-center text-white rounded-lg bg-pink-600 hover:bg-pink-700 transition duration-300 ease-in-out shadow-lg"
    >
      Generate Image
    </button>
  </div>
</div>

        {generatedImage && (
          <div className="mt-10 text-center">
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">Generated Image</h2>
            {/* <img src={generatedImage} alt="Generated" className="mx-auto rounded-lg shadow-lg max-w-full h-auto" /> */}
          </div>
        )}

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(20).fill().map((_, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img src={generatedImage || dummyImages[index]} alt={`Generated or Dummy ${index + 1}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreItem1;
