import React, { useContext } from "react";
import { val } from "./ValNav";


function Dashboard() {
 const das= useContext(val)
 const mode_change={
  backgroundColor:das.mode==="light"?"white":"#262C3C",
  color:das.mode==="dark"?"white":"black",
  boxShadow:das.mode==="light"?"":" 0px 3px 4px 0px #373C4A"
 }

  return (
    <>
      <div className="dashboardcont  pt-5 text-white text-3xl pl-10 pr-4 flex  h-32 justify-between">
        Dashboard <p className=" text-sm m-3  flex space-x-5"><p>Dashbord </p> <p>»</p> <p className=" font-bold"> Sales</p></p>
      </div>
      <div className=" boxes  relative z-10 -mt-20 m-auto  mr-6 ml-2  ">
        <div className="box box1" style={mode_change}>
          <div className=" flex justify-between leading-9">
            <p>
              Total sale
              <h1 className=" text-3xl font-bold">$15526</h1>
            </p>

            <div className="w-9  h-9 flex items-center justify-center rounded-md bg-purple-300">
              <i class="bi bi-cart-check   text-purple-900 "></i>
            </div>
          </div>
          <p className=" flex justify-between text-xs h-5 mt-2 ">
            <p className=" rounded-2xl flex   ml-1 items-center p-1 bg-purple-100 text-purple-900  ">
              +52% <p className=" ml-1 rotate-90">→</p>{" "}
            </p>
            <p className=" underline ">view more</p>
          </p>
        </div>
        <div className="box box2" style={mode_change}>
          <div className=" flex justify-between leading-9">
            <p>
              {" "}
              Total sale <h1 className=" text-3xl font-bold">$15526</h1>
            </p>

            <div className=" w-9 h-9 flex items-center justify-center rounded-md bg-red-300">
              {" "}
              <i class="bi bi-archive   text-red-800 "></i>
            </div>
          </div>
          <p className=" flex justify-between text-xs mt-2 ">
            <p className=" rounded-2xl flex ml-1  items-center p-1 bg-green-100 text-green-500 font-bold">
              +52% <p className=" ml-1 -rotate-90">→</p>{" "}
            </p>
            <p className=" underline">view more</p>
          </p>
        </div>
        <div className="box box3" style={mode_change}>
          <div className=" flex justify-between leading-9">
            <p>
              Total sale
              <h1 className="text-3xl font-bold">$15526</h1>
            </p>

            <div className=" w-9 h-9 flex items-center justify-center rounded-md bg-blue-300">
              {" "}
              <i class="bi bi-handbag   text-blue-900 "></i>
            </div>
          </div>
          <p className=" flex justify-between text-xs  mt-2 ">
            <p className=" rounded-2xl flex ml-1  items-center p-1 bg-red-100 text-red-400 font-bold">
              +52% <p className=" ml-1 rotate-90">→</p>{" "}
            </p>
            <p className=" underline ">view more</p>
          </p>
        </div>
        <div className="box  box4" style={mode_change}>
          <div className=" flex justify-between leading-9">
            <p>
              {" "}
              Total sale <h1 className=" text-3xl font-bold">$15526</h1>
            </p>

            <div className=" w-9 h-9 flex items-center justify-center rounded-md bg-orange-300">
              {" "}
              <i class="bi bi-currency-dollar   text-orange-900 "></i>
            </div>
          </div>
          <p className=" flex justify-between text-xs  mt-2 ">
            <p className=" rounded-2xl flex ml-1  items-center p-1 bg-green-100 text-green-500 font-bold">
              +52% <p className=" ml-1 -rotate-90">→</p>{" "}
            </p>
            <p className=" underline">view more</p>
          </p>
        </div>
        <div className="box  box5" style={mode_change}>
          <div className=" flex  justify-between leading-9">
            <p>
              {" "}
              Total sale
              <h1 className=" text-3xl font-bold">$15526</h1>
            </p>

            <div className=" w-9 h-9 flex items-center justify-center rounded-md bg-red-300">
              {" "}
              <i class="bi bi-bell  text-red-900 "></i>
            </div>
          </div>
          <p className=" flex justify-between text-xs mt-2 ">
            <p className=" rounded-2xl flex  ml-1  items-center p-1 bg-red-100 font-bold text-red-400">
              +52% <p className=" ml-1 rotate-90">→</p>{" "}
            </p>
            <p className=" underline ">view more</p>
          </p>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
