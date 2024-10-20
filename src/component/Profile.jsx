import React, { useContext } from "react";
import pic from "../asserts/images/w4.png";
import { val } from "../context/ValNav";

function Profile() {
  const pro= useContext(val)
  const mode_change={
    backgroundColor:pro.mode==="light"?"white":"#262C3C",
    color:pro.mode==="dark"?"white":"black",
    boxShadow:pro.mode==="light"?"":" 0px 3px 4px 0px #373C4A"
   }
  return (
    <>
    <div className="pro" style={mode_change}>
      <div className="head flex md:shrink sm:shrink justify-between p-4 h-32 dashboardcont">
        <p className=" font-bold text-2xl">Profile</p>
        <p className="flex space-x-3 justify-around">
          <p>Page </p>
          <p>›</p>
          <p>Profile</p>
        </p>
      </div>

      <div className="pr-container flex flex-wrap text-sm justify-between w-11/12 shadow-inner border-2 m-auto border-gray-300 rounded-md -mt-10" style={mode_change}>
        <div className="info flex space-x-3">
          <img
            src={pic}
            alt=""
            className=" rounded-full w-24 animate-pulse m-2"
          />
          <span className="w-fit m-4">
            <p className=" font-bold text-2xl"> JSon Taylor</p>
            <p>Chief Excutive Officer(C.E.O)</p>
            <p>Gergia , Washington D.C </p>
          </span>
        </div>
        <div className="flex flex-wrap">
          <div className="no flex  m-7 space-x-5">
            <p className="projets">
              <p className=" font-bold md:text-lg lg:text-2xl">113</p>
              <p>Porjects</p>
            </p>
            <p className="Followers">
              <p className=" font-bold md:text-lg lg:text-2xl">12.2K</p>
              <p>Followers</p>
            </p>
            <p className="Folling">
              <p className=" font-bold md:text-lg lg:text-2xl"> 20k</p>
              <p>Following</p>
            </p>
          </div>
          <div className="btn m-7">
            <button className=" border-2 p-3  border-gray-400 rounded-xl shadow-inner  text-white  bg-blue-400 ">
              + Follow
            </button>
          </div>
        </div>
      </div>

      <div className="status ">
      <div  className="  profile_st shadow-inner border-2  rounded-md border-gray-300 mt-10" style={mode_change}>
        <div className=" m-4">
          <p>Profile Status:</p>
          <p>
            Profile 60% completed -{" "}
            <p className=" text-violet-600"> Finish now</p>
          </p>
          <div className="st w-11/12 h-2 mb-3 ml-3 rounded-2xl  border-2 border-gray-300">
            <div className=" w-4/5 h-2 bg-violet-700 rounded-2xl"></div>
          </div>
        </div>

        <hr className=" m-2" />

        <div className="info m-8">
          <p className=" font-bold mb-2">Personal Info :</p>
          <p>
            <span className=" font-bold m-2">Name :</span>
            <span className=" text-sm">Sonya Taylor</span>
          </p>
          <p>
            <span className=" font-bold m-2">Email :</span>
            <span className=" text-sm">sonylor@gmail.com</span>
          </p>
          <p>
            <span className=" font-bold m-2">Phone :</span>
            <span className=" text-sm">6245635489</span>
          </p>
          <p>
            <span className=" font-bold m-2">Designation :</span>
            <span className=" text-sm">C.E.O</span>
          </p>
          <p>
            <span className=" font-bold m-2">Age :</span>
            <span className=" text-sm">25</span>
          </p>
          <p>
            <span className=" font-bold m-2">Experience :</span>
            <span className=" text-sm">10 year</span>
          </p>
        </div>

        <div className="skills">
          <p className="font-bold text-lg ml-8"> SKills :</p>
          <div className="flex flex-wrap ml-8">
            <p className=" m-2 text-sm w-fit p-1 rounded-xl border-2 shadow-inner">
              {" "}
              Cloud computering
            </p>
            <p className=" m-2 text-sm w-fit p-1 rounded-xl border-2 shadow-inner">
              {" "}
              Data analysis
            </p>
            <p className=" m-2 text-sm w-fit p-1 rounded-xl border-2 shadow-inner">
              {" "}
              DevOps
            </p>
            <p className=" m-2 text-sm w-fit p-1 rounded-xl border-2 shadow-inner">
              {" "}
              Machine learning
            </p>
            <p className=" m-2 text-sm w-fit p-1 rounded-xl border-2 shadow-inner">
              {" "}
              Programming
            </p>
            <p className=" m-2 text-sm w-fit p-1 rounded-xl border-2 shadow-inner">
              {" "}
              Security
            </p>
            <p className=" m-2 text-sm w-fit p-1 rounded-xl border-2 shadow-inner">
              {" "}
              Python
            </p>
            <p className=" m-2 text-sm w-fit p-1 rounded-xl border-2 shadow-inner">
              {" "}
              JavaScript
            </p>

            <p className=" m-2 text-sm w-fit p-1 rounded-xl border-2 shadow-inner">
              {" "}
              PowerShell
            </p>
            <p className=" m-2 text-sm w-fit p-1 rounded-xl border-2 shadow-inner">
              {" "}
              Statistics
            </p>
            <p className=" m-2 text-sm w-fit p-1 rounded-xl border-2 shadow-inner">
              {" "}
              SQl
            </p>
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className="r_cont" >
        <div className="m-auto w-11/12 flex flex-wrap justify-around rounded-md h-auto p-5 space-y-2 shadow-inner mt-10 border-gray-300  mb-6 border-2 " style={mode_change}>
          <button className=" rounded-2xl p-1 h-12 m-auto w-36 bg-violet-500 hover:bg-violet-600">
            {" "}
            Activity{" "}
          </button>
          <button className=" rounded-2xl p-1 h-12 m-auto w-36 bg-violet-500 hover:bg-violet-600">
            {" "}
            Activity{" "}
          </button>
          <button className=" rounded-2xl p-1 h-12 m-auto w-36 bg-violet-500 hover:bg-violet-600">
            {" "}
            Activity{" "}
          </button>
          <button className=" rounded-2xl p-1 h-12 m-auto w-36 bg-violet-500 hover:bg-violet-600">
            {" "}
            Activity{" "}
          </button>
        </div>

        <div className="stack w-11/12 mb-10 shadow-inner rounded-md m-auto overflow-x-auto customize_overflow " style={mode_change} >
          <ul className="divide-y divide-gray-100 p-3">
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 ">
                    Leslie Alexander
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    leslie.alexander@example.com
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 ">Co-Founder / CEO</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
                </p>
              </div>
            </li>
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 ">
                    Michael Foster
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    michael.foster@example.com
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 ">Co-Founder / CTO</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
                </p>
              </div>
            </li>
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 ">
                    Dries Vincent
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    dries.vincent@example.com
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 ">
                  Business Relations
                </p>
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              </div>
            </li>
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 ">
                    Lindsay Walton
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    lindsay.walton@example.com
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6">
                  Front-end Developer
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
                </p>
              </div>
            </li>
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 ">
                    Courtney Henry
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    courtney.henry@example.com
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 ">Designer</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
                </p>
              </div>
            </li>
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 ">
                    Tom Cook
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    tom.cook@example.com
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 ">
                  Director of Product
                </p>
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Profile;
