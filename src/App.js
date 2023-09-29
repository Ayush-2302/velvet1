import { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dummy from "./component/Dummy";
import Home from "./component/Home";
import Accordian from "./component/Accordian";
import Profile from "./component/Profile";
import Velvet from "./component/Velvet";
import ValNav from "./component/ValNav";

function App() {
 
// const[full, setFull]=useState(false)
// const nFull=()=>{
//   setFull(!full)
// }
// useEffect(() => {
//   console.log("fullScreen")
//   let e=document.getElementById("fullScreen");
// e?.requestFullscreen();
// }, [full])


// const fullScreenRef = useRef(null);

// const enterFullScreen = () => {
//   const element = fullScreenRef.current;

//   if (element.requestFullscreen) {
//     element.requestFullscreen();
//     console.log("im working");
//   } else if (element.mozRequestFullScreen) {
//     element.mozRequestFullScreen();
//     console.log("im working");

//   } else if (element.webkitRequestFullscreen) {
//     element.webkitRequestFullscreen();
//     console.log("im working");

//   } else if (element.msRequestFullscreen) {
//     element.msRequestFullscreen();
//     console.log("im working");

//   }
// };






  return (
    <div id="fullScreen" >
    <ValNav>
      <Router>
        <div className="flex slide">
          <Velvet />

          <div className="routs w-full">
            <Navbar  />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/dummy" element={<Dummy />} />
              <Route exact path="/accordian" element={<Accordian />} />
              <Route exact path="/profile" element={<Profile />} />
            </Routes>
            <Footer  />
          </div>
        </div>
      </Router>
      </ValNav>
    </div>
  );
}

export default App;
