import React, { useContext, useState } from "react";
import { BsFillDiamondFill } from "react-icons/bs";
import {
  RiCalendar2Line,
  RiArrowDownSLine,
  RiFilter3Line,
} from "react-icons/ri";
import {
  FiCreditCard,
  FiArrowDown,
  FiSmartphone,
  FiRepeat,
} from "react-icons/fi";

import {
  BiShare,
  BiDownload,
  BiCube,
  BiHome,
  BiTv,
  BiSolidZap,
} from "react-icons/bi";
import { RiPencilLine, RiDeleteBin7Line } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import stock from "../asserts/images/stock.png";
import canada from "../asserts/images/canada.png";
import germany from "../asserts/images/germany.png";
import mexico from "../asserts/images/mexico.png";
import russia from "../asserts/images/russia.png";
import usa from "../asserts/images/usa.png";
import shoes from "../asserts/images/shoes.png";
import watch from "../asserts/images/watch.png";
import cactus from "../asserts/images/cactus.png";
import grow from "../asserts/images/grow.png";
import smartphone from "../asserts/images/phone.png";
import camera from "../asserts/images/camera.png";
import { val } from "./ValNav";

function Body(props) {
  const bod = useContext(val);

  const [weekdrop, setWeekdrop] = useState(false);
  const handleweek = () => {
    setWeekdrop(!weekdrop);
    setSelling(false);
    setRecent(false);
    setTrans(false);
    setProf(false);
    setValue(false);
  };
  const [selling, setSelling] = useState(false);
  const handleselling = () => {
    setWeekdrop(false);
    setSelling(!selling);
    setRecent(false);
    setTrans(false);
    setProf(false);
    setValue(false);
  };
  const [recent, setRecent] = useState(false);
  const handleRecent = () => {
    setWeekdrop(false);
    setSelling(false);
    setRecent(!recent);
    setTrans(false);
    setProf(false);
    setValue(false);
  };
  const [trans, setTrans] = useState(false);
  const handleTrans = () => {
    setWeekdrop(false);
    setSelling(false);
    setTrans(!trans);
    setRecent(false);
    setProf(false);
    setValue(false);
  };
  const [prof, setProf] = useState(false);
  const handleProf = () => {
    setWeekdrop(false);
    setSelling(false);
    setTrans(false);
    setRecent(false);
    setProf(!prof);
    setValue(false);
  };
  const [value, setValue] = useState(false);
  const handleValue = () => {
    setWeekdrop(false);
    setSelling(false);
    setTrans(false);
    setRecent(false);
    setProf(false);
    setValue(!value);
  };

  // const fullScreenRef = useRef(null);

  // const enterFullScreen = () => {
  //   const element = fullScreenRef.current;

  //   if (element.requestFullscreen) {
  //     element.requestFullscreen();
  //   } else if (element.mozRequestFullScreen) {
  //     element.mozRequestFullScreen();
  //   } else if (element.webkitRequestFullscreen) {
  //     element.webkitRequestFullscreen();
  //   } else if (element.msRequestFullscreen) {
  //     element.msRequestFullscreen();
  //   }
  // };

  return (
    <>
      {/*  card1 */}
      <div className="bod"  >
        {/* <div onClick={enterFullScreen} className="ayush text-center"> ayush</div> */}
      <div className="keybody mb-1 ">
        <div className="cards1  mr-5" >
          <div className="card shadow-inner card1" style={{backgroundColor:  bod.mode==='light'?'white':'rgb(38,44,60,0.95)',color: bod.mode==='light'?'black':'white' }}>
            <h1 className="text-lg  font-bold">Recent Activity</h1>
            <hr className="mt-3" />

            <div className=" text-sm mt-4 ">
              <div className=" flex ">
                <BsFillDiamondFill color="purple" size="15px" />
                <p className=" ml-5 -mt-2 font-bold">Task Finished</p>
              </div>
              <div className="flex items-center flex-shrink break-words justify-between">
                <p className="  text-gray-400 task ml-8  ">
                  Adam Barry finished task on
                  <span className=" font-bold text-purple-900">
                    Angula JS Template
                  </span>
                </p>
                <p className=" text-xs date">09 july 2021</p>
              </div>
            </div>

            <div className=" text-sm  mt-4 ">
              <div className=" flex ">
                <BsFillDiamondFill color="skyblue" size="15px" />
                <p className=" ml-5 -mt-2 font-bold">Task Finished</p>
              </div>
              <div className="flex items-center flex-shrink break-words justify-between">
                <p className=" text-gray-400 task ml-8 ">
                  {" "}
                  Adam Barry finished task on{" "}
                  <span className=" font-bold text-cyan-500">
                    {" "}
                    Angula JS Template
                  </span>
                </p>
                <p className="text-xs date">09 july 2021</p>
              </div>
            </div>

            <div className=" text-sm  mt-4 ">
              <div className=" flex ">
                <BsFillDiamondFill color="yellow" size="15px" />
                <p className=" ml-5 -mt-2 font-bold">Task Finished</p>
              </div>
              <div className="flex-shrink break-words flex items-center justify-between">
                <p className=" text-gray-400 task ml-8 ">
                  Adam Barry finished task on{" "}
                  <span className=" font-bold text-yellow-300">
                    Angula JS Template
                  </span>
                </p>
                <p className="text-xs date">09 july 2021</p>
              </div>
            </div>

            <div className=" text-sm  mt-4 ">
              <div className=" flex ">
                <BsFillDiamondFill color="green" size="15px" />
                <p className=" ml-5 -mt-2 font-bold">Task Finished</p>
              </div>
              <div className="flex-shrink break-words flex items-center justify-between">
                <p className=" text-gray-400 task ml-8 ">
                  {" "}
                  Adam Barry finished task on{" "}
                  <span className=" font-bold text-green-400">
                    {" "}
                    Angula JS Template
                  </span>
                </p>
                <p className="text-xs date">09 july 2021</p>
              </div>
            </div>

            <div className=" text-sm  mt-4 ">
              <div className=" flex ">
                <BsFillDiamondFill color="orange" size="15px" />
                <p className=" ml-5 -mt-2 font-bold">Task Finished</p>
              </div>
              <div className="flex-shrink break-words flex items-center justify-between">
                <p className=" text-gray-400 task ml-8 ">
                  {" "}
                  Adam Barry finished task on{" "}
                  <span className=" font-bold text-orange-400">
                    {" "}
                    Angula JS Template
                  </span>
                </p>
                <p className="text-xs date">09 july 2021</p>
              </div>
            </div>

            <div></div>
          </div>
          {/* card 2 */}
          <div className="card overflow-x-auto card2 " style={{backgroundColor:  bod.mode==='light'?'white':'#17171c',color: bod.mode==='light'?'black':'white' }}>
            <div className="top flex-shrink break-words  flex justify-between">
              <h1 className=" text-lg font-bold"> Sale By Country </h1>
              <button className="w-fit flex items-center text-sm text-black bg-gray-100 rounded-lg p-1">
                View All
                <RiArrowDownSLine />
              </button>
            </div>
            <hr className=" m-3" />

            <table className=" w-11/12  ">
              <thead>
                <tr className=" text-sm flex justify-evenly space-x-12" >
                  <th>Country</th>
                  <th className=" pl-10"> Sales </th>
                  <th> Bounce</th>
                </tr>
              </thead>
              <hr className=" m-3" />
              <tbody className=" text-sm font-bold">
                <tr className=" text-sm flex justify-evenly  space-x-14 items-center">
                  <td className=" flex items-center ">
                    <img
                      src={canada}
                      className=" mr-2 p-1 h-8 w-8  rounded-full bg-gray-100 "
                      alt=""
                    />
                    Canada
                  </td>
                  <td>2500</td>
                  <td className=" text-green-500 text-xs">24%</td>
                </tr>
                <hr className=" m-3" />

                <tr className=" text-sm flex  justify-evenly    space-x-14 items-center">
                  <td className=" flex items-center ">
                    <img
                      src={germany}
                      className=" mr-2 p-1 h-8 w-8  rounded-full bg-gray-100 "
                      alt=""
                    />
                    Germany
                  </td>
                  <td>846</td>
                  <td className=" text-red-500 text-xs">22.3%</td>
                </tr>
                <hr className=" m-3" />
                <tr className=" text-sm flex justify-evenly   space-x-14 items-center">
                  <td className=" flex items-center">
                    {" "}
                    <img
                      src={mexico}
                      className=" mr-2 p-1 h-8 w-8  rounded-full bg-gray-100 "
                      alt=""
                    />
                    Mexico
                  </td>
                  <td>1024</td>
                  <td className="  text-red-500 text-xs">14.8%</td>
                </tr>
                <hr className=" m-3" />
                <tr className=" text-sm flex justify-evenly  space-x-14 items-center">
                  <td className=" flex items-center">
                    {" "}
                    <img
                      src={russia}
                      className=" mr-2 p-1  h-8 w-8  rounded-full bg-gray-100 "
                      alt=""
                    />
                    Russia
                  </td>
                  <td className=" pl-3">482</td>
                  <td className="  text-green-500 text-xs pl-2">05.8%</td>
                </tr>
                <hr className=" m-3" />
                <tr className=" text-sm flex justify-evenly  space-x-14 items-center">
                  <td className=" flex items-center">
                    {" "}
                    <img
                      src={usa}
                      className=" mr-2 p-1 h-8 w-8  rounded-full bg-gray-100 "
                      alt=""
                    />
                    U.S.A
                  </td>
                  <td className=" pl-5">1410</td>
                  <td className=" text-red-500 text-xs">13.08%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/*card 3 */}
        <div className="cards2 mr-5   ">
          <div className="card card3 p-0  overflow-x-auto " style={{backgroundColor:  bod.mode==='light'?'white':'#17171c',color: bod.mode==='light'?'black':'white' }}>
            <div className="top flex justify-between items-center p-3">
              <h1 className=" text-lg font-bold">Sales Statistics </h1>
              <ul className="btn  text-sm ">
                <div className="flex space-x-2 space-y-1 flex-wrap items-center justify-evenly">
                  <li>
                    <button className="w-fit justify-center  bg-purple-300  text-purple-900 rounded-lg flex space-x-1 items-center hover:bg-purple-600 hover:text-white p-0.5 pl-1 pr-1 ">
                      <RiFilter3Line color="purple" />
                      <p>Filter</p>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleweek();
                      }}
                      className="w-fit flex justify-between items-center space-x-1 bg-purple-600 text-white rounded-lg p-1 pl-1 pr-1"
                    >
                      <RiCalendar2Line color="white" />
                      <p>This Week</p>
                      <RiArrowDownSLine color="white" />
                    </button>
                  </li>
                </div>

                <div
                  className={` ${
                    weekdrop ? "" : "hidden"
                  }  translate-x-16 absolute week h-fit w-28 rounded-lg `} style={{backgroundColor:  bod.mode==='light'?'white':'#17171c',color: bod.mode==='light'?'black':'white' }}
                >
                  <ul className=" ml-2 space-y-2 p-2 ">
                    <li>Last Month</li>
                    <hr />
                    <li>Last week</li>
                    <hr />
                    <li>Share Report</li>
                  </ul>
                </div>
              </ul>
            </div>
            <hr className=" m-1" />

            <img src={stock} alt=" img" className=" w-full h-96  " />
          </div>
          {/* card 4 */}
          <div className="card  card5 grow customize_overflow overflow-x-scroll" style={{backgroundColor:  bod.mode==='light'?'white':'#17171c',color: bod.mode==='light'?'black':'white' }}>
            <div className="top flex justify-between">
              <h1 className=" text-lg font-bold">Top Selling Products </h1>
              <div className="flex">
                <button
                  onClick={() => {
                    handleselling();
                  }}
                >
                  <p className="w-8 font-bold text-black bg-gray-100 rounded p-1">:</p>
                </button>
                <div
                  className={` mt-10  -translate-x-32  border-2 shadow-inner absolute rounded-lg    ${
                    selling ? "" : "hidden"
                  }`} style={{backgroundColor:  bod.mode==='light'?'white':'#17171c',color: bod.mode==='light'?'black':'white' }}
                >
                  <ul className=" text-sm  font-bold ml-2 p-2 space-y-3  ">
                    <li className="hover:text-blue-500">Action </li>
                    <hr />
                    <li className="hover:text-blue-500">Another action </li>
                    <hr />
                    <li className="hover:text-blue-500">
                      Something else here{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className=" m-2" />
            <table className=" w-[95%]  m-auto ">
              <thead>
                <tr className=" text-sm">
                  <th className="pr-24">Product Name</th>
                  <th className="pr-14"> Stock </th>
                  <th className="pr-12"> price</th>
                  <th className="pr-12"> Sold</th>
                  <th className="pr-2"> Action</th>
                </tr>
              </thead>
              <hr className=" m-4" />
              <tbody className=" text-sm">
                <tr>
                  <td className="flex items-center">
                    {" "}
                    <img src={shoes} alt="" className="w-12 rounded-xl" />
                    Sports Shoes For Men
                  </td>
                  <td className="  text-green-500">in Stocks</td>
                  <td>$73.800</td>
                  <td>1534</td>
                  <td className=" flex space-x-1 ">
                    {" "}
                    <button className=" hover:bg-blue-200  w-8 p-2 bg-blue-100 text-black rounded">
                      <RiPencilLine />
                    </button>
                    <button className=" w-8 p-2 bg-red-100   hover:bg-red-300 text-red-600">
                      <RiDeleteBin7Line />
                    </button>
                  </td>
                </tr>
                <hr className="m-3 " />
                <tr>
                  <td className="flex items-center">
                    {" "}
                    <img src={cactus} alt="" className="w-12 rounded-xl" />
                    Beautiful flower frame{" "}
                  </td>
                  <td className=" text-blue-400">Few-left</td>
                  <td>$73.800</td>
                  <td>4987</td>
                  <td className="flex space-x-1">
                    <button className=" hover:bg-blue-200  w-8 p-2 text-black bg-blue-100 rounded">
                      <RiPencilLine />
                    </button>
                    <button className=" w-8 p-2 bg-red-100  hover:bg-red-300 text-red-600">
                      <RiDeleteBin7Line />
                    </button>
                  </td>
                </tr>
                <hr className="m-2 " />
                <tr>
                  <td className="flex items-center">
                    {" "}
                    <img src={watch} alt="" className="w-12 rounded-xl" />
                    Small alarm Watch{" "}
                  </td>
                  <td className="  text-red-500">Out of stock</td>
                  <td>$13.800</td>
                  <td>87875</td>
                  <td className=" flex space-x-1">
                    <button className=" hover:bg-blue-200  w-8 p-2 text-black bg-blue-100 rounded">
                      <RiPencilLine />
                    </button>
                    <button className=" w-8 p-2 bg-red-100   hover:bg-red-300 text-red-600">
                      <RiDeleteBin7Line />
                    </button>
                  </td>
                </tr>
                <hr className="m-2 " />
                <tr>
                  <td className="flex items-center">
                    {" "}
                    <img
                      src={smartphone}
                      alt=""
                      className="w-12 h-10 mr-2 rounded-xl"
                    />{" "}
                    New Smart Phone{" "}
                  </td>
                  <td className="  text-green-500 ">In-Stock</td>
                  <td>$14.600</td>
                  <td>87875</td>
                  <td className="flex space-x-1 ">
                    <button className=" hover:bg-blue-200  w-8 p-2 text-black bg-blue-100 rounded">
                      <RiPencilLine />
                    </button>
                    <button className=" w-8 p-2 bg-red-100   hover:bg-red-300 text-red-600">
                      <RiDeleteBin7Line />
                    </button>
                  </td>
                </tr>
                <hr className="m-2 " />
                <tr>
                  <td className="flex items-center">
                    {" "}
                    <img
                      src={camera}
                      alt=""
                      className="w-10 mr-2  rounded-xl"
                    />
                    Black Colord camera{" "}
                  </td>
                  <td className="  text-green-500  ">In-Stock</td>
                  <td>$23.800</td>
                  <td>4087</td>
                  <td className="flex space-x-1">
                    <button className=" hover:bg-blue-200 text-black w-8 p-2 bg-blue-100 rounded">
                      <RiPencilLine />
                    </button>
                    <button className=" w-8 p-2 bg-red-100   hover:bg-red-300 text-red-600">
                      <RiDeleteBin7Line />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* card 5 */}
        <div className="cards3 mr-5  ">
          <div className="card overflow-x-auto  card3" style={{backgroundColor:  bod.mode==='light'?'white':'#17171c',color: bod.mode==='light'?'black':'white' }}>
            <div className="top flex  justify-between">
              <h1 className=" text-lg font-bold">Sales Value </h1>
              <div>
                <button
                  onClick={() => {
                    handleValue();
                  }}
                  className="w-fit flex items-center text-sm text-black bg-gray-100 rounded-lg p-1"
                >
                  View All
                  <RiArrowDownSLine />
                </button>
                <div
                  className={`${
                    value ? "" : "hidden"
                  } mt-2  -translate-x-20 w-36 absolute  border-2 shadow-inner  rounded-lg `} style={{backgroundColor:  bod.mode==='light'?'white':'#17171c',color: bod.mode==='light'?'black':'white' }}
                >
                  <ul className=" ml-2 space-y-2 p-2 ">
                    <li className=" hover:text-blue-500">Today</li>
                    <hr />
                    <li className=" hover:text-blue-500">This Week</li>
                    <hr />
                    <li className=" hover:text-blue-500">Last week</li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <hr className=" m-4" />

            <div className=" circle mt-8 w-52 h-52 rounded-full flex justify-center items-center  m-auto">
              <div className=" font-bold text-2xl ">
                <p>Total Sale</p>
                <p className="pl-7">95%</p>
              </div>
            </div>
            <hr className=" mt-8" />
            <div className="flex justify-center items-center p-4 pt-5 pb-5 ">
              <div className="pr-6 border-r-2">
                Sale Items
                <p className="font-bold text-2xl">18,675</p>
              </div>
              <div className="pl-6">
                Sale Revenue
                <p className="font-bold text-2xl ">$122,39</p>
              </div>
            </div>
          </div>

          {/* card6 */}
          <div className="card overflow-x-auto  card6 p-2" style={{backgroundColor:  bod.mode==='light'?'white':'#17171c',color: bod.mode==='light'?'black':'white' }}>
            <div className="top flex justify-between">
              <h1 className=" text-lg font-bold">Monthly Profit </h1>
              <div className="">
                <button
                  onClick={() => {
                    handleProf();
                  }}
                  className="w-fit flex items-center text-sm text-black bg-gray-100 rounded-lg p-1"
                >
                  View All
                  <RiArrowDownSLine />
                </button>
                <div
                  className={`${
                    prof ? "" : "hidden"
                  } mt-2  -translate-x-20 w-36 absolute  border-2 shadow-inne rounded-lg ` } style={{backgroundColor:  bod.mode==='light'?'white':'#17171c',color: bod.mode==='light'?'black':'white' }}
                >
                  <ul className=" ml-2 space-y-2 p-2 ">
                    <li className=" hover:text-blue-500">Today</li>
                    <hr />
                    <li className=" hover:text-blue-500">This Week</li>
                    <hr />
                    <li className=" hover:text-blue-500">Last week</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className=" m-2" />
            <h1 className=" font-bold text-2xl">$78344</h1>
            <p className=" to-gray-200 text-gray-400 flex justify-between">
              Total Profit Growth Of 85%
              <div className=" w-20  mt-5 mr-7 ">
                <img src={grow} alt="" className=" max-h-24 " />
              </div>
            </p>

            <hr className=" m-2" />
            <div className="w-11/12">
              <div className="cube flex space-x-2 items-center">
                <div className="w-6  rounded-md p-1 bg-purple-200">
                  {" "}
                  <BiCube />
                </div>
                <p>Fashion</p>
              </div>
              <div className="progress w-11/12 h-1 bg-purple-600 animate-pulse mt-5">
                {" "}
              </div>

              <hr className=" m-2" />
              <div className="home flex space-x-2 items-center">
                <div className="w-6  rounded-md p-1 bg-yellow-100">
                  <BiHome />
                </div>
                <p>Home Furniture</p>
              </div>
              <div className="progress w-8/12 h-1 bg-yellow-400 animate-pulse mt-5"></div>

              <hr className=" m-2" />
              <div className="tv flex space-x-2 items-center">
                <div className="w-6  rounded-md p-1 bg-orange-200">
                  <BiTv />
                </div>
                <p>Electronics</p>
              </div>
              <div className="progress w-10/12 h-1 bg-orange-600 animate-pulse mt-5"></div>

              <hr className=" m-2" />
              <div className="zap items-center flex space-x-2">
                <div className="w-6  rounded-md p-1 bg-blue-200">
                  <BiSolidZap />
                </div>
                <p>Groceries</p>
              </div>
              <div className="progress w-11/12 h-1 bg-blue-600 animate-pulse mt-5">
                {" "}
              </div>

              <hr className=" m-2" />
            </div>
          </div>
        </div>
      </div>
      {/* card 7 */}

      <div className=" cards4 xl:m-auto pb-8   mr-5">
        <div className="card card7 overflow-x-auto " style={{backgroundColor:  bod.mode==='light'?'white':'#17171c',color: bod.mode==='light'?'black':'white' }}>
          <div className="top flex justify-between">
            <h1 className=" text-lg font-bold">Transaction History </h1>
            <div className="flex">
              <button
                onClick={() => {
                  handleTrans();
                }}
                className="w-fit flex items-center text-sm text-black bg-gray-100 rounded-lg p-1"
              >
                View All
                <RiArrowDownSLine />
              </button>
              <div
                className={` ${
                  trans ? "" : "hidden"
                } mt-10  -translate-x-16 absolute  border-2 shadow-inner   rounded-lg `} style={{backgroundColor:  bod.mode==='light'?'white':'#17171c',color: bod.mode==='light'?'black':'white' }}
              >
                <ul className=" ml-2 space-y-3 p-2 ">
                  <li>Last Month</li>
                  <hr />
                  <li>Last week</li>
                  <hr />
                  <li>Share Report</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className=" m-3" />
          <div className=" flex justify-between">
            <div className=" flex justify-center items-center ">
              <FiCreditCard className="green mr-2 p-0.5 text-green-800 bg-green-200 w-6 h-5 rounded-md" />{" "}
              <p className="  font-semibold w-24">ATM Withdrawl</p>
            </div>
            <span className="flex items-center  text-green-500">$245000 </span>
          </div>
          <p className=" ml-10 text-gray-500 text-sm">Just Now</p>

          <hr className=" m-1" />

          <div className=" flex justify-between">
            <div className=" flex justify-center items-center ">
              <FiSmartphone className="green mr-2 text-red-600 bg-red-200 p-0.5 w-6 h-5 rounded-md" />{" "}
              <p className="font-semibold w-24">Movies Subscription</p>
            </div>
            <span className="flex items-center  text-red-500">$100.00 </span>
          </div>
          <p className=" ml-10 text-gray-500 text-sm">Just Now</p>

          <hr className=" m-1" />

          <div className=" flex justify-between">
            <div className=" flex justify-center items-center ">
              <FiArrowDown className="green mr-2 text-green-800 bg-green-200 p-0.5 w-6 h-5 rounded-md" />{" "}
              <p className="font-semibold w-24">Recieved From John </p>
            </div>
            <span className="flex items-center  text-green-500">$15000 </span>
          </div>
          <p className=" ml-10 text-gray-500 text-sm">17-04-2022</p>

          <hr className=" m-1" />

          <div className=" flex justify-between">
            <div className=" flex justify-center items-center ">
              <FiCreditCard className="green mr-2 text-red-600 bg-red-200 w-6 p-0.5 h-5 rounded-md" />{" "}
              <p className="font-semibold w-24">Credit Card</p>
            </div>
            <span className="flex items-center  text-red-500">-$3000 </span>
          </div>
          <p className=" ml-10 text-gray-500 text-sm">Just Now</p>

          <hr className=" m-1" />

          <div className=" flex justify-between">
            <div className=" flex justify-center items-center ">
              <FiCreditCard className="green mr-2 text-green-800 bg-green-200 w-6 p-0.5 h-5 rounded-md" />{" "}
              <p className="font-semibold w-24">Transfer to Self</p>
            </div>
            <span className="flex items-center  text-green-500">$15000 </span>
          </div>
          <p className=" ml-10 text-gray-500 text-sm">30-04-2022</p>

          <hr className=" m-1" />

          <div className=" flex justify-between">
            <div className=" flex justify-center items-center ">
              <FiRepeat className="green mr-2 text-red-600 bg-red-200 w-6 p-0.5 h-5 rounded-md" />{" "}
              <p className="font-semibold w-24">Transfer to x Card </p>
            </div>
            <span className="flex items-center  text-red-500">$245000 </span>
          </div>
          <p className=" ml-10 text-gray-500 text-sm">30-04-2022</p>
        </div>

        {/*   card 8*/}

        <div className="card card8 grow h-fit  mr-5   overflow-x-auto" style={{backgroundColor:  bod.mode==='light'?'white':'#17171c',color: bod.mode==='light'?'black':'white' }}>
          <div className="top flex  sm:grow-2 justify-between">
            <h1 className=" text-lg font-bold">Recent Orders </h1>

            <div className="flex">
              <button onClick={handleRecent}>
                <p className="w-8 font-bold bg-gray-100 text-black rounded p-1">:</p>
              </button>
              <div
                className={`${
                  recent ? "" : "hidden"
                } -translate-x-24 mt-10 order border-2 shadow-inner rounded-lg absolute`} style={{backgroundColor:  bod.mode==='light'?'white':'#17171c',color: bod.mode==='light'?'black':'white' }}
              >
                <ul className=" p-2 space-y-2">
                  <li className="flex space-x-1 items-center hover:text-blue-500">
                    <BiShare />
                    <p>Share</p>
                  </li>
                  <hr />
                  <li className="flex space-x-1 items-center hover:text-blue-500">
                    <BiDownload />
                    <p>Download</p>
                  </li>
                  <hr />
                  <li className="flex space-x-1 items-center hover:text-blue-500">
                    <AiOutlineDelete />
                    <p>Delete</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className=" m-1" />
          <table
            className="  m-auto  p-4 
          "
          >
            <thead>
              <tr className=" text-sm  ">
                <th className=" pr-10"> S.NO</th>
                <th className="pr-52">Customer Name</th>
                <th className="pr-10">Order ID</th>
                <th className="pr-10">Order Date</th>
                <th className="pr-10"> price</th>
                <th className="pr-10"> Status</th>
                <th> Action</th>
              </tr>
            </thead>
            <hr className=" m-4" />
            <tbody className=" text-sm">
              <tr>
                <td>01</td>
                <td>
                  Patty Furniture <br />
                  patty@gmail.com
                </td>
                <td className="  text-blue-400">#123dfk</td>
                <td>01 Apr 2022</td>
                <td>$73.800</td>
                <td className="  text-green-500">Delivered</td>
                <td className="  flex   item-center  ">
                  {" "}
                  <button className=" hover:bg-blue-200  text-black w-8 p-2 bg-blue-100 rounded">
                    <RiPencilLine />
                  </button>
                  <button className=" w-8 p-2 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    <RiDeleteBin7Line />
                  </button>
                </td>
              </tr>
              <hr className="m-4 " />
              <tr>
                <td>02</td>
                <td>
                  Allie Grate <br />
                  allie@spuko.com
                </td>
                <td className="  text-blue-400">#123df2</td>
                <td>02 Apr 2022</td>
                <td>$13.800</td>
                <td className=" text-green-500">Delivered</td>
                <td className=" flex   item-center">
                  {" "}
                  <button className=" hover:bg-blue-200  w-8 p-2 text-black bg-blue-100 rounded">
                    <RiPencilLine />
                  </button>
                  <button className=" w-8 p-2 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    <RiDeleteBin7Line />
                  </button>
                </td>
              </tr>
              <hr className="m-4 " />
              <tr>
                <td>03</td>
                <td>
                  Peg Legge <br />
                  pegy@spuko.com
                </td>
                <td className="  text-blue-400">#123d5fk</td>
                <td>24 mar 2022</td>
                <td>$37.800</td>
                <td className=" text-red-500">cancelled</td>
                <td className=" flex   item-center">
                  {" "}
                  <button className=" hover:bg-blue-200  w-8 p-2 text-black bg-blue-100 rounded">
                    <RiPencilLine />
                  </button>
                  <button className=" w-8 p-2 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    <RiDeleteBin7Line />
                  </button>
                </td>
              </tr>
              <hr className="m-4 " />
              <tr>
                <td>04</td>
                <td>
                  Maureen Biologist <br />
                  maure@gmail.com
                </td>
                <td className="  text-blue-400">#124dfk</td>
                <td>24 Mar 2022</td>
                <td>$33.800</td>
                <td className=" text-blue-500">pending</td>
                <td className=" flex   item-center">
                  {" "}
                  <button className=" hover:bg-blue-200  w-8 p-2 text-black bg-blue-100 rounded">
                    <RiPencilLine />
                  </button>
                  <button className=" w-8 p-2 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    <RiDeleteBin7Line />
                  </button>
                </td>
              </tr>
              <hr className="m-4 " />
              <tr>
                <td>05</td>
                <td>
                  olive Yew <br />
                  yewo@gmail.com
                </td>
                <td className="  text-blue-400">#123f4gk</td>
                <td>20 Mar 2022</td>
                <td>$720.800</td>
                <td className=" text-yellow-500">Shipped</td>
                <td className="  flex  item-center">
                  {" "}
                  <button className=" hover:bg-blue-200  w-8 p-2 text-black bg-blue-100 rounded">
                    <RiPencilLine />
                  </button>
                  <button className=" w-8 p-2 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    <RiDeleteBin7Line />
                  </button>
                </td>
              </tr>
              <hr className="m-4 " />
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </>
  );
}

export default Body;
