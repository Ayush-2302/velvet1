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
  const mode_change = {
    backgroundColor: bod.mode === "light" ? "white" : "#262C3C",
    color: bod.mode === "dark" ? "white" : "black",
    boxShadow: bod.mode === "light" ? "" : " 0px 3px 4px 0px #373C4A",
  };

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
      <div className="bod">
        {/* <div onClick={enterFullScreen} className="ayush text-center"> ayush</div> */}
        <div className="keybody mb-1 ">
          <div className="cards1  mr-5">
            <div className="card shadow-inner card1" style={mode_change}>
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
                    Adam Barry finished task on
                    <span className=" font-bold text-cyan-500">
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
                    Adam Barry finished task on
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
                    Adam Barry finished task on
                    <span className=" font-bold text-green-400">
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
                    Adam Barry finished task on
                    <span className=" font-bold text-orange-400">
                      Angula JS Template
                    </span>
                  </p>
                  <p className="text-xs date">09 july 2021</p>
                </div>
              </div>

              <div></div>
            </div>
            {/* card 2 */}
            <div className="card card2 " style={mode_change}>
              <div className="top  flex justify-between">
                <h1 className=" text-lg font-bold"> Sale By Country </h1>
                <button className="w-fit flex items-center text-sm text-black pl-2 pr-2 bg-gray-100 rounded-lg p-1">
                  View All
                  <RiArrowDownSLine />
                </button>
              </div>
              <hr className=" m-2" />
              <div className="flex flex-col ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 customize_overflow">
                  <div className="inline-block min-w-full  sm:px-4 lg:px-8">
                    <table className="w-11/12 text-left text-sm  font-semibold">
                      <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" className="px-4 py-4">
                            Country
                          </th>
                          <th scope="col" className="px-4 py-4">
                            Sales
                          </th>
                          <th scope="col" className="px-4 py-4">
                            Bounce
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap flex items-center px-4 py-4">
                            <img
                              src={canada}
                              className=" mr-2 p-1 h-8 w-8  rounded-full bg-gray-100 "
                              alt=""
                            />
                            Canada
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">2500</td>
                          <td className="whitespace-nowrap px-4 py-4  ">
                            <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                              24%
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap flex items-center px-4 py-4">
                            <img
                              src={germany}
                              className=" mr-2 p-1 h-8 w-8  rounded-full bg-gray-100 "
                              alt=""
                            />
                            Germany
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">2500</td>
                          <td className="whitespace-nowrap px-4 py-4  ">
                            <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                              24%
                            </span>
                          </td>
                        </tr>

                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap flex items-center px-4 py-4">
                            <img
                              src={mexico}
                              className=" mr-2 p-1 h-8 w-8  rounded-full bg-gray-100 "
                              alt=""
                            />
                            Mexico
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">2500</td>
                          <td className="whitespace-nowrap px-4 py-4  ">
                            <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                              24%
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap flex items-center px-4 py-4">
                            <img
                              src={russia}
                              className=" mr-2 p-1 h-8 w-8  rounded-full bg-gray-100 "
                              alt=""
                            />
                            Russia
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">2500</td>
                          <td className="whitespace-nowrap px-4 py-4  ">
                            <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                              24%
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap flex items-center px-4 py-4">
                            <img
                              src={usa}
                              className=" mr-2 p-1 h-8 w-8  rounded-full bg-gray-100 "
                              alt=""
                            />
                            U.S.A
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">2500</td>
                          <td className="whitespace-nowrap px-4 py-4  ">
                            <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                              24%
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*card 3 */}
          <div className="cards2 mr-5   ">
            <div
              className="card card3 p-0  overflow-x-auto "
              style={mode_change}
            >
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
                    }  translate-x-16 absolute week h-fit w-28 mt-4 hover:cursor-pointer rounded-lg `}
                    style={mode_change}
                  >
                    <ul className=" ml-2 space-y-2 p-2  ">
                      <li className=" hover:text-blue-500">Last Month</li>
                      <hr />
                      <li className=" hover:text-blue-500">Last week</li>
                      <hr />
                      <li className=" hover:text-blue-500">Share Report</li>
                    </ul>
                  </div>
                </ul>
              </div>
              <hr className=" m-1" />

              <img src={stock} alt=" img" className=" w-fit h-96  " />
            </div>
            {/* card 4 */}
            <div
              className="card  card5 grow customize_overflow overflow-x-scroll"
              style={mode_change}
            >
              <div className="top flex justify-between">
                <h1 className=" text-lg font-bold">Top Selling Products </h1>
                <div className="flex">
                  <button onClick={handleselling}>
                    <p className="w-8 font-bold text-black bg-gray-100 rounded p-1">
                      :
                    </p>
                  </button>
                  <div
                    className={` mt-10  -translate-x-32  border-2 shadow-inner absolute rounded-lg    ${
                      selling ? "" : "hidden"
                    }`}
                    style={mode_change}
                  >
                    <ul className=" text-sm  font-bold ml-2 p-2 space-y-3 hover:cursor-pointer  ">
                      <li className="hover:text-blue-500">Action </li>
                      <hr />
                      <li className="hover:text-blue-500">Another action </li>
                      <hr />
                      <li className="hover:text-blue-500">
                        Something else here
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <hr className=" mt-2" />
              <div class=" flex-col justify-center items-center w-[90%] m-auto  ">
                <div class="sm:-mx-6 lg:-mx-8 ">
                  <div class="inline-block w-full  py-2 ">
                    <div class="overflow-hidden">
                      <table class=" min-w-full text-left text-sm font-medium">
                        <thead class=" min-w-full border-b font-medium dark:border-neutral-500">
                          <tr>
                            <th scope="col" class="px-4 py-2">
                              Profuct Name
                            </th>
                            <th scope="col" class="px-4 py-2">
                              Stock
                            </th>
                            <th scope="col" class="px-2  py-2">
                              Prise
                            </th>
                            <th scope="col" class="px-2  py-2">
                              Sold
                            </th>
                            <th scope="col" class="px-2  py-2">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b dark:border-neutral-500">
                            <td class="whitespace-nowrap flex space-x-2 items-center py-2 font-medium">
                              <img
                                src={shoes}
                                alt=""
                                className="w-12 h-12 rounded-xl"
                              />
                              <p> Sports Shoes for Men </p>
                            </td>
                            <td class="whitespace-nowrap px-4 py-2">
                              <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-green-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-green-700">
                                In Stock
                              </span>
                            </td>
                            <td class="whitespace-nowrap px-2  py-2">$73.800</td>
                            <td class="whitespace-nowrap px-2  py-2">1534</td>
                            <td class="whitespace-nowrap px-2  py-2 flex space-x-2 items-center">
                              <span className="whitespace-nowrap rounded-[0.27rem] bg-green-100 px-2 pb-2 pt-2 text-center align-baseline  font-bold  text-green-700">
                                <RiPencilLine />
                              </span>
                              <span className="whitespace-nowrap rounded-[0.27rem] bg-red-100 px-2 pb-2 pt-2 text-center align-baseline  font-bold  text-red-700">
                                <RiDeleteBin7Line />
                              </span>
                            </td>
                          </tr>
                          <tr class="border-b dark:border-neutral-500">
                            <td class="whitespace-nowrap flex space-x-2 items-center py-2 font-medium">
                              <img
                                src={cactus}
                                alt=""
                                className="w-12 h-12 rounded-xl"
                              />
                              <p> Beautiful Flower Frame </p>
                            </td>
                            <td class="whitespace-nowrap px-4 py-2">
                              <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-blue-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-blue-700">
                                Few Left
                              </span>
                            </td>
                            <td class="whitespace-nowrap px-2  py-2">$73.800</td>
                            <td class="whitespace-nowrap px-2  py-2">4987</td>
                            <td class="whitespace-nowrap px-2  py-2 flex space-x-2 items-center">
                              <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-green-100 px-2 pb-2 pt-2 text-center align-baseline  font-bold  text-green-700">
                                <RiPencilLine />
                              </span>
                              <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-red-100 px-2 pb-2 pt-2 text-center align-baseline  font-bold  text-red-700">
                                <RiDeleteBin7Line />
                              </span>
                            </td>
                          </tr>
                          <tr class="border-b dark:border-neutral-500">
                            <td class="whitespace-nowrap flex space-x-2 items-center py-2 font-medium">
                              <img
                                src={watch}
                                alt=""
                                className="w-12 h-12 rounded-xl"
                              />
                              <p> Small Alarm Watch </p>
                            </td>
                            <td class="whitespace-nowrap px-4 py-2">
                              <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-red-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-red-700">
                                Out of Stock
                              </span>
                            </td>
                            <td class="whitespace-nowrap px-2  py-2">
                              $713.800
                            </td>
                            <td class="whitespace-nowrap px-2  py-2">87875</td>
                            <td class="whitespace-nowrap px-2  py-2 flex space-x-2 items-center">
                              <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-green-100 px-2 pb-2 pt-2 text-center align-baseline  font-bold  text-green-700">
                                <RiPencilLine />
                              </span>
                              <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-red-100 px-2 pb-2 pt-2 text-center align-baseline  font-bold  text-red-700">
                                <RiDeleteBin7Line />
                              </span>
                            </td>
                          </tr>
                          <tr class="border-b dark:border-neutral-500">
                            <td class="whitespace-nowrap flex space-x-2 items-center py-2 font-medium">
                              <img
                                src={smartphone}
                                alt=""
                                className="w-12 h-12 rounded-xl"
                              />
                              <p> New Smart Phone </p>
                            </td>
                            <td class="whitespace-nowrap px-4 py-2">
                              <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-green-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-green-700">
                                In-Stock
                              </span>
                            </td>
                            <td class="whitespace-nowrap px-2  py-2">
                              $713.800
                            </td>
                            <td class="whitespace-nowrap px-2  py-2">87875</td>
                            <td class="whitespace-nowrap px-2  py-2 flex space-x-2 items-center">
                              <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-green-100 px-2 pb-2 pt-2 text-center align-baseline  font-bold  text-green-700">
                                <RiPencilLine />
                              </span>
                              <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-red-100 px-2 pb-2 pt-2 text-center align-baseline  font-bold  text-red-700">
                                <RiDeleteBin7Line />
                              </span>
                            </td>
                          </tr>
                          <tr class="border-b dark:border-neutral-500">
                            <td class="whitespace-nowrap flex space-x-2 items-center py-2 font-medium">
                              <img
                                src={camera}
                                alt=""
                                className="w-12 h-12 rounded-xl"
                              />
                              <p>Camera</p>
                            </td>
                            <td class="whitespace-nowrap px-4 py-2">
                              <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-green-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-green-700">
                                In-Stock
                              </span>
                            </td>
                            <td class="whitespace-nowrap px-2  py-2">
                              $713.800
                            </td>
                            <td class="whitespace-nowrap px-2  py-2">87875</td>
                            <td class="whitespace-nowrap px-2  py-2 flex space-x-2 items-center">
                              <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-green-100 px-2 pb-2 pt-2 text-center align-baseline  font-bold  text-green-700">
                                <RiPencilLine />
                              </span>
                              <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-red-100 px-2 pb-2 pt-2 text-center align-baseline  font-bold  text-red-700">
                                <RiDeleteBin7Line />
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* card 5 */}
          <div className="cards3 mr-5  ">
            <div className="card overflow-x-auto  card3" style={mode_change}>
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
                    } mt-2  -translate-x-20 w-36 absolute  border-2 shadow-inner  rounded-lg `}
                    style={mode_change}
                  >
                    <ul className=" ml-2 space-y-2 p-2 hover:cursor-pointer ">
                      <li className=" hover:text-blue-600">Today</li>
                      <hr />
                      <li className=" hover:text-blue-600">This Week</li>
                      <hr />
                      <li className=" hover:text-blue-600">Last week</li>
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
            <div
              className="card overflow-x-auto  card6 p-2"
              style={mode_change}
            >
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
                    } mt-2  -translate-x-20 w-36 absolute  border-2 shadow-inne rounded-lg `}
                    style={mode_change}
                  >
                    <ul className=" ml-2 space-y-2 p-2 hover:cursor-pointer ">
                      <li className=" hover:text-blue-600">Today</li>
                      <hr />
                      <li className=" hover:text-blue-600">This Week</li>
                      <hr />
                      <li className=" hover:text-blue-600">Last week</li>
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
                    <BiCube />
                  </div>
                  <p>Fashion</p>
                </div>
                <div className="progress w-11/12 h-1 bg-purple-600 animate-pulse mt-5"></div>

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
                <div className="progress w-11/12 h-1 bg-blue-600 animate-pulse mt-5"></div>

                <hr className=" m-2" />
              </div>
            </div>
          </div>
        </div>
        {/* card 7 */}

        <div className=" cards4 xl:m-auto pb-8   mr-5">
          <div className="card card7 overflow-x-auto " style={mode_change}>
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
                  } mt-10  -translate-x-16 absolute  border-2 shadow-inner   rounded-lg `}
                  style={mode_change}
                >
                  <ul className=" ml-2 space-y-3 p-2 hover:cursor-pointer ">
                    <li className=" hover:text-blue-600">Last Month</li>
                    <hr />
                    <li className=" hover:text-blue-600">Last week</li>
                    <hr />
                    <li className=" hover:text-blue-600">Share Report</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className=" m-3" />
            <div className=" flex justify-between">
              <div className=" flex justify-center items-center space-x-2 ">
                <div className=" bg-green-200 w-10 h-10 rounded-full p-3  text-green-800  ">
                <FiCreditCard />
                </div>
                <p className="  font-semibold text-sm w-24">ATM Withdrawl</p>
              </div>
              <span className="flex items-center text-sm text-green-500">$245000</span>
            </div>
            <p className=" ml-12 text-gray-500 text-sm">Just Now</p>

            <hr className=" m-1" />

            <div className=" flex justify-between">
              <div className=" flex justify-center items-center space-x-2 ">
              <div className=" bg-red-200 w-10 h-10 rounded-full p-3  text-red-800  ">
                <FiSmartphone  />
                </div>
                <p className="font-semibold w-24">Movies Subscription</p>
              </div>
              <span className="flex items-center text-sm text-red-500">$100.00 </span>
            </div>
            <p className=" ml-12 text-gray-500 text-sm">Just Now</p>

            <hr className=" m-1" />

            <div className=" flex justify-between">
              <div className=" flex justify-center items-center space-x-2 ">
              <div className=" bg-green-200 w-10 h-10 rounded-full p-3  text-green-800  ">
                <FiArrowDown  />
                </div>
                <p className="font-semibold w-24">Recieved From John </p>
              </div>
              <span className="flex items-center text-sm text-green-500">$15000 </span>
            </div>
            <p className=" ml-12 text-gray-500 text-sm">17-04-2022</p>

            <hr className=" m-1" />

            <div className=" flex justify-between">
              <div className=" flex justify-center items-center space-x-2">
              <div className=" bg-red-200 w-10 h-10 rounded-full p-3  text-red-800  ">
                <FiCreditCard />
                </div>
                <p className="font-semibold w-24">Credit Card</p>
              </div>
              <span className="flex items-center text-sm text-red-500">-$3000 </span>
            </div>
            <p className=" ml-12 text-gray-500 text-sm">Just Now</p>

            <hr className=" m-1" />

            <div className=" flex justify-between">
              <div className=" flex justify-center items-center space-x-2 ">
              <div className=" bg-green-200 w-10 h-10 rounded-full p-3  text-green-800  ">
                <FiCreditCard />
                </div>
                <p className="font-semibold w-24">Transfer to Self</p>
              </div>
              <span className="flex items-center text-sm  text-green-500">$15000 </span>
            </div>
            <p className=" ml-12 text-gray-500 text-sm">30-04-2022</p>

            <hr className=" m-1" />

            <div className=" flex justify-between">
              <div className=" flex justify-center items-center space-x-2 ">
              <div className=" bg-red-200 w-10 h-10 rounded-full p-3 text-red-800  ">
                <FiRepeat />
                </div>
                <p className="font-semibold w-24 ">Transfer to x Card </p>
              </div>
              <span className="flex items-center text-sm text-red-500">$245000 </span>
            </div>
            <p className=" ml-12 text-gray-500 text-sm">30-04-2022</p>
          </div>

          {/*   card 8*/}

          <div
            className="card card8 grow h-fit  mr-5   overflow-x-auto"
            style={mode_change}
          >
            <div className="top flex  sm:grow-2 justify-between">
              <h1 className=" text-lg font-bold">Recent Orders </h1>

              <div className="flex">
                <button onClick={handleRecent}>
                  <p className="w-8 font-bold bg-gray-100 text-black rounded p-1">
                    :
                  </p>
                </button>
                <div
                  className={`${
                    recent ? "" : "hidden"
                  } -translate-x-24 mt-10 order border-2 shadow-inner rounded-lg absolute`}
                  style={mode_change}
                >
                  <ul className=" p-2 space-y-2 hover:cursor-pointer">
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
