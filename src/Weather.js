import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";


export default function Weather() {
    let [city, setCity] = useState("");
    let [loaded, setLoaded] = useState(false);
    let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
        city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "aa3f53c0e34a617442f56df884783d68";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control"
            autoFocus="on"
            autoComplete="off"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <ul>
        <li><h2>{weather.city}</h2></li>
        <li>{weather.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <span className="temperature">{Math.round(weather.temperature)}</span>
                <span className="unit">°C</span>
              </div>
              <div className="col-3">
                <img src={weather.icon} 
                alt={weather.description}/>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Percipitation: {weather.humidity}%</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
            </ul>
          </div>
        </div>
    </div>
    );
  } else {
    return form;
  }
}