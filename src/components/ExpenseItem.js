import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  // const date = new Date();
  // const expenseDate = date.toLocaleDateString();
  // const expenseTitle = 'Ice Cream';
  // const expensePrice = 21.5;

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} RON</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
