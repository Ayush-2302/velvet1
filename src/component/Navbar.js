import React from "react";
import Search from "../asserts/images/search.png";
import profile from "../asserts/images/profile.png";
import cart from "../asserts/images/cart.png";
import images from "../asserts/images/images.png";
import language from "../asserts/images/lang.jpg";
import mode from "../asserts/images/mode.png";
import notification from "../asserts/images/notification.png";
import setting from "../asserts/images/sett.jpg";
import zoom from "../asserts/images/zoom.png";
import { Link } from "react-router-dom";



function Navbar(props) {
  const darkMode = () => {
    props.toggleMode();
  };

  return (
    <>
    
      <nav
        className={` pl-3 pb-3 flex  justify-between   pr-4 ${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <div className="search ">
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
        <div className="icons mt-4  ">
          <ul className=" flex space-x-5 text-lg pr-2">
            <li>
              <Link to="/dummy">
                <button className=" bg-slate-100 hover:bg-blue-300 w-8 p-1 rounded-2xl  ">
                  <img src={language} alt="" className="rounded-lg w-5 " />
                </button>
              </Link>
            </li>
            <li>
              <Link to="#">
                <button className=" hover:bg-blue-200 w-8 p-1 rounded-2xl " onClick={darkMode}>
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
                  <img src={notification} alt="" className=" rounded-lg w-5" />
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
                <button className="bg-slate-100 hover:bg-blue-200 w-8 p-1 rounded-2xl ">
                  <img src={profile} alt="" className="rounded-lg w-5" />
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
              <div className="john">
                <img src="" alt="" />
              </div>
            </li>
            <li>
              <Link to="#">
                <button className="bg-slate-100 hover:bg-blue-200 w-8 p-1 rounded-2xl ">
                  <img src={setting} alt="" className="rounded-lg w-5" />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
