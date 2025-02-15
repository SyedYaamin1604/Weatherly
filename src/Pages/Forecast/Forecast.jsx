import axios from "axios";
import React, { useEffect, useState } from "react";

const Forecast = () => {
  const [weatherInput, setWeatherInput] = useState("");
  const [weather, setWeather] = useState([]);
  const weatherApiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (weather) {
      console.log(weather);
    }
  }, [weather]);

  const fetchWeather = async () => {
    if (!weatherInput) return;
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${weatherInput}&units=metric&appid=${weatherApiKey}`;
      const response = await axios.get(url);
      setWeather(response.data);
      setWeatherInput("");
    } catch (error) {
      console.log(`Error Fetching Data: ${error}`);
    }
  };

  return (
    <div className="mt-5 py-10 text-center">
      <h1 className="text-white text-xl lg:text-3xl font-bold">
        Real-Time Weather Forecast at your Fingertips
      </h1>
      <p className="text-white text-md mt-2 font-semibold">
        Select your location to get real-time Weather update
      </p>
      <div className="flex justify-center items-center text-black mt-5">
        <div className="px-10 lg:max-w-[50%] w-full flex flex-row">
          <input
            type="text"
            placeholder="Enter City"
            onChange={(e) => setWeatherInput(e.target.value.toLowerCase())}
            value={weatherInput}
            className="w-full min-w-[80%] outline-none p-3 px-4 border-2 rounded-tl-2xl rounded-bl-2xl text-white"
          />
          <button
            onClick={fetchWeather}
            className="bg-orange-500 p-3 w-full rounded-br-2xl rounded-tr-2xl cursor-pointer hover:bg-orange-400"
          >
            Enter
          </button>
        </div>
      </div>

      {weather && weather.list && (
        <div className="mt-10 bg-gray-950 opacity-60 shadow-xl rounded-xl p-6 text-center mx-2 lg:mx-10">
          <h3 className="text-4xl font-semibold text-white">
            {weather.city.name}, {weather.city.country}
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {weather.list.slice(0, 5).map((forecast, index) => (
              <div
                key={index}
                className="flex-1 min-w-[200px] max-w-[250px] p-4 bg-gray-800 rounded-lg"
              >
                <p className="text-white text-sm font-semibold">
                  {new Date(forecast.dt * 1000).toLocaleString()}
                </p>
                <p className="text-white text-xl font-bold">
                  {Math.round(forecast.main.temp)}°C
                </p>
                <p className="capitalize text-white">
                  {forecast.weather[0].description}
                </p>
                <img
                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                  alt={forecast.weather[0].description}
                  className="mx-auto"
                />
                <div className="mt-2 text-gray-400 text-sm">
                  <p>Humidity: {forecast.main.humidity}%</p>
                  <p>Wind: {forecast.wind.speed} m/s</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Forecast;
