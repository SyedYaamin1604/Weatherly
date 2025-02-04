import React from 'react'
import Weatherly from "../../assets/Weatherly.png"
import { Link } from 'react-router'

const Home = () => {
    return (
        <>
            <div className='text-white flex flex-col lg:flex-row justify-center items-center px-18 md:px-40 lg:px-20 xl:px-28 py-10'>
                <div className='p-2 lg:max-w-[60%] w-full lg:min-h-[60vh] flex flex-col text-center lg:text-start justify-center items-center lg:items-start'>
                    <h1 className='text-white text-xl font-semibold text-center lg:text-start w-full'>Weather & Forecast</h1>
                    <h1 className='text-4xl md:text-5xl font-bold mt-2'>Sunshine or Storm, we have got you covered</h1>
                    <p className='text-base mt-6'>Weatherly is designed to provide you with accurate and up-to-date weather information. Whether you're planning your day or packing for a trip, our forecasts have got you covered.</p>
                    <Link to={"/forecast"}>
                        <button className='bg-orange-500 hover:bg-orange-400 cursor-pointer py-3 rounded-full px-5 font-semibold transition-transform duration-500 ease-in-out transform hover:scale-105 mt-6 '>Get Started</button>
                    </Link>
                </div>
                <div className='max-w-[80%] md:max-w-[70%] lg:max-w-[40%] min-h-[60vh]'>
                    <img src={Weatherly} alt="Weatherly" className='h-full w-full object-contain' />
                </div>
            </div>
        </>
    )
}

export default Home