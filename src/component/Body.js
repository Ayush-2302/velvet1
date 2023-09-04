import React from "react";

function Body() {
  return (
    <>
      {/* first row first card */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1    ">
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

        <div className="card card2 sm:h-auto sm:grow grow h-96">
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

        <div className="card grid md:col-span-2 card3">
          <div className="top flex justify-between">
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
        <div className="grid lg:grid-cols-1 md:col-span-1">
        <div className="card card4">
          <div className="top flex justify-between">
            <h1 className=" text-2xl font-bold">Scales Value </h1>
            <button className="w-fit bg-blue-200 rounded-2xl p-1">
              View All
            </button>
          </div>
          <hr className=" m-2" />

          <table>
            <thead>
              <tr>
                <th>Country</th>
                <th className=" pl-4"> Scale </th>
                <th className=" pl-6"> Bounce</th>
              </tr>
            </thead>
            <hr className=" m-5" />
            <tbody>
              <tr>
                <td className=" pl-3">Canada</td>
                <td className=" pl-6">2500</td>
                <td className=" pl-8 text-green-500">24%</td>
              </tr>
              <hr className=" m-5" />

              <tr>
                <td className=" m-3 pl-3">Germany</td>
                <td className=" pl-6">846</td>
                <td className=" pl-8 text-red-500">22.33%</td>
              </tr>
              <hr className=" m-5" />
              <tr>
                <td className=" m-3 pl-3">Mexico</td>
                <td className=" pl-6">1024</td>
                <td className=" pl-8 text-red-500">14.8%</td>
              </tr>
              <hr className=" m-5" />
              <tr>
                <td className=" m-3 pl-3">Russia</td>
                <td className=" pl-6">482</td>
                <td className=" pl-8 text-green-500">05.8%</td>
              </tr>
              <hr className=" m-5" />
              <tr>
                <td className=" m-3 pl-3">U.S.A</td>
                <td className=" pl-6">1410</td>
                <td className=" pl-8 text-red-500">13.08%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* second row second card */}

        <div className="card card5 grow  ">
          <div className="top flex justify-between">
            <h1 className=" text-2xl font-bold">Top Selling Products </h1>
            <button className="w-4 bg-blue-100 rounded p-1">:</button>
          </div>
          <hr className=" m-2" />
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th className=" pl-14"> Stock </th>
                <th className=" pl-5"> price</th>
                <th className=" pl-5"> Sold</th>
                <th className=" pl-10"> Action</th>
              </tr>
            </thead>
            <hr className=" m-5" />
            <tbody className=" text-sm">
              <tr>
                <td className=" text-sm pl-5">Sports Shoes For Men</td>
                <td className=" pl-20 text-green-500">in Stocks</td>
                <td className=" pl-5 ">$73.800</td>
                <td className=" pl-5 ">1534</td>
                <td className=" pl-5 ">
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
              <tr>
                <td className=" text-sm pl-5">Beautiful flower frame </td>
                <td className=" pl-20 text-blue-400">Few-left</td>
                <td className=" pl-5 ">$73.800</td>
                <td className=" pl-5 ">4987</td>
                <td className=" pl-5 ">
                  <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                    🖋️
                  </button>
                  <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    🔆
                  </button>
                </td>
              </tr>
              <hr className="m-2 " />
              <tr>
                <td className=" text-sm pl-5">Small alarm Watch </td>
                <td className=" pl-20 text-red-500">Out of stock</td>
                <td className=" pl-5 ">$13.800</td>
                <td className=" pl-5 ">87875</td>
                <td className=" pl-5 ">
                  <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                    🖋️
                  </button>
                  <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    🔆
                  </button>
                </td>
              </tr>
              <hr className="m-2 " />
              <tr>
                <td className=" text-sm pl-5">Smart Phone </td>
                <td className=" pl-20 text-green-500">In-Stock</td>
                <td className=" pl-5 ">$14.600</td>
                <td className=" pl-5 ">87875</td>
                <td className=" pl-5 ">
                  <button className=" hover:bg-blue-200  w-8 p-1 bg-blue-100 rounded">
                    🖋️
                  </button>
                  <button className=" w-8 p-1 bg-red-100 ml-1  hover:bg-red-300 text-red-600">
                    🔆
                  </button>
                </td>
              </tr>
              <hr className="m-2 " />
              <tr>
                <td className=" text-sm pl-5">Black Colord camera </td>
                <td className=" pl-20 text-green-500">In-Stock</td>
                <td className=" pl-5 ">$23.800</td>
                <td className=" pl-5 ">4087</td>
                <td className=" pl-5 ">
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

        <div className="card card7">
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

          <div className="card card8 grow  ">
            <div className="top flex sm:grow-2 justify-between">
              <h1 className=" text-2xl font-bold">Top Selling Products </h1>
              <button className="w-6 bg-blue-100 rounded p-2">:</button>
            </div>
            <hr className=" m-1" />
            <table>
              <thead>
                <tr>
                  <th className=" pl-5"> S.NO</th>
                  <th className=" pl-10">Customer Name</th>
                  <th className=" pl-16">Order ID</th>
                  <th className=" pl-8">Order Date</th>
                  <th className=" pl-5"> price</th>
                  <th className=" pl-5"> Status</th>
                  <th className=" pl-10"> Action</th>
                </tr>
              </thead>
              <hr className=" m-5" />
              <tbody className=" text-sm">
                <tr>
                  <td className=" pl-8">01</td>
                  <td className=" text-sm pl-16">
                    Patty Furniture <br />
                    patty@gmail.com
                  </td>
                  <td className=" pl-20 text-blue-400">#123dfk</td>
                  <td className=" pl-10 ">01 Apr 2022</td>
                  <td className=" pl-10 ">$73.800</td>
                  <td className=" pl-8 text-green-500">Delivered</td>
                  <td className=" pl-8 ">
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
                <tr>
                  <td className=" pl-8">02</td>
                  <td className=" text-sm pl-16">
                    Allie Grate <br />
                    allie@spuko.com
                  </td>
                  <td className=" pl-20 text-blue-400">#123df2</td>
                  <td className=" pl-10 ">02 Apr 2022</td>
                  <td className=" pl-10 ">$13.800</td>
                  <td className=" pl-8 text-green-500">Delivered</td>
                  <td className=" pl-8 ">
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
                <tr>
                  <td className=" pl-8">03</td>
                  <td className=" text-sm pl-16">
                    Peg Legge <br />
                    pegy@spuko.com
                  </td>
                  <td className=" pl-20 text-blue-400">#123d5fk</td>
                  <td className=" pl-10 ">24 mar 2022</td>
                  <td className=" pl-10 ">$37.800</td>
                  <td className=" pl-8 text-red-500">cancelled</td>
                  <td className=" pl-8 ">
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
                <tr>
                  <td className=" pl-8">01</td>
                  <td className=" text-sm pl-16">
                    Maureen Biologist <br />
                    maureen@gmail.com
                  </td>
                  <td className=" pl-20 text-blue-400">#124dfk</td>
                  <td className=" pl-10 ">24 Mar 2022</td>
                  <td className=" pl-10 ">$33.800</td>
                  <td className=" pl-8 text-blue-500">pending</td>
                  <td className=" pl-8 ">
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
                <tr>
                  <td className=" pl-8">01</td>
                  <td className=" text-sm pl-16">
                    olive Yew <br />
                    patty@gmail.com
                  </td>
                  <td className=" pl-20 text-blue-400">#123f4gk</td>
                  <td className=" pl-10 ">20 Mar 2022</td>
                  <td className=" pl-10 ">$720.800</td>
                  <td className=" pl-8 text-yellow-500">Shipped</td>
                  <td className=" pl-8 ">
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
