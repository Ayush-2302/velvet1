import React, { useState } from "react";

function Accordian() {
  const [open, Setopen] = useState(false);
  const toggle = () => Setopen(!open);

  return (
    <>
      <div className=" grid  ">
        <div className={`  ${open?" text-red-600":""}  container w-11/12 m-auto mt-3 mb-4 rounded-xl h-auto border-2  border-gray-300`}>
          <div className={`    accordian w-5/6  m-auto mt-4 p-2    rounded-lg shadow-2xl  border-2 border-gray-300`}>
            <div onClick={toggle} className="flex justify-between mr-5 ml-4">
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 md:text-sm sm:text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className={`accordian w-5/6  m-auto mt-4 p-2  mb-3  rounded-lg shadow-2xl  border-2 border-gray-300`}>
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className="accordian w-5/6  m-auto mt-4 p-2  mb-3 p-2  rounded-lg shadow-2xl  border-2 border-gray-300">
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
        </div>

        <div className={`  ${open?" text-green-600":""} container w-11/12 m-auto mt-3 mb-4 rounded-xl h-auto border-2 border-gray-300`}>
          <div
            onClick={toggle}
            className="accordian w-5/6  m-auto mt-4 p-2    rounded-lg shadow-2xl  border-2 border-gray-300"
          >
            <div className="flex justify-between mr-5 ml-4">
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 md:text-sm sm:text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className="accordian w-5/6  m-auto mt-4 p-2  mb-3 p-2  rounded-lg shadow-2xl  border-2 border-gray-300">
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className="accordian w-5/6  m-auto mt-4 p-2  mb-3 p-2  rounded-lg shadow-2xl  border-2 border-gray-300">
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
        </div>

        <div className={` ${open?" text-orange-600":""} container w-11/12 m-auto mt-4 p-2 grid col-span-2 mb-4 rounded-xl h-auto border-2 border-gray-300`}>
          <div
            onClick={toggle}
            className="accordian w-5/6  m-auto mt-4 p-2    rounded-lg shadow-2xl  border-2 border-gray-300"
          >
            <div className="flex justify-between mr-5 ml-4">
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 md:text-sm sm:text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className="accordian w-5/6  m-auto mt-4 p-2  mb-3 p-2  rounded-lg shadow-2xl  border-2 border-gray-300">
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className="accordian w-5/6  m-auto mt-4 p-2  mb-3 p-2  rounded-lg shadow-2xl  border-2 border-gray-300">
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
        </div>

        <div className={` ${open?" text-yellow-500":""} container w-11/12 m-auto mt-4 p-2 mb-4 rounded-xl h-auto border-2 border-gray-300`}>
          <div
            onClick={toggle}
            className="accordian w-5/6  m-auto mt-4 p-2    rounded-lg shadow-2xl  border-2 border-gray-300"
          >
            <div className="flex justify-between mr-5 ml-4">
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 md:text-sm sm:text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className="accordian w-5/6  m-auto mt-4 p-2  mb-3 p-2  rounded-lg shadow-2xl  border-2 border-gray-300">
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className="accordian w-5/6  m-auto mt-4 p-2  mb-3 p-2  rounded-lg shadow-2xl  border-2 border-gray-300">
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
        </div>

        <div className={`  ${open?" text-cyan-600":""} container w-11/12 m-auto mt-4 p-2 mb-4 rounded-xl h-auto border-2 border-gray-300`}>
          <div
            onClick={toggle}
            className="accordian w-5/6  m-auto mt-4 p-2    rounded-lg shadow-2xl  border-2 border-gray-300"
          >
            <div className="flex justify-between mr-5 ml-4">
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 md:text-sm sm:text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className="accordian w-5/6  m-auto mt-4 p-2  mb-3 p-2  rounded-lg shadow-2xl  border-2 border-gray-300">
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className="accordian w-5/6  m-auto mt-4 p-2  mb-3 p-2  rounded-lg shadow-2xl  border-2 border-gray-300">
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
        </div>

        <div className={` ${open?" text-violet-600":""} container w-11/12 m-auto mt-4 p-2 mb-4 rounded-xl col-span-2 h-auto border-2 border-gray-300`}>
          <div
            onClick={toggle}
            className="accordian w-5/6  m-auto mt-4 p-2    rounded-lg shadow-2xl  border-2 border-gray-300"
          >
            <div className="flex justify-between mr-5 ml-4">
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 md:text-sm sm:text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className="accordian w-5/6  m-auto mt-4 p-2  mb-3 p-2  rounded-lg shadow-2xl  border-2 border-gray-300">
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className="accordian w-5/6  m-auto mt-4 p-2  mb-3 p-2  rounded-lg shadow-2xl  border-2 border-gray-300">
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
        </div>

        <div className={`  ${open?" text-pink-600":""} container w-11/12 m-auto mt-4 p-2 mb-4 rounded-xl h-auto border-2 border-gray-300`}>
          <div
            onClick={toggle}
            className="accordian w-5/6  m-auto mt-4 p-2    rounded-lg shadow-2xl  border-2 border-gray-300"
          >
            <div className="flex justify-between mr-5 ml-4">
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 md:text-sm sm:text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className="accordian w-5/6  m-auto mt-4 p-2  mb-3 p-2  rounded-lg shadow-2xl  border-2 border-gray-300">
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className="accordian w-5/6  m-auto mt-4 p-2  mb-3 p-2  rounded-lg shadow-2xl  border-2 border-gray-300">
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
        </div>

        <div className={` ${open?" text-amber-600":""} container w-11/12 m-auto mt-4 p-2 mb-4 rounded-xl h-auto border-2 border-gray-300`}>
          <div
            onClick={toggle}
            className="accordian w-5/6  m-auto mt-4 p-2    rounded-lg shadow-2xl  border-2 border-gray-300"
          >
            <div className="flex justify-between mr-5 ml-4">
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 md:text-sm sm:text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className="accordian w-5/6  m-auto mt-4 p-2  mb-3 p-2  rounded-lg shadow-2xl  border-2 border-gray-300">
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className="accordian w-5/6  m-auto mt-4 p-2  mb-3 p-2  rounded-lg shadow-2xl  border-2 border-gray-300">
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
        </div>

        <div className={` ${open?" text-blue-600":""} container w-11/12 m-auto mt-4 p-2 mb-4 col-span-2 rounded-xl h-auto border-2 border-gray-300`}>
          <div
            onClick={toggle}
            className="accordian w-5/6  m-auto mt-4 p-2    rounded-lg shadow-2xl  border-2 border-gray-300"
          >
            <div className="flex justify-between mr-5 ml-4">
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 md:text-sm sm:text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className="accordian w-5/6  m-auto mt-4 p-2  mb-3 p-2  rounded-lg shadow-2xl  border-2 border-gray-300">
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
          <div className="accordian w-5/6  m-auto mt-4 p-2  mb-3 p-2  rounded-lg shadow-2xl  border-2 border-gray-300">
            <div className="flex justify-between mr-5 ml-4" onClick={toggle}>
              <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button> {open ? "‹" : "»"}</button>
            </div>
            {open && (
              <p className=" ml-16 mt-3 sm:text-sm md:text-sm text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                natus provident laborum mollitia ab? Voluptatum error tempore
                consequuntur dolor numquam odio porro obcaecati fugiat earum
                officia beatae natus, dolore ea.
              </p>
            )}
          </div>
          <hr className="mt-3 w-5/6 m-auto" />
        </div>
      </div>
    </>
  );
}

export default Accordian;
