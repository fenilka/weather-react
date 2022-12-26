import React, { useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherDayForecast from "./WeatherDayForecast";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [weather, setWeather] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function displayWeather(response) {
        setWeather(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col pl-0">
                        <WeatherDayForecast info={weather[0]} />
                    </div>
                    <div className="col">
                        <WeatherDayForecast info={weather[1]} />
                    </div>
                    <div className="col">
                        <WeatherDayForecast info={weather[2]} />
                    </div>
                    <div className="col">
                        <WeatherDayForecast info={weather[3]} />
                    </div>
                    <div className="col pr-0">
                        <WeatherDayForecast info={weather[4]} />
                    </div>
                </div>
            </div>
        );
    } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(displayWeather);

    return null;
}
}