import React, { useContext } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { val } from "../context/ValNav";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "300px",
};
const arr = [
  {
    url: "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1695751240180-6194e4d152a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1696519293772-0b240f1e5318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const arr2 = [
  {
    url: "https://images.unsplash.com/photo-1695031786586-cf9bf5c5a705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1696948758504-9ae476b1a6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1691748994172-35248b2688f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const arr1 = [
  {
    url: "https://images.unsplash.com/photo-1696945147512-745188d0ef77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1696761783118-b12b579c3541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1696458520084-8bf82aad92cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const ImageSlider = () => {
  const { mode } = useContext(val);
  const mode_change = {
    backgroundColor: mode === "light" ? "white" : "#262C3C",
    color: mode === "dark" ? "white" : "black",
    boxShadow: mode === "light" ? "" : " 0px 3px 4px 0px #373C4A",
  };
  return (
    <>
      <div
        className="dashboardcont  pt-5 text-white text-3xl pl-10 pr-4 flex  h-32 justify-between"
       
      >
        Carousel
        <p className=" text-sm m-3  flex space-x-5">
          <p>Advanced UI </p> <p>»</p>
          <p className=" font-bold"> Carousel</p>
        </p>
      </div>
      <div className=" grid grid-cols-3 gap-4 p-8 -mt-16">
        <div className="slide-container rounded-md " style={mode_change}>
          <p className=" p-4 border-b-2 text-xl font-semibold">Slide Only</p>

          <Fade className=" p-8">
            {arr.map((arr, index) => (
              <div key={index}>
                <div
                  className=""
                  style={{ ...divStyle, backgroundImage: `url(${arr.url}) ` }}
                ></div>
              </div>
            ))}
          </Fade>
        </div>

        <div className="slide-container rounded-md " style={mode_change}>
          <p className=" p-4 border-b-2 text-xl font-semibold">
          Experiment slider
          </p>
          <Fade className=" p-8">
            {arr1.map((arr1, index) => (
              <div key={index}>
                <div
                  className=""
                  style={{ ...divStyle, backgroundImage: `url(${arr1.url}) ` }}
                ></div>
              </div>
            ))}
          </Fade>
        </div>
        <div className="slide-container rounded-md " style={mode_change}>
          <p className=" p-4 border-b-2 text-xl font-semibold">Films slider</p>
          <Fade className=" p-8">
            {arr2.map((arr2, index) => (
              <div key={index}>
                <div
                  className=""
                  style={{ ...divStyle, backgroundImage: `url(${arr2.url}) ` }}
                ></div>
              </div>
            ))}
          </Fade>
        </div>
        <div className="slide-container rounded-md " style={mode_change}>
          <p className=" p-4 border-b-2 text-xl font-semibold">Films slider</p>
          <Fade className=" p-8">
            {arr2.map((arr2, index) => (
              <div key={index}>
                <div
                  className=""
                  style={{ ...divStyle, backgroundImage: `url(${arr2.url}) ` }}
                ></div>
              </div>
            ))}
          </Fade>
        </div>
        <div className="slide-container rounded-md " style={mode_change}>
          <p className=" p-4 border-b-2 text-xl font-semibold">Slide Only</p>

          <Fade className=" p-8">
            {arr.map((arr, index) => (
              <div key={index}>
                <div
                  className=""
                  style={{ ...divStyle, backgroundImage: `url(${arr.url}) ` }}
                ></div>
              </div>
            ))}
          </Fade>
        </div>

        <div className="slide-container rounded-md " style={mode_change}>
          <p className=" p-4 border-b-2 text-xl font-semibold">
          Experiment slider
          </p>
          <Fade className=" p-8">
            {arr1.map((arr1, index) => (
              <div key={index}>
                <div
                  className=""
                  style={{ ...divStyle, backgroundImage: `url(${arr1.url}) ` }}
                ></div>
              </div>
            ))}
          </Fade>
        </div>
        <div className="slide-container rounded-md " style={mode_change}>
          <p className=" p-4 border-b-2 text-xl font-semibold">Films slider</p>
          <Fade className=" p-8">
            {arr2.map((arr2, index) => (
              <div key={index}>
                <div
                  className=""
                  style={{ ...divStyle, backgroundImage: `url(${arr2.url}) ` }}
                ></div>
              </div>
            ))}
          </Fade>
        </div>
        <div className="slide-container rounded-md " style={mode_change}>
          <p className=" p-4 border-b-2 text-xl font-semibold">Films slider</p>
          <Fade className=" p-8">
            {arr2.map((arr2, index) => (
              <div key={index}>
                <div
                  className=""
                  style={{ ...divStyle, backgroundImage: `url(${arr2.url}) ` }}
                ></div>
              </div>
            ))}
          </Fade>
        </div>
        <div className="slide-container rounded-md " style={mode_change}>
          <p className=" p-4 border-b-2 text-xl font-semibold">Slide Only</p>

          <Fade className=" p-8">
            {arr.map((arr, index) => (
              <div key={index}>
                <div
                  className=""
                  style={{ ...divStyle, backgroundImage: `url(${arr.url}) ` }}
                ></div>
              </div>
            ))}
          </Fade>
        </div>

        <div className="slide-container rounded-md " style={mode_change}>
          <p className=" p-4 border-b-2 text-xl font-semibold">
          Experiment slider
          </p>
          <Fade className=" p-8">
            {arr1.map((arr1, index) => (
              <div key={index}>
                <div
                  className=""
                  style={{ ...divStyle, backgroundImage: `url(${arr1.url}) ` }}
                ></div>
              </div>
            ))}
          </Fade>
        </div>
        <div className="slide-container rounded-md " style={mode_change}>
          <p className=" p-4 border-b-2 text-xl font-semibold">Films slider</p>
          <Fade className=" p-8">
            {arr2.map((arr2, index) => (
              <div key={index}>
                <div
                  className=""
                  style={{ ...divStyle, backgroundImage: `url(${arr2.url}) ` }}
                ></div>
              </div>
            ))}
          </Fade>
        </div>
        <div className="slide-container rounded-md " style={mode_change}>
          <p className=" p-4 border-b-2 text-xl font-semibold">Films slider</p>
          <Fade className=" p-8">
            {arr2.map((arr2, index) => (
              <div key={index}>
                <div
                  className=""
                  style={{ ...divStyle, backgroundImage: `url(${arr2.url}) ` }}
                ></div>
              </div>
            ))}
          </Fade>
        </div>
        <div className="slide-container rounded-md " style={mode_change}>
          <p className=" p-4 border-b-2 text-xl font-semibold">Slide Only</p>

          <Fade className=" p-8">
            {arr.map((arr, index) => (
              <div key={index}>
                <div
                  className=""
                  style={{ ...divStyle, backgroundImage: `url(${arr.url}) ` }}
                ></div>
              </div>
            ))}
          </Fade>
        </div>

        <div className="slide-container rounded-md " style={mode_change}>
          <p className=" p-4 border-b-2 text-xl font-semibold">
          Experiment slider
          </p>
          <Fade className=" p-8">
            {arr1.map((arr1, index) => (
              <div key={index}>
                <div
                  className=""
                  style={{ ...divStyle, backgroundImage: `url(${arr1.url}) ` }}
                ></div>
              </div>
            ))}
          </Fade>
        </div>
        <div className="slide-container rounded-md " style={mode_change}>
          <p className=" p-4 border-b-2 text-xl font-semibold">Films slider</p>
          <Fade className=" p-8">
            {arr2.map((arr2, index) => (
              <div key={index}>
                <div
                  className=""
                  style={{ ...divStyle, backgroundImage: `url(${arr2.url}) ` }}
                ></div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </>
  );
};
export default ImageSlider;
