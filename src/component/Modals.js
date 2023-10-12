import React, { createContext, useContext, useState } from "react";
import { val } from "./ValNav";
import AlertModal from "./AlertModal";

const modal = createContext();
function Modals() {
  const { mode } = useContext(val);
  const mode_change = {
    backgroundColor: mode === "light" ? "white" : "#262C3C",
    color: mode === "dark" ? "white" : "black",
    boxShadow: mode === "light" ? "" : " 0px 3px 4px 0px #373C4A",
  };

  const [alert, setAlert] = useState(false);
  const handleAlert = () => {
    setAlert(!alert);
    setAlert1(false);
    setAlert2(false);
    setAlert3(false);
    setAlert4(false);
    setAlert5(false);
    setAlert6(false);
    setAlert7(false);
  };
  const [alert1, setAlert1] = useState(false);
  const handleAlert1 = () => {
    setAlert1(!alert1);
    setAlert(false);
    setAlert2(false);
    setAlert3(false);
    setAlert4(false);
    setAlert5(false);
    setAlert6(false);
    setAlert7(false);
  };
  const [alert2, setAlert2] = useState(false);
  const handleAlert2 = () => {
    setAlert2(!alert2);
    setAlert1(false);
    setAlert(false);
    setAlert3(false);
    setAlert4(false);
    setAlert5(false);
    setAlert6(false);
    setAlert7(false);
  };
  const [alert3, setAlert3] = useState(false);
  const handleAlert3 = () => {
    setAlert3(!alert3);
    setAlert1(false);
    setAlert(false);
    setAlert2(false);
    setAlert4(false);
    setAlert5(false);
    setAlert6(false);
    setAlert7(false);
  };
  const [alert4, setAlert4] = useState(false);
  const handleAlert4 = () => {
    setAlert4(!alert4);
    setAlert1(false);
    setAlert(false);
    setAlert2(false);
    setAlert3(false);
    setAlert5(false);
    setAlert6(false);
    setAlert7(false);
  };
  const [alert5, setAlert5] = useState(false);
  const handleAlert5 = () => {
    setAlert5(!alert5);
    setAlert1(false);
    setAlert(false);
    setAlert2(false);
    setAlert3(false);
    setAlert4(false);
    setAlert6(false);
    setAlert7(false);
  };
  const [alert6, setAlert6] = useState(false);
  const handleAlert6 = () => {
    setAlert6(!alert6);
    setAlert1(false);
    setAlert(false);
    setAlert2(false);
    setAlert3(false);
    setAlert4(false);
    setAlert5(false);
    setAlert7(false);
  };
  const [alert7, setAlert7] = useState(false);
  const handleAlert7 = () => {
    setAlert7(!alert7);
    setAlert1(false);
    setAlert(false);
    setAlert2(false);
    setAlert3(false);
    setAlert4(false);
    setAlert5(false);
    setAlert6(false);
  };

  return (
    <>
      {/* modal */}
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
              <div className="head p-4 text-lg font-semibold">Basic Modal</div>
              <hr />
              <div className="btn p-5">
                <div
                  onClick={handleAlert}
                  className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                >
                  Launch demo modal
                </div>
              </div>
            </div>
          </div>
          {/* first alert used in this page */}
          <div id="gama" className="  absolute w-full ">
            <div
              id="query"
              className={`${
                alert ? "" : "hidden"
              } alert1  shadow-inner rounded-md  w-[33rem]   m-auto  `}
              style={mode_change}
            >
              <p className=" border-b-2 p-4"> Modal Title</p>
              <p className="p-4 border-b-2"> ....</p>
              <div className="btn p-2">
                <div className="button flex p-2  flex-row-reverse ">
                  <div
                    onClick={""}
                    className="hover:bg-violet-600  hover:text-white text-sm button p-2 border-2 font-bold border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Save Change
                  </div>
                  <div
                    onClick={handleAlert}
                    className="hover:bg-red-400 mr-2 hover:text-white text-sm hover:border-violet-400 font-bold button p-2 border-2 border-red-400 text-red-400  w-fit rounded-lg"
                  >
                    Cancle
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* modal2 */}
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

          {/* second alert used in this page */}
          <div id="gama" className="  absolute w-full   ">
            <div
              id="query"
              className={`${
                alert1 ? "" : "hidden"
              } alert1  shadow-inner rounded-md  w-[33rem]   m-auto  `}
              style={mode_change}
            >
              <p className=" border-b-2 p-4"> Modal Title</p>
              <p className="p-4 border-b-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <div className="btn p-2">
                <div className="button flex p-2  flex-row-reverse ">
                  <div
                    onClick={""}
                    className="hover:bg-violet-600  hover:text-white text-sm button p-2 border-2 font-bold border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Save Change
                  </div>
                  <div
                    onClick={handleAlert1}
                    className="hover:bg-red-400 mr-2 hover:text-white text-sm hover:border-red-400 font-bold button p-2 border-2 border-red-400 text-red-400  w-fit rounded-lg"
                  >
                    Cancle
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* modal3 */}
          <div className="  my-3">
            <div className="w-11/12 rounded-lg m-auto  " style={mode_change}>
              <div className="head p-4 text-lg font-semibold">
                {" "}
                Scrolling Long Content
              </div>
              <hr />
              <div className="btn p-5">
                <div
                  onClick={handleAlert2}
                  className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                >
                  Scrolling long content
                </div>
              </div>
            </div>
          </div>
          {/* third alert used in this page */}
          <div  id="gama"className="  absolute w-full   ">
            <div
              id="query"
              className={`${
                alert2 ? "" : "hidden"
              } alert1  shadow-inner rounded-md  w-[33rem]   m-auto  `}
              style={mode_change}
            >
              <p className=" border-b-2 p-4"> Modal Title</p>
              <p className="p-4 border-b-2 text-sm">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                impedit rerum consequatur! Hic velit quis facere, nulla
                consequatur modi libero dolore animi est aliquid necessitatibus
                fugit fugiat delectus laudantium numquam voluptatem aspernatur
                magnam corrupti doloremque soluta nihil atque. Consectetur
                incidunt esse provident sapiente excepturi id quibusdam
                architecto, dolorum reiciendis! Nostrum, explicabo est assumenda
                id ab sunt molestias aliquid natus reprehenderit deleniti magni
                quasi exercitationem ex perferendis suscipit dolore quod veniam
                dicta. Obcaecati, deserunt nihil a nisi ea impedit quis quae
                tempora quas dignissimos saepe, dolore aliquid ut veniam. Illo
                asperiores, vel, saepe odit aliquam cupiditate commodi omnis
                fugit, ducimus harum magnam placeat et ex quam! Unde ex nulla
                optio est inventore, asperiores aliquam saepe illum, fuga alias
                aut commodi non exercitationem assumenda eum necessitatibus
                praesentium dignissimos rem odit, odio reprehenderit accusantium
                corporis dolorum quaerat. Minus similique totam, doloribus
                harum, libero, debitis illo asperiores molestiae adipisci nihil
                numquam unde ex quaerat nam id placeat. Fugiat, eveniet. Fugiat
                minus enim reiciendis distinctio obcaecati natus sed magnam,
                cupiditate consectetur similique. Ducimus sapiente assumenda
                totam consequatur quos quidem quod eum! Magni rerum molestiae,
                totam libero animi, sint voluptatibus dolore, impedit quae a
                quasi fuga asperiores voluptates. Exercitationem placeat dolores
                qui numquam esse hic doloribus.
              </p>
              <div className="btn p-2">
                <div className="button flex p-2  flex-row-reverse ">
                  <div
                    onClick={""}
                    className="hover:bg-violet-600  hover:text-white text-sm button p-2 border-2 font-bold border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Save Change
                  </div>
                  <div
                    onClick={handleAlert2}
                    className="hover:bg-red-400 mr-2 hover:text-white text-sm hover:border-red-400 font-bold button p-2 border-2 border-red-400 text-red-400  w-fit rounded-lg"
                  >
                    Cancle
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* modal4 */}

          <div className="  my-3">
            <div className="w-11/12 rounded-lg m-auto  " style={mode_change}>
              <div className="head p-4 text-lg font-semibold">
                Tooltips And Popovers
              </div>
              <hr />
              <div className="btn p-5">
                <div
                  onClick={handleAlert3}
                  className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                >
                  Launch demo modal
                </div>
              </div>
            </div>
          </div>
          {/* forth alert used in this page */}
          <div id="gama" className="  absolute w-full   ">
            <div
              id="query"
              className={`${
                alert3 ? "" : "hidden"
              } alert1  shadow-inner rounded-md  w-[33rem]   m-auto  `}
              style={mode_change}
            >
              <p className=" border-b-2 p-4"> Modal Title</p>
              <p className="p-4 border-b-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, suscipit voluptates pariatur nam adipisci sit
                incidunt provident explicabo corrupti minus et accusantium ea
                quidem quos.
              </p>
              <div className="btn p-2">
                <div className="button flex p-2  flex-row-reverse ">
                  <div
                    onClick={""}
                    className="hover:bg-violet-600  hover:text-white text-sm button p-2 border-2 font-bold border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Save Change
                  </div>
                  <div
                    onClick={handleAlert3}
                    className="hover:bg-red-400 mr-2 hover:text-white text-sm hover:border-red-400 font-bold button p-2 border-2 border-red-400 text-red-400  w-fit rounded-lg"
                  >
                    Cancle
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* modal5 */}
          <div className="  my-3">
            <div className="w-11/12 rounded-lg m-auto  " style={mode_change}>
              <div className="head p-4 text-lg font-semibold">
                Using The Grid
              </div>
              <hr />
              <div className="btn p-5">
                <div
                  onClick={handleAlert4}
                  className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                >
                  Using Grid
                </div>
              </div>
            </div>
          </div>

          {/* fifth alert used in this page */}
          <div id="gama" className="  absolute w-full   ">
            <div
              id="query"
              className={`${
                alert4 ? "" : "hidden"
              } alert1  shadow-inner rounded-md  w-[33rem]   m-auto  `}
              style={mode_change}
            >
              <p className=" border-b-2 p-4"> Modal Title</p>
              <p className="p-4 border-b-2">
                {" "}
                <p className="font-bold text-lg"> Poover in a Modal</p>
                <p className=" text-sm">This button trigges a pover on click</p>
              </p>
              <p className="p-4 border-b-2">
                {" "}
                <p className="font-bold text-lg"> Toolpic in a Modal</p>
                <p className=" text-sm">
                  This link and thatlink have tooltips on hover.
                </p>
              </p>
              <div className="btn p-2">
                <div className="button flex p-2  flex-row-reverse ">
                  <div
                    onClick={""}
                    className="hover:bg-violet-600  hover:text-white text-sm button p-2 border-2 font-bold border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Save Change
                  </div>
                  <div
                    onClick={handleAlert4}
                    className="hover:bg-red-400 mr-2 hover:text-white text-sm hover:border-red-400 font-bold button p-2 border-2 border-red-400 text-red-400  w-fit rounded-lg"
                  >
                    Cancle
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* modal6 */}
          <div className="  my-3">
            <div className="w-11/12 rounded-lg m-auto  " style={mode_change}>
              <div className="head p-4 text-lg font-semibold">
                Vertical Centered Scrollable
              </div>
              <hr />
              <div className="btn p-5">
                <div
                  onClick={handleAlert5}
                  className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                >
                  Vertical centeres scrollabal modal
                </div>
              </div>
            </div>
          </div>
          {/* sixth alert used in this page */}
          <div id="gama" className="  absolute w-full   ">
            <div
              id="query"
              className={`${
                alert5 ? "" : "hidden"
              } alert1  shadow-inner rounded-md  w-[33rem]   m-auto  `}
              style={mode_change}
            >
              <p className=" border-b-2 p-4"> Modal Title</p>
              <p className="p-4 border-b-2 text-sm">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
                assumenda sunt eligendi eveniet perspiciatis accusantium
                reprehenderit ipsa optio magnam quaerat amet aliquam. Error
                tempora architecto impedit eum sequi iure suscipit, asperiores,
                aliquid facilis obcaecati aut vero temporibus ipsam eligendi,
                est voluptatum minima ab quaerat labore ducimus ipsa autem dolor
                consequuntur! Totam aliquid inventore sequi repudiandae ea
                eaque, doloribus vero. Itaque architecto blanditiis autem
                voluptatibus, ratione doloremque velit cum corrupti id nam
                natus, officia vel molestias quas veniam asperiores perspiciatis
                similique alias dolorum nemo. Alias blanditiis hic accusamus
                tenetur, distinctio tempore. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Molestiae iste numquam atque,
                minus quisquam amet sapiente vel voluptate, quo nulla optio
                harum officiis similique enim ad doloribus? Ex sunt a et impedit
                similique voluptate accusantium itaque voluptates, iusto
                consequuntur adipisci, recusandae corrupti voluptatem, ipsa
                eligendi? Enim quo nihil quasi nulla. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dicta consequatur vitae fuga,
                tempore officia aperiam dolore autem? Dolor perspiciatis
                nesciunt magni consectetur, velit saepe non nobis repudiandae
                architecto similique totam?
              </p>
              <div className="btn p-2">
                <div className="button flex p-2  flex-row-reverse ">
                  <div
                    onClick={""}
                    className="hover:bg-violet-600  hover:text-white text-sm button p-2 border-2 font-bold border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Save Change
                  </div>
                  <div
                    onClick={handleAlert5}
                    className="hover:bg-red-400 mr-2 hover:text-white text-sm hover:border-red-400 font-bold button p-2 border-2 border-red-400 text-red-400  w-fit rounded-lg"
                  >
                    Cancle
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* modal7 */}
          <div className="  my-3">
            <div className="w-11/12 rounded-lg m-auto  " style={mode_change}>
              <div className="head p-4 text-lg font-semibold">
                Toggle Between Mod
              </div>
              <hr />
              <div className="btn p-5">
                <div
                  onClick={handleAlert6}
                  className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                >
                  Launch demo modal
                </div>
              </div>
            </div>
          </div>
          {/* seventh alert used in this page */}
          <div id="gama" className="  absolute w-full   ">
            <div
              id="query"
              className={`${
                alert6 ? "" : "hidden"
              } alert1  shadow-inner rounded-md  w-[33rem]   m-auto  `}
              style={mode_change}
            >
              <p className=" border-b-2 p-4"> Modal Title</p>
              <p className="p-4 border-b-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="btn p-2">
                <div className="button flex p-2  flex-row-reverse ">
                  <div
                    onClick={""}
                    className="hover:bg-violet-600  hover:text-white text-sm button p-2 border-2 font-bold border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Save Change
                  </div>
                  <div
                    onClick={handleAlert6}
                    className="hover:bg-red-400 mr-2 hover:text-white text-sm hover:border-red-400 font-bold button p-2 border-2 border-red-400 text-red-400  w-fit rounded-lg"
                  >
                    Cancle
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* modal8 */}

          <div className="  my-3">
            <div className="w-11/12 rounded-lg m-auto  " style={mode_change}>
              <div className="head p-4 text-lg font-semibold">
                Vertical Centered Modal
              </div>
              <hr />
              <div className="btn p-5">
                <div
                  onClick={handleAlert7}
                  className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                >
                  Launch demo modal
                </div>
              </div>
            </div>
          </div>
          <div id="gama" className="  absolute w-full   ">
            <div
              id="query"
              className={`${
                alert7 ? "" : "hidden"
              } alert1  shadow-inner rounded-md   w-[33rem]   m-auto  `}
              style={mode_change}
            >
              <p className=" border-b-2 p-4"> Modal Title</p>
              <p className="p-4 border-b-2">
                {" "}
                <p className="font-bold text-lg"> Poover in a Modal</p>
                <p className=" text-sm">This button trigges a pover on click</p>
              </p>
              <p className="p-4 border-b-2">
                {" "}
                <p className="font-bold text-lg"> Toolpic in a Modal</p>
                <p className=" text-sm">
                  This link and thatlink have tooltips on hover.
                </p>
              </p>
              <div className="btn p-2">
                <div className="button flex p-2  flex-row-reverse ">
                  <div
                    onClick={""}
                    className="hover:bg-violet-600  hover:text-white text-sm button p-2 border-2 font-bold border-violet-600 text-violet-600  w-fit rounded-lg"
                  >
                    Save Change
                  </div>
                  <div
                    onClick={handleAlert7}
                    className="hover:bg-red-400 mr-2 hover:text-white text-sm hover:border-red-400 font-bold button p-2 border-2 border-red-400 text-red-400  w-fit rounded-lg"
                  >
                    Cancle
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* modal9 */}
          <div className="  my-3">
            <div className="w-11/12 rounded-lg m-auto  " style={mode_change}>
              <div className="head p-4 text-lg font-semibold">
                Optional Size
              </div>
              <hr />
              <div className="btn p-5 flex ">
                <button
                  onClick={handleAlert4}
                  className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                >
                  Extra large modal
                </button>
                <button
                  onClick={handleAlert3}
                  className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 ml-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                >
                  Large modal
                </button>
                <button
                  onClick={handleAlert4}
                  className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 ml-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                >
                  Small modal
                </button>
              </div>
            </div>
          </div>
      </div>
       <div className="  my-3 pb-8">
            <div className="w-11/12 rounded-lg m-auto  " style={mode_change}>
              <div className="head p-4 text-lg font-semibold">
                Optional Size
              </div>
              <hr />
              <div className="btn p-5 flex ">
                <button
                  className="hover:bg-violet-600 hover:text-white text-sm button p-2 border-2 border-violet-600 text-violet-600  w-fit rounded-lg"
                >
                  Extra large modal
                </button>
                <button
                  className="hover:bg-green-600 hover:text-white text-sm button p-2 border-2 ml-2 border-green-600 text-green-600  w-fit rounded-lg"
                >
                  Large modal
                </button>
                <button
                  className="hover:bg-red-600 hover:text-white text-sm button p-2 border-2 ml-2 border-red-600 text-red-600  w-fit rounded-lg"
                >
                  Small modal
                </button>
                <button
                  className="hover:bg-orange-600 hover:text-white text-sm button p-2 border-2 ml-2 border-orange-600 text-orange-600  w-fit rounded-lg"
                >
                  Small modal
                </button>
                <button
                  className="bg-yellow-400 text-white text-sm button p-2 border-2 ml-2 border-yellow-400  w-fit rounded-lg"
                >
                  Small modal
                </button>
              </div>
            </div>
          </div>
    </>
  );
}

export default Modals;
export { modal };
