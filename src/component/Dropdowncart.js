import React from "react";

import cactus from "../asserts/images/cactus.png";
import del from "../asserts/images/delete.png";
import shoes from "../asserts/images/shoes.png";
import watch from "../asserts/images/watch.png";
import goodluck from "../asserts/images/goodluck.png";
import transplant from "../asserts/images/transplant.jpeg";
import "../style/Navbar.css";
function Dropdowncart() {
  return (
    <>
      <div className="cart   text-black ">
        <div className="flex justify-between">
          <span className=" text-2xl font-bold">Cart Items </span>
          <span className=" font-bold m-2 text-yellow-200">5 items</span>
        </div>
        <hr className="m-2 border-black" />
        <div className="scrollbar text-black h-80 overflow-y-scroll customize_overflow ">
          <div className="cactus mt-2 flex justify-evenly">
            <img src={cactus} alt="" className=" w-20 h-16 " />
            <div className="content">
              <p className=" font-bold">Cactus mini plant</p>
              <p>Quantity : 02</p>
              <p className="rate text-lg font-bold">$1229</p>
            </div>
            <img src={del} alt="" className="  ml-6 w-6 h-6" />
          </div>
          <hr className="mt-2 " />

          <div className="Shoes mt-2 flex justify-evenly">
            <img src={shoes} alt="" className=" w-20 h-16 " />
            <div className="content">
              <p className=" font-bold">Mens Sport Shoes</p>
              <p>Quantity : 01</p>
              <p className="rate text-lg font-bold">$119</p>
            </div>
            <img src={del} alt="" className="  ml-6. w-6 h-6" />
          </div>
          <hr className="m-2" />

          <div className="watch mt-2 flex justify-evenly">
            <img src={watch} alt="" className=" w-20 h-16" />
            <div className="content">
              <p className=" font-bold">Watch for Men</p>
              <p>Quantity : 03</p>
              <p className="rate text-lg font-bold">$2119</p>
            </div>
            <img src={del} alt="" className="  ml-6 w-6 h-6" />
          </div>
          <hr className="m-2 " />
          <div className="goodluck mt-2 flex justify-evenly">
            <img src={goodluck} alt="" className=" w-20 h-16 " />
            <div className="content">
              <p className=" font-bold">GoodLuck Plant</p>
              <p>Quantity : 03</p>
              <p className="rate text-lg font-bold">$1019</p>
            </div>
            <img src={del} alt="" className="  ml-6 w-6 h-6" />
          </div>
          <hr className="m-2 " />

          <div className="plant mt-2 flex justify-evenly">
            <img src={transplant} alt="" className=" w-20 h-16 " />
            <div className="content">
              <p className=" font-bold">Transparent Plant</p>
              <p>Quantity : 03</p>
              <p className="rate text-lg font-bold">$1019</p>
            </div>
            <img src={del} alt="" className="  ml-6 w-6 h-6" />
          </div>
          <hr className="m-2 " />
        </div>
      </div>

      <div className=" check flex justify-center mt-5 mb-3 bg-purple-600 text-white h-10 items-center rounded text-2xl">
        CheckOut
      </div>
    </>
  );
}

export default Dropdowncart;
