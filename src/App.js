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
          <a href="https://github.com/fenilka/weather-react" title="GitHub">
            Open-source code
          </a>{" "}
          by Alina Klochkova
        </small>
      </header>
    </div>
  );
}

export default App;
