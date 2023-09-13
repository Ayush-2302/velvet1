import React from "react";

function Body() {
  return (
    <>
      {/* first row first card */}
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1    ">
        <div className="card card1">
          <h1 className=" text-2xl  font-bold">Recent Activity</h1>
          <hr className="mt-3" />

          <div className=" text-sm flex p-2">
            <span className=" font-bold pr-2">⁛</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div className=" text-sm flex p-2">
            <span className=" font-bold pr-2">⁛</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div className=" text-sm flex p-2">
            <span className=" font-bold pr-2">⁛</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div className=" text-sm flex p-2">
            <span className=" font-bold pr-2">⁛</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div className=" text-sm flex p-2">
            <span className=" font-bold pr-2">⁛</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div className=" text-sm flex p-2">
            <span className=" font-bold pr-2">⁛</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div></div>
        </div>

        {/* first row second card */}

        <div className="card card2 lg:col-span-2 sm:h-auto sm:grow grow h-96">
          <div className="top flex justify-between">
            <h1 className=" text-2xl font-bold">Scales Statistics </h1>
            <div className="btn flex ">
              <button className="w-fit bg-blue-300 rounded-2xl p-1">
                Filter
              </button>
              <button className="w-fit bg-blue-300 rounded-2xl p-1 ml-2">
                This Week
              </button>
            </div>
          </div>
          <hr className=" m-2" />
          <img
            src="https://images.unsplash.com/photo-1639754390580-2e7437267698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGklMjBjaGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=" img"
            className=" w-full h-80"
          />
        </div>

        {/* first row third card */}

        <div className="card card3  grid sm:col-span-3 ">
          <div className="top flex  justify-between">
            <h1 className=" text-2xl font-bold">Scales Value </h1>
            <button className="w-fit bg-blue-200 rounded-2xl p-1">
              View All
            </button>
          </div>
          <hr className=" m-2" />

          <img
            src="https://images.unsplash.com/photo-1612010167102-d1e8f83833e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="image"
            className=" w-full h-80 mt-6"
          />
        </div>
      </div>

      {/* second row first card */}
      <div className="grid lg:grid-cols-2 md:col-span-2 sm:col-span-2">
        <div className="card card4">
          <div className="top flex justify-between">
            <h1 className=" text-2xl font-bold">Scales Value </h1>
            <button className="w-fit bg-blue-200 rounded-2xl p-1">
              View All
            </button>
          </div>
          <hr className=" m-2" />

          <table className=" w-11/12 m-auto ">
            <thead className=" ">
              <tr className="top flex justify-between" >
                <th>Country</th>
                <th > Scale </th>
                <th > Bounce</th>
              </tr>
            </thead>
            <hr className=" m-5" />
            <tbody >
              <tr  className="top flex justify-between">
                <td >Canada</td>
                <td >2500</td>
                <td className=" text-green-500">24%</td>
              </tr>
              <hr className=" m-5" />

              <tr className="top flex justify-between">
                <td className=" ">Germany</td>
                <td >846</td>
                <td className=" text-red-500">22.33%</td>
              </tr>
              <hr className=" m-5" />
              <tr className="top flex justify-between">
                <td >Mexico</td>
                <td >1024</td>
                <td className="  text-red-500">14.8%</td>
              </tr>
              <hr className=" m-5" />
              <tr className="top flex justify-between">
                <td >Russia</td>
                <td >482</td>
                <td className="  text-green-500">05.8%</td>
              </tr>
              <hr className=" m-5" />
              <tr className="top flex justify-between">
                <td>U.S.A</td>
                <td >1410</td>
                <td className=" text-red-500">13.08%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* second row second card */}

        <div className="card card5 grow overflow-x-scroll  ">
          <div className="top flex justify-between">
            <h1 className=" text-2xl font-bold">Top Selling Products </h1>
            <button className="w-4 bg-blue-100 rounded p-1">:</button>
          </div>
          <hr className=" m-2" />
          <table className=" w-[95%]  m-auto ">
            <thead>
              <tr className="break-words space-x-5 flex justify-between ">
                <th>Product Name</th>
                <th > Stock </th>
                <th> price</th>
                <th> Sold</th>
                <th > Action</th>
              </tr>
            </thead>
            <hr className=" m-5" />
            <tbody className=" text-sm">
              <tr className=" break-words space-x-5 flex justify-between ">
                <td className=" text-sm">Sports Shoes For Men</td>
                <td className="  text-green-500">in Stocks</td>
                <td >$73.800</td>
                <td >1534</td>
                <td className=" flex " >
                  {" "}
                  <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                    🖋️
                  </button>
                  <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    🔆
                  </button>
                </td>
              </tr>
              <hr className="m-2 " />
              <tr className="break-words space-x-5 flex justify-between ">
                <td >Beautiful flower frame </td>
                <td className=" text-blue-400">Few-left</td>
                <td >$73.800</td>
                <td >4987</td>
                <td className="flex">
                  <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                    🖋️
                  </button>
                  <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    🔆
                  </button>
                </td>
              </tr>
              <hr className="m-2 " />
              <tr className="break-words space-x-5 flex justify-between">
                <td >Small alarm Watch </td>
                <td className="  text-red-500">Out of stock</td>
                <td >$13.800</td>
                <td >87875</td>
                <td className=" flex">
                  <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                    🖋️
                  </button>
                  <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    🔆
                  </button>
                </td>
              </tr>
              <hr className="m-2 " />
              <tr className="break-words space-x-5 flex justify-between ">
                <td > New Smart Phone </td>
                <td className="  text-green-500">In-Stock</td>
                <td >$14.600</td>
                <td >87875</td>
                <td className="flex ">
                  <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                    🖋️
                  </button>
                  <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    🔆
                  </button>
                </td>
              </tr>
              <hr className="m-2 " />
              <tr className="break-words space-x-5 flex justify-between ">
                <td >Black Colord camera </td>
                <td className="  text-green-500">In-Stock</td>
                <td >$23.800</td>
                <td >4087</td>
                <td className="flex">
                  <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                    🖋️
                  </button>
                  <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    🔆
                  </button>
                </td>
              </tr>
              <hr className="m-2 " />
            </tbody>
          </table>
        </div>
      </div>

      {/* second row third card */}

      <div className="grid lg:grid-cols-2 md:grid-cols-1">
        <div className="card card6">
          <div className="top flex justify-between">
            <h1 className=" text-2xl font-bold">Monthly Profit </h1>
            <button className="w-fit bg-blue-100 rounded-2xl p-1">
              View All
            </button>
          </div>
          <hr className=" m-2" />
          <h1 className=" text-3xl">$78344</h1>
          <span>Total Profit Growth Of 85%</span>
          <hr className=" m-2" />
          <p>Fashion</p>
          <progress
            className="progress progress-info w-60 h-2"
            value="100"
            max="100"
          ></progress>
          <hr className=" m-2" />
          <p>Fashion</p>
          <progress
            className="progress progress-info w-60 h-2"
            value="100"
            max="100"
          ></progress>
          <hr className=" m-2" />
          <p>Fashion</p>
          <progress
            className="progress progress-info w-60 h-2"
            value="100"
            max="100"
          ></progress>
          <hr className=" m-2" />
          <p>Fashion</p>
          <progress
            className="progress progress-info w-60 h-2"
            value="100"
            max="100"
          ></progress>
          <hr className=" m-2" />
        </div>

        {/* third row first card */}

        <div className="card card7 sm:w-11/12 ">
          <div className="top flex justify-between">
            <h1 className=" text-xl font-bold">Transaction History </h1>
            <button className="w-fit bg-blue-200 rounded-2xl p-1">
              View All
            </button>
          </div>
          <hr className=" m-2" />
          <div className=" flex justify-between">
            <div className=" text-lg font-bold">
              ATM <br /> Withdrawl
            </div>
            <span>Just Now</span>
          </div>
          <hr className=" m-2" />
          <div className=" flex justify-between">
            <div className=" text-lg font-bold">
              Movies <br /> Subscription
            </div>
            <span>Yesterday</span>
          </div>
          <hr className=" m-2" />
          <div className=" flex justify-between">
            <div className=" text-lg font-bold">
              Recieved <br /> From John
            </div>
            <span>17-04-2022</span>
          </div>
          <hr className=" m-2" />
          <div className=" flex justify-between">
            <div className=" text-lg font-bold">
              Credit <br />
            </div>
            <span>25-04-2022</span>
          </div>
          <hr className=" m-2" />
          <div className=" flex justify-between">
            <div className=" text-lg font-bold">
              Transfer to Rohan <br />
            </div>
            <span>30-04-2022</span>
          </div>
          <hr className=" m-2" />
        </div>
      </div>

      {/* Third row second card */}

      <div className="card card8 grow  overflow-x-scroll">
        <div className="top flex  sm:grow-2 justify-between">
          <h1 className=" text-2xl font-bold">Top Selling Products </h1>
          <button className="w-6 bg-blue-100 rounded p-2">:</button>
        </div>
        <hr className=" m-1" />
        <table className=" w-11/12 m-auto ">
          <thead>
            <tr className="  flex justify-between break-words space-x-5 grow   ">
              <th> S.NO</th>
              <th>Customer Name</th>
              <th>Order ID</th>
              <th>Order Date</th>
              <th> price</th>
              <th> Status</th>
              <th className=" "> Action</th>
            </tr>
          </thead>
          <hr className=" m-5" />
          <tbody className=" text-sm">
            <tr className="flex justify-between space-x-5 break-word ">
              <td>01</td>
              <td>
                Patty Furniture <br />
                patty@gmail.com
              </td>
              <td className="  text-blue-400">#123dfk</td>
              <td>01 Apr 2022</td>
              <td>$73.800</td>
              <td className="  text-green-500">Delivered</td>
              <td className="  flex   ">
                {" "}
                <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                  🖋️
                </button>
                <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                  🔆
                </button>
              </td>
            </tr>
            <hr className="mt-2 " />
            <tr className="flex justify-between space-x-5  break-word ">
              <td >02</td>
              <td >
                Allie Grate <br />
                allie@spuko.com
              </td>
              <td className="  text-blue-400">#123df2</td>
              <td >02 Apr 2022</td>
              <td >$13.800</td>
              <td className=" text-green-500">Delivered</td>
              <td className=" flex ">
                {" "}
                <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                  🖋️
                </button>
                <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                  🔆
                </button>
              </td>
            </tr>
            <hr className="m-2 " />
            <tr className="flex justify-between space-x-5 break-word ">
              <td >03</td>
              <td >
                Peg Legge <br />
                pegy@spuko.com
              </td>
              <td className="  text-blue-400">#123d5fk</td>
              <td >24 mar 2022</td>
              <td >$37.800</td>
              <td className=" text-red-500">cancelled</td>
              <td className=" flex ">
                {" "}
                <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                  🖋️
                </button>
                <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                  🔆
                </button>
              </td>
            </tr >
            <hr className="m-2 " />
            <tr className="flex justify-between space-x-5  break-word ">
              <td>04</td>
              <td >
                Maureen Biologist <br />
                maure@gmail.com
              </td>
              <td className="  text-blue-400">#124dfk</td>
              <td >24 Mar 2022</td>
              <td >$33.800</td>
              <td className=" text-blue-500">pending</td>
              <td className=" flex ">
                {" "}
                <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                  🖋️
                </button>
                <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                  🔆
                </button>
              </td>
            </tr>
            <hr className="m-2 " />
            <tr className="flex justify-between space-x-5 break-word ">
              <td >05</td>
              <td>
                olive Yew <br />
                yewo@gmail.com
              </td>
              <td className="  text-blue-400">#123f4gk</td>
              <td>20 Mar 2022</td>
              <td >$720.800</td>
              <td className=" text-yellow-500">Shipped</td>
              <td className="  flex">
                {" "}
                <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                  🖋️
                </button>
                <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                  🔆
                </button>
              </td>
            </tr>
            <hr className="m-2 " />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Body;
