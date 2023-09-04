import React from "react";
import Dashboard from "./Dashboard";
import Body from "./Body";
import Velvet from "./Velvet";

function Home() {
  return (
    <>
      <div className="flex">
        <Velvet/>
        <div className="body">
          <Dashboard />
          <Body />
        </div>
      </div>
    </>
  );
}

export default Home;
