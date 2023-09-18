import React, { useState } from "react";
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

import { BiShare, BiDownload } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import canada from "../asserts/images/canada.png";
import germany from "../asserts/images/germany.png";
import mexico from "../asserts/images/mexico.png";
import russia from "../asserts/images/russia.png";
import usa from "../asserts/images/usa.png";

function Body() {
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

  return (
    <>
      {/*  card1 */}
      <div className=" container  ">
      <div className="cards1   ">

        <div className="card  card1">
          <h1 className="text-lg  font-bold">Recent Activity</h1>
          <hr className="mt-3" />

          <div className=" text-sm mt-4 ">
            <div className=" flex ">
              <BsFillDiamondFill color="purple" size="15px" />
              <p className=" ml-5 -mt-2 font-bold">Task Finished</p>
            </div>
            <div className="flex items-center justify-between">
              <p className=" text-gray-600 w-32 ml-8 ">
                {" "}
                Adam Barry finished task on{" "}
                <span className=" font-bold text-purple-900">
                  {" "}
                  Angula JS Template
                </span>
              </p>
              <p className="">09 july 2021</p>
            </div>
          </div>

          <div className=" text-sm  mt-4 ">
            <div className=" flex ">
              <BsFillDiamondFill color="skyblue" size="15px" />
              <p className=" ml-5 -mt-2 font-bold">Task Finished</p>
            </div>
            <div className="flex items-center justify-between">
              <p className=" text-gray-600 w-32 ml-8">
                {" "}
                Adam Barry finished task on{" "}
                <span className=" font-bold text-cyan-500">
                  {" "}
                  Angula JS Template
                </span>
              </p>
              <p className="">09 july 2021</p>
            </div>
          </div>

          <div className=" text-sm  mt-4 ">
            <div className=" flex ">
              <BsFillDiamondFill color="yellow" size="15px" />
              <p className=" ml-5 -mt-2 font-bold">Task Finished</p>
            </div>
            <div className="flex items-center justify-between">
              <p className=" text-gray-600 w-32 ml-8">
                {" "}
                Adam Barry finished task on{" "}
                <span className=" font-bold text-yellow-300">
                  {" "}
                  Angula JS Template
                </span>
              </p>
              <p className="">09 july 2021</p>
            </div>
          </div>

          <div className=" text-sm  mt-4 ">
            <div className=" flex ">
              <BsFillDiamondFill color="green" size="15px" />
              <p className=" ml-5 -mt-2 font-bold">Task Finished</p>
            </div>
            <div className="flex items-center justify-between">
              <p className=" text-gray-600 w-32 ml-8">
                {" "}
                Adam Barry finished task on{" "}
                <span className=" font-bold text-green-400">
                  {" "}
                  Angula JS Template
                </span>
              </p>
              <p className="">09 july 2021</p>
            </div>
          </div>

          <div className=" text-sm  mt-4 ">
            <div className=" flex ">
              <BsFillDiamondFill color="orange" size="15px" />
              <p className=" ml-5 -mt-2 font-bold">Task Finished</p>
            </div>
            <div className="flex items-center justify-between">
              <p className=" text-gray-600 w-32 ml-8">
                {" "}
                Adam Barry finished task on{" "}
                <span className=" font-bold text-orange-400">
                  {" "}
                  Angula JS Template
                </span>
              </p>
              <p className="">09 july 2021</p>
            </div>
          </div>

          <div></div>
        </div>
        {/* card 2 */}
        <div className="card  ">
          <div className="top flex justify-between">
            <h1 className=" text-lg font-bold"> Sale By Country </h1>
            <button className="w-fit text-sm bg-gray-100 rounded-lg p-1">
              View All
            </button>
          </div>
          <hr className=" m-3" />

          <table className=" w-11/12 m-auto ">
            <thead className=" ">
              <tr className="top flex justify-between">
                <th>Country</th>
                <th className="ml-16"> Scale </th>
                <th> Bounce</th>
              </tr>
            </thead>
            <hr className=" m-3" />
            <tbody>
              <tr className="top flex  items-center justify-between">
                <td className=" flex items-center ">
                  <img
                    src={canada}
                    className=" mr-2 p-1 h-8 w-8  rounded-full bg-gray-100 "
                    alt=""
                  />
                  <p>Canada</p>
                </td>
                <td>2500</td>
                <td className=" text-green-500">24%</td>
              </tr>
              <hr className=" m-5" />

              <tr className="top flex items-center justify-between">
                <td className=" flex items-center ">
                  <img
                    src={germany}
                    className=" mr-2 p-1 h-8 w-8  rounded-full bg-gray-100 "
                    alt=""
                  />
                  Germany
                </td>
                <td>846</td>
                <td className=" text-red-500">22.33%</td>
              </tr>
              <hr className=" m-5" />
              <tr className="top flex items-center justify-between">
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
                <td className="  text-red-500">14.8%</td>
              </tr>
              <hr className=" m-5" />
              <tr className="top flex justify-between">
                <td className=" flex items-center">
                  {" "}
                  <img
                    src={russia}
                    className=" mr-2 p-1  h-8 w-8  rounded-full bg-gray-100 "
                    alt=""
                  />
                  Russia
                </td>
                <td>482</td>
                <td className="  text-green-500">05.8%</td>
              </tr>
              <hr className=" m-5" />
              <tr className="top flex justify-between">
                <td className=" flex items-center">
                  {" "}
                  <img
                    src={usa}
                    className=" mr-2 p-1 h-8 w-8  rounded-full bg-gray-100 "
                    alt=""
                  />
                  U.S.A
                </td>
                <td>1410</td>
                <td className=" text-red-500">13.08%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/*card 3 */}
      <div className="cards2 w-[100%]">
        <div className="card card2 ">
          <div className="top flex justify-between">
            <h1 className=" text-lg font-bold">Scales Statistics </h1>
            <ul className="btn  text-sm ">
              <div className="flex space-x-2 flex-wrap justify-evenly">
                <li>
                  <button className="w-fit justify-center  bg-purple-300  text-purple-900 rounded-lg flex space-x-1 items-center hover:bg-purple-600 hover:text-white p-1 ">
                    <RiFilter3Line color="purple" />
                    <p>Filter</p>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleweek();
                    }}
                    className="w-fit flex justify-between items-center space-x-1 bg-purple-600 text-white rounded-lg p-1"
                  >
                    <RiCalendar2Line color="white" />
                    <p>This Week</p>
                    <RiArrowDownSLine color="white" />
                  </button>
                </li>
              </div>

              <div
                className={` ${weekdrop ? "" : "hidden"
                  }  translate-x-16 absolute week h-fit bg-white w-28 rounded-lg `}
              >
                <ul className=" ml-2 space-y-3 p-2 ">
                  <li>Last Month</li>
                  <li>Last week</li>
                  <li>Share Report</li>
                </ul>
              </div>
            </ul>
          </div>
          <hr className=" m-4" />

          <img
            src="https://images.unsplash.com/photo-1639754390580-2e7437267698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGklMjBjaGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=" img"
            className=" w-full h-80"
          />
        </div>
        {/* card 4 */}
        <div className="card  card5 grow overflow-x-auto   ">
          <div className="top flex justify-between">
            <h1 className=" text-lg font-bold">Top Selling Products </h1>
            <div className="flex">
              <button
                onClick={() => {
                  handleselling();
                }}
              >
                <p className="w-8 font-bold bg-gray-100 rounded p-1">:</p>
              </button>
              <div
                className={` bg-white  mt-10  -translate-x-32  border-2 shadow-inner absolute     ${selling ? "" : "hidden"
                  }`}
              >
                <ul className=" text-sm  font-bold ml-2 p-2 space-y-3 ">
                  <li className="hover:text-blue-500">Action </li>
                  <li className="hover:text-blue-500">Another action </li>
                  <li className="hover:text-blue-500">Something else here </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className=" m-2" />
          <table className=" w-[95%]  m-auto ">
            <thead>
              <tr className="break-words font-semibold space-x-5 flex justify-between ">
                <th>Product Name</th>
                <th> Stock </th>
                <th> price</th>
                <th> Sold</th>
                <th> Action</th>
              </tr>
            </thead>
            <hr className=" m-5" />
            <tbody className=" text-sm">
              <tr className=" break-words space-x-5 flex justify-between ">
                <td className=" text-sm">Sports Shoes For Men</td>
                <td className="  text-green-500">in Stocks</td>
                <td>$73.800</td>
                <td>1534</td>
                <td className=" flex ">
                  {" "}
                  <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                    🖋️
                  </button>
                  <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    🔆
                  </button>
                </td>
              </tr>
              <hr className="m-4 " />
              <tr className="break-words space-x-5 flex justify-between ">
                <td>Beautiful flower frame </td>
                <td className=" text-blue-400">Few-left</td>
                <td>$73.800</td>
                <td>4987</td>
                <td className="flex">
                  <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                    🖋️
                  </button>
                  <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    🔆
                  </button>
                </td>
              </tr>
              <hr className="m-4 " />
              <tr className="break-words space-x-5 flex justify-between">
                <td>Small alarm Watch </td>
                <td className="  text-red-500">Out of stock</td>
                <td>$13.800</td>
                <td>87875</td>
                <td className=" flex">
                  <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                    🖋️
                  </button>
                  <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    🔆
                  </button>
                </td>
              </tr>
              <hr className="m-4 " />
              <tr className="break-words space-x-5 flex justify-between ">
                <td> New Smart Phone </td>
                <td className="  text-green-500">In-Stock</td>
                <td>$14.600</td>
                <td>87875</td>
                <td className="flex ">
                  <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                    🖋️
                  </button>
                  <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    🔆
                  </button>
                </td>
              </tr>
              <hr className="m-4 " />
              <tr className="break-words space-x-5 flex justify-between ">
                <td>Black Colord camera </td>
                <td className="  text-green-500">In-Stock</td>
                <td>$23.800</td>
                <td>4087</td>
                <td className="flex">
                  <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                    🖋️
                  </button>
                  <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    🔆
                  </button>
                </td>
              </tr>
              <hr className="m-4 " />
            </tbody>
          </table>
        </div>
      </div>

      {/* card 5 */}
      <div className="cards3 mr-5  ">
        <div className="card  card3">
          <div className="top flex  justify-between">
            <h1 className=" text-lg font-bold">Scales Value </h1>
            <div>
              <button
                onClick={() => {
                  handleValue();
                }}
                className="w-fit text-sm bg-gray-100 rounded-lg p-1"
              >
                View All
              </button>
              <div
                className={`${value ? "" : "hidden"
                  } mt-2  -translate-x-20 w-36 absolute  border-2 shadow-inner bg-white  rounded-lg `}
              >
                <ul className=" ml-2 space-y-3 p-2 ">
                  <li className=" hover:text-blue-500">Today</li>
                  <li className=" hover:text-blue-500">This Week</li>
                  <li className=" hover:text-blue-500">Last week</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className=" m-2" />

          <img
            src="https://images.unsplash.com/photo-1612010167102-d1e8f83833e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className=" w-full "
          />
        </div>


        {/* card6 */}
        <div className="card  card6 ">
          <div className="top flex justify-between">
            <h1 className=" text-lg font-bold">Monthly Profit </h1>
            <div className="">
              <button
                onClick={() => {
                  handleProf();
                }}
                className="w-fit text-sm bg-gray-100 rounded-lg p-1"
              >
                View All
              </button>
              <div
                className={`${prof ? "" : "hidden"
                  } mt-2  -translate-x-20 w-36 absolute  border-2 shadow-inner bg-white  rounded-lg `}
              >
                <ul className=" ml-2 space-y-3 p-2 ">
                  <li className=" hover:text-blue-500">Today</li>
                  <li className=" hover:text-blue-500">This Week</li>
                  <li className=" hover:text-blue-500">Last week</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className=" m-2" />
          <h1 className=" font-bold text-2xl">$78344</h1>
          <span className=" to-gray-200">Total Profit Growth Of 85%</span>
          <hr className=" m-2" />
          <p>Fashion</p>
          <progress
            className="progress progress-info  w-1/2 h-1"
            value="100"
            max="100"
          ></progress>
          <hr className=" m-2" />
          <p>Home Furniture</p>
          <progress
            className="progress progress-info w-1/2 h-1"
            value="100"
            max="100"
          ></progress>
          <hr className=" m-2" />
          <p>Electronics</p>
          <progress
            className="progress danger-info w-1/2 h-1"
            value="100"
            max="100"
          ></progress>
          <hr className=" m-2" />
          <p>Groceries</p>
          <progress
            className="progress progress-info w-1/2 h-1"
            value="100"
            max="100"
          ></progress>
          <hr className=" m-2" />
        </div>
      </div>
      </div>
      {/* card 7 */}

      <div className=" cards4 xl:m-auto ">
              <div className="card card7 xl:w-[27%] ">
        <div className="top flex justify-between">
          <h1 className=" text-lg font-bold">Transaction History </h1>
          <div className="flex">
            <button
              onClick={() => {
                handleTrans();
              }}
              className="w-fit text-sm bg-gray-100 rounded-lg p-1"
            >
              View All
            </button>
            <div
              className={` ${trans ? "" : "hidden"
                } mt-10  -translate-x-16 absolute  border-2 shadow-inner bg-white  rounded-lg `}
            >
              <ul className=" ml-2 space-y-3 p-2 ">
                <li>Last Month</li>
                <li>Last week</li>
                <li>Share Report</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className=" m-3" />
        <div className=" flex justify-between">
          <div className=" flex justify-center items-center ">
            <FiCreditCard className="green mr-2 text-green-800 bg-green-200 w-8 h-5 rounded-md" />{" "}
            <p className="  font-semibold w-24">ATM Withdrawl</p>
          </div>
          <span className="flex items-center  text-green-500">$245000 </span>
        </div>
        <p className=" ml-10 text-gray-500 text-sm">Just Now</p>

        <hr className=" m-1" />

        <div className=" flex justify-between">
          <div className=" flex justify-center items-center ">
            <FiSmartphone className="green mr-2 text-red-600 bg-red-200 w-8 h-5 rounded-md" />{" "}
            <p className="font-semibold w-24">Movies Subscription</p>
          </div>
          <span className="flex items-center  text-red-500">$100.00 </span>
        </div>
        <p className=" ml-10 text-gray-500 text-sm">Just Now</p>

        <hr className=" m-1" />

        <div className=" flex justify-between">
          <div className=" flex justify-center items-center ">
            <FiArrowDown className="green mr-2 text-green-800 bg-green-200 w-8 h-5 rounded-md" />{" "}
            <p className="font-semibold w-24">Recieved From John </p>
          </div>
          <span className="flex items-center  text-green-500">$15000 </span>
        </div>
        <p className=" ml-10 text-gray-500 text-sm">17-04-2022</p>

        <hr className=" m-1" />

        <div className=" flex justify-between">
          <div className=" flex justify-center items-center ">
            <FiCreditCard className="green mr-2 text-red-600 bg-red-200 w-8 h-5 rounded-md" />{" "}
            <p className="font-semibold w-24">Credit Card</p>
          </div>
          <span className="flex items-center  text-red-500">-$3000 </span>
        </div>
        <p className=" ml-10 text-gray-500 text-sm">Just Now</p>

        <hr className=" m-1" />

        <div className=" flex justify-between">
          <div className=" flex justify-center items-center ">
            <FiCreditCard className="green mr-2 text-green-800 bg-green-200 w-8 h-5 rounded-md" />{" "}
            <p className="font-semibold w-24">Transfer to Self</p>
          </div>
          <span className="flex items-center  text-green-500">$15000 </span>
        </div>
        <p className=" ml-10 text-gray-500 text-sm">30-04-2022</p>

        <hr className=" m-1" />

        <div className=" flex justify-between">
          <div className=" flex justify-center items-center ">
            <FiRepeat className="green mr-2 text-red-600 bg-red-200 w-8 h-5 rounded-md" />{" "}
            <p className="font-semibold w-24">Transfer to x Card </p>
          </div>
          <span className="flex items-center  text-red-500">$245000 </span>
        </div>
        <p className=" ml-10 text-gray-500 text-sm">30-04-2022</p>
      </div>

      {/*   card 8*/}

      <div className="card card8 grow h-fit xl:-mt-10   overflow-x-auto">
        <div className="top flex  sm:grow-2 justify-between">
          <h1 className=" text-lg font-bold">Recent Orders </h1>

          <div className="flex">
            <button onClick={handleRecent}>
              <p className="w-8 font-bold bg-gray-100 rounded p-1">:</p>
            </button>
            <div
              className={`${recent ? "" : "hidden"
                } bg-white -translate-x-24 mt-10 order border-2 shadow-inner absolute`}
            >
              <ul className=" p-2 space-y-2">
                <li className="flex space-x-1 items-center hover:text-blue-500">
                  <BiShare />
                  <p>Share</p>
                </li>
                <li className="flex space-x-1 items-center hover:text-blue-500">
                  <BiDownload />
                  <p>Download</p>
                </li>
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
          className=" w-11/12 m-auto  p-4 
          "
        >
          <thead>
            <tr className=" text-semibold  flex justify-between break-words space-x-5 grow ">
              <th> S.NO</th>
              <th>Customer Name</th>
              <th>Order ID</th>
              <th>Order Date</th>
              <th> price</th>
              <th> Status</th>
              <th className=" "> Action</th>
            </tr>
          </thead>
          <hr className=" m-4" />
          <tbody className=" text-sm">
            <tr className="flex justify-between space-x-5 break-word ">
              <td>01</td>
              <td>
                Patty Furniture <br />
                patty@gmail.com
              </td>
              <td className="  text-blue-400">#123dfk</td>
              <td>01 Apr 2022</td>
              <td>$73.800</td>
              <td className="  text-green-500">Delivered</td>
              <td className="  flex   ">
                {" "}
                <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                  🖋️
                </button>
                <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                  🔆
                </button>
              </td>
            </tr>
            <hr className="mt-4 " />
            <tr className="flex justify-between mt-4 space-x-5 items-center break-word ">
              <td>02</td>
              <td>
                Allie Grate <br />
                allie@spuko.com
              </td>
              <td className="  text-blue-400">#123df2</td>
              <td>02 Apr 2022</td>
              <td>$13.800</td>
              <td className=" text-green-500">Delivered</td>
              <td className=" flex ">
                {" "}
                <button className=" hover:bg-blue-200  w-8 p-2 bg-blue-100 rounded">
                  🖋️
                </button>
                <button className=" w-8 p-2 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                  🔆
                </button>
              </td>
            </tr>
            <hr className="m-4 " />
            <tr className="flex justify-between space-x-5 break-word ">
              <td>03</td>
              <td>
                Peg Legge <br />
                pegy@spuko.com
              </td>
              <td className="  text-blue-400">#123d5fk</td>
              <td>24 mar 2022</td>
              <td>$37.800</td>
              <td className=" text-red-500">cancelled</td>
              <td className=" flex ">
                {" "}
                <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                  🖋️
                </button>
                <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                  🔆
                </button>
              </td>
            </tr>
            <hr className="m-4 " />
            <tr className="flex justify-between space-x-5  break-word ">
              <td>04</td>
              <td>
                Maureen Biologist <br />
                maure@gmail.com
              </td>
              <td className="  text-blue-400">#124dfk</td>
              <td>24 Mar 2022</td>
              <td>$33.800</td>
              <td className=" text-blue-500">pending</td>
              <td className=" flex ">
                {" "}
                <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                  🖋️
                </button>
                <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                  🔆
                </button>
              </td>
            </tr>
            <hr className="m-4 " />
            <tr className="flex justify-between space-x-5 break-word ">
              <td>05</td>
              <td>
                olive Yew <br />
                yewo@gmail.com
              </td>
              <td className="  text-blue-400">#123f4gk</td>
              <td>20 Mar 2022</td>
              <td>$720.800</td>
              <td className=" text-yellow-500">Shipped</td>
              <td className="  flex">
                {" "}
                <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                  🖋️
                </button>
                <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                  🔆
                </button>
              </td>
            </tr>
            <hr className="m-4 " />
          </tbody>
        </table>
      </div>
      </div>

    </>
  );
}

export default Body;
