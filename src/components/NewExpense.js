import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  function NewExpenseHandler(NewExpenseData) {
    const newAddedExpense = {
      ...NewExpenseData,
      id: Math.random().toString()
    };
    props.onNewAddedExpense(newAddedExpense);
  }
  return (
    <div className="NewExpense">
      <ExpenseForm onNewExpense={NewExpenseHandler} />
    </div>
  );
}
