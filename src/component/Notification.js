import React from "react";
import pic1 from "../asserts/images/w1.png";
import pic2 from "../asserts/images/w2.png";
import pic3 from "../asserts/images/w3.png";
import pic4 from "../asserts/images/w4.png";
import setting from "../asserts/images/sett.jpg";
import del from "../asserts/images/delete.png";
import pic7 from "../asserts/images/w7.png";
import "../style/Navbar.css"

function Notification() {
  return (
    <>
      
      <div className="cart  h-96   shadow-inner customize_overflow overflow-auto">
        <div className="flex justify-between">
          <span className=" text-xl text-black font-bold">Notification </span>
          <span className=" font-bold mr-3 text-yellow-300"> view</span>
        </div>
        <hr className="m-2" />
        <div className="pic1 mt-3 text-black flex justify-around">
          <img src={pic1} alt="" className=" w-12 h-12 " />
          <div className="content w-48 ml-2">
            <p className=" text-sm  font-bold">Olivia james</p>
            <p className=" text-sm">Congrulate for New template start</p>
          </div>
          <div>
            <p className=" relative ml-12 text-red-600">X</p>
            <p className=" text-sm">5 min ago</p>
          </div>
        </div>
        <hr className="m-2 " />


        <div className="pic6 mt-3 text-black flex justify-around">
  <img src={del} alt="" className=" w-12 h-12 " />
  <div className="contentw-48 ml-2">
    <p className=" text-sm font-bold">Deleted</p>
    <p className=" text-sm">some items has been deleted</p>
  </div>
  <div>
    <p className=" relative ml-12 text-red-600">X</p>
    <p className=" text-sm">15 min ago</p>
  </div>
</div>
<hr className=" m-2" />



        <div className="pic2 mt-3 text-black flex justify-around">
          <img src={pic2} alt="" className=" w-12 h-12 " />
          <div className="content w-48 ml-2">
            <p className=" text-sm font-bold">Elizabeth james</p>
            <p className=" text-sm">added new schedule realease date</p>
          </div>
          <div>
            <p className=" relative ml-12 text-red-600">X</p>
            <p className=" text-sm">10 min ago</p>
          </div>
        </div>
        <hr className=" m-2" />



        <div className="pic3 mt-3 text-black flex justify-around">
          <img src={pic3} alt="" className=" w-12 h-12 " />
          <div className="content w-48 ml-2">
            <p className=" text-sm font-bold">lara james</p>
            <p className=" text-sm"> your product is out of stock</p>
          </div>
          <div>
            <p className=" relative ml-12 text-red-600">X</p>
            <p className=" text-sm">12 min ago</p>
          </div>
        </div>
        <hr className=" m-2" />



        <div className="pic4 mt-3 text-black flex justify-around">
          <img src={pic4} alt="" className=" w-12 h-12 " />
          <div className="content w-48 ml-2">
            <p className=" text-sm font-bold">Jonh's Sinha</p>
            <p className=" text-sm">please complete your transction</p>
          </div>
          <div>
            <p className=" relative ml-12 text-red-600">X</p>
            <p className=" text-sm">13 min ago</p>
          </div>
        </div>
        <hr className=" m-2" />


        <div className="pic5 mt-3 text-black flex justify-around">
          <img src={setting} alt="" className=" w-12 h-12 " />
          <div className="content w-48 ml-2">
            <p className=" text-sm font-bold">Setting</p>
            <p className=" text-sm">complete your KYC details</p>
          </div>
          <div>
            <p className=" relative ml-12 text-red-600">X</p>
            <p className=" text-sm">15 min ago</p>
          </div>
        </div>
        <hr className=" m-2" />


        <div className="pic7 mt-3 text-black  flex justify-around">
          <img src={pic7} alt="" className=" w-12 h-12 " />
          <div className="content ml-2 w-48">
            <p className=" text-sm font-bold">Aaron</p>
            <p className=" text-sm"> Checkout: some items are added in cart</p>
          </div>
          <div>
            <p className=" relative ml-12 text-red-600">X</p>
            <p className=" text-sm">18 min ago</p>
          </div>
        </div>
        <hr className=" m-2" />




      </div>
    </>
  );
}

export default Notification;
