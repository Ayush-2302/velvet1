import React, { useState } from "react";
// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { sideContext } from "../Context/SideBarContext";
// import "../Style/Velvet.css"

function Velvet() {
  // const show = false
  const [show, setShow] = useState(true);
  const [dashboard, setDashboard] = useState(false);
  const [ui, setUI] = useState(false);
  const [page, setPage] = useState(false);

  // const { show, toggle } = useContext(sideContext);

  return (
    <>
      <div className={`${show ? " w-64" : " w-10"}`}>
        <div className={` ${show ? "" : "hidden"}`}>
          <div className="h-16 flex items-center">
            <div className="w-52 mx-auto bg-blue-500 hover:bg-blue-600 flex items-center justify-between text-gray-100 p-2 rounded space-x-2 transition duration-150">
              <span>Dashboard</span>
              <button>»</button>
            </div>
          </div>
          <div className="px-2 pt-4 pb-8 border-r border-gray-300">
            <ul className="space-y-2">
              <li className={`${dashboard ? "bg-gray-200" : ""}`}>
                <div className={`cursor-pointer `}>
                  <div onClick={() => setDashboard(!dashboard)} className="">
                    <div className="hover:bg-gray-200 flex justify-between hover:rounded-2xl  py-1.5 px-4 hover:text-blue-600">
                      Dashbord
                      <div className=" btn">»</div>
                    </div>
                  </div>
                </div>

                <ul
                  className={`dropDash ${
                    dashboard
                      ? "display opacity-100 scale-y-100 bg-gray-200 "
                      : "h-[0px] opacity-0 scale-y-0"
                  } ml-10  transform origin-top transition-opacity duration-300`}
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

              <li className={`${ui ? "bg-gray-200" : ""}`}>
                <div className="advanceui cursor-pointer ">
                  <div onClick={() => setUI(!ui)}>
                    <div className="hover:bg-gray-200 flex justify-between hover:rounded-2xl  py-1.5 px-4 hover:text-blue-600">
                      Advance Ui
                      <div className=" btn">»</div>
                    </div>
                  </div>
                </div>
                <ul
                  className={`dropDash ${
                    ui
                      ? "display opacity-100 scale-y-100 bg-gray-2~00 "
                      : "h-[0px] opacity-0 scale-y-0"
                  } ml-10  transform origin-top transition-opacity duration-300`}
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
              <li className={`${page ? "bg-gray-200" : ""}`}>
                <div className="page cursor-pointer ">
                  <div onClick={() => setPage(!page)}>
                    <div className="hover:bg-gray-200 flex justify-between hover:rounded-2xl  py-1.5 px-4 hover:text-blue-600">
                      Page
                      <div className=" btn">»</div>
                    </div>
                  </div>

                  <div className="pagDrop ml-10">
                    <ul
                      className={`dropDash ${
                        page
                          ? "display opacity-100 scale-y-100 bg-gray-200 "
                          : "h-[0px] opacity-0 scale-y-0"
                      } ml-10  transform origin-top transition-opacity duration-300`}
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
                  <span>Utilities</span>
                  <span className="   text-red-500 font-bold px-2 py-0.5 text-xs rounded-lg">
                    »
                  </span>
                </div>
              </li>
              <li>
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex justify-between  items-center text-red-500 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <span>Error</span>
                  <span className="   text-red-500 font-bold px-2 py-0.5 text-xs rounded-lg">
                    »
                  </span>
                </div>
              </li>
              <li>
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center justify-between text-red-500 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <span className="flex items-center space-x-2">
                    <span>Apps</span>
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
                  <span>Icons</span>
                  <span className="   text-red-500 font-bold px-2 py-0.5 text-xs rounded-lg">
                    »
                  </span>
                </div>
              </li>
              <li>
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex justify-between  items-center text-red-500 py-1.5 px-4 rounded space-x-2 cursor-pointer">
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
