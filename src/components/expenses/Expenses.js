import ExpenseItem from "./ExpenseItem";
import Card from "../core/Card";
import '../../styles/Expenses.css';
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [expenseItems, setExpenseItems] = useState(props.items);
  const [selectedYear, setSelectedYear] = useState('');
  const onYearChangeHandler = (changedYear) => {
    console.log(changedYear);
  }
  return (
    <div>
      <ExpensesFilter onYearChange={onYearChangeHandler}/>
      <Card className="expenses">
        {
          expenseItems.map((item, key)=>
            <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={key}/>
          )
        }
      </Card>
    </div>
  )
}

export default Expenses;