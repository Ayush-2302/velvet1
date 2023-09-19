import React, { useState } from "react";
// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { sideContext } from "../Context/SideBarContext";
// import "../Style/Velvet.css"
import "boxicons";

function Velvet() {
  // const show = false
  const [show, setShow] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [ui, setUI] = useState(false);
  const [page, setPage] = useState(false);
  const [dash, setDash] = useState(false);
  const seedash = () => {
    setDash(!dash);
  };

  const handledash = () => {
    setDashboard(!dashboard);
    setUI(false);
    setPage(false);
  };
  const handleUi = () => {
    setDashboard(false);
    setUI(!ui);
    setPage(false);
  };
  const handlepage = () => {
    setDashboard(false);
    setUI(false);
    setPage(!page);
  };

  // const { show, toggle } = useContext(sideContext);

  return (
    <>
      <div className={`velvet ${show ? " " : ""} sticky w-64 text-white`}>
        <div className=" h-[63px] text-3xl flex justify-center m-auto sticky items-center border-y-2 border-y-gray-500 ">
          <i class="bi bi-browser-chrome mr-4"></i>
          <p>Velvet</p>
        </div>
        <div className="velvet_body grid ">
          <p className=" text-gray-500 ml-5 mt-2 ">Main</p>
          <div className="px-2 pt-4 pb-8 border-r border-gray-300">
            <ul className="space-y-2">
              <li>
                <div className={`cursor-pointer `}>
                  <div
                    onClick={() => {
                      handledash();
                    }}
                    className=" "
                  >
                    <div className="hover:bg-gray-200 hover:rounded-2xl  py-1.5 px-4 hover:text-blue-600 flex justify-around">
                      <i class="bi bi-pc-display-horizontal -ml-4"></i>
                      <p>Dashboard</p>
                      <div className={` btn ml-2`}>
                        {" "}
                        {dashboard ? "‹" : "»"}
                      </div>
                    </div>
                  </div>
                </div>

                <ul
                  className={`dropDash ${
                    dashboard
                      ? "display opacity-100 scale-y-100  "
                      : "h-[0px] opacity-0 scale-y-0"
                  } ml-6  transform origin-top transition-opacity duration-300`}
                >
                  <li className=" text-green-600">
                    <Link to="/"> - Scale</Link>
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
              <p className=" text-gray-500 ml-3">General</p>

              <li className={`${ui ? "" : ""}`}>
                <div className="advanceui cursor-pointer ">
                  <div
                    onClick={() => {
                      handleUi();
                    }}
                    className=""
                  >
                    <div className="hover:bg-gray-200  hover:rounded-2xl  py-1.5 px-4 hover:text-blue-600 flex justify-around">
                      <i class="bi bi-box -ml-4"></i>
                      Advance Ui
                      <div className=" btn"> {ui ? "‹" : "»"}</div>
                    </div>
                  </div>
                </div>
                <ul
                  className={`dropDash ${
                    ui
                      ? "display opacity-100 scale-y-100  "
                      : "h-[0px] opacity-0 scale-y-0"
                  } ml-6 transform origin-top transition-opacity duration-300`}
                >
                  <li className=" text-green-600">
                    <Link to="accordian"> - Accordians & Collapse </Link>
                  </li>
                  <li>
                    <Link to="#"> - Carousel </Link>
                  </li>
                  <li>
                    <Link to="#"> - Draggable Cards </Link>
                  </li>
                  <li>
                    <Link to="#"> - Modals & Closes</Link>
                  </li>
                  <li>
                    <Link to="#"> - Navbar </Link>
                  </li>
                  <li>
                    <Link to="#"> - Offcanvas</Link>
                  </li>
                  <li>
                    <Link to="#"> - Placeholder </Link>
                  </li>
                </ul>
              </li>
              <p className=" text-gray-500 ml-3 ">Page</p>

              <li className={`${page ? "" : ""}`}>
                <div
                  onClick={() => {
                    handlepage();
                  }}
                >
                  <div className="page cursor-pointer   ">
                    <div className="hover:bg-gray-200 flex justify-between hover:rounded-2xl  py-1.5 px-4 hover:text-blue-600">
                      <p>
                        <i class="bi bi-file-earmark-break  mr-5"></i>
                        Page
                      </p>
                      <div className=" btn mr-1"> {page ? "‹" : "»"}</div>
                    </div>
                  </div>

                  <div className="pagDrop ml-10">
                    <ul
                      className={`dropDash  ${
                        page
                          ? "display opacity-100 scale-y-100 "
                          : "h-[0px] opacity-0 scale-y-0"
                      }   transform origin-top transition-opacity duration-300`}
                    >
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
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex justify-between items-center text-red-500 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <span>
                    <i class="bi bi-magnet mr-4"></i>
                    Utilities
                  </span>
                  <span className="   text-red-500 font-bold px-2 py-0.5 text-xs rounded-lg">
                    »
                  </span>
                </div>
              </li>
              <li>
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex justify-between  items-center text-red-500 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <span>
                    <i class="bi bi-hexagon mr-4"></i>
                    Error
                  </span>
                  <span className=" font-bold  px-2 py-0.5 text-xs rounded-lg">
                    »
                  </span>
                </div>
              </li>
              <li>
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center justify-between text-red-500 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <span className="flex items-center space-x-2">
                    <span>
                      {" "}
                      <i class="bi bi-grid mr-4"></i>
                      Apps
                    </span>
                  </span>
                  <span className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                    1
                  </span>
                </div>
              </li>
              <li>
                <div
                  className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex  justify-between items-center text-red-500
                 py-1.5 px-4 rounded space-x-2 cursor-pointer"
                >
                  <span>
                    <i class="bi bi-emoji-smile mr-4"></i>
                    Icons
                  </span>
                  <span className="   text-red-500 font-bold px-2 py-0.5 text-xs rounded-lg">
                    »
                  </span>
                </div>
              </li>
              <li>
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex justify-between  items-center text-red-500 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <span>
                    <i class="bi bi-menu-button-wide mr-2"></i>
                    Widgets
                  </span>
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
