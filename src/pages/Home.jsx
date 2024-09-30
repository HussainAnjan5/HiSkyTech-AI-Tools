import { Link } from "react-router-dom";
import { WavyBackground } from "../components/WavyBackground";
import Breadcrumb from "./Breadcrumb";

const Home = () => {
  return (
    <>
      <Breadcrumb />
      <div className="relative overflow-hidden bg-violet-500 min-h-screen flex items-center justify-center">
        {/* Wave Background */}
        <WavyBackground
          className="text-center py-24 lg:py-56"
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

          <div className="px-4 mx-auto max-w-screen-xl  text-center py-24 lg:py-56 relative z-10">
            <h1 className="mb-4 text-4xl font-extrabold  tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              AI Tools Showcase
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              Welcome to HiSkyTech's Frontend Development Internship Program! Explore our innovative AI tools that empower creativity and productivity.
            </p>
            <div className="flex flex-col flex-wrap gap-5 mt-20 lg:mb-20 sm:flex-row sm:justify-center sm:gap-10">
              {["Image Generation", "Icon Generation", "PDF Generation", "Video Generation", "Background Generation", "Background Removal", "Mockup News"].map((text, index) => (
                <Link
                  key={index}
                  to={`/explore/${text.toLowerCase().replace(/ /g, '-')}`}
                  className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-white rounded-lg bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105"
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>
        </WavyBackground>
      </div>
    </>
  );
};

export default Home;
