import React from "react";
import ReactAnimatedWeather from 'react-animated-weather'
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
            <ReactAnimatedWeather
              icon = 'CLEAR_DAY'
              color = 'goldenrod'
              size = {50}
              animate = {true}
              className="fasfasun"
            />
            <span className="temperature">{weather.temperature}</span>
            <span className="units"> °C | °F </span>
          </h5>
          <h5 className="data">Pressure:{weather.pressure}hPa</h5>
          <h5 className="data">Humidity:{weather.humidity}%</h5>        
          <h5 className="data">Wind:{weather.wind}km/h</h5>
        </div>
        <div className="col-1">
          <p>0:00</p>
          <p>3:00</p>
          <p>6:00</p>
          <p>9:00</p>
          <p>0:00</p>
        </div> 
        <div className="col-2">
        <ReactAnimatedWeather
          icon = 'CLEAR_DAY'
          color = 'goldenrod'
          size = {25}
          animate = {true}
        />
         <ReactAnimatedWeather
          icon = 'PARTLY_CLOUDY_DAY'
          color = 'grey'
          size = {25}
          animate = {true}
        />
         <ReactAnimatedWeather
          icon = 'CLOUDY'
          color = 'darkblue'
          size = {25}
          animate = {true}
        />
        <ReactAnimatedWeather
          icon = 'CLEAR_DAY'
          color = 'goldenrod'
          size = {25}
          animate = {true}
        />
         <ReactAnimatedWeather
          icon = 'PARTLY_CLOUDY_DAY'
          color = 'grey'
          size = {25}
          animate = {true}
        />
        </div>    
        <div className="col-1">
          <p>5°C</p>
          <p>1°C</p>
          <p>2°C</p>
          <p>5°C</p>
          <p>4°C</p>
        </div>
      </div>
    </div>
  );
}
