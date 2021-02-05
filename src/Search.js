import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="container">
       <form> 
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              className="searchengine"
              placeholder="🔍Enter a city here"
              autoFocus={true}
              autoComplete="off"
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
