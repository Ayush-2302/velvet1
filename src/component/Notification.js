import React, { useContext } from "react";
import pic1 from "../asserts/images/w1.png";
import pic3 from "../asserts/images/w3.png";

import "../style/Navbar.css";
import { BsXLg } from "react-icons/bs";
import {
  BiPyramid,
  BiPulse,
  BiBadgeCheck,
  BiCog,
} from "react-icons/bi";
import { val } from "./ValNav";

function Notification() {
  const note= useContext(val)
  return (
    <>
      <div className="notification  p-2 w-full  shadow-inner " style={{color: note.mode==='light'?'black':'white' }} >
        <div className="flex justify-between items-center p-3" >
          <p className=" text-xl  font-bold">Notification </p>
          <p className="  mr-2 bg-red-100  text-xs font-bold p-0.5 pl-1.5 pr-1.5 rounded-md text-red-400">
            {" "}
            5 Unread
          </p>
        </div>
        <hr />
        <div className="customize_overflow overflow-y-scroll h-96">
          <div className="pic1   p-3  hover:text-black flex justify-between hover:bg-gray-100">
            <img src={pic1} alt="" className=" w-10 h-10 rounded-md" />
            <div className="content text-sm  w-44 -ml-2">
              <p className="   font-bold">Olivia james</p>
              <p className="text-xs text-gray-500  font-bold">
                Congrulate for New template start
              </p>
            </div>
            <div>
              <p className="  ml-8 text-red-600">
                <BsXLg />
              </p>
              <p className=" text-xs text-gray-500  font-bold">5 min ago</p>
            </div>
          </div>
          <hr />

          <div className="pic6 p-3  hover:text-black flex justify-between hover:bg-gray-100">
            <div className="w-10 h-10  rounded-md bg-yellow-100 flex items-center justify-center">
              <BiPyramid className=" text-yellow-500 w-5 h-5  " />
            </div>
            <div className="content text-sm  w-44 -ml-2">
              <span className=" font-bold">
                Order Placed{" "}
                <span className="text-yellow-400">ID: #1116773</span>
              </span>
              <span className="text-xs text-gray-500  font-bold ">
                {" "}
                Ordered Placed Successfully
              </span>
            </div>
            <div>
              <p className=" ml-8 text-red-600">
                <BsXLg />
              </p>
              <p className=" text-xs text-gray-500  font-bold">15 min ago</p>
            </div>
          </div>
          <hr />

          <div className="pic4 p-3  hover:text-black flex justify-between hover:bg-gray-100">
            <div className="w-10 h-10  rounded-md bg-blue-100 flex items-center justify-center">
              <BiPulse className=" text-blue-500 w-5 h-5  " />
            </div>
            <div className="content text-sm w-44 -ml-2">
              <p className="  font-bold">Your Order Has Shipped</p>
              <p className="text-xs text-gray-500  font-bold">
                Order NO:12365 Has Shipped To Your Delivery Address{" "}
              </p>
            </div>
            <div>
              <p className="  ml-8 text-red-600">
                <BsXLg />
              </p>
              <p className=" text-xs text-gray-500  font-bold">13 min ago</p>
            </div>
          </div>
          <hr />

          <div className="pic3 p-3  hover:text-black flex justify-between hover:bg-gray-100">
            <img src={pic3} alt="" className=" w-10 h-10" />
            <div className=" text-sm content w-44 -ml-2">
              <p className="  font-bold">lara james</p>
              <p className=" text-xs text-gray-500  font-bold">
                {" "}
                your product is out of stock
              </p>
            </div>
            <div>
              <p className="  ml-8 text-red-600">
                <BsXLg />
              </p>
              <p className=" text-xs text-gray-500  font-bold">12 min ago</p>
            </div>
          </div>
          <hr />

          <div className="pic4 p-3  hover:text-black flex justify-between hover:bg-gray-100">
            <div className="w-10 h-10  rounded-md bg-purple-100 flex items-center justify-center">
              <BiPulse className=" text-purple-500 w-5 h-5  " />
            </div>
            <div className="content text-sm w-44 -ml-2">
              <p className="  font-bold">Your Order Has Shipped</p>
              <p className="text-xs text-gray-500  font-bold">
                Order NO:12365 Has Shipped To Your Delivery Address{" "}
              </p>
            </div>
            <div>
              <p className="  ml-8 text-red-600">
                <BsXLg />
              </p>
              <p className=" text-xs text-gray-500  font-bold">13 min ago</p>
            </div>
          </div>
          <hr />

          <div className="pic5 p-3  hover:text-black flex justify-between hover:bg-gray-100">
            <div className="w-10 h-10  rounded-md bg-red-100 flex items-center justify-center">
              <BiCog className=" text-red-500 w-5 h-5  " />
            </div>
            <div className="content text-sm w-44 -ml-2">
              <p className="  font-bold">Setting</p>
              <p className="text-xs text-gray-500  font-bold">
                complete your KYC details
              </p>
            </div>
            <div>
              <p className="  ml-8 text-red-600">
                <BsXLg />
              </p>
              <p className=" text-xs text-gray-500  font-bold">15 min ago</p>
            </div>
          </div>
          <hr />

          <div className="pic7 p-3  hover:text-black  flex justify-between hover:bg-gray-100">
            <div
              className="w-10 h-10 bg-pink-100  rounded-md bg-pink
            -100 flex items-center justify-center"
            >
              <BiBadgeCheck className=" text-pink-500 w-5 h-5  " />
            </div>
            <div className="content text-sm  -ml-2 w-44">
              <p className="  font-bold">Account Has Been Verified</p>
              <p className="text-xs text-gray-500  font-bold ">
                {" "}
                YOur Account Has Been Verified Successfully
              </p>
            </div>
            <div>
              <p className="  ml-8 text-red-600">
                <BsXLg />
              </p>
              <p className=" text-xs text-gray-500  font-bold">18 min ago</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Notification;
