import React, { createContext, useContext, useState,useRef } from "react";
import profile from "../asserts/images/w7.png";
import { Link } from "react-router-dom";
import CalNoti from "./CalNoti";
import Notification from "./Notification";
import Appsicons from "./Appsicons";
import Dropdowncart from "./Dropdowncart";
import "bootstrap-icons/font/bootstrap-icons.css";

import { FaSearch, FaHome, FaBars } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { val } from "./ValNav";
import {
  BiUser,
  BiCog,
  BiComment,
  BiHelpCircle,
  BiRightArrowAlt,
} from "react-icons/bi";
import canada from "../asserts/images/canada.png";
import germany from "../asserts/images/germany.png";
import spain from "../asserts/images/spain.png";
import itly from "../asserts/images/itly.png";
import russia from "../asserts/images/russia.png";
import usa from "../asserts/images/usa.png";

const cross = createContext();

function Navbar(props) {
  const sideBar = useContext(val);


  const fullScreenRef = useRef(null);

  const enterFull = () => {
    const element = fullScreenRef.current;
  
    if (element.requestFullscreen) {
      element.requestFullscreen();
      console.log("im working");
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
      console.log("im working");
  
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
      console.log("im working");
  
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
      console.log("im working");
  
    }
  };




  const handleSide = () => {
    sideBar.widthInc();
  };
  const darkMode = () => {
    sideBar.toggleMode();
  };

  const [lang, setLang] = useState(false);
  const [prof, setProf] = useState(false);
  const [cart, setCart] = useState(false);
  const [cal, setCal] = useState(false);
  const [noti, setNoti] = useState(false);
  const [appicon, setAppicon] = useState(false);

  const handleProf = () => {
    setProf(!prof);
    setLang(false);
    setCart(false);
    setCal(false);
    setNoti(false);
    setAppicon(false);
    setNav(false);
  };
  const handleapp = () => {
    setProf(false);
    setLang(false);
    setCart(false);
    setCal(false);
    setNoti(false);
    setAppicon(!appicon);
  };
  const handleLang = () => {
    setProf(false);
    setAppicon(false);
    setLang(!lang);
    setCart(false);
    setCal(false);
    setNoti(false);
  };
  const handleCart = () => {
    setProf(false);
    setAppicon(false);
    setLang(false);
    setCart(!cart);
    setCal(false);
    setNoti(false);
  };
  const handleCal = () => {
    setProf(false);
    setAppicon(false);
    setLang(false);
    setCart(false);
    setCal(!cal);
    setNoti(false);
  };
  const handleNoti = () => {
    setProf(false);
    setLang(false);
    setAppicon(false);
    setCart(false);
    setCal(false);
    setNoti(!noti);
  };
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setProf(false);
  };

  const [knife, setKnife] = useState("Helllow Ayush");

  return (
    <>
      <nav
        className={` navbar relative  flex text-white h-[63px] border-y-2 border-y-gray-400  border-t-gray-400 `}
        style={{ position: "sticky", top: "0px", zIndex: 12 }}
      >
        <div
          onClick={() => {
            handleSide();
          }}
          className=" ml-5 mt-6"
        >
          <AiOutlineBars />
        </div>
        <Link to="/">
          <FaHome className="inline-block mr-3 w-7 h-7 ml-5 mt-4 " />
        </Link>
        <div className="container ml-5  flex items-center h-16  justify-between">
          <div className="hidden sm:block">
            <div
              id="search"
              className="  flex  hover:cursor-pointer  items-center space-x-2"
            >
              <input
                type="text"
                placeholder="Search"
                className="rounded-full py-2 px-2 bg-gray-200 text-black"
              />
              <button className="text-gray-200">
                <FaSearch />
              </button>
            </div>
          </div>

          <div className="icons flex items-center  ">
            <ul className="hidden sm:flex space-x-4">
              <div className="lang">
                <li>
                  <Link to="#">
                    <i
                      onClick={() => {
                        handleLang();
                      }}
                      className="bi bi-globe inline-block w-5 h-5 "
                    ></i>
                  </Link>
                </li>
                <div
                  className={` ${
                    lang ? "" : "hidden"
                  } langDropdown  w-36 rounded-md   text-sm  border-gray-100 border-2 shadow-inner  mt-4  translate-y-2 absolute  `}
                  style={{backgroundColor:  sideBar.mode==='light'?'white':'#17171c',color: sideBar.mode==='light'?'black':'white' }} >
                  <ul>
                    <div className="p-2 ml-2">
                      <li className="  flex space-x-2 p-1 hover:bg-gray-100 hover:text-black  rounded-sm">
                        <img src={usa} alt="" className=" w-5 rounded-2xl" />
                        <Link href="#">English</Link>
                      </li>
                      <hr />
                      <li className="  flex space-x-2 p-1 hover:bg-gray-200  hover:text-black  rounded-sm  ">
                        <img src={canada} alt="" className=" w-5 rounded-2xl" />
                        <Link href="#">French</Link>
                      </li>
                      <hr />
                      <li className="  flex space-x-2 p-1 hover:bg-gray-200 hover:text-black  rounded-sm">
                        <img
                          src={germany}
                          alt=""
                          className=" w-5 rounded-2xl"
                        />
                        <Link href="#">German</Link>
                      </li>
                      <hr className="m-1" />
                      <li className="  flex space-x-2 p-1 hover:bg-gray-200 hover:text-black  rounded-sm">
                        <img src={spain} alt="" className=" w-5 rounded-2xl" />
                        <Link href="#">Spainish</Link>
                      </li>
                      <hr />
                      <li className="  flex space-x-2 p-1 hover:bg-gray-200 hover:text-black  rounded-sm">
                        <img src={itly} alt="" className=" w-5 rounded-2xl" />
                        <Link href="#">Italien</Link>
                      </li>
                      <hr />
                      <li className=" flex space-x-2 p-1 hover:bg-gray-200 hover:text-black  rounded-sm ">
                        <img src={russia} alt="" className=" w-5 rounded-2xl" />
                        <Link href="#">Russian</Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              <li>
                <Link to="#">
                  <i
                    onClick={() => {
                      darkMode();
                    }}
                    className="bi bi-moon  inline-block w-5 h-5 "
                  ></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i
                    onClick={() => handleCart()}
                    className="bi bi-cart  inline-block w-5 h-5 "
                  ></i>
                </Link>
              </li>

              <div
                className={`${
                  cart ? "" : "hidden"
                } cart text-sm absolute -translate-x-72 translate-y-12 rounded-md border-gray-200 border-2`} style={{backgroundColor:  sideBar.mode==='light'?'white':'#17171c'}}
              >
                <Dropdowncart />
              </div>

              <li>
                <Link to="#">
                  <i
                    onClick={() => handleNoti()}
                    className="bi bi-bell  inline-block w-5 h-5 "
                  ></i>
                </Link>
              </li>

              <div
                className={`${
                  noti ? "" : " hidden"
                } absolute bg-white translate-y-12  rounded-md -translate-x-60`}  style={{backgroundColor:  sideBar.mode==='light'?'white':'#17171c' }}
              >
                <Notification />
              </div>

              <li>
                <Link to="#">
                  <i
                    onClick={() => handleapp()}
                    className="bi bi-grid  inline-block w-5 h-5 "
                  ></i>
                </Link>
              </li>

              <div
                className={`${
                  appicon ? "" : " hidden"
                } absolute bg-white translate-y-12  h-[700px] rounded-md translate-x-24`} style={{backgroundColor:  sideBar.mode==='light'?'white':'#17171c' }}
              >
                <cross.Provider value={knife}>
                  <Appsicons />
                </cross.Provider>
              </div>

              <li onClick={enterFull}>
                <Link to="#">
                  <i className="bi bi-fullscreen  inline-block w-5 h-5 "></i>
                </Link>
              </li>

              <li>
                <Link to="#">
                  <i
                    onClick={() => handleCal()}
                    className="bi bi-sliders2  inline-block w-5 h-5 "
                  ></i>
                </Link>
              </li>
              <div
                className={` ${
                  cal ? "" : "hidden"
                } cal absolute  translate-y-12  text-black translate-x-[60px]`} 
              >
                <CalNoti />
              </div>
            </ul>
          </div>
        </div>
        <div className="profile ml-4">
          <Link to="#">
            <div
              onClick={() => handleProf()}
              className=" john flex justify-center items-center h-full w-40 border-r-2 border-l-2 border-gray-400 shadow-inner"
            >
              <img src={profile} alt="" className="  rounded-full w-8 h-8" />
              <p className="harry text-sm font-bold ml-2">Harry's John</p>
            </div>
          </Link>
        </div>

        <div className="proDrop" >
          <ul
            className={` ${
              prof ? "" : "hidden"
            } py-1 text-sm   text-black-700 absolute -translate-x-40 translate-y-16 w-40 border-2 rounded-lg border-gray-100  px-4   shadow-inner bg-white`}   style={{backgroundColor:  sideBar.mode==='light'?'white':'#17171c',color: sideBar.mode==='light'?'black':'white' }} 
          >
            <div className="ml-2 text-base  ">
              <li className=" text-green-600 flex space-x-2  p-1 items-center  hover:bg-gray-200 ">
                <BiUser />
                <Link to="profile">Profile </Link>
              </li>
              <hr />
              <li className="flex space-x-2 items-center p-1 hover:text-black hover:bg-gray-200">
                <BiComment />
                <Link to="#"> Message </Link>
              </li>
              <hr />
              <li className="flex space-x-2 items-center p-1 hover:text-black hover:bg-gray-200">
                <BiCog />
                <Link to="#"> Setting </Link>
              </li>
              <hr />
              <li className="flex space-x-2 items-center p-1 hover:text-black hover:bg-gray-200">
                <BiHelpCircle />
                <Link to="#"> Help </Link>
              </li>
              <hr />
              <li className="flex space-x-2 items-center p-1 hover:text-black hover:bg-gray-200">
                <BiRightArrowAlt />
                <Link to="#"> Log Out </Link>
              </li>
            </div>
          </ul>
        </div>
        <div id="setting" className=" ml-4 mr-2 pr-3 flex items-center">
          <i class="bi bi-gear "></i>
        </div>

        <div className="sm:hidden m-5 mr-6 smallNav  ">
          <button
            className="text-2xl"
            onClick={() => {
              handleNav();
            }}
          >
            <FaBars />
          </button>

          <div
            className={`${
              nav ? "" : "hidden"
            } bg-white absolute text-black my-4 w-36 -translate-x-28 rounded-md    `}
          >
            <nav className=" ml-4 p-1">
              <ul>
                <li className="p-1 hover:text-blue-500 hover:bg-gray-100 flex items-center space-x-2">
                  <i className="bi bi-globe inline-block w-5 h-5 "></i>
                  Language
                </li>
                <hr />
                <li className="p-1 hover:text-blue-500 hover:bg-gray-100 flex items-center space-x-2">
                  <i className="bi bi-moon  inline-block w-5 h-5 "></i>
                  Dark Mode
                </li>
                <hr />
                <li className="p-1 hover:text-blue-500 hover:bg-gray-100 flex items-center space-x-2">
                  <i
                    onClick={() => handleCart()}
                    className="bi bi-cart  inline-block w-5 h-5 "
                  ></i>
                  cart
                </li>
                <hr />
                <li className="p-1 hover:text-blue-500 hover:bg-gray-100 flex items-center space-x-2">
                  <i
                    onClick={() => handleNoti()}
                    className="bi bi-bell  inline-block w-5 h-5 "
                  ></i>
                  Notification
                </li>
                <hr />
                <li className="p-1 hover:text-blue-500 hover:bg-gray-100 flex items-center space-x-2">
                  <i
                    onClick={() => handleCal()}
                    className="bi bi-sliders2  inline-block w-5 h-5 "
                  ></i>
                  Calender
                </li>
                <hr />
                <li className="p-1 hover:text-blue-500 hover:bg-gray-100 flex items-center space-x-2">
                  <i
                    onClick={() => handleapp()}
                    className="bi bi-grid  inline-block w-5 h-5 "
                  ></i>
                  Apps
                </li>
                <li className="p-1 hover:text-blue-500 hover:bg-gray-100 flex items-center space-x-2">
                  <BiUser />
                  Profile
                </li>
                <hr />
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
export { cross };
