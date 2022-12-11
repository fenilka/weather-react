import React from "react";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Weather App">
        <h1>Weather App</h1>
        <Weather city="Paris"/>
      </header>
    </div>
  );
}

export default App;
