import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h2>{props.info.city}</h2>
            <ul>
                <li>
                    <FormattedDate date={props.info.date} />
                </li>
                <li className="text-capitalize">{props.info.description}</li>
            </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <WeatherTemperature celsius={props.info.temperature} />
              </div>
              <div className="col-6 p-0">
                <img src={props.info.icon} 
                alt={props.info.description}/>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.info.humidity}%</li>
              <li>Wind: {props.info.wind} km/h</li>
            </ul>
          </div>
        </div>
    </div>
);
}