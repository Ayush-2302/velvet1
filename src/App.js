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

function App() {
  // const [text, setText] = useState("black");
  // const change = () => {
  //   if (text === "black") {
  //     setText = "white";
  //   } else {
  //     setText("black");
  //   }
  // };

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "red";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "red";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Router>
        <div className="flex slide">
          <Velvet />

          <div className="routs m-auto w-[100%]">
            <Navbar mode={mode} toggleMode={toggleMode} />
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
    </>
  );
}

export default App;
