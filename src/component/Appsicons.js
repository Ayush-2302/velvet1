import React from "react";
import { BsXLg } from "react-icons/bs";
import {
  BiUser,
  BiPhone,
  BiChat,
  BiCog,
  BiCalendar,
  BiEnvelope,
} from "react-icons/bi";

function Appsicons() {

  return (
    <>
      <div className="cart w-80  m-3   float-right">
        <div className="flex justify-between items-center">
          <span className=" text-2xl font-bold m-2 text-black">
            Realated Apps{" "}
          </span>
          <button className=" w-6 m-4 h-7 rounded-md border-gray-100 text-black   bg-slate-200 p-1 ">
            <BsXLg />
          </button>
        </div>

        <hr className=" m-2" />
        <div className="icons grid grid-cols-2 gap-3 p-5 m-auto">
          <div className="icon rounded-md border-2 hover:bg-gray-100">
            <BiCalendar className="  m-auto mt-4  w-9 p-1.5 h-9 text-green-600 bg-green-100 rounded-md" />
            <p className=" text-center mt-2 mb-4 text-black">Calender</p>
          </div>

          <div className="icon rounded-md border-2 hover:bg-gray-100">
            <BiChat className="  m-auto mt-4 w-9 h-9 p-1.5 bg-blue-200 text-blue-400 rounded-md" />
            <p className=" text-center mt-2 mb-4 text-black">Mail</p>
          </div>
          <div className="icon rounded-md border-2 hover:bg-gray-100">
            <BiUser className="  m-auto mt-4 w-9 h-9 p-1.5 bg-orange-100 rounded-md text-orange-400" />
            <p className=" text-center mt-2 mb-4 text-black">Profile</p>
          </div>
          <div className="icon rounded-md border-2 hover:bg-gray-100">
            <BiEnvelope className="  m-auto mt-4 w-9 p-1.5 h-9 text-pink-400 bg-pink-100 rounded-md" />
            <p className=" text-center mt-2 mb-4 text-black">Chat</p>
          </div>
          <div className="icon rounded-md border-2 hover:bg-gray-100">
            <BiPhone className="  m-auto mt-4 w-9 h-9 p-1.5 text-red-400 bg-red-100 rounded-md" />
            <p className=" text-center mt-2 mb-4 text-black">Contacts</p>
          </div>
          <div className="icon rounded-md border-2 hover:bg-gray-100">
            <BiCog className="  m-auto mt-4 w-9 h-9 p-1.5 text-blue-400 bg-blue-100 rounded-md" />
            <p className=" text-center mt-2 mb-4 text-black">Setting</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appsicons;
