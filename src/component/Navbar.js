import React, { useState } from "react";
import Search from "../asserts/images/search.png";
import profile from "../asserts/images/w7.png";
import cart1 from "../asserts/images/cart.png";
import images from "../asserts/images/images.png";
import language from "../asserts/images/lang.jpg";
import mode from "../asserts/images/mode.png";
import notification from "../asserts/images/notification.png";
import setting from "../asserts/images/sett.jpg";
import zoom from "../asserts/images/zoom.png";
import { Link } from "react-router-dom";
import CalNoti from "./CalNoti";
import Notification from "./Notification";
import Dropdowncart from "./Dropdowncart";


function Navbar(props) {
  const darkMode = () => {
    props.toggleMode();
  };

  const [lang, setLang] = useState(false);
  const [prof, setProf] = useState(false);
  const [cart, setCart] = useState(false);
  const [cal, setCal] = useState(false);
  const [noti, setNoti] = useState(false);

  const handleProf = () => {
    setProf(!prof);
    setLang(false);
    setCart(false);
    setCal(false);
    setNoti(false);
  };
  const handleLang = () => {
    setProf(false);
    setLang(!lang);
    setCart(false);
    setCal(false);
    setNoti(false);
  };
  const handleCart = () => {
    setProf(false);
    setLang(false);
    setCart(!cart);
    setCal(false);
    setNoti(false);
  };
  const handleCal = () => {
    setProf(false);
    setLang(false);
    setCart(false);
    setCal(!cal);
    setNoti(false);
  };
  const handleNoti = () => {
    setProf(false);
    setLang(false);
    setCart(false);
    setCal(false);
    setNoti(!noti);
  };

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
              className=" h-12  rounded-2xl w-fit border-2 pl-2"
            />
            <button className="   bg-slate-100 ml-2 p-1 hover:bg-blue-200   rounded-2xl">
              <img src={Search} alt="" className="  w-6 p2 rounded-lg " />
            </button>
          </div>
          <div className="icons  flex md:shrink sm:shrink  ">
            <ul className=" flex space-x-5 justify-center items-center m-auto text-lg pr-2">
              <div className="lang">
                <li>
                  <Link to="#">
                    <button
                      onClick={() => {
                        handleLang();
                      }}
                      className={`  bg-slate-100  hover:bg-blue-300 w-8 p-1 rounded-2xl`}
                    >
                      <img src={language} alt="" className=" rounded-lg w-5 " />
                    </button>
                  </Link>
                </li>
                <div
                  className={` ${
                    lang ? "" : "hidden"
                  } langDropdown  w-28  text-md border-gray-100 border-2 shadow-inner  bg-white text-black translate-y-2 absolute  `}
                >
                  <ul className="">
                    <div className="p-2">
                      <li className=" ml-5 hover:bg-gray-200 ">
                        <Link href="#">English</Link>
                      </li>
                      <hr className="m-1" />
                      <li className=" ml-5 hover:bg-gray-200   ">
                        <Link href="#">French</Link>
                      </li>
                      <hr className="m-1" />
                      <li className=" ml-5 hover:bg-gray-200 ">
                        <Link href="#">German</Link>
                      </li>
                      <hr className="m-1" />
                      <li className=" ml-5 hover:bg-gray-200  ">
                        <Link href="#">Russian</Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

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
                  <button
                    onClick={() => handleCart()}
                    className={` bg-slate-100 hover:bg-blue-200 w-8 p-1 rounded-2xl`}
                  >
                    <img src={cart1} alt="" className="rounded-lg w-5" />
                  </button>
                </Link>
              </li>

              <div
                className={`${
                  cart ? "" : "hidden"
                } cart text-sm absolute -translate-x-72 translate-y-64   bg-sky-500  border-gray-200 border-2`}
               >
                <Dropdowncart/>
              </div>

              <li>
                <Link to="#">
                  <button
                    onClick={() => handleNoti()}
                    className="bg-slate-100 hover:bg-blue-200 w-8 p-1 rounded-2xl "
                  >
                    <img
                      src={notification}
                      alt=""
                      className=" rounded-lg w-5"
                    />
                  </button>
                </Link>
              </li>
              <div
                className={`${
                  noti ? "" : " hidden"
                } absolute bg-sky-400  translate-y-60 -translate-x-60`}
              >
                <Notification />
              </div>

              <li>
                <Link to="#">
                  <button
                    onClick={() => handleCal()}
                    className="bg-slate-100  hover:bg-blue-200 w-8 p-1 rounded-2xl "
                  >
                    <img src={images} alt="" className="rounded-lg w-5" />
                  </button>
                </Link>
              </li>
              <div
                className={` ${
                  cal ? "" : "hidden"
                } cal absolute h-60 translate-y-36 translate-x-24`}
              >
                <CalNoti />
              </div>

              <li>
                <Link to="#">
                  <button className=" bg-slate-100 hover:bg-blue-200 w-8 p-1 rounded-2xl ">
                    <img src={zoom} alt="" className="rounded-lg w-5" />
                  </button>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <button
                    onClick={() => handleProf()}
                    className="bg-slate-100 flex hover:bg-blue-200 w-fit p-1 rounded-2xl "
                  >
                    <img src={profile} alt="" className="  rounded-full w-8" />
                    <p className=" text-black">Harry John's</p>
                  </button>
                </Link>
              </li>

              <div className="proDrop">
                <ul
                  className={` ${
                    prof ? "" : "hidden"
                  } py-1 text-sm   text-black-700 absolute -translate-x-36 translate-y-6 border-2 border-gray-100  px-4   shadow-inner bg-white`}
                >
                  <div className="ml-2 text-lg text-black">
                    <li className=" hover:bg-gray-200 ">
                      <Link to="profile"> Profile </Link>
                    </li>
                    <hr />
                    <li className=" hover:bg-gray-200">
                      <Link to="#"> Message </Link>
                    </li>
                    <hr />
                    <li className=" hover:bg-gray-200">
                      <Link to="#"> Setting </Link>
                    </li>
                    <hr />
                    <li className=" hover:bg-gray-200">
                      <Link to="#"> Help </Link>
                    </li>
                    <hr />
                    <li className=" hover:bg-gray-200">
                      <Link to="#"> Log Out </Link>
                    </li>
                  </div>
                </ul>
              </div>
              <li>
                <div className="john">
                  <img src="" alt="" />
                </div>
              </li>
              <li>
                <Link to="#">
                  <button className=" bg-slate-100 hover:bg-blue-200 p-1 ease-in rounded-2xl animate-spin ">
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
