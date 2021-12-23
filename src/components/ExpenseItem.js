import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";

export default function ExpenseItem(props) {
  return (
    <div className="ExpenseItem">
      <div className="Expense-date">
        <ExpenseItemDate date={props.date} />
      </div>
      <h3 className="Expense-name">{props.name}</h3>
      <div className="Expense-amount">
        <div className="sub-expense-amount">₹ {props.amount}</div>
      </div>
    </div>
  );
}
