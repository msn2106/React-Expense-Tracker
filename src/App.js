import React from "react";
import Expenses from "./components/expenses/Expenses";
import { expenses } from "./data/ExpensesData";

const App = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );

  // same thing as above
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {} , "Let's get started!"),
  //   React.createElement(Expenses, { items : expenses})
  // );
}

export default App;
