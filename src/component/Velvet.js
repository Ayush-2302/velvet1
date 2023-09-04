import React, { useState } from "react";

function Velvet() {

  const[show, setShow]=useState("showing");
  const click=(event)=>{
    
  }

  







  return (
    <>
      <div className="w-64 px-4">
        <div className="h-16 flex items-center">
          <div className="w-52 mx-auto bg-blue-500 hover:bg-blue-600 flex items-center justify-between text-gray-100 p-2 rounded space-x-2 transition duration-150">
            <span>Dashboard</span>


          <div className="icon  w-fit h-auto rounded-xl cursor-pointe bg-white ">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>









          </div>
        </div>
        <div className="px-2 pt-4 pb-8 border-r border-gray-300">
          <ul className="space-y-2">
            <li>
              <div className="bg-gray-500 bg-opacity-30 text-blue-600 flex items-center justify-between py-1.5 px-4 rounded cursor-pointer">
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
    </>
  );
}

export default Velvet;
