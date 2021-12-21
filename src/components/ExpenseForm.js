import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setExpenseDate(event.target.value);
  }

  return (
    <form>
      <div className="ExpenseForm">
        <div className="form-control">
          <label>Expense Name</label>
          <br />
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="form-control">
          <label>Expense Amount</label>
          <br />
          <input
            type="number"
            min="1"
            step="1"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="form-control">
          <label>Expense Date</label>
          <br />
          <input type="date" onChange={dateChangeHandler} />
        </div>
      </div>
      <button type="submit">Add Expense</button>
      <br />
    </form>
  );
}
