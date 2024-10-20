import { useRef } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dummy from "./component/Dummy";
import Home from "./component/Home";
import Accordian from "./component/Accordian";
import Profile from "./component/Profile";
import ValNav from "./context/ValNav";
import ImageSlider from "./component/ImageSlider";
import Modals from "./component/Modals";
import DraggableCard from "./component/DragableCard";
import Sidebar from "./component/Sidebar";
import MultipleNav from "./component/MultipleNav";
import OffCanvasNav from "./component/OffCanvasNav";
import Placeholder from "./component/Placeholder";
import BlogPage from "./pages/BlogPage";
import ChatPage from "./pages/ChatPage";
import ContactPage from "./pages/ContactPage";
import EcommercePage from "./pages/EcommercePage";
import EmailPage from "./pages/EmailPage";
import PageNotFound from "./pages/PageNotFound";
import FAQPage from "./pages/FAQPage";
import CryptoPage from "./pages/CryptoPage";
import JobDashboard from "./pages/Jobs";
import CRMDashboard from "./pages/CRMDashboard";

function App() {
  const fullScreenRef = useRef(null);

  const enterFullScreen = () => {
    const element = fullScreenRef.current;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  return (
    <div id="fullScreen" ref={fullScreenRef}>
      <ValNav>
        <Router>
          <div className="flex slide">
            <Sidebar />

            <div className="routs w-full">
              <Navbar value={enterFullScreen} />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/dummy" element={<Dummy />} />
                <Route exact path="/accordian" element={<Accordian />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/carousel" element={<ImageSlider />} />
                <Route exact path="/multiple-nav" element={<MultipleNav />} />
                <Route exact path="/offCanvasNav" element={<OffCanvasNav />} />
                <Route exact path="/placeholder" element={<Placeholder />} />
                <Route exact path="/blog-page" element={<BlogPage />} />
                <Route exact path="/chat-page" element={<ChatPage />} />
                <Route exact path="/contact-page" element={<ContactPage />} />
                <Route exact path="/ecommerce-page" element={<EcommercePage />} />
                <Route exact path="/page-not-found" element={<PageNotFound />} />
                <Route exact path="/faqs" element={<FAQPage />} />
                <Route exact path="/crypto-dashboard" element={<CryptoPage />} />
                <Route exact path="/Job-dashboard" element={<JobDashboard />} />
                <Route exact path="/crm-dashboard" element={<CRMDashboard />} />

                <Route
                  exact
                  path="/draggable-card"
                  element={<DraggableCard />}
                />
              </Routes>
              {/* <Footer  /> */}
            </div>
          </div>
        </Router>
      </ValNav>
    </div>
  );
}

export default App;
