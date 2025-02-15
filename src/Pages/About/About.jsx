import React from "react";
import { Link } from "react-router";
import Weatherly from "../../assets/Weatherly.png";

const About = () => {
  return (
    <>
      <div className="text-white flex flex-col lg:flex-row justify-center items-center px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 py-10">
        <div className="p-2 h-full w-full lg:w-[60%] flex flex-col text-center lg:text-start justify-center items-center lg:items-start space-y-4">
          <h1 className="text-xl sm:text-2xl font-semibold uppercase text-orange-400">
            About
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            From Sunshine to Storms, All in one Place
          </h1>
          <p className="text-sm sm:text-base leading-relaxed">
            Weatherly was created to deliver accurate weather forecasts in a
            simple, user-friendly way. By leveraging cutting-edge technology and
            a clean design, we aim to make weather updates accessible to
            everyone.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            Our platform integrates data from OpenWeatherMap and utilizes React
            for seamless navigation. Tailwind CSS ensures a visually appealing
            design, while DaisyUI adds an interactive touch.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            Our goal is to help users plan their days and make informed
            decisions based on reliable weather information.
          </p>
          <Link to={"/forecast"}>
            <button className="bg-orange-500 hover:bg-orange-400 cursor-pointer py-3 px-6 rounded-full font-semibold transition-transform duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
        <div className="w-full max-w-[90%] sm:max-w-[70%] lg:max-w-[40%] flex justify-center mt-6 lg:mt-0">
          <img
            src={Weatherly}
            alt="Weatherly"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default About;
