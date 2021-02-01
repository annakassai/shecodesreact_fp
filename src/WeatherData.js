import React from "react";
import "./WeatherData.css";

export default function Weatherdata() {
  let weather = {
    city: "Vienna",
    dayandtime: "Saturday 17:23",
  };

  return (
    <div className="innerContainer">
    <div className="row">
      <div className="col-12">
        <h1 className="data">{weather.city}</h1>
        <h3 className="data">{weather.dayandtime}</h3>
      </div>
    </div>
    </div>
  );
}
