import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  const list = props.list;
  return <div className="Expenses">
    <ExpenseItem
    date={list[0].date}
    name={list[0].title}
    amount={list[0].amount}
    />
    <ExpenseItem date={list[1].date} name={list[1].title} amount={list[1].amount} />
    <ExpenseItem date={list[2].date} name={list[2].title} amount={list[2].amount} />
    <ExpenseItem date={list[3].date} name={list[3].title} amount={list[3].amount} />
  </div>;
}