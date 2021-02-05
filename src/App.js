import React from "react";
import Search from "./Search";
import Weatherdata from "./WeatherData";
import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Weatherdata />
      <Forecast /> 
    </div>  
  );
}