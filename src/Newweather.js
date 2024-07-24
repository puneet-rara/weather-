import React, { useState, useEffect } from 'react'

export default function Newweather() {
    const [cityName, setCityName] = useState("Jaipur");
    const [weather, setWeather] = useState({});
    const [date, setDate] = useState(new Date());
   
    useEffect(() => {
        const timer = setInterval(() => {
          setDate(new Date());
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
      }, []);
    
  const handleChange = (e) => {
    setCityName(e.target.value);
    
  };

  const handleSearch = () => {
    const apiKey = "717fd57028e3bdb8a205a67f7daf3d74";
    if (cityName) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
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
    <>
        <div className='bg-slate-200 h-screen w-[23%] absolute left-[37%] rounded-xl  border-solid border-2 border-black'>

            <div className='h-[14%] flex justify-center items-center'>
                <input className='rounded-lg pl-2' placeholder='Enter City' value={cityName} onChange={handleChange}/>
                <button className='ml-3 font-semibold ' onClick={handleSearch}>Submit</button>
            </div>
            <div className='h-[86%] bg-white rounded-t-3xl'>
                <div className='h-[11%] flex justify-between pl-4 pr-4 font-serif items-center font-bold'>
                    <div className='flex justify-between w-[25%]'>
                    <p>{weather.name&&weather.name}</p><span>{weather.sys && weather.sys.country}</span>
                    </div>
                    <p>{weather.weather&&weather.weather[0].main}</p>
                </div>
                <div className='h-[9%] flex items-center font-serif font-light text-xl pl-4'>{date.toDateString()}</div>
                <div className='h-[30%] flex items-center text-9xl pl-4 bg-image bg-cover font-bold'>{Math.floor(weather.main && weather.main.temp)}</div>
                <div className=' h-[50%] rounded-b-2xl '>
                    <div className='h-[33%] w-[100%] flex'>
                        <div className='border-solid border-r-2 w-1/2 pt-5 pl-4'>
                            <h1 className='font-semibold text-xl'>Real Feel</h1>
                            <h2 className='text-xl font-bold'>{weather.main && weather.main.feels_like}</h2>
                        </div>
                        <div className='border-solid border-l-2 w-1/2 pt-5 pl-4'>
                            <h1 className='font-semibold text-xl'>Humidity</h1>
                            <h2 className='text-xl font-bold'>{weather.main && weather.main.humidity}</h2>
                        </div>
                    </div>
                    <div className='h-[33%] w-[100%]  flex'>
                        <div className='border-solid border-2 border-l-0 border-b-0 w-1/2 pt-5 pl-4'>
                            <h1 className='font-semibold text-xl'>Pressure</h1>
                            <h2 className='text-xl font-bold'>{weather.main && weather.main.pressure}</h2>
                        </div>
                        <div className='border-solid border-2 border-r-0 border-b-0 w-1/2 pt-5 pl-4'>
                            <h1 className='font-semibold text-xl'>Wind</h1>
                            <h2 className='text-xl font-bold'>{weather.wind && weather.wind.speed}</h2>
                        </div>
                    </div>
                    <div className='h-[33%] w-[100%] flex'>
                        <div className='border-solid border-2 border-l-0 border-b-0 w-1/2 pt-5 pl-4'>
                            <h1 className='font-semibold text-xl'>Latitude</h1>
                            <h2 className='text-xl font-bold'>{weather.coord && weather.coord.lat}</h2>
                        </div>
                        <div className='border-solid border-2 border-r-0 border-b-0 w-1/2 pt-5 pl-4'>
                            <h1 className='font-semibold text-xl'>Longitude</h1>
                            <h2 className='text-xl font-bold'>{weather.coord && weather.coord.lon}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </>
  )
}
