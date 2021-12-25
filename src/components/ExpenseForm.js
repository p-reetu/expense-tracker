import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
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
  function onFormSubmitHandler(event) {
    event.preventDefault();
    const newExpenseData = {
      title: title,
      amount: amount,
      date: new Date(expenseDate)
    };
    setTitle("");
    setAmount("");
    setExpenseDate("");
    props.onNewExpense(newExpenseData);
  }

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className="ExpenseForm">
        <div className="form-control">
          <label>Expense Name</label>
          <br />
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="form-control">
          <label>Expense Amount</label>
          <br />
          <input
            type="number"
            min="1"
            step="1"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="form-control">
          <label>Expense Date</label>
          <br />
          <input type="date" value={expenseDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="add-or-cancel-button-div">
        <button type="submit">Add Expense</button>
        <button type="reset">Cancel</button>
      </div>
      <br />
    </form>
  );
}
