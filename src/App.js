import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />

        <small>
          This project was coded by {" "}
          <a href="https://spectacular-toffee-559980.netlify.app/"  rel="noreferrer" target="_blank">
            Alina Klochkova
          </a>{" "}
          and is {" "}
          <a href="https://github.com/fenilka/weather-react"  rel="noreferrer" target="_blank" title="GitHub">
          open-sourced on Github
          </a>
        </small>
      </div>
    </div>
  );
}