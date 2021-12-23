import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

export default function Expenses(props) {
  const list = props.list;
  const [selectedYear, setSelectedYear] = useState("2021");
  const filteredArray = list.filter(
    (expense) => selectedYear === expense.date.getFullYear().toString()
  );

  function selectedfilteryear(enteredYear) {
    setSelectedYear(enteredYear);
  }
  return (
    <div className="Expenses">
      <ExpensesFilter
        sltdyear={selectedYear}
        onYearChange={selectedfilteryear}
      />
      {filteredArray.length === 0 ? (
        <p>No Expenses found! Try selecting a different year.</p>
      ) : (
        filteredArray.map((expense) => {
          return (
            <ExpenseItem
              date={expense.date}
              name={expense.title}
              amount={expense.amount}
            />
          );
        })
      )}
    </div>
  );
}
