import React, { useState } from "react";

export default function Weather() {
  const [cityName, setCityName] = useState("Jaipur");
  const [weather, setWeather] = useState({});

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSearch = () => {
    const apiKey = "717fd57028e3bdb8a205a67f7daf3d74";
    if (cityName) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setWeather(data);
          console.log(data);
        })
        .catch((error) => {
          console.log("Error Occured :", error);
        });
    }
  };

  return (
    <div className="bg-image h-screen bg-cover bg-no-repeat  flex justify-center items-center ">
      <div className="bg-left bg-cover bg-no-repeat rounded-l-lg w-1/3 h-4/5  ">
        <div className="flex justify-end h-1/2">
          <p className="text-2xl font-bold mt-2 me-2">
            {weather.name && weather.name}
            {weather.sys && weather.sys.country}
          </p>
        </div>

        <div className="flex justify-between h-1/2 items-end pb-2">
          <div className="ms-2">
            <p className="text-white font-bold text-2xl">
              {weather.coord && weather.coord.lat}
            </p>
            <p className="text-white font-bold text-2xl">
              {weather.coord && weather.coord.lon}
            </p>
          </div>
          <p className="text-white font-bold text-2xl me-2">
            {weather.main && weather.main.temp}
          </p>
        </div>
      </div>

      <div className="bg-slate-500 opacity-75 rounded-r-lg w-1/3 h-4/5">
        <div className="">
          <div>
            <p>Hello</p>
            <p className="mt-24 flex justify-between">
              <input
                type="text"
                placeholder="Enter City"
                value={cityName}
                onChange={handleChange}
                className="w-3/4 bg-transparent text-2xl rounded-lg border-solid border-2 border-sky-400 pl-3"
              />
              <button
                className="w-1/4 border-solid border-2 rounded-2xl text-2xl"
                onClick={handleSearch}
              >
                Search
              </button>
            </p>
          </div>
          <div className="text-center mt-10 font-bold text-2xl text-slate-900">
            <p className="">
              {weather.name && weather.name}
              {weather.sys && weather.sys.country}
            </p>
            <p>{weather.weather && weather.weather[0].main}</p>
          </div>
          <div className="mt-10 text-2xl font-semibold">
            <div className="flex justify-around mt-10 border-b border-gray-300 m-4 p-3">
              <p>Visibility</p>
              <p>{weather.visibility && weather.visibility / 1000}KM</p>
            </div>
            <div className="flex justify-around mt-10 border-b border-gray-300 m-4 p-3">
              <p>Wind Speed</p>
              <p>{weather.wind && weather.wind.speed}KM</p>
            </div>
            <div className="flex justify-around mt-10 border-b border-gray-300 m-4 p-3">
              <p>Temperature</p>
              <p>{weather.main && weather.main.temp}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
