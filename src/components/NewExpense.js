import { useState } from "react";
import AddExpenseButton from "./AddExpenseButton";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const [content, setContent] = useState(
    <AddExpenseButton onClickOfAddEpense={onClickOfAddEpense} />
  );
  function NewExpenseHandler(NewExpenseData) {
    const newAddedExpense = {
      ...NewExpenseData,
      id: Math.random().toString()
    };
    props.onNewAddedExpense(newAddedExpense);
    setContent(<AddExpenseButton onClickOfAddEpense={onClickOfAddEpense} />);
  }
  function onClickOfAddEpense() {
    setContent(
      <ExpenseForm
        onNewExpense={NewExpenseHandler}
        onCancelButtonClick={onCancelButtonClick}
      />
    );
  }
  function onCancelButtonClick() {
    setContent(<AddExpenseButton onClickOfAddEpense={onClickOfAddEpense} />);
  }
  return <div className="NewExpense">{content}</div>;
}
