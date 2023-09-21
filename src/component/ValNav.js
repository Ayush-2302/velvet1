import React, { createContext, useState } from "react";
const val = createContext();

function ValNav(props) {
  const [show, setShow] = useState(false);

  const widthInc=()=>{
    setShow(!show)
  }
  return (
    <>
      <val.Provider value={{show, widthInc}}   >
        {props.children}
        </val.Provider>
    </>
  );
}

export default ValNav;
export { val };
