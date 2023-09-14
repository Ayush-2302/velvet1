import React from "react";
import cart from "../asserts/images/cart.png";
// import "./index.css"

function Dashboard() {
  return (
    <>
      <div className="dashboard  mt-1 text-3xl ml-10 mr-10 flex justify-between">
        Dashboard <p className=" text-sm m-3">Dashbord » scale</p>
      </div>
      <div className=" boxes    ">
        <div className="box box1">
          <span className=" flex justify-between">
            Total sale
            <div className="w-9 h-9 flex items-center justify-center rounded-md bg-purple-300">
              <i class="bi bi-cart-check   text-purple-900 "></i>
            </div>
          </span>
          <h1 className=" m-2 text-3xl">$15526</h1>
          <p className=" flex justify-between text-xs ">
            <p className=" rounded-2xl flex w-fit ml-1 p-0.5 bg-purple-300 text-purple-900 font-bold ">
              +52% <p className=" ml-1 rotate-90">→</p>{" "}
            </p>
            <p className=" underline ">view more</p>
          </p>
        </div>
        <div className="box box2">
          <span className=" flex justify-between">
            Total sale{" "}
            <div className=" w-9 h-9 flex items-center justify-center rounded-md bg-red-300">
              {" "}
              <i class="bi bi-archive   text-red-800 "></i>
            </div>
          </span>
          <h1 className=" m-2 text-3xl">$15526</h1>
          <p className=" flex justify-between text-xs ">
            <p className=" rounded-2xl flex w-fit ml-1 p-0.5 bg-green-300 text-green-900 font-bold">
              +52% <p className=" ml-1 -rotate-90">→</p>{" "}
            </p>
            <p className=" underline">view more</p>
          </p>
        </div>
        <div className="box box3">
          <span className=" flex justify-between">
            Total sale{" "}
            <div className=" w-9 h-9 flex items-center justify-center rounded-md bg-blue-300">
              {" "}
              <i class="bi bi-handbag   text-blue-900 "></i>
            </div>
          </span>
          <h1 className=" m-2 text-3xl">$15526</h1>
          <p className=" flex justify-between text-xs p1 ">
            <p className=" rounded-2xl flex w-fit ml-1 p-0.5 bg-red-300 text-red-900 font-bold">
              +52% <p className=" ml-1 rotate-90">→</p>{" "}
            </p>
            <p className=" underline ">view more</p>
          </p>
        </div>
        <div className="box  box4">
          <span className=" flex justify-between">
            Total sale{" "}
            <div className=" w-9 h-9 flex items-center justify-center rounded-md bg-orange-300">
              {" "}
              <i class="bi bi-currency-dollar   text-orange-900 "></i>
            </div>
          </span>
          <h1 className=" m-2 text-3xl">$15526</h1>
          <p className=" flex justify-between text-xs p1 ">
            <p className=" rounded-2xl flex w-fit ml-1 p-0.5 bg-green-300 to-green-900 font-bold">
              +52% <p className=" ml-1 -rotate-90">→</p>{" "}
            </p>
            <p className=" underline">view more</p>
          </p>
        </div>
        <div className="box  box5">
          <span className=" flex justify-between">
            Total sale{" "}
            <div className=" w-9 h-9 flex items-center justify-center rounded-md bg-red-300">
              {" "}
              <i class="bi bi-bell  text-red-900 "></i>
            </div>
          </span>
          <h1 className=" m-2 text-3xl">$15526</h1>
          <p className=" flex justify-between text-xs p1 ">
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
