import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { sett } from "./Navbar";
import { val } from "./ValNav";

function SettingDrop() {
  const set =useContext(sett)
  const setting = useContext(val);
  const mode_change={
    backgroundColor:setting.mode==="light"?"white":"#262C3C",
    color:setting.mode==="dark"?"white":"black",
    boxShadow:setting.mode==="light"?"":" 0px 3px 4px 0px #373C4A"
   }


  return (
    <div className="w-96 -mt-1  " style={mode_change}>
      <div className="switcher flex h-14 items-center p-3 justify-between">
        <p className="  text-lg font-bold mt-2 p-2" >Switcher</p>
        <div onClick={set.handleSet}>
        <RxCross1 />
        </div>
      </div>
      <div className=" h-[520px] overflow-auto customize_overflow">
      <div className="theme flex  border-y-2  justify-around">
        <p className="   border-gray-200 w-1/2 text-center bg-green-100 border-r-2 h-10 pt-2 text-green-500 ">Theme Styles</p>
        <p className=" border-l-2  h-10  pt-2 border-gray-200  w-1/2 text-center  ">Theme Colors</p>
      </div>
      <div className="color  p-2" style={{ backgroundColor:setting.mode==="light"?"rgb(229 231 235)":"gray"}} >Theme Color Mode:</div>
      <div className="flex p-3    space-x-8 ">
        <label className="flex  space-x-2 ">
          <input type="checkbox" className="" />
          <p className="">light</p>
        </label>
        {/* <label htmlFor=""></label> */}
        
         
        <label className="flex space-x-2">
          <input type="checkbox" className="" />
          <p>Dark</p>
        </label>
      </div>
      <div className="color    bg-gray-200 p-2" style={{ backgroundColor:setting.mode==="light"?"rgb(229 231 235)":"gray"}}>Direction:</div>
      <div className="flex p-3  space-x-8  ">
        <label className="flex  space-x-2">
          <input type="checkbox" className="" />
          <p>LTR</p>
        </label>
        <label className="flex space-x-2">
          <input type="checkbox" className="" />
          <p>RTL</p>
        </label>
      </div>
      <div className="color     bg-gray-200 p-2" style={{ backgroundColor:setting.mode==="light"?"rgb(229 231 235)":"gray"}}>Navigation Styles:</div>
      <div className="flex p-3  space-x-8  ">
        <label className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Vertical</p>
        </label>
        <label className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Horizontal</p>
        </label>
      </div>
      <div className="color     bg-gray-200 p-2" style={{ backgroundColor:setting.mode==="light"?"rgb(229 231 235)":"gray"}}>Page Style:</div>
      <div className="flex p-3  space-x-8  ">
        <label className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Regular</p>
        </label>
        <label className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Classic</p>
        </label>
      </div>
      <div className="color     bg-gray-200 p-2" style={{ backgroundColor:setting.mode==="light"?"rgb(229 231 235)":"gray"}}>Layout Width Style:</div>
      <div className="flex p-3  space-x-8  ">
        <label className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>FullWidth</p>
        </label>
        <label className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Boxed</p>
        </label>
      </div>
      <div className="color     bg-gray-200 p-2" style={{ backgroundColor:setting.mode==="light"?"rgb(229 231 235)":"gray"}}>Menu Positions:</div>
      <div className="flex p-3  space-x-8  ">
        <label className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Fixed</p>
        </label>
        <label className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Scrollable</p>
        </label>
      </div>
      <div className="color     bg-gray-200 p-2" style={{ backgroundColor:setting.mode==="light"?"rgb(229 231 235)":"gray"}}>Header Positions:</div>
      <div className="flex p-3  space-x-8  ">
        <label className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Fixed</p>
        </label>
        <label className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Scrollable</p>
        </label>
        <label className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Rounded</p>
        </label>
      </div>
      <div className="color     bg-gray-200 p-2" style={{ backgroundColor:setting.mode==="light"?"rgb(229 231 235)":"gray"}}>Loader:</div>
      <div className="flex p-2  space-x-8  ">
        <label className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Enable</p>
        </label>
        <label className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Disable</p>
        </label>
      </div>
      </div>

      <div className="btn space-x-1 space-y-1 text-center p-3">
        <button className=" bg-purple-400  rounded-lg  w-fit p-2 pl-3 pr-3 "> Buy Now</button>
        <button className=" bg-orange-400  rounded-lg  w-fit p-2 pl-3 pr-3 "> Our Portfolio</button>
        <button className=" bg-orange-600  rounded-lg  w-fit p-2 pl-3 pr-3 "> Reset</button>
      </div>
    </div>
  );
}

export default SettingDrop;

