import React, { createContext, useState } from "react";
const val = createContext();

function ValNav(props) {
  const [show, setShow] = useState(false);

  const widthInc = () => {
    setShow(!show);
  };
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#313645";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "whitesmoke";
    }
  };

  const lightMode = () => {
    if (mode !== "light") {
      setMode("dark")
      document.body.style.backgroundColor = "whitesmoke";
    }
  };

  return (
    <>
      <val.Provider value={{ show, widthInc, mode, toggleMode,lightMode }}>
        {props.children}
      </val.Provider>
    </>
  );
}

export default ValNav;
export { val };
