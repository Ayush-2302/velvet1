import React from "react";
import cart from "../asserts/images/cart.png";

 function Dashboard  ()  {
  return (
    <>
      <div className="dashboard mt-1 text-3xl ml-10 mr-10 flex justify-between">
        Dashboard <p className=" text-sm m-3">Dashbord » scale</p>
      </div>
      <div className=" boxes mr-12 grid lg:grid-cols-5 md:grid-cols-3 xl:gap-8 sm:grid-cols-2 grid-cols-1 ">
        <div className="box box1">
          <span className=" flex justify-between">
            Total sale <img src={cart} alt="img" className=" w-5 m-1" />
          </span>
          <h1 className=" m-2 text-3xl">$15526</h1>
          <p className=" flex justify-between text-sm">
            <p className=" rounded-2xl w-fit ml-1 bg-blue-300">+52% </p>
            <p>view more</p>
          </p>
        </div>
        <div className="box box2">
          <span className=" flex justify-between">
            Total sale <img src={cart} alt="img" className=" w-5 m-1" />
          </span>
          <h1 className=" m-2 text-3xl">$15526</h1>
          <p className=" flex justify-between text-sm">
            <p className=" rounded-2xl w-fit ml-1 bg-blue-300">+52% </p>
            <p>view more</p>
          </p>
        </div>
        <div className="box box3">
          <span className=" flex justify-between">
            Total sale <img src={cart} alt="img" className=" w-5 m-1" />
          </span>
          <h1 className=" m-2 text-3xl">$15526</h1>
          <p className=" flex justify-between text-sm">
            <p className=" rounded-2xl w-fit ml-1 bg-blue-300">+52% </p>
            <p>view more</p>
          </p>
        </div>
        <div className="box box4">
          <span className=" flex justify-between">
            Total sale <img src={cart} alt="img" className=" w-5 m-1" />
          </span>
          <h1 className=" m-2 text-3xl">$15526</h1>
          <p className=" flex justify-between text-sm">
            <p className=" rounded-2xl w-fit ml-1 bg-blue-300">+52% </p>
            <p>view more</p>
          </p>
        </div>
        <div className="box box5">
          <span className=" flex justify-between">
            Total sale <img src={cart} alt="img" className=" w-5 m-1" />
          </span>
          <h1 className=" m-2 text-3xl">$15526</h1>
          <p className=" flex justify-between text-sm">
            <p className=" rounded-2xl w-fit ml-1 bg-blue-300">+52% </p>
            <p>view more</p>
          </p>
        </div>
      </div>
    </>
  );
};
export default Dashboard;

