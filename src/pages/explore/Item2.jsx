import React, { useState } from 'react';
import Breadcrumb from "../Breadcrumb";

const ExploreIconGeneration = () => {
  const [inputText, setInputText] = useState('');
  const [generatedIcon, setGeneratedIcon] = useState('');
  const dummyIcons = [
    'https://source.unsplash.com/random/300x300',
    'https://source.unsplash.com/random/301x300',
    'https://source.unsplash.com/random/302x300',
    'https://source.unsplash.com/random/303x300',
    'https://source.unsplash.com/random/304x300',
    'https://source.unsplash.com/random/305x300',
    'https://source.unsplash.com/random/306x300',
    'https://source.unsplash.com/random/307x300',
    'https://source.unsplash.com/random/308x300',
    'https://source.unsplash.com/random/309x300'
  ]; // Dummy icon URLs

  const handleGenerateIcon = async () => {
    // Simulating icon generation with a static URL for demonstration
    setGeneratedIcon('https://via.placeholder.com/300/6c63ff/ffffff?text=Icon');
  };

  return (
    <div className="min-h-screen ">
      <Breadcrumb />
      <div className="max-w-4xl mx-auto py-10 px-5">
        <h1 className="text-5xl font-bold mb-6 text-center text-white">AI Icon Generation</h1>
        <p className="mb-10 text-lg text-center text-white">
          Generate unique icons by inputting descriptive text.
        </p>

        <div className="mb-6">
          <div className="flex flex-col md:flex-row items-center mb-4">
            <input
              type="text"
              className="flex-grow h-12 p-4 rounded-lg outline-none shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2 md:mb-0 md:mr-2"
              placeholder="Describe the icon you want to generate..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              onClick={handleGenerateIcon}
              className="w-full md:w-auto py-4 px-6 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out shadow-lg"
            >
              Generate Icon
            </button>
          </div>
        </div>

        {generatedIcon && (
          <div className="mt-10 text-center">
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">Generated Icon</h2>
          </div>
        )}

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(20).fill().map((_, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img src={generatedIcon || dummyIcons[index]} alt={`Generated or Dummy Icon ${index + 1}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreIconGeneration;
