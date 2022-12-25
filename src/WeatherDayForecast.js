import React from "react";

export default function WeatherDayForecast(props) {
    let icon = props.info.weather.icon;
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
            <img src={icon}  alt=" " />
            <div className="WeatherForecast-temperature">
                <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>
                <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
            </div>
        </div>
    );
}