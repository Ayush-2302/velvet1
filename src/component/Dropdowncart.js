import React from "react";

import cactus from "../asserts/images/cactus.png";
import shoes from "../asserts/images/shoes.png";
import watch from "../asserts/images/watch.png";
import goodluck from "../asserts/images/goodluck.png";
import transplant from "../asserts/images/transplant.jpeg";
import "../style/Navbar.css";
function Dropdowncart() {
  return (
    <>
      <div className="cart   text-black p-4 ">
        <div className="flex justify-between items-center">
          <span className=" text-lg font-bold">Cart Items </span>
          <span className="  rounded-xl mr-2   text-xs bg-green-200 text-green-600 p-1 pl-2 pr-2 ">
            5 items
          </span>
        </div>
        <hr className="m-2 border-black" />
        <div className="scrollbar text-black h-80 overflow-y-scroll customize_overflow ">
          <div className="cactus p-2 flex items-center justify-between hover:bg-gray-100">
            <img src={cactus} alt="" className="  rounded-md w-20 h-16 " />
            <div className="content">
              <p className=" font-bold">Cactus mini plant</p>
              <p>Quantity : 02</p>
              <p className="rate text-lg font-bold">$1229</p>
            </div>
            <i class="bi bi-trash3 text-red-600 mb-10 ml-10"></i>
          </div>
          <hr />

          <div className="Shoes p-2 flex items-center justify-between hover:bg-gray-100">
            <img src={shoes} alt="" className="rounded-lg w-20 h-16 " />
            <div className="content">
              <p className=" font-bold">Mens Sport Shoes</p>
              <p>Quantity : 01</p>
              <p className="rate text-lg font-bold">$119</p>
            </div>
            <i class="bi bi-trash3 text-red-600 mb-10 ml-10"></i>
          </div>
          <hr />

          <div className="watch p-2 items-center flex justify-between hover:bg-gray-100">
            <img src={watch} alt="" className=" rounded-md w-20 h-16" />
            <div className="content">
              <p className=" font-bold">Watch for Men</p>
              <p>Quantity : 03</p>
              <p className="rate text-lg font-bold">$2119</p>
            </div>
            <i class="bi bi-trash3 text-red-600 mb-10 ml-10"></i>
          </div>
          <hr />
          <div className="goodluck p-2 items-center flex justify-between hover:bg-gray-100">
            <img src={goodluck} alt="" className=" rounded-md w-20 h-16 " />
            <div className="content">
              <p className=" font-bold">GoodLuck Plant</p>
              <p>Quantity : 03</p>
              <p className="rate text-lg font-bold">$1019</p>
            </div>
            <i class="bi bi-trash3 text-red-600 mb-10 ml-10"></i>
          </div>
          <hr />

          <div className="plant p-2 items-center flex justify-between hover:bg-gray-100">
            <img src={transplant} alt="" className=" rounded-md w-20 h-16 " />
            <div className="content">
              <p className=" font-bold">Transparent Plant</p>
              <p>Quantity : 03</p>
              <p className="rate text-lg font-bold">$1019</p>
            </div>
            <i class="bi bi-trash3 text-red-600 mb-10 ml-10"></i>
          </div>
          <hr />
        </div>
      </div>

      <div className=" check flex justify-center mt-5 mb-3 bg-purple-600 text-white h-10 items-center rounded text-2xl">
        CheckOut
      </div>
    </>
  );
}

export default Dropdowncart;
