import React, { useContext } from "react";
import Dashboard from "./Dashboard";
import Body from "./Body";
import { val } from "../context/ValNav";
import Footer from "./Footer";


function Home( props ) {
  const {mode}=useContext(val)
  return (
    <>
        <div className={mode==="light"?" m-auto": "m-auto"}>
          <Dashboard />
          <Body />
          <Footer/>
        </div>
      
    </>
  );
}

export default Home;
