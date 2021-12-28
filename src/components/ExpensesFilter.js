import "./ExpensesFilter.css";
import React from "react";

export default function ExpensesFilter(props) {
  function yearChangeHandler(event) {
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
            <select value={props.sltdyear} onChange={yearChangeHandler}>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
