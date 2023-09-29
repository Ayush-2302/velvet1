import React, { useContext } from "react";
import Calendar from "react-calendar";
import { BiPyramid, BiChevronRight } from "react-icons/bi";

import pic1 from "../asserts/images/w1.png";
import pic3 from "../asserts/images/w3.png";
import { val } from "./ValNav";

function CalNoti() {
  
  const cal= useContext(val)
  return (
    <>
      <div className=" space-y-2 border-2 w-96 h-[600px]   overflow-y-scroll rounded-md customize_overflow " style={{backgroundColor:  cal.mode==='light'?'white':'#17171c', }}>
        <div className="ml-5 mt-5 " >
          <Calendar />
        </div>

        <div className="p-6  " style={{color: cal.mode==='light'?'black':'white'}}>
          <div className="team flex justify-between items-center">
            <p className="  font-bold">Team Member</p>
            <div className="btn w-fit p-1 pl-2 pr-2 text-sm text-gray-500 bg-gray-100 rounded-md">
              {" "}
              View All
            </div>
          </div>
          <div className="data mt-2"  style={{color: cal.mode==='light'?'black':'white'}}>
            <div className="pic6 mt-2 p-3  border-r-gray-100 border-2      rounded-md  flex justify-between hover:text-black hover:bg-gray-100">
              <div className="w-10 h-10  rounded-md bg-green-100 flex items-center justify-center">
                <BiPyramid className=" text-green-500 w-5 h-5  " />
              </div>
              <div className="content text-sm  w-44 -ml-2">
                <p className=" font-bold">Vanessa James </p>
                <p className="text-xs text-gray-500  font-bold ">
                  {" "}
                  Front-end Developer
                </p>
              </div>
              <div>
                <p>
                  <BiChevronRight className=" w-5 h-5" />
                </p>
              </div>
            </div>
            <div className="pic6 mt-2 p-3  border-r-gray-100 border-2      rounded-md  flex justify-between hover:text-black hover:bg-gray-100">
              <div className="w-10 h-10  rounded-md  flex items-center justify-center">
                <img src={pic1} alt="" />
              </div>
              <div className="content text-sm  w-44 -ml-2">
                <p className=" font-bold">Kriti Harris </p>
                <p className="text-xs text-gray-500  font-bold ">
                  {" "}
                  Back-end Developer
                </p>
              </div>
              <div>
                <p>
                  <BiChevronRight className=" w-5 h-5" />
                </p>
              </div>
            </div>
            <div className="pic6 mt-2 p-3  border-r-gray-100 border-2      rounded-md  flex justify-between hover:text-black hover:bg-gray-100">
              <div className="w-10 h-10  rounded-md bg-yellow-100 flex items-center justify-center">
                <BiPyramid className=" text-yellow-500 w-5 h-5  " />
              </div>
              <div className="content text-sm  w-44 -ml-2">
                <p className=" font-bold">Mira Henry </p>
                <p className="text-xs text-gray-500  font-bold ">
                  {" "}
                 UI / UX Designer
                </p>
              </div>
              <div>
                <p>
                  <BiChevronRight className=" w-5 h-5" />
                </p>
              </div>
            </div>
            <div className="pic6 mt-2 p-3  border-r-gray-100 border-2      rounded-md  flex justify-between hover:text-black hover:bg-gray-100">
              <div className="w-10 h-10  rounded-md bg-blue-100 flex items-center justify-center">
                <p className=" text-blue-500 w-5 h-5  ">JK</p>
              </div>
              <div className="content text-sm  w-44 -ml-2">
                <p className=" font-bold"> James Kimberly </p>
                <p className="text-xs text-gray-500  font-bold ">
                  {" "}
                  Angular Developer
                </p>
              </div>
              <div>
                <p>
                  <BiChevronRight className=" w-5 h-5" />
                </p>
              </div>
            </div>
            <div className="pic6 mt-2 p-3  border-r-gray-100 border-2      rounded-md  flex justify-between hover:text-black hover:bg-gray-100">
              <div className="w-10 h-10  rounded-md flex items-center justify-center">
              <img src={pic3} alt="" />
              </div>
              <div className="content text-sm  w-44 -ml-2">
                <p className=" font-bold">Marley James </p>
                <p className="text-xs text-gray-500  font-bold ">
                  {" "}
                  Front-end Developer
                </p>
              </div>
              <div>
                <p>
                  <BiChevronRight className=" w-5 h-5" />
                </p>
              </div>
            </div>
            <div className="pic6  mt-2 p-3  border-r-gray-100 border-2      rounded-md hover:text-black flex justify-between hover:bg-gray-100">
              <div className="w-10 h-10  rounded-md bg-red-100 flex items-center justify-center">
                <p className=" text-red-500 w-5 h-5  " > MA</p>
              </div>
              <div className="content text-sm  w-44 -ml-2">
                <p className=" font-bold">Vanessa Anna </p>
                <p className="text-xs text-gray-500  font-bold ">
                  {" "}
                    UI / UX Desiner
                </p>
              </div>
              <div>
                <p>
                  <BiChevronRight className=" w-5 h-5" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalNoti;
