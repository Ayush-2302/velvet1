import React, { useContext } from "react";
import { BsXLg } from "react-icons/bs";
import {
  BiUser,
  BiPhone,
  BiChat,
  BiCog,
  BiCalendar,
  BiEnvelope,
} from "react-icons/bi";
import { cross } from "./Navbar";
import { val } from "./ValNav";

function Appsicons() {
  const ico= useContext(val)

  const button = useContext(cross);
  
  return (
    <>
      <div className={`  cart  w-full p-3  float-right` } style={{color: ico.mode==='light'?'black':'white' }} >
        <div className="flex justify-between items-center">
          <span className=" text-2xl font-bold  ">
            Realated Apps 
          </span>
          <button
            onClick={()=>{
              button.handleapp()
            }
              
            }
            className=" w-6 h-7 rounded-md  border-gray-100 text-black  bg-slate-200 p-1 "
          >
            <BsXLg className=" w-4 h-5" />
          </button>
        </div>

        <hr className=" m-2" />
        <div className="icons grid grid-cols-2 gap-3 pt-2 m-auto">
          <div className="icon rounded-md   border-2  border-gray-100  hover:bg-gray-100 hover:text-black">
            <BiCalendar className="  m-auto mt-4  w-9 p-1.5 h-9 text-green-600 bg-green-100 rounded-md" />
            <p className=" text-center mt-2 mb-4   ">Calender</p>
          </div>

          <div className="icon rounded-md   border-2  border-gray-100 hover:bg-gray-100 hover:text-black">
            <BiChat className="  m-auto mt-4 w-9 h-9 p-1.5 bg-blue-200 text-blue-400 rounded-md" />
            <p className=" text-center mt-2 mb-4   ">Mail</p>
          </div>
          <div className="icon rounded-md   border-2  border-gray-100 hover:bg-gray-100 hover:text-black">
            <BiUser className="  m-auto mt-4 w-9 h-9 p-1.5 bg-orange-100 rounded-md text-orange-400" />
            <p className=" text-center mt-2 mb-4   ">Profile</p>
          </div>
          <div className="icon rounded-md   border-2  border-gray-100 hover:bg-gray-100 hover:text-black">
            <BiEnvelope className="  m-auto mt-4 w-9 p-1.5 h-9 text-pink-400 bg-pink-100 rounded-md" />
            <p className=" text-center mt-2 mb-4   ">Chat</p>
          </div>
          <div className="icon rounded-md   border-2  border-gray-100 hover:bg-gray-100 hover:text-black">
            <BiPhone className="  m-auto mt-4 w-9 h-9 p-1.5 text-red-400 bg-red-100 rounded-md" />
            <p className=" text-center mt-2 mb-4   ">Contacts</p>
          </div>
          <div className="icon rounded-md   border-2  border-gray-100 hover:bg-gray-100 hover:text-black">
            <BiCog className="  m-auto mt-4 w-9 h-9 p-1.5 text-blue-400 bg-blue-100 rounded-md" />
            <p className=" text-center mt-2 mb-4   ">Setting</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appsicons;
