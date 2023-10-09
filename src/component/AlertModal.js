import React, { useContext } from "react";
import { modal } from "./Modals";

function AlertModal() {
const aoo= useContext(modal);
const {model, handleModel}=aoo;
  return (
    <>
    
      <div className={` ${model?"":"hidden"} block rounded-lg  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700`}>
        <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
       Modal title
        </div>
        <p className="  px-8 py-3 border-b-2 mb-4 text-base text-neutral-600 dark:text-neutral-200">
          .....
        </p>

        <div className="button flex p-2  flex-row-reverse ">
          <div
            onClick={""}
            className="hover:bg-violet-600  hover:text-white text-sm button p-2 border-2 font-bold border-violet-600 text-violet-600  w-fit rounded-lg"
          >
            Save Change
          </div>
          <div onClick={handleModel} className="hover:bg-violet-600 mr-2 hover:text-white text-sm hover:border-violet-400 font-bold button p-2 border-2 border-red-400 text-red-400  w-fit rounded-lg">
            Cancle
          </div>
        </div>
      </div>
    </>
  );
}

export default AlertModal;
