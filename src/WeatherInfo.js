import React from "react";
import FormattedDate from "./FormattedDate";

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
              <div className="col-3">
                <span className="temperature">{Math.round(props.info.temperature)}</span>
                <span className="unit">°C</span>
              </div>
              <div className="col-3">
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