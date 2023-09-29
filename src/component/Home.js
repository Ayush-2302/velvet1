import React, { useContext } from "react";
import Dashboard from "./Dashboard";
import Body from "./Body";
import { val } from "./ValNav";

function Home( props ) {
  const hom=useContext(val)
  return (
    <>
        <div className=" m-auto ">
          <Dashboard />
          <Body />
        </div>
      
    </>
  );
}

export default Home;
