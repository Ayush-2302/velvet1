import { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dummy from "./component/Dummy";
import Home from "./component/Home";
import Accordian from "./component/Accordian";
import Profile from "./component/Profile";
import Velvet from "./component/Velvet";
import ValNav from "./component/ValNav";

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
    <div id="fullScreen" ref={fullScreenRef} >
    <ValNav>
      <Router>
        <div className="flex slide">
          <Velvet />

          <div className="routs w-full">
            <Navbar value={enterFullScreen}  />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/dummy" element={<Dummy />} />
              <Route exact path="/accordian" element={<Accordian />} />
              <Route exact path="/profile" element={<Profile />} />
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
