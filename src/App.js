import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dummy from "./component/Dummy";
import Home from "./component/Home";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(24 24 32)";

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar className=" fixed" mode={mode} toggleMode={toggleMode} />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dummy" element={<Dummy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
