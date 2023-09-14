import React, { useState } from "react";
import "./WeatherApp.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";

const WeatherApp = () => {
   
  let api_key = `0baf236cb93d474a5439aeaf3b113a5b`;
  const [wicon, setWicon] = useState(clear_icon);
  const search = async() => {
    const element = document.querySelector(".cityInput");
    // console.log(element.value);
    if (element.value === "") return 0;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    const humidity = document.querySelector(".humidity-percent");
    const windSp = document.querySelector(".wind-rate");
    const temprature = document.querySelector(".weather-temp");
    const location = document.querySelector(".weather-location");

    humidity.innerHTML = data.main.humidity;
    console.log(humidity);
    
    windSp.innerHTML = Math.floor(data.wind.speed)+" Km/h";
    console.log(windSp);
    
    temprature.innerHTML = data.main.temp;
    console.log(temprature);
    
    location.innerHTML = data.name;
    console.log(location);


    if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
      setWicon(clear_icon);
    }
    else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
      setWicon(cloud_icon);
    }
    else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
      setWicon(drizzle_icon);
    }
  };
  
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div className="search-icon" onClick={() => search()}>
          <img src={search_icon} alt="error" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">24 C</div>
      <div className="weather-location">Delhi</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">wind speed</div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
