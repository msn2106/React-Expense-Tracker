import ExpenseItem from "./ExpenseItem";
import Card from "../core/Card";
import '../../styles/Expenses.css';
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [expenseItems, setExpenseItems] = useState(props.items);
  const [selectedYear, setSelectedYear] = useState('2020');
  const onYearChangeHandler = (changedYear) => {
    setSelectedYear(changedYear);
  }

  const tempItems = expenseItems.filter((e) => e.date.getFullYear().toString() === selectedYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onYearChange={onYearChangeHandler}/>
        {
          tempItems.map((item, key)=>
            <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id}/>
          )
        }
      </Card>
    </div>
  )
}

export default Expenses;