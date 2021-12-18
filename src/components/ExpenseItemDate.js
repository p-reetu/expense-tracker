import "./ExpenseItemDate.css";

export default function ExpenseItemDate(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="ExpenseItemDate">
      <div className="Expense-day"> {day} </div>
      <div className="Expense-month"> {month} </div>
      <div className="Expense-year"> {year} </div>
    </div>
  );
}
