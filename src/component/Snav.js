import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import canada from "../asserts/images/canada.png";
import germany from "../asserts/images/germany.png";
import spain from "../asserts/images/spain.png";
import itly from "../asserts/images/itly.png";
import russia from "../asserts/images/russia.png";
import usa from "../asserts/images/usa.png";
import { cross } from "./Navbar";
import { val } from "./ValNav";
import Dropdowncart from "./Dropdowncart";
import Notification from "./Notification";
import "bootstrap-icons/font/bootstrap-icons.css";
import CalNoti from "./CalNoti";
import Appsicons from "./Appsicons";
import SettingDrop from "./SettingDrop";

function Snav() {
  const nave = useContext(cross);
  const move = useContext(val);
  const [setal, setSetal]=useState(false)
  const handlesetal=()=>{
    setSetal(!setal)
    
  }

  return (
    <>
      <nav className=" rounded-md p-2" style={nave.mode_change}>
        <ul className=" ml-5 space-y-2">
          <div className=" langdrop">
            <li
              onClick={nave.handleLang}
              className="p-1 hover:text-blue-500 hover:bg-gray-100 flex justify-between items-center "
            >
              <div className="flex items-center space-x-2">
                <i className="bi bi-globe inline-block w-5 h-5 "></i>
                Language
              </div>
              <div>{nave.lang ? "‹" : "»"}</div>
            </li>
            <div
              className={` ${
                nave.lang ? "" : "hidden"
              } langDropdown  rounded-md w-11/12   text-sm  border-gray-100 border-2 shadow-inner  mt-4  translate-y-2 absolute  `}
              style={nave.mode_change}
            >
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
                    <img src={germany} alt="" className=" w-5 rounded-2xl" />
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
          <hr />
          <li
            onClick={nave.darkMode}
            className="p-1 hover:text-blue-500 hover:bg-gray-100 flex items-center justify-between "
          >
            <div className="flex items-center space-x-2">
              <i className="bi bi-moon  inline-block w-5 h-5 "></i>
              Dark Mode
            </div>
            <p>»</p>
          </li>
          <hr />
          <div>
            <li
              onClick={nave.handleCart}
              className="p-1 hover:text-blue-500 hover:bg-gray-100 flex justify-between items-center "
            >
              <div className="flex items-center space-x-2">
                <i className="bi bi-cart  inline-block w-5 h-5 "></i>
                cart
              </div>
              <div>{nave.cart ? "‹" : "»"}</div>
            </li>
            <div
              className={`${
                nave.cart ? "" : "hidden"
              } cart text-sm absolute w-11/12 translate-y-5 rounded-md border-gray-200 border-2`}
              style={nave.mode_change}
            >
              <Dropdowncart />
            </div>
          </div>
          <hr />
          <li
            onClick={nave.handleNoti}
            className="p-1 hover:text-blue-500 hover:bg-gray-100 flex items-center justify-between "
          >
            <div className="flex items-center space-x-2">
              <i className="bi bi-bell  inline-block w-5 h-5 "></i>
              Notification
            </div>
            <div>{nave.noti ? "‹" : "»"}</div>
          </li>
          <hr />
          <div
            className={`${
              nave.noti ? "" : " hidden"
            } absolute  w-11/12 rounded-md `}
            style={nave.mode_change}
          >
            <Notification />
          </div>
          <li
            onClick={nave.handleCal}
            className="p-1 hover:text-blue-500 hover:bg-gray-100 flex items-center justify-between "
          >
            <div className="flex items-center space-x-2">
              {" "}
              <i className="bi bi-sliders2  inline-block w-5 h-5 "></i>
              Calender
            </div>
            <div>{nave.cal ? "‹" : "»"}</div>
          </li>
          <div
            className={` ${
              nave.cal ? "" : "hidden"
            } cal absolute  w-11/12  text-black`}
            style={{
              backgroundColor: move.mode === "light" ? "white" : "#262C3C",
            }}
          >
            <CalNoti />
          </div>
          <hr />
          <li
            onClick={nave.handleapp}
            className="p-1 hover:text-blue-500 hover:bg-gray-100 flex items-center justify-between space-x-2"
          >
            <div className="flex items-center space-x-2">
              <i className="bi bi-grid inline-block w-5 h-5 "></i>
              Apps
            </div>
            <div>{nave.appicon ? "‹" : "»"}</div>
          </li>
          <hr />
          <div
            className={`${
              nave.appicon ? "" : " hidden"
            } absolute  w-11/12  h-[700px] rounded-md `}
            style={nave.mode_change}
          >
            <Appsicons />
          </div>

          <li onClick={handlesetal} className="p-1 hover:text-blue-500 hover:bg-gray-100 flex justify-between  items-center ">
            <div className="flex items-center space-x-2">
          <i  class="bi bi-gear "></i>
            setting
            </div>
            <div>{setal ? "‹" : "»"}</div>
          </li>
          <div
              className={`${
                setal ? "" : "hidden"
              }  text-black py-1 text-black-700 absolute w-11/12  h-full   border-2 rounded-lg shadow-inner `}
            >
              <SettingDrop />
            </div>
          <hr />
        </ul>
      </nav>
    </>
  );
}

export default Snav;
