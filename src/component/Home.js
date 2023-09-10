import React from "react";
import Dashboard from "./Dashboard";
import Body from "./Body";
// import Velvet from "./Velvet";

function Home( props ) {
  return (
    <>
        <div className="body">
          <Dashboard />
          <Body />
        </div>
      
    </>
  );
}

export default Home;
