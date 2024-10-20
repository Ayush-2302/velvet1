import React, { useContext, useState } from "react";

import cactus from "../asserts/images/cactus.png";
import shoes from "../asserts/images/shoes.png";
import watch from "../asserts/images/watch.png";
import goodluck from "../asserts/images/goodluck.png";
import transplant from "../asserts/images/transplant.jpeg";
import "../style/Navbar.css";
import { BsCart } from "react-icons/bs";
import { val } from "../context/ValNav";

function Dropdowncart() {
  const art = useContext(val);

  const [item, setItem] = useState(true);
  const removeItem = () => {
    setItem(!item);
  };
  const [item1, setItem1] = useState(true);
  const removeItem1 = () => {
    setItem1(!item1);
  };
  const [item2, setItem2] = useState(true);
  const removeItem2 = () => {
    setItem2(!item2);
  };
  const [item3, setItem3] = useState(true);
  const removeItem3 = () => {
    setItem3(!item3);
  };
  const [item4, setItem4] = useState(true);
  const removeItem4 = () => {
    setItem4(!item4);
  };
// eslint-disable-next-line
  const [empty, setEmpty] = useState(false);
  // const alpha=setEmpty(
  // {  if(){}}
  // )

  return (
    <>
      <div className="cart w-full   text-black p-4 ">
        <div
          className="flex justify-between items-center"
          style={{
            color: art.mode === "light" ? "black" : "white",
          }}
        >
          <span className=" text-lg font-bold">Cart Items </span>
          <span className="  rounded-xl mr-2   text-xs bg-green-200 text-green-600 p-1 pl-2 pr-2 ">
            5 items
          </span>
        </div>
        <hr className="m-2 " />
        <div className={`  ${empty ? "" : "hidden"}  empty `}>
          <div className=" w-24 h-24 m-auto rounded-full flex items-center  justify-center  mt-10 bg-orange-100 ">
            <BsCart className=" text-orange-400 w-8 h-8 animate-pulse " />
          </div>

          <div className="info">
            <p className=" m-auto text-center text-lg font-bold p-2">
              {" "}
              Your cart is empty
            </p>
            <p className="w-44 h-10 rounded-lg mb-4 bg-violet-700 flex  justify-center p-2 text-white items-center  m-auto text-sm font-bold">
              Continue shoping »»
            </p>
          </div>
        </div>

        <div
          className="scrollbar text-black h-80 overflow-y-scroll customize_overflow "
          style={{ color: art.mode === "light" ? "black" : "white" }}
        >
          <div
            className={`cactus p-2 flex items-center justify-between hover:bg-gray-100 hover:text-black rounded-md ${
              item ? "" : "hidden"
            } `}
          >
            <img src={cactus} alt="" className="  rounded-md w-20 h-16 " />
            <div className="content">
              <p className=" font-bold">Cactus mini plant</p>
              <p>Quantity : 02</p>
              <p className="rate text-lg font-bold">$1229</p>
            </div>
            <i
              onClick={() => {
                removeItem();
              }}
              className="bi bi-trash3 text-red-600 mb-10 ml-10"
            ></i>
          </div>
          <hr />

          <div
            className={`${
              item1 ? "" : "hidden"
            }  Shoes p-2 flex items-center justify-between hover:bg-gray-100 hover:text-black rounded-md`}
          >
            <img src={shoes} alt="" className="rounded-lg w-20 h-16 " />
            <div className="content">
              <p className=" font-bold">Mens Sport Shoes</p>
              <p>Quantity : 01</p>
              <p className="rate text-lg font-bold">$119</p>
            </div>
            <i
              onClick={() => {
                removeItem1();
              }}
              className="bi bi-trash3 text-red-600 mb-10 ml-10"
            ></i>
          </div>
          <hr />

          <div
            className={` ${
              item2 ? "" : "hidden"
            } watch p-2 items-center flex justify-between hover:bg-gray-100 hover:text-black rounded-md`}
          >
            <img src={watch} alt="" className=" rounded-md w-20 h-16" />
            <div className="content">
              <p className=" font-bold">Watch for Men</p>
              <p>Quantity : 03</p>
              <p className="rate text-lg font-bold">$2119</p>
            </div>
            <i
              onClick={() => {
                removeItem2();
              }}
              className="bi bi-trash3 text-red-600 mb-10 ml-10"
            ></i>
          </div>
          <hr />
          <div
            className={` ${
              item3 ? "" : "hidden"
            } goodluck p-2 items-center flex justify-between hover:bg-gray-100 hover:text-black rounded-md`}
          >
            <img src={goodluck} alt="" className=" rounded-md w-20 h-16 " />
            <div className="content">
              <p className=" font-bold">GoodLuck Plant</p>
              <p>Quantity : 03</p>
              <p className="rate text-lg font-bold">$1019</p>
            </div>
            <i
              onClick={() => {
                removeItem3();
              }}
              className="bi bi-trash3 text-red-600 mb-10 ml-10"
            ></i>
          </div>
          <hr />

          <div
            className={`${
              item4 ? "" : "hidden"
            }  plant p-2 items-center flex justify-between hover:bg-gray-100 hover:text-black  rounded-md`}
          >
            <img src={transplant} alt="" className=" rounded-md w-20 h-16 " />
            <div className="content">
              <p className=" font-bold">Transparent Plant</p>
              <p>Quantity : 03</p>
              <p className="rate text-lg font-bold">$1019</p>
            </div>
            <i
              onClick={() => {
                removeItem4();
              }}
              className="bi bi-trash3 text-red-600 mb-10 ml-10"
            ></i>
          </div>
          <hr />
        </div>
      </div>

      <div
        className={`check flex justify-center mt-5 mb-3 bg-purple-600 text-white h-10 items-center rounded text-2xl`}
      >
        CheckOut
      </div>
    </>
  );
}

export default Dropdowncart;
