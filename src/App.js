import React from "react";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Weather App">
        <h1>Weather App</h1>
        <Weather />
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
      </header>
    </div>
  );
}

export default App;
