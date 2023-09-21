import { useState } from "react";
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
  // const [text, setText] = useState("black");
  // const change = () => {
  //   if (text === "black") {
  //     setText = "white";
  //   } else {
  //     setText("black");
  //   }
  // };




  return (
    <>
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
    </>
  );
}

export default App;
