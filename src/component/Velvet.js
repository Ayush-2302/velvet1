import React, { useState } from "react";
import { Link } from "react-router-dom";

function Velvet() {

  const[show, setShow]=useState(false);
 
  const toggle=()=> setShow(!show)

  return (
    <>
      <div className={` ${show? " w-64" :" w-10"}  `}>
        <div className={` ${show? " w-60" :" w-10"}  click icon mt-20 m-3 w-10 grid bg-blue-400  h-10 rounded cursor-pointe`} onClick={toggle}>
        <div className="line1  w-8 h-1  m-1 translate-y-4 rotate-45   bg-black rounded-3xl"></div>
        <div className="line2  w-8 h-1 m-1 opacity-0  bg-black rounded-3xl"></div>
        <div className="line3  w-8 h-1 m-1 -translate-y-4 -rotate-45   bg-black rounded-3xl"></div>
        </div>

    
    <div className={` ${show? "" : "hidden"}    `} >
        <div className="h-16 flex items-center" >
          <div className="w-52 mx-auto bg-blue-500 hover:bg-blue-600 flex items-center justify-between text-gray-100 p-2 rounded space-x-2 transition duration-150">
            <span>Dashboard</span>
            <button>»</button>
          </div>
        </div>
        <div className="px-2 pt-4 pb-8 border-r border-gray-300">
          <ul className="space-y-2">


            <li onClick={toggle}>
              <div className={`cursor-pointer `} >
                
                  <div className="hover:bg-gray-200 flex justify-between hover:rounded-2xl  py-1.5 px-4 hover:text-blue-600" >Dashbord
                  <div className=" btn">»</div></div>
                </div>
                
                <ul className= {`dropDash ${show?"":"hidden"} ml-10 hover:contents`} >
                  <li>
                    <Link to="#"> - Scale</Link>
                  </li>
                  <li>
                    <Link to="#"> - Crypto</Link>
                  </li>
                  <li>
                    <Link to="#"> - Jobs</Link>
                  </li>
                  <li>
                    <Link to="#"> - CRM</Link>
                  </li>
                  <li>
                    <Link to="#"> - Ecommerce</Link>
                  </li>
                </ul>
            </li>


            <li>
              <div className="advanceui cursor-pointer ">
              <div className="hover:bg-gray-200 flex justify-between hover:rounded-2xl  py-1.5 px-4 hover:text-blue-600" >Advance Ui
                  <div className=" btn">»</div></div>
              </div>
              <ul className="ml-10">
                <li>
                  <Link to="#"> -  Accordians & Collapse </Link>
                </li>
                <li>
                  <Link to="#"> -  Carousel </Link>
                </li>
                <li>
                  <Link to="#"> -  Draggable Cards </Link>
                </li>
                <li>
                  <Link to="#"> -  Modals & Closes</Link>
                </li>
                <li>
                  <Link to="#"> -  Navbar </Link>
                </li>
                <li>
                  <Link to="#"> - Offcanvas</Link>
                </li>
                <li>
                  <Link to="#"> -  Placeholder </Link>
                </li>
              </ul>

            </li>
            <li>
              <div className="page cursor-pointer " >
              <div className="hover:bg-gray-200 flex justify-between hover:rounded-2xl  py-1.5 px-4 hover:text-blue-600" >Page
                  <div className=" btn">»</div></div>

                <div className="pagDrop ml-10">
                  <ul>
                    <li>
                      <Link to="#"> - Blog</Link>
                    </li>
                    <li>
                      <Link to="#"> - Chat</Link>
                    </li>
                    <li>
                      <Link to="#"> - Contacts</Link>
                    </li>
                    <li>
                      <Link to="#"> - Ecommerce</Link>
                    </li>
                    <li>
                      <Link to="#"> - Email</Link>
                    </li>
                    <li>
                      <Link to="#"> - Empty</Link>
                    </li>
                    <li>
                      <Link to="#"> - FAQ's</Link>
                    </li>
                  </ul>
                </div>
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
