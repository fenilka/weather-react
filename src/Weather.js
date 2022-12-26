import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ loaded: false });
  
  function displayWeather(response) {
      setWeather({
        loaded: true,
        coordinates: response.data.coord,
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        description: response.data.weather[0].description,
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (weather.loaded) {
    return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
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
    <WeatherInfo info={weather} />
    <WeatherForecast coordinates={weather.coordinates} />
  </div>
  );
  } else {
    search();
    return (
      <div className="text-center">Loading...</div>
    );
  }
}