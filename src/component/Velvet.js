import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "boxicons";
import { val } from "./ValNav";

function Velvet() {
  const toggle = useContext(val);

  const adjWidth = () => {
    toggle.widthInc();
  };

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

  return (
    <>
      <div className={`velvet ${toggle.show ? " w-16" : "w-72"}  text-white`}>
        <div
          onClick={() => {
            adjWidth();
          }}
          className=" hover:cursor-pointer h-[63px] text-3xl flex space-x-12  m-auto sticky items-center border-y-2 border-y-gray-500 "
        >
          <i class="bi bi-browser-chrome ml-3 "></i>
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
                    <div className="hover:bg-gray-200 hover:rounded-2xl items-center  pt-1.5 pl-4 hover:text-blue-600 flex  space-x-7">
                      <i class="bi bi-pc-display-horizontal "></i>
                      <div
                        className={` ${
                          "w-72" ? "" : ""
                        }flex justify-between w-2/3`}
                      >
                        <p>Dashboard</p>
                        <p>{dashboard ? "‹" : "»"}</p>
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
                    <div className="hover:bg-gray-200  hover:rounded-2xl items-center pl-4 pt-4 hover:text-blue-600 flex  space-x-8">
                      <i class="bi bi-box "></i>
                      <div className="flex w-2/3 justify-between">
                      Advance Ui
                      <div className=" btn"> {ui ? "‹" : "»"}</div>
                      </div>
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
                        <i class="bi bi-file-earmark-break  mr-9"></i>
                        Page
                      </p>
                      <div className=" btn mr-2"> {page ? "‹" : "»"}</div>
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
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex space-x-9  items-center text-red-500 py-1.5 px-4 rounded  cursor-pointer">
                    <i class="bi bi-magnet"></i>
                    <div className="flex w-4/6 justify-between" >
                    Utilities
                  <p className="   text-red-500 font-bold  text-xs rounded-lg">
                    »
                  </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex space-x-9  items-center text-red-500 py-1.5 px-4 rounded  cursor-pointer">
                    <i class="bi bi-hexagon "></i>
                  <div className="flex w-4/6 justify-between">
                    Error
                  <p className=" font-bold  text-xs rounded-lg">
                    »
                  </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-red-500 py-1.5 px-4 rounded space-x-9 cursor-pointer">
                      <i class="bi bi-grid "></i>
                  <div className="flex items-center justify-between w-5/6 ">
                      Apps
                  <span className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                    1
                  </span>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex  items-center text-red-500
                 py-1.5 px-4 rounded space-x-9 cursor-pointer"
                >
                    <i class="bi bi-emoji-smile "></i>
                  <div className="flex w-4/6 justify-between">
                    Icons
                  </div>
                  <span className="  pr-3  text-red-500 font-bold text-xs rounded-lg">
                    »
                  </span>
                </div>
              </li>
              <li>
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-red-500 py-1.5 px-4 rounded space-x-9 cursor-pointer">
                    <i class="bi bi-menu-button-wide "></i>
                  <div className="flex w-5/6 justify-between">
                    Widgets
                  <p className="bg-red-400 text-gray-100 font-bold -mr-2 px-2 py-1 text-xs rounded-lg">
                    Hot
                  </p>
                  </div>
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
