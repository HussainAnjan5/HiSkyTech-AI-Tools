import { useState } from "react";
import Breadcrumb from "../Breadcrumb";

const ExploreItem4 = () => {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [videoUrls, setVideoUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateVideos = () => {
    setLoading(true);
    // Simulate video generation; replace with actual video generation logic/API call
    setTimeout(() => {
      const newVideoUrls = [
        `https://www.w3schools.com/html/mov_bbb.mp4`,
        `https://www.w3schools.com/html/mov_bbb.mp4`,
        `https://www.w3schools.com/html/mov_bbb.mp4`,
        `https://www.w3schools.com/html/mov_bbb.mp4`,
      ];
      setVideoUrls(newVideoUrls);
      setLoading(false);
    }, 2000); // Simulate network delay
  };

  return (
    <div className="min-h-screen ">
      <Breadcrumb />
      <div className="max-w-4xl mx-auto py-10 px-5">
        <h1 className="text-5xl font-bold mb-6 text-center text-white">Video Generation</h1>
        <p className="mb-10 text-lg text-center text-white">
          Create captivating videos by providing a title and description.
        </p>

        <div className="mb-6">
          <div className="flex flex-col md:flex-row items-center mb-4">
            <input
              type="text"
              className="flex-grow h-12 p-4 rounded-lg outline-none shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 md:mb-0 md:mr-2"
              placeholder="Enter video title..."
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
            />
          </div>

          <textarea
            className="w-full h-24 p-4 mb-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter video description..."
            value={videoDescription}
            onChange={(e) => setVideoDescription(e.target.value)}
          />

          <button
            onClick={handleGenerateVideos}
            className={`w-full py-4 px-6 text-base font-medium text-center text-white rounded-lg ${loading ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"} transition duration-300 ease-in-out shadow-lg`}
            disabled={loading}
          >
            {loading ? "Generating Videos..." : "Generate Videos"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {videoUrls.map((url, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg bg-gray-800">
              <video
                controls
                className="w-full h-auto rounded-lg"
                src={url}
              >
                Your browser does not support the video tag.
              </video>
              <div className="p-4 text-center text-white">
                <h3 className="font-bold">{videoTitle || `Video ${index + 1}`}</h3>
                <p className="text-gray-400">{videoDescription || `Description for Video ${index + 1}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreItem4;
