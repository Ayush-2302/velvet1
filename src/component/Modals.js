import React, { createContext, useContext, useState } from "react";
import { val } from "./ValNav";
import AlertModal from "./AlertModal";

const modal = createContext();
function Modals() {
  const arr = [
    {
      Head: "Basic Modal",
      Butt: "Launch demo modal",
    },
    {
      Head: "Static Backdrop",
      Butt: "Launch static backdrop modal",
    },
    {
      Head: "Scrolling Long Content",
      Butt: "Scrolling long content",
    },
    {
      Head: "Vertical Centered Scrollable",
      Butt: "Launch demo modal",
    },
    {
      Head: "Tooltips And Popovers",
      Butt: "Launch demo modal",
    },
    {
      Head: "Using The Grid",
      Butt: "Launch demo modal",
    },
    {
      Head: "Toggle Between Mod",
      Butt: "Open first modal",
    },
    {
      Head: "Toggle Between Mod",
      Butt: "Open first modal",
    },
    {
      Head: "Toggle Between Mod",
      Butt: "Open first modal",
      hrf: "Open first modal",
    },
  ];

  const { mode } = useContext(val);
  const mode_change = {
    backgroundColor: mode === "light" ? "white" : "#262C3C",
    color: mode === "dark" ? "white" : "black",
    boxShadow: mode === "light" ? "" : " 0px 3px 4px 0px #373C4A",
  };

  const [model, setModel] = useState(false);
  const handleModel = () => {
    setModel(!model);
  };
  const [alert1, setAlert1] = useState(false);
  const handleAlert1 = () => {
    setAlert1(!alert1);
  };

  return (
    <>
      <modal.Provider value={{ model, handleModel }}>
        {/* alert from alert component */}
        <div className="aline flex justify-center  ">
          <div
            className={` w-1/3  alerts m-auto  ${
              model ? "" : "hidden"
            } absolute`}
          >
            <AlertModal />
          </div>
        </div>

        <div className="mode">
          <div className="dashboardcont  pt-5 text-white text-3xl pl-10 pr-4 flex  h-32 justify-between">
            Modals & Closes{" "}
            <p className=" text-sm m-3  flex space-x-5">
              <p>Advance UI </p> <p>»</p>{" "}
              <p className=" font-bold"> Modals & Closes</p>
            </p>
          </div>
          <div className=" modals -mt-12 ">
            <div className="  my-3">
              <div className="w-11/12 rounded-lg m-auto  " style={mode_change}>
                <div className="head p-4 text-lg font-semibold">
                  Basic Modal
                </div>
                <hr />
                <div className="btn p-5">
                  <div
                    onClick={handleModel}
                    className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Launch demo modal
                  </div>
                </div>
              </div>
            </div>

            <div className="  my-3">
              <div className="w-11/12 rounded-lg m-auto  " style={mode_change}>
                <div className="head p-4 text-lg font-semibold">
                  Static Backdrop
                </div>
                <hr />
                <div className="btn p-5">
                  <div
                    onClick={handleAlert1}
                    className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Launch static backdrop modal
                  </div>
                </div>
              </div>
            </div>

            {/* first alert used in this page */}
            <div className=" absolute m-auto ">
              <div
                className={`${
                  alert1 ? "" : "hidden"
                } alert1  shadow-inner rounded-md   `}
                style={mode_change}
              >
                <p className=" border-b-2 p-4"> Modal Title</p>
                <p className="p-4 border-b-2">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="btn p-4">
                  <div className="button flex p-2  flex-row-reverse ">
                    <div
                      onClick={""}
                      className="hover:bg-violet-600  hover:text-white text-sm button p-2 border-2 font-bold border-violet-600 text-violet-600  w-fit rounded-lg"
                    >
                      Save Change
                    </div>
                    <div
                      onClick={handleModel}
                      className="hover:bg-violet-600 mr-2 hover:text-white text-sm hover:border-violet-400 font-bold button p-2 border-2 border-red-400 text-red-400  w-fit rounded-lg"
                    >
                      Cancle
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="  my-3">
              <div className="w-11/12 rounded-lg m-auto  " style={mode_change}>
                <div className="head p-4 text-lg font-semibold">
                  {" "}
                  Scrolling Long Content
                </div>
                <hr />
                <div className="btn p-5">
                  <div
                    onClick={handleModel}
                    className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Scrolling long content
                  </div>
                </div>
              </div>
            </div>

            <div className="  my-3">
              <div className="w-11/12 rounded-lg m-auto  " style={mode_change}>
                <div className="head p-4 text-lg font-semibold">
                  Tooltips And Popovers
                </div>
                <hr />
                <div className="btn p-5">
                  <div
                    onClick={handleModel}
                    className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Launch demo modal
                  </div>
                </div>
              </div>
            </div>

            <div className="  my-3">
              <div className="w-11/12 rounded-lg m-auto  " style={mode_change}>
                <div className="head p-4 text-lg font-semibold">
                  Using The Grid
                </div>
                <hr />
                <div className="btn p-5">
                  <div
                    onClick={handleModel}
                    className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Using Grid
                  </div>
                </div>
              </div>
            </div>

            <div className="  my-3">
              <div className="w-11/12 rounded-lg m-auto  " style={mode_change}>
                <div className="head p-4 text-lg font-semibold">
                  Vertical Centered Scrollable
                </div>
                <hr />
                <div className="btn p-5">
                  <div
                    onClick={handleModel}
                    className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Vertical centeres scrollabal modal
                  </div>
                </div>
              </div>
            </div>

            <div className="  my-3">
              <div className="w-11/12 rounded-lg m-auto  " style={mode_change}>
                <div className="head p-4 text-lg font-semibold">
                  Toggle Between Mod
                </div>
                <hr />
                <div className="btn p-5">
                  <div
                    onClick={handleModel}
                    className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Launch demo modal
                  </div>
                </div>
              </div>
            </div>

            <div className="  my-3">
              <div className="w-11/12 rounded-lg m-auto  " style={mode_change}>
                <div className="head p-4 text-lg font-semibold">
                  Vertical Centered Modal
                </div>
                <hr />
                <div className="btn p-5">
                  <div
                    onClick={handleModel}
                    className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Launch demo modal
                  </div>
                </div>
              </div>
            </div>

            <div className="  my-3">
              <div className="w-11/12 rounded-lg m-auto  " style={mode_change}>
                <div className="head p-4 text-lg font-semibold">
                  Optional Size
                </div>
                <hr />
                <div className="btn p-5 flex ">
                  <button
                    onClick={handleModel}
                    className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Extra large modal
                  </button>
                  <button
                    onClick={handleModel}
                    className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 ml-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Large modal
                  </button>
                  <button
                    onClick={handleModel}
                    className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 ml-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Small modal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </modal.Provider>
    </>
  );
}

export default Modals;
export { modal };
