import React from "react";
import pic1 from "../asserts/images/w1.png";
import pic2 from "../asserts/images/w2.png";
import pic3 from "../asserts/images/w3.png";
import pic4 from "../asserts/images/w4.png";
import setting from "../asserts/images/sett.jpg";
import del from "../asserts/images/delete.png";
import pic7 from "../asserts/images/w7.png";
import "../style/Navbar.css";
import { BsXLg } from "react-icons/bs";


function Notification() {
  return (
    <>
      <div className="notification  p-4 w-96  shadow-inner ">
        <div className="flex justify-between items-center">
          <p className=" text-xl text-black font-bold">Notification </p>
          <p className="  mr-5 bg-red-100  text-xs font-bold p-0.5 pl-1.5 pr-1.5 rounded-md text-red-400">
            {" "}
            5 Unread
          </p>
        </div>
        <hr className="m-2" />
        <div className="customize_overflow overflow-y-scroll h-96">
          <div className="pic1   p-3 text-black flex justify-between hover:bg-gray-100">
            <img src={pic1} alt="" className=" rounded-md w-12 h-12 " />
            <div className="content text-sm  w-44 ml-2">
              <p className="   font-bold">Olivia james</p>
              <p className="text-xs text-gray-400">Congrulate for New template start</p>
            </div>
            <div>
              <p className="  ml-8 text-red-600"><BsXLg/></p>
              <p className=" text-xs text-gray-400">5 min ago</p>
            </div>
          </div>
          <hr />

          <div className="pic6 p-3 text-black flex justify-between hover:bg-gray-100">
            <img src={del} alt="" className=" rounded-md w-12 h-12 " />
            <div className="content text-sm  w-44 ml-2">
              <p className=" font-bold">Deleted</p>
              <p className="text-xs text-gray-400 ">some items has been deleted</p>
            </div>
            <div>
              <p className=" ml-8 text-red-600"><BsXLg/></p>
              <p className=" text-xs text-gray-400">15 min ago</p>
            </div>
          </div>
          <hr />

          <div className="pic2 p-3 text-black flex justify-between hover:bg-gray-100">
            <img src={pic2} alt="" className=" rounded-md w-12 h-12 " />
            <div className=" text-sm  content w-44 ml-2">
              <p className="  font-bold">Elizabeth james</p>
              <p className="text-xs text-gray-400">added new schedule realease date</p>
            </div>
            <div>
              <p className=" relative ml-8 text-red-600"><BsXLg/></p>
              <p className=" text-xs text-gray-400">10 min ago</p>
            </div>
          </div>
          <hr />

          <div className="pic3 p-3 text-black flex justify-between hover:bg-gray-100">
            <img src={pic3} alt="" className=" w-12 h-12 " />
            <div className=" text-sm content w-44 ml-2">
              <p className="  font-bold">lara james</p>
              <p className=" text-xs text-gray-400"> your product is out of stock</p>
            </div>
            <div>
              <p className="  ml-8 text-red-600"><BsXLg/></p>
              <p className=" text-xs text-gray-400">12 min ago</p>
            </div>
          </div>
          <hr />

          <div className="pic4 p-3 text-black flex justify-between hover:bg-gray-100">
            <img src={pic4} alt="" className=" rounded-md w-12 h-12 " />
            <div className="content text-sm w-44 ml-2">
              <p className="  font-bold">Jonh's Sinha</p>
              <p className="text-xs text-gray-400">please complete your transction</p>
            </div>
            <div>
              <p className="  ml-8 text-red-600"><BsXLg/></p>
              <p className=" text-xs text-gray-400">13 min ago</p>
            </div>
          </div>
          <hr />

          <div className="pic5 p-3 text-black flex justify-between hover:bg-gray-100">
            <img src={setting} alt="" className=" rounded-md w-12 h-12 " />
            <div className="content text-sm w-44 ml-2">
              <p className="  font-bold">Setting</p>
              <p className="text-xs text-gray-400">complete your KYC details</p>
            </div>
            <div>
              <p className="  ml-8 text-red-600"><BsXLg/></p>
              <p className=" text-xs text-gray-400">15 min ago</p>
            </div>
          </div>
          <hr />

          <div className="pic7 p-3 text-black  flex justify-between hover:bg-gray-100">
            <img src={pic7} alt="" className=" rounded-md w-12 h-12 " />
            <div className="content text-sm  ml-2 w-44">
              <p className="  font-bold">Aaron</p>
              <p className="text-xs text-gray-400 ">
                {" "}
                Checkout: some items are added in cart
              </p>
            </div>
            <div>
              <p className="  ml-8 text-red-600"><BsXLg/></p>
              <p className=" text-xs text-gray-400">18 min ago</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Notification;
