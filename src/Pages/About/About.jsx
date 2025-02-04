import React from "react";
import { Link } from "react-router";
import Weatherly from "../../assets/Weatherly.png";

const About = () => {
  return (
    <>
      <div className="text-white flex flex-col lg:flex-row justify-center items-center px-18 md:px-40 lg:px-20 xl:px-28 py-10">
        <div className="p-2 lg:max-w-[60%] w-full lg:min-h-[60vh] flex flex-col justify-center items-center lg:items-start text-center lg:text-start">
          <h1 className="text-orange-500 text-2xl font-semibold uppercase">
            About
          </h1>
          <h1 className="text-4xl font-bold mt-2">
            From Sunshine to Storms, All in one Place
          </h1>
          <p className="text-base mt-6">
            Weatherly was created to deliver accurate weather forecasts in a
            simple, user-friendly way. By leveraging cutting-edge technology and
            a clean design, we aim to make weather updates accessible to
            everyone.
          </p>
          <p className="text-base mt-2">
            Our platform integrates data from OpenWeatherMap and utilizes React
            for seamless navigation. Tailwind CSS ensures a visually appealing
            design, while DaisyUI adds an interactive touch.
          </p>
          <p className="text-base mt-2">
            Our goal is to help users plan their days and make informed
            decisions based on reliable weather information.
          </p>
          <Link to={"/forecast"}>
            <button className="bg-orange-500 hover:bg-orange-400 cursor-pointer py-3 rounded-full px-5 font-semibold transition-transform duration-500 ease-in-out transform hover:scale-105 mt-6">
              Get Started
            </button>
          </Link>
        </div>
        <div className="max-w-[90%] md:max-w-[70%] lg:max-w-[40%] min-h-[60vh]">
          <img
            src={Weatherly}
            alt="Weatherly"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default About;
