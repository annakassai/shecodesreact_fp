import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  let weather = {
    description: "Sunny",
    temperature: 7,
    pressure: 177,
    humidity: 22,
    wind: 67
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <h5 className="data">{weather.description}</h5>
          <h5 className="local-temperature">
            <i className="fas fa-sun"></i>
            <span className="temperature">{weather.temperature}</span>
            <span className="units"> °C | °F </span>
          </h5>
          <h5 className="data">Pressure:{weather.pressure}hPa</h5>
          <h5 className="data">Humidity:{weather.humidity}%</h5>        
          <h5 className="data">Wind:{weather.wind}km/h</h5>
        </div>
        <div className="col-2">
          <p>10:00</p>
          <p>13:00</p>
          <p>16:00</p>
          <p>19:00</p>
          <p>22:00</p>
          <p>24:00</p>
        </div> 
        <div className="col-1">
          <i className="fas fa-cloud-sun"></i>
        </div>    
        <div className="col-1">
          <p>5°C</p>
          <p>1°C</p>
          <p>2°C</p>
          <p>5°C</p>
          <p>4°C</p>
          <p>2°C</p>
        </div>
      </div>
    </div>
  );
}
