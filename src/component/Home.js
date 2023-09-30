import React, { useContext } from "react";
import Dashboard from "./Dashboard";
import Body from "./Body";
import { val } from "./ValNav";
import Footer from "./Footer";


function Home( props ) {
  const {mode}=useContext(val)
  return (
    <>
        <div className={mode==="light"?" m-auto": "m-auto bg-[#313645]"}>
          <Dashboard />
          <Body />
          <Footer/>
        </div>
      
    </>
  );
}

export default Home;
