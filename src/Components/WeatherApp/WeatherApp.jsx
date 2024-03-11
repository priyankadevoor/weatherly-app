import React from 'react';
import './WeatherApp.css'
// import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
// import drizzle_icon from '../Assets/drizzle.png'
import search_icon from '../Assets/search.png'
import humidity_icon from '../Assets/humidity.png'
// import rain_icon from '../Assets/rain.png'
// import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'

const WeatherApp = () => {

    //let api_key = "249b6c437db4459592089b5a7b304cc9"

    const search = () => {
        let element = document.getElementsByClassName("cityInput")
        if (element[0].value === ""){
            return 0;
        }

    }

  return (
    <div className='container'>
        <div className="top-bar">
            <input type='text' className='cityInput' placeholder='Search'/>
            <div className="search-icon" onClick={() => {search}}>
                <img src={search_icon} alt="" />
            </div>
            </div> 
        <div className="weather-image">
            <img src={cloud_icon} alt=""/>
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">India</div>
        <div className="data-container">
            <div className="element">
                <img className='icon' src={humidity_icon} alt='' />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img className='icon' src={wind_icon} alt='' />
                <div className="data">
                    <div className="wind-speed">15 km/hr</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WeatherApp;
