import React from 'react';
import Weatherly from "../../assets/Weatherly.png";
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className="text-white flex flex-col lg:flex-row justify-center items-center px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 py-10">
            <div className="p-2 h-full w-full lg:w-[60%] flex flex-col text-center lg:text-start justify-center items-center lg:items-start space-y-4">
                <h1 className="text-white text-lg sm:text-xl font-semibold">Weather & Forecast</h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Sunshine or Storm, we've got you covered</h1>
                <p className="text-sm sm:text-base leading-relaxed max-w-xl">
                    Weatherly is designed to provide you with accurate and up-to-date weather information. Whether you're planning your day or packing for a trip, our forecasts have got you covered.
                </p>
                <Link to={"/forecast"}>
                    <button className="bg-orange-500 hover:bg-orange-400 cursor-pointer py-3 px-6 rounded-full font-semibold transition-transform duration-300 ease-in-out transform hover:scale-105">
                        Get Started
                    </button>
                </Link>
            </div>
            <div className="w-full max-w-[90%] sm:max-w-[70%] lg:max-w-[40%] flex justify-center mt-6 lg:mt-0">
                <img src={Weatherly} alt="Weatherly" className="w-full h-auto object-contain" />
            </div>
        </div>
    );
};

export default Home;
