import React from "react";
import Dashboard from "./Dashboard";
import Body from "./Body";
// import Velvet from "./Velvet";

function Home( props ) {
  return (
    <>
        <div className=" m-auto bg-gray-200">
          <Dashboard />
          <Body />
        </div>
      
    </>
  );
}

export default Home;
