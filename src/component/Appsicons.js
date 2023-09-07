import React from "react";
import calender from "../asserts/images/calander.png";
import mail from "../asserts/images/mail.png";
import profile from "../asserts/images/profile1.png";
import chat from "../asserts/images/chat.png";
import contacts from "../asserts/images/contacts.png";
import setting from "../asserts/images/sett.jpg";

function Appsicons() {
  return (
    <>
      <div className="cart w-80 h-full m-3  border-gray border-2  float-right">
        <div className="flex justify-between">
          <span className=" text-2xl font-bold m-2">Realated Apps </span>
          <button className=" w-5 m-4 h-7 rounded-md border-gray-400m border-s-2 bg-slate-100 pb-1 ">
            x
          </button>
        </div>

        <hr className=" m-2" />
        <div className="icons grid grid-cols-2 m-12">

          <div className="icon rounded-lg  w-24 h-24 bg-slate-100">
            <img src={calender} alt="" className=" " />
            <p className=" text-center">Calender</p>
          </div>


          <div className="icon ml-7 rounded-lg  w-24 h-24 bg-slate-100">
            <img src={mail} alt="" className=" " />
            <p className=" text-center">Mail</p>
          </div>

          

          <div className="icon mt-16 rounded-lg  w-24 h-24 bg-slate-100">
            <img src={profile} alt="" className="  " />
            <p className=" text-center">Profile</p>
          </div>


          <div className="icon  mt-14  ml-7   rounded-lg  w-24 h-24 bg-slate-100">
            <img src={chat} alt="" className=" " />
            <p className=" text-center">Chat</p>
          </div>


          <div className="icon mt-14 rounded-lg  w-24 h-24 bg-slate-100">
            <img src={contacts} alt="" className="  " />
            <p className=" text-center">Contacts</p>
          </div>


          <div className="icon mt-14 ml-7 rounded-lg  w-24 h-24 bg-slate-100">
            <img src={setting} alt="" className="  " />
            <p className=" text-center">settings</p>
          </div>


        </div>
      </div>
    </>
  );
}

export default Appsicons;
