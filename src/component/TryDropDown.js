import React, { useState } from "react";

function TryDropDown() {
   const[show , setShow]=useState(false)
   const toggle = ()=>{
    setShow(!show)
   }


  return (
    <>
      <div className="w-4/5 border-2 border-black m-auto mt-7 ">
        <nav className="  space-x-3 ">
          <ul className="flex  space-x-5  p-4">
            <li>home</li>
            <li onClick={toggle}>
              about
              <ul className={`${show? "" :"hidden"}  w-20 h-auto  border-black shadow-inner text-center `}>
                <li>company</li>
                <li>job</li>
                <li>since</li>
              </ul>
            </li>

            <li>list</li>
            <li onClick={toggle} className="" >dropdown
                <ul className={`${show? "":"hidden"}  w-20 h-auto  border-black shadow-inner text-center`}  >
                    <li>drop</li>
                    <li>down</li>
                    <li>link</li>
                    <li>try</li>
                </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default TryDropDown;
