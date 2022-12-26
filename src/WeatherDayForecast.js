import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherDayForecast(props) {

    function maxTemperature() {
        let temperature = Math.round(props.info.temp.max);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.info.temp.min);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.info.dt * 1000);
        let day = date.getDay();
        let days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];

        return days[day];
    }

    return (
        <div>
            <div className="WeatherForecast-day">{day()}</div>
            <br />
            <WeatherIcon code={props.info.weather[0].icon} size={36} />
            <div className="WeatherForecast-temperature">
                <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>
                <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
            </div>
        </div>
    );
}