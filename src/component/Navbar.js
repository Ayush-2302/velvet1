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
import Dropdowncart from "./Dropdowncart";
import cactus from "../asserts/images/cactus.png";
import del from "../asserts/images/delete.png";
import shoes from "../asserts/images/shoes.png";
import watch from "../asserts/images/watch.png";
import goodluck from "../asserts/images/goodluck.png";
import transplant from "../asserts/images/transplant.jpeg";
// import Velvet from "./Velvet";

function Navbar(props) {
  const darkMode = () => {
    props.toggleMode();
  };

  const [lang, setLang] = useState(false);
  const langDrop = () => setLang(!lang);
  const [prof, setProf] = useState(false);
  const [cart, setCart] = useState(<Dropdowncart />);

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
              <li>
                <Link to="#">
                  <button
                    onClick={langDrop}
                    className={`  bg-slate-100  hover:bg-blue-300 w-8 p-1 rounded-2xl`}
                  >
                    <img src={language} alt="" className="rounded-lg w-5 " />
                  </button>
                  <div className={`langDropdown ${lang ? "" : "hidden"}`}>
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200 block px-4 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white
 "
                    >
                      <li className=" hover:bg-gray-200">
                        <Link href="#">English</Link>
                      </li>
                      <hr className="m-2" />
                      <li className=" hover:bg-gray-200">
                        <Link href="#">French</Link>
                      </li>
                      <hr className="m-2" />
                      <li className=" hover:bg-gray-200">
                        <Link href="#">German</Link>
                      </li>
                      <hr className="m-2" />
                      <li className=" hover:bg-gray-200">
                        <Link href="#">Russian</Link>
                      </li>
                      <hr className="m-2" />
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
                  <button
                    onClick={() => setCart(!cart)}
                    className={` bg-slate-100 hover:bg-blue-200 w-8 p-1 rounded-2xl`}
                  >
                    <img src={cart1} alt="" className="rounded-lg w-5" />
                  </button>
                </Link>

                <div
                  className={` ${
                    cart ? "hidden" : ""
                  } checkout bg-slate-300 w-80 h-1/2  border-gray-200 border-2`}
                >
                  <div className="cart w-80 h-96   overflow-auto">
                    <div className="flex justify-between">
                      <span className=" text-2xl font-bold">Cart Items </span>
                      <span className=" font-bold text-green-500">5 items</span>
                    </div>
                    <hr className="m-2 border-black" />
                    <div className="cactus mt-5 flex justify-evenly">
                      <img src={cactus} alt="" className=" w-24 h-20 " />
                      <div className="content">
                        <p className=" font-bold">Cactus mini plant</p>
                        <p>Quantity : 02</p>
                        <p className="rate text-2xl font-bold">$1229</p>
                      </div>
                      <img src={del} alt="" className="  ml-6 w-6 h-6" />
                    </div>
                    <hr className="mt-2 " />

                    <div className="Shoes mt-5 flex justify-evenly">
                      <img src={shoes} alt="" className=" w-24 h-20 " />
                      <div className="content">
                        <p className=" font-bold">Mens Sport Shoes</p>
                        <p>Quantity : 01</p>
                        <p className="rate text-2xl font-bold">$119</p>
                      </div>
                      <img src={del} alt="" className="  ml-6. w-6 h-6" />
                    </div>
                    <hr className="m-2" />

                    <div className="watch mt-5 flex justify-evenly">
                      <img src={watch} alt="" className=" w-24 h-20 " />
                      <div className="content">
                        <p className=" font-bold">Watch for Men</p>
                        <p>Quantity : 03</p>
                        <p className="rate text-2xl font-bold">$2119</p>
                      </div>
                      <img src={del} alt="" className="  ml-6 w-6 h-6" />
                    </div>
                    <hr className="m-2 " />
                    <div className="goodluck mt-5 flex justify-evenly">
                      <img src={goodluck} alt="" className=" w-24 h-24 " />
                      <div className="content">
                        <p className=" font-bold">GoodLuck Plant</p>
                        <p>Quantity : 03</p>
                        <p className="rate text-2xl font-bold">$1019</p>
                      </div>
                      <img src={del} alt="" className="  ml-6 w-6 h-6" />
                    </div>
                    <hr className="m-2 " />

                    <div className="plant mt-5 flex justify-evenly">
                      <img src={transplant} alt="" className=" w-24 h-20 " />
                      <div className="content">
                        <p className=" font-bold">Transparent Plant</p>
                        <p>Quantity : 03</p>
                        <p className="rate text-2xl font-bold">$1019</p>
                      </div>
                      <img src={del} alt="" className="  ml-6 w-6 h-6" />
                    </div>
                    <hr className="m-2 " />
                  </div>

                  <div className=" check flex justify-center mt-5 mb-3 bg-purple-600 text-white h-10 items-center rounded text-2xl">
                    {" "}
                    CheckOut
                  </div>
                </div>
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
                  <button
                    onClick={() => setProf(!prof)}
                    className="bg-slate-100 flex hover:bg-blue-200 w-fit p-1 rounded-2xl "
                  >
                    <img src={profile} alt="" className=" rounded-full w-8" />
                    <p>Harry John's</p>
                  </button>
                </Link>

                <div className="proDrop">
                  <ul
                    className={` ${
                      prof ? "" : "hidden"
                    } py-2 text-sm  transition-shadow text-gray-700 dark:text-gray-200 block px-4 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white`}
                  >
                    <li className=" hover:bg-gray-200">
                      <Link to="profile"> Profile </Link>
                    </li>
                    <hr className="m-1" />
                    <li className=" hover:bg-gray-200">
                      <Link to="#"> Message </Link>
                    </li>
                    <hr className="m-1" />
                    <li className=" hover:bg-gray-200">
                      <Link to="#"> Setting </Link>
                    </li>
                    <hr className="m-1" />
                    <li className=" hover:bg-gray-200">
                      <Link to="#"> Help </Link>
                    </li>
                    <hr className="m-1" />
                    <li className=" hover:bg-gray-200">
                      <Link to="#"> Log Out </Link>
                    </li>
                  </ul>
                </div>
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
