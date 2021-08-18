import React from 'react';
import "./style/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Search() {

  
  return (
    <div id="d-flex" className="search-filter">
        <div className="input-group">
          <input
            className="search-input p-2 rounded-pill"
            placeholder="Search" 
          />
          <span className="input-group-append">
            <button
              id="search-border"
              className="btn btn-outline-secondary search-icon"
              type="button"
            >
              <i className="bi-search" />
            </button>
          </span>
          <button
            className="btn btn-outline-secondary rounded"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="bi-funnel" />
          </button>
        </div>
      </div>
  )
}

export default Search