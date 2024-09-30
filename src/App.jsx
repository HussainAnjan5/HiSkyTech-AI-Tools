import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidebarWithHeader from "./components/Sidebar";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Explore from "./pages/Explore";
import ExploreItem1 from "./pages/explore/Item1";
import ExploreItem2 from "./pages/explore/Item2";
import ExploreItem3 from "./pages/explore/Item3";
import ExploreItem4 from "./pages/explore/Item4";
import ExploreItem5 from "./pages/explore/Item5";
import ExploreItem6 from "./pages/explore/Item6";
import ExploreItem7 from "./pages/explore/Item7";
import Favourites from "./pages/Favourites";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Router>
      <SidebarWithHeader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/image-generation" element={<ExploreItem1 />} />
          <Route path="/explore/icon-generation" element={<ExploreItem2 />} />
          <Route path="/explore/pdf-generation" element={<ExploreItem3 />} />
          <Route path="/explore/video-generation" element={<ExploreItem4 />} />
          <Route path="/explore/background-generation" element={<ExploreItem5 />} />
          <Route path="/explore/background-removal" element={<ExploreItem6 />} />
          <Route path="/explore/mockup-news" element={<ExploreItem7 />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </SidebarWithHeader>
    </Router>
  );
};

export default App;
