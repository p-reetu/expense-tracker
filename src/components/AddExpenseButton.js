import "./AddExpenseButton.css";

export default function AddExpenseButton(props) {
  function onAddExpenseClick() {
    props.onClickOfAddEpense();
  }

  return (
    <div>
      <br />
      <button className="add-button" onClick={onAddExpenseClick}>
        Add Expense
      </button>
      <br />
    </div>
  );
}
