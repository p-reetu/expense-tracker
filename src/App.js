import { useState } from "react";
import "./styles.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const dummy_list = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12)
  }
];
export default function App() {
  const [expense, setExpense] = useState(dummy_list);

  function addedExpense(newAddedExpense) {
    console.log("in side app");
    console.log(newAddedExpense);
    setExpense((prevExpense) => {
      [newAddedExpense, ...prevExpense];
    });
  }
  return (
    <div className="App">
      <NewExpense onNewAddedExpense={addedExpense} />
      <Expenses list={dummy_list} />
    </div>
  );
}
