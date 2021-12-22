import { useState } from "react";
import "./ExpensesFilter.css";
import React from "react";

export default function ExpensesFilter(props) {
  const [filterYear, setFilterYear] = useState("");

  function yearChangeHandler(event) {
    setFilterYear(event.target.value);
    props.onYearChange(event.target.value);
  }
  return (
    <div>
      <div className="super-comp">
        <div className="sub-comp-1">
          <h4>Filter by year</h4>
        </div>
        <div className="sub-comp-2">
          <div>
            <select onChange={yearChangeHandler}>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
      </div>
      <div className="filter-bars">
        <div className="bar-parent-div">
          <div className="bar"></div>
          <p>JAN</p>
        </div>
        <div className="bar-parent-div">
          <div className="bar"></div>
          <p>FEB</p>
        </div>
        <div className="bar-parent-div">
          <div className="bar"></div>
          <p>MAR</p>
        </div>
        <div className="bar-parent-div">
          <div className="bar"></div>
          <p>APR</p>
        </div>
        <div className="bar-parent-div">
          <div className="bar"></div>
          <p>MAY</p>
        </div>
        <div className="bar-parent-div">
          <div className="bar"></div>
          <p>JUN</p>
        </div>
        <div className="bar-parent-div">
          <div className="bar"></div>
          <p>JUL</p>
        </div>
        <div className="bar-parent-div">
          <div className="bar"></div>
          <p>AUG</p>
        </div>
        <div className="bar-parent-div">
          <div className="bar"></div>
          <p>SEP</p>
        </div>
        <div className="bar-parent-div">
          <div className="bar"></div>
          <p>OCT</p>
        </div>
        <div className="bar-parent-div">
          <div className="bar"></div>
          <p>NOV</p>
        </div>
        <div className="bar-parent-div">
          <div className="bar"></div>
          <p>DEC</p>
        </div>
      </div>
    </div>
  );
}
