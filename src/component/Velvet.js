import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "boxicons";
import { val } from "./ValNav";
import { BoxIconElement } from "boxicons";

function Velvet() {
  const toggle = useContext(val);

  const [dashboard, setDashboard] = useState(false);
  const [ui, setUI] = useState(false);
  const [page, setPage] = useState(false);

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
     
    

      <div
        className={`velvet  h-[100vh] sticky top-0 text-gray-400    ${toggle.show ? "w-72" : ""}  ${
          toggle.mode === "light" ? " bg-gray-900" : "bg-[#313645]"
        }`}
      >




      <div
          onClick={() => {
            toggle.widthInc();
          }}
          className=" hover:cursor-pointer   w-full h-[67px] text-3xl items-center flex justify-around m-auto border-b-2 border-y-gray-500 "
        >
          <i className="bi bi-browser-chrome  "></i>
          <p className={`${toggle.show ? "" : "hidden"}`}>Velvet</p>
        </div>




        <div className="velvet_body  grid h-[90vh] pb-6 overflow-y-scroll customize_overflow  text-sm ] ">

          <ul className="space-y-2 mt-4  ">
            <p className=" text-gray-500 ml-7 text-xs font-bold mb-4 ">{`${
              toggle.show ? "MAIN" : "°"
            }`}</p>
            <li>
              <div className="cursor-pointer flex space-x-4 items-center ">
                <i className="bi bi-pc-display-horizontal ml-5 "></i>
                <div
                  onClick={() => {
                    handledash();
                  }}
                  className=" hover:rounded-2xl items-center w-2/3 pt-1.5 pl-4 hover:text-white justify-between  flex  "
                >
                  <p className={`${toggle.show ? " " : " hidden"}`}>
                    Dashboard
                  </p>
                  <p className={`${toggle.show ? "" : "hidden"}`}>
                    {dashboard ? "‹" : "»"}
                  </p>
                </div>
              </div>
              <ul
                className={`dropDash ${
                  dashboard
                    ? "display opacity-100 scale-y-100  "
                    : "h-[0px] opacity-0 scale-y-0"
                } ml-10 mt-3  transform origin-top space-y-3 transition-opacity duration-300 ${
                  toggle.show ? "" : "hidden"
                }`}
              >
                <li className=" text-green-600">
                  <Link to="/"> - Sale</Link>
                </li>
                <li className="hover:text-white ">
                  <Link to="#"> - Crypto</Link>
                </li>
                <li className="hover:text-white ">
                  <Link to="#"> - Jobs</Link>
                </li>
                <li className="hover:text-white ">
                  <Link to="#"> - CRM</Link>
                </li>
                <li className="hover:text-white ">
                  <Link to="#"> - Ecommerce</Link>
                </li>
              </ul>
            </li>
            <p className=" text-gray-500 text-xs font-bold ml-6 ">
              {" "}
              {`${toggle.show ? " GENERAL" : "°"}`}
            </p>

            <li>
              <div className="advanceuicursor-pointer flex space-x-4 pt-2 items-center  ">
                <i className="bi bi-box ml-5 "></i>

                <div
                  onClick={() => {
                    handleUi();
                  }}
                  className=" hover:rounded-2xl items-center w-2/3  pt-1.5 pl-4 hover:text-white justify-between  flex  "
                >
                  <p className={`${toggle.show ? "" : "hidden"}`}>
                    {" "}
                    Advance Ui
                  </p>
                  <div className={`${toggle.show ? "" : "hidden"}`}>
                    {" "}
                    {ui ? "‹" : "»"}
                  </div>
                </div>
              </div>

              <ul
                className={`dropDash ${
                  ui
                    ? "display opacity-100 scale-y-100  "
                    : "h-[0px] opacity-0 scale-y-0"
                } ml-10 mt-3 transform origin-top space-y-3 transition-opacity duration-300 ${
                  toggle.show ? "" : "hidden"
                }`}
              >
                <li className=" text-green-600 hover:text-white">
                  <Link to="accordian"> - Accordians & Collapse </Link>
                </li>
                <li className="hover:text-white ">
                  <Link to="/carousel"> - Carousel </Link>
                </li>
                <li className="hover:text-white ">
                  <Link to="#"> - Draggable Cards </Link>
                </li>
                <li className="hover:text-white ">
                  <Link to="modals"> - Modals & Closes</Link>
                </li>
                <li className="hover:text-white ">
                  <Link to="#"> - Navbar </Link>
                </li>
                <li className="hover:text-white ">
                  <Link to="#"> - Offcanvas</Link>
                </li>
                <li className="hover:text-white ">
                  <Link to="#"> - Placeholder </Link>
                </li>
              </ul>
            </li>
            <p className=" text-gray-500 text-xs font-bold ml-6 ">{`${
              toggle.show ? "PAGE" : "°"
            }`}</p>

            <li>
              <div className="advanceuicursor-pointer flex space-x-4 pt-3 items-center  ">
                <i className="bi bi-menu-up ml-5"></i>

                <div
                  onClick={() => {
                    handlepage();
                  }}
                  className=" hover:rounded-2xl items-center w-2/3   pt-1.5 pl-4 hover:text-white justify-between  flex  "
                >
                  <p className={`${toggle.show ? "" : "hidden"}`}>Page</p>
                  <div className={`${toggle.show ? "" : "hidden"}`}>
                    {page ? "‹" : "»"}
                  </div>
                </div>
              </div>

              <div className="pagDrop ml-10">
                <ul
                  className={`dropDash  ${
                    page
                      ? "display opacity-100 scale-y-100 "
                      : "h-[0px] opacity-0 scale-y-0"
                  } ml-2 mt-3  transform origin-top space-y-3 transition-opacity duration-300 ${
                    toggle.show ? "" : "hidden"
                  }`}
                >
                  <li className="hover:text-white ">
                    <Link to="#"> - Blog</Link>
                  </li>
                  <li className="hover:text-white ">
                    <Link to="#"> - Chat</Link>
                  </li>
                  <li className="hover:text-white ">
                    <Link to="#"> - Contacts</Link>
                  </li>
                  <li className="hover:text-white ">
                    <Link to="#"> - Ecommerce</Link>
                  </li>
                  <li className="hover:text-white ">
                    <Link to="#"> - Email</Link>
                  </li>
                  <li className="hover:text-white ">
                    <Link to="#"> - Empty</Link>
                  </li>
                  <li className="hover:text-white ">
                    <Link to="#"> - FAQ's</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="advanceuicursor-pointer flex space-x-4 items-center  mt-4 ">
                <i className="bi bi-magnet ml-5"></i>

                <div className=" hover:rounded-2xl items-center w-2/3   pt-1.5 pl-4 hover:text-white justify-between  flex  ">
                  <p className={`${toggle.show ? "" : "hidden"}`}> Utilities</p>
                  <div className={`${toggle.show ? "" : "hidden"}`}>
                    <p>»</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="advanceuicursor-pointer flex space-x-4 items-center mt-4 ">
                <i className="bi bi-hexagon ml-5"></i>

                <div className=" hover:rounded-2xl items-center w-2/3   pt-1.5 pl-4 hover:text-white justify-between  flex  ">
                  <p className={`${toggle.show ? "" : "hidden"}`}>
                    {" "}
                    Authentication
                  </p>
                  <div className={`${toggle.show ? "" : "hidden"}`}>
                    <p>»</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="advanceuicursor-pointer flex space-x-4 items-center mt-4 ">
                <i className="bi bi-grid ml-5 "></i>

                <div className=" hover:rounded-2xl items-center  w-2/3  pt-1.5 pl-4 hover:text-white justify-between  flex  ">
                  <p className={`${toggle.show ? "" : "hidden"}`}> Apps</p>
                  <div className={`${toggle.show ? "" : "hidden"}`}>
                    <p className="bg-red-300 text-gray-600 font-bold -mr-2 px-1  text-xs rounded-lg">
                      1
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="advanceuicursor-pointer flex  space-x-4 items-center mt-4 ">
                <i className="bi bi-emoji-smile  ml-5"></i>

                <div className=" hover:rounded-2xl items-center  w-2/3  pt-1.5 pl-4 hover:text-white justify-between  flex  ">
                  <p className={`${toggle.show ? "" : "hidden"}`}> Utilities</p>
                  <div className={`${toggle.show ? "" : "hidden"}`}>
                    <p>»</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="advanceuicursor-pointer flex space-x-4  items-center mt-4 ">
                <i className="bi bi-menu-button-wide ml-5 "></i>

                <div className=" hover:rounded-2xl items-center w-2/3   pt-1.5 pl-4 hover:text-white justify-between  flex  ">
                  <p className={`${toggle.show ? "" : "hidden"}`}>Widgets</p>
                  <div className={`${toggle.show ? "" : "hidden"}`}>
                    <p className="bg-red-300 text-gray-600 font-bold -mr-2 px-1  text-xs rounded-lg">
                      Hot
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Velvet;
