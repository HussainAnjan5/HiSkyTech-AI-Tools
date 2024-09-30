import { Link } from "react-router-dom";
import { WavyBackground } from "../components/WavyBackground";
import { motion } from "framer-motion";
import Breadcrumb from "./Breadcrumb";

const exploreItems = [
  { name: "Image Generation", path: "/explore/image-generation", description: "Create stunning images with AI." },
  { name: "Icon Generation", path: "/explore/icon-generation", description: "Generate unique icons for your projects." },
  { name: "PDF Generation", path: "/explore/pdf-generation", description: "Turn your content into professional PDFs." },
  { name: "Video Generation", path: "/explore/video-generation", description: "Create videos using advanced AI tools." },
  { name: "Background Generation", path: "/explore/background-generation", description: "Generate beautiful backgrounds effortlessly." },
  { name: "Background Removal", path: "/explore/background-removal", description: "Easily remove backgrounds from images." },
  { name: "Mockup News", path: "/explore/mockup-news", description: "Stay updated with the latest mockup trends." },
];

const Explore = () => {
  return (
    <>
      <Breadcrumb />
      <div className="relative overflow-hidden bg-violet-500 min-h-screen flex items-center justify-center">
        {/* Wave Background */}
        <WavyBackground
          className="text-center py-12 lg:py-56"
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

          <div className="px-4 mx-auto max-w-screen-xl mt-10 text-center py-12 lg:py-56 relative z-10">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl pt-10">
              Explore Our Tools
            </h1>
            <p className="mb-8 text-base font-normal text-gray-300 lg:text-lg sm:px-10 lg:px-48">
              Discover innovative AI tools designed to enhance your creativity and productivity.
            </p>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 px-10 py-10">
              {exploreItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="block p-6 max-w-sm mx-auto bg-[#1f1f1f7f] rounded-lg border border-pink-500 shadow-lg transform transition-transform duration-300 hover:scale-105"
                  >
                    <h2 className="mb-2 text-xl font-bold text-white">{item.name}</h2>
                    <p className="text-gray-300">{item.description}</p>
                    <span className="mt-4 inline-block text-yellow-300 hover:text-yellow-400 font-medium">Explore</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </WavyBackground>
      </div>
    </>
  );
};

export default Explore;
