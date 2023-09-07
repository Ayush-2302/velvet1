import React, { useState } from "react";
import Search from "../asserts/images/search.png";
import profile from "../asserts/images/w7.png";
import cart from "../asserts/images/cart.png";
import images from "../asserts/images/images.png";
import language from "../asserts/images/lang.jpg";
import mode from "../asserts/images/mode.png";
import notification from "../asserts/images/notification.png";
import setting from "../asserts/images/sett.jpg";
import zoom from "../asserts/images/zoom.png";
import { Link } from "react-router-dom";
// import Velvet from "./Velvet";

function Navbar(props) {
  const darkMode = () => {
    props.toggleMode();
  };

  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  return (
    <>
      {/* <div className="velvet">
          <Velvet/>
        </div>
       */}

      <div className="navbar ">
        <nav
          className={` pl-3 pb-3 mt-5 static flex sm:shrink lg:justify-between md:justify-around sm:justify-evenly  pr-4 ${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <div className="search flex ">
            <div className="btn space-y-1 m-4">
              <div className="l1 w-8 h-1 bg-black"></div>
              <div className="l2 w-8 h-1 bg-black"></div>
              <div className="l3 w-8 h-1 bg-black"></div>
            </div>

            <label htmlFor="search"></label>
            <input
              type="search"
              id="search"
              placeholder="Search for result"
              className=" p-1 rounded-2xl w-fit border-2 pl-2"
            />
            <button className=" m-2 mt-4 bg-slate-100 hover:bg-blue-200 w-8 p-1 rounded-2xl">
              <img src={Search} alt="" className=" rounded-lg w-5" />
            </button>
          </div>
          <div className="icons mt-4 flex md:shrink sm:shrink  ">
            <ul className=" flex space-x-5 justify-center items-center m-auto text-lg pr-2">
              <li>
                <Link to="#">
                  <button onClick={toggle}
                    className={`  bg-slate-100  hover:bg-blue-300 w-8 p-1 rounded-2xl`}
                  >
                    <img src={language} alt="" className="rounded-lg w-5 " />
                  </button>
                  <div className={`langDropdown ${show? "" :"hidden"}`} >
                  <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    >
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          English
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          French
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          German
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Russian
                        </a>
                      </li>
                    </ul>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <button
                    className=" hover:bg-blue-200 w-8 p-1 rounded-2xl "
                    onClick={darkMode}
                  >
                    <img src={mode} alt="" className="rounded-lg w-5 " />
                  </button>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <button className="bg-slate-100 hover:bg-blue-200 w-8 p-1 rounded-2xl ">
                    <img src={cart} alt="" className="rounded-lg w-5" />
                  </button>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <button className="bg-slate-100 hover:bg-blue-200 w-8 p-1 rounded-2xl ">
                    <img
                      src={notification}
                      alt=""
                      className=" rounded-lg w-5"
                    />
                  </button>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <button className="bg-slate-100 hover:bg-blue-200 w-8 p-1 rounded-2xl ">
                    <img src={images} alt="" className="rounded-lg w-5" />
                  </button>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <button className=" bg-slate-100 hover:bg-blue-200 w-8 p-1 rounded-2xl ">
                    <img src={zoom} alt="" className="rounded-lg w-5" />
                  </button>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <button className="bg-slate-100 flex hover:bg-blue-200 w-fit p-1 rounded-2xl ">
                    <img src={profile} alt="" className=" rounded-full w-8" />
                    <p>Harry John's</p>
                  </button>
                </Link>
              </li>
              <li>
                <div className="john">
                  <img src="" alt="" />
                </div>
              </li>
              <li>
                <Link to="#">
                  <button className=" bg-slate-100 hover:bg-blue-200 w-8 p-1 rounded-2xl ">
                    <img src={setting} alt="" className="rounded-lg w-5" />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
