import React from 'react';
import { Link } from 'react-router-dom';
import { WavyBackground } from "../components/WavyBackground";
import Breadcrumb from "./Breadcrumb";

const favouritesList = [
  { name: "Image Generation", path: "/explore/image-generation" },
  { name: "Icon Generation", path: "/explore/icon-generation" },
  { name: "PDF Generation", path: "/explore/pdf-generation" },
  { name: "Video Generation", path: "/explore/video-generation" },
  { name: "Background Generation", path: "/explore/background-generation" },
  { name: "Background Removal", path: "/explore/background-removal" },
  { name: "Mockup News", path: "/explore/mockup-news" },
];

const Favourites = () => {
  return (
    <>
      <Breadcrumb />
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-500 min-h-screen flex items-center justify-center">
        <WavyBackground
          className="text-center py-10 lg:py-24"
          colors={["#ff007f", "#007fff"]}
          waveWidth={50}
          backgroundFill="#192130"
          blur={10}
          speed="fast"
          waveOpacity={0.5}
        >
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="url(#gradient)"
                d="M0,128L30,154.7C60,181,120,235,180,245.3C240,256,300,224,360,197.3C420,171,480,149,540,128C600,107,660,85,720,80C780,75,840,85,900,106.7C960,128,1020,160,1080,181.3C1140,203,1200,213,1260,202.7C1320,192,1380,160,1410,144L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
              />
            </svg>
          </div>

          <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-20 relative z-10">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">
              Your Favourites
            </h1>
            <p className="mb-8 text-base font-normal text-gray-300 lg:text-lg sm:px-10 lg:px-48">
              Here are your favorite tools! Click on any item to explore further.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10">
              {favouritesList.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="flex flex-col items-center justify-center p-6 text-white rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
                >
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-200 mt-2">Explore this tool</p>
                </Link>
              ))}
            </div>
          </div>
        </WavyBackground>
      </div>
    </>
  );
};

export default Favourites;
