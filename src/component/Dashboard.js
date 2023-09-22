import React from "react";
import cart from "../asserts/images/cart.png";
// import "./index.css"

function Dashboard() {
  return (
    <>
      <div className="dashboardcont  pt-5  text-3xl pl-10 pr-10 flex  h-32 justify-between">
        Dashboard <p className=" text-sm m-3">Dashbord » scale</p>
      </div>
      <div className=" boxes  relative z-10 -mt-20 m-auto  mr-6 ml-2  ">
        <div className="box box1">
          <div className=" flex justify-between leading-9">
            <p>
              Total sale
              <h1 className=" text-3xl font-bold">$15526</h1>
            </p>

            <div className="w-9  h-9 flex items-center justify-center rounded-md bg-purple-300">
              <i class="bi bi-cart-check   text-purple-900 "></i>
            </div>
          </div>
          <p className=" flex justify-between text-xs h-5 mt-2 ">
            <p className=" rounded-2xl flex w-fit ml-1 p-0.5 bg-purple-300 text-purple-900 font-bold ">
              +52% <p className=" ml-1 rotate-90">→</p>{" "}
            </p>
            <p className=" underline ">view more</p>
          </p>
        </div>
        <div className="box box2">
          <div className=" flex justify-between leading-9">
            <p>
              {" "}
              Total sale <h1 className=" text-3xl font-bold">$15526</h1>
            </p>

            <div className=" w-9 h-9 flex items-center justify-center rounded-md bg-red-300">
              {" "}
              <i class="bi bi-archive   text-red-800 "></i>
            </div>
          </div>
          <p className=" flex justify-between text-xs mt-2 ">
            <p className=" rounded-2xl flex w-fit ml-1 p-0.5 bg-green-300 text-green-900 font-bold">
              +52% <p className=" ml-1 -rotate-90">→</p>{" "}
            </p>
            <p className=" underline">view more</p>
          </p>
        </div>
        <div className="box box3">
          <div className=" flex justify-between leading-9">
            <p>
              Total sale
              <h1 className="text-3xl font-bold">$15526</h1>
            </p>

            <div className=" w-9 h-9 flex items-center justify-center rounded-md bg-blue-300">
              {" "}
              <i class="bi bi-handbag   text-blue-900 "></i>
            </div>
          </div>
          <p className=" flex justify-between text-xs  mt-2 ">
            <p className=" rounded-2xl flex w-fit ml-1 p-0.5 bg-red-300 text-red-900 font-bold">
              +52% <p className=" ml-1 rotate-90">→</p>{" "}
            </p>
            <p className=" underline ">view more</p>
          </p>
        </div>
        <div className="box  box4">
          <div className=" flex justify-between leading-9">
            <p>
              {" "}
              Total sale <h1 className=" text-3xl font-bold">$15526</h1>
            </p>

            <div className=" w-9 h-9 flex items-center justify-center rounded-md bg-orange-300">
              {" "}
              <i class="bi bi-currency-dollar   text-orange-900 "></i>
            </div>
          </div>
          <p className=" flex justify-between text-xs  mt-2 ">
            <p className=" rounded-2xl flex w-fit ml-1 p-0.5 bg-green-300 to-green-900 font-bold">
              +52% <p className=" ml-1 -rotate-90">→</p>{" "}
            </p>
            <p className=" underline">view more</p>
          </p>
        </div>
        <div className="box  box5">
          <div className=" flex  justify-between leading-9">
            <p>
              {" "}
              Total sale
              <h1 className=" text-3xl font-bold">$15526</h1>
            </p>

            <div className=" w-9 h-9 flex items-center justify-center rounded-md bg-red-300">
              {" "}
              <i class="bi bi-bell  text-red-900 "></i>
            </div>
          </div>
          <p className=" flex justify-between text-xs mt-2 ">
            <p className=" rounded-2xl flex w-fit ml-1 p-0.5 bg-red-300 font-bold text-red-900">
              +52% <p className=" ml-1 rotate-90">→</p>{" "}
            </p>
            <p className=" underline ">view more</p>
          </p>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
