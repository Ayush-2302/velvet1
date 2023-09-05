import React, { useState } from "react";

function Velvet() {

  const[show, setShow]=useState(false);
 
  const toggle=()=> setShow(!show)

  return (
    <>
      <div className={` ${show? " w-64" :" w-10"}  icon  m-3 w-10 grid bg-blue-400  h-10 rounded cursor-pointe`} onClick={toggle}>
        <div className="line1  w-8 h-1  m-1 translate-y-4 rotate-45   bg-black rounded-3xl"></div>
        <div className="line2  w-8 h-1 m-1 opacity-0  bg-black rounded-3xl"></div>
        <div className="line3  w-8 h-1 m-1 -translate-y-4 -rotate-45   bg-black rounded-3xl"></div>
     
    <div className={` ${show? "opacity-100" : " opacity-0"}   `} onClick={toggle}>

      
        <div className="h-16 flex items-center" >
          <div className="w-52 mx-auto bg-blue-500 hover:bg-blue-600 flex items-center justify-between text-gray-100 p-2 rounded space-x-2 transition duration-150">
            <span>Dashboard</span>
            <button>»</button>
          </div>
        </div>
        <div className="px-2 pt-4 pb-8 border-r border-gray-300">
          <ul className="space-y-2">
            <li>
              <div className=" hover:bg-gray-200 flex items-center hover:text-blue-600  justify-between py-1.5 px-4 rounded cursor-pointer">
                <span className="flex items-center space-x-2">
                  <span>Dashbord</span>
                </span>
                <span className=" text-black font-bold px-2 py-0.5 text-xs rounded-lg">
                  »
                </span>
              </div>
            </li>
            <li>
              <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex justify-between  items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                <span>Advance Ui</span>
                <span className="   text-black font-bold px-2 py-0.5 text-xs rounded-lg">
                  »
                </span>
              </div>
            </li>
            <li>
              <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex justify-between  items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                <span>Pages</span>
                <span className="   text-black font-bold px-2 py-0.5 text-xs rounded-lg">
                  »
                </span>
              </div>
            </li>
            <li>
              <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex justify-between items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                <span>Utilities</span>
                <span className="   text-black font-bold px-2 py-0.5 text-xs rounded-lg">
                  »
                </span>
              </div>
            </li>
            <li>
              <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex justify-between  items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                <span>Error</span>
                <span className="   text-black font-bold px-2 py-0.5 text-xs rounded-lg">
                  »
                </span>
              </div>
            </li>
            <li>
              <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center justify-between text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                <span className="flex items-center space-x-2">
                  <span>Apps</span>
                </span>
                <span className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                  1
                </span>
              </div>
            </li>
            <li>
              <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex  justify-between items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                <span>Icons</span>
                <span className="   text-black font-bold px-2 py-0.5 text-xs rounded-lg">
                  »
                </span>
              </div>
            </li>
            <li>
              <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex justify-between  items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                <span>Widgets</span>
                <span className="bg-red-400 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                  Hot
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}

export default Velvet;
