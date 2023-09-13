import React from "react";
import cart from "../asserts/images/cart.png";
// import "./index.css"

 function Dashboard  ()  {
  return (
    <>
      <div className="dashboard mt-1 text-3xl ml-10 mr-10 flex justify-between">
        Dashboard <p className=" text-sm m-3">Dashbord » scale</p>
      </div>
      <div className=" boxes    ">
        <div className="box box1">
          <span className=" flex justify-between">
            Total sale  <div className=" w-10 bg-red-500 pl-1 rounded-lg"> <img src={cart} alt="img" className=" w-5 m-1 " /></div>
          </span>
          <h1 className=" m-2 text-3xl">$15526</h1>
          <p className=" flex justify-between text-xs font-bold">
            <p className=" rounded-2xl flex w-fit ml-1 p-0.5 bg-red-300">+52% <p className=" ml-1 rotate-90">→</p> </p>
            <p className=" underline">view more</p>
          </p>
        </div>
        <div className="box box2">
          <span className=" flex justify-between">
            Total sale <div className=" w-10 bg-green-500 pl-1 rounded-lg"> <img src={cart} alt="img" className=" w-5 m-1 " /></div>
          </span>
          <h1 className=" m-2 text-3xl">$15526</h1>
          <p className=" flex justify-between text-xs p1 font-bold">
            <p className=" rounded-2xl flex w-fit ml-1 p-0.5 bg-green-300">+52% <p className=" ml-1 -rotate-90">→</p> </p>
            <p className=" underline">view more</p>
          </p>
        </div>
        <div className="box box3">
          <span className=" flex justify-between">
            Total sale  <div className=" w-10 bg-red-500 pl-1 rounded-lg"> <img src={cart} alt="img" className=" w-5 m-1  " /></div>
          </span>
          <h1 className=" m-2 text-3xl">$15526</h1>
          <p className=" flex justify-between text-xs p1 font-bold">
            <p className=" rounded-2xl flex w-fit ml-1 p-0.5 bg-red-300">+52% <p className=" ml-1 rotate-90">→</p> </p>
            <p className=" underline">view more</p>
          </p>
        </div>
        <div className="box  box4">
          <span className=" flex justify-between">
            Total sale <div className=" w-10 bg-green-400 pl-1 rounded-lg"> <img src={cart} alt="img" className=" w-5 m-1 " /></div>
          </span>
          <h1 className=" m-2 text-3xl">$15526</h1>
          <p className=" flex justify-between text-xs p1 font-bold">
            <p className=" rounded-2xl flex w-fit ml-1 p-0.5 bg-green-300">+52% <p className=" ml-1 -rotate-90">→</p> </p>
            <p className=" underline">view more</p>
          </p>
        </div>
        <div className="box  box5">
          <span className=" flex justify-between">
            Total sale <div className=" w-10 bg-red-500 pl-1 rounded-lg"> <img src={cart} alt="img" className=" w-5 m-1 " /></div>
          </span>
          <h1 className=" m-2 text-3xl">$15526</h1>
          <p className=" flex justify-between text-xs p1 font-bold">
            <p className=" rounded-2xl flex w-fit ml-1 p-0.5 bg-red-300">+52% <p className=" ml-1 rotate-90">→</p> </p>
            <p className=" underline">view more</p>
          </p>
        </div>
      </div>
    </>
  );
};
export default Dashboard;

