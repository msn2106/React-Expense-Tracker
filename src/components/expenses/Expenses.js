import Card from "../core/Card";
import '../../styles/Expenses.css';
import ExpensesFilter from "./ExpenseFilter";
import { useEffect, useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [expenseItems, setExpenseItems] = useState(props.items);
  const [selectedYear, setSelectedYear] = useState('2020');
  const onYearChangeHandler = (changedYear) => {
    setSelectedYear(changedYear);
  }
  
  useEffect(()=>{
    setExpenseItems(props.items);
  },[props.items])

  const tempItems = expenseItems.filter((e) => e.date.getFullYear().toString() === selectedYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onYearChange={onYearChangeHandler}/>
        {
          // this called abusing
          // tempItems.length < 1 && <p>No Records found!!!</p>
        }
        <ExpensesList items={tempItems}/>
      </Card>
    </div>
  )
}

export default Expenses;