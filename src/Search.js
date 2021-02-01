import React from "react";
import axios from "axios"; 
import "./Search.css";

export default function Search() {
  const []

  function displayForecast(response) {

  }

  function handleSubmit(event) {
    event.preventDefault(); 
    let apiKey = "1fd01a094c047ffda9a1022db88d180b";
    let unit = `metric`;
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(displayForecast)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              className="searchengine"
              placeholder="🔍Enter a city here"
              autoFocus={true}
              autoComplete="off"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-secondary">
              Search
            </button>
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-warning">
              Locate
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
