import './App.css';
import ExpenseItem from "./Components/ExpenseItem";
function App() {
  let Expenses=[
    {
      id:'e1',
      title:'Hostel Rent',
      amount:6000,
      date:new Date(2021,10,5)
    },
    {
      id:'e2',
      title:'Bike fuel',
      amount:7000,
      date:new Date(2021,10,5)
  
    },
    {
      id:'e3',
      title:'Food Expense',
      amount:10000,
      date:new Date(2021,10,5)
    },
    {
      id:'e4',
      title:'Mobile Load',
      amount:1000,
      date:new Date(2021,10,5),
    },
    {
      id:'e5',
      title:'Wifi Bill',
      amount:2000,
      date:new Date(2021,10,5),
    }
  ]

  return (
    <>
    <h2>  My Monthly Expense</h2>
    <ExpenseItem 
     date={Expenses[0].date}
     title={Expenses[0].title}
     amount={Expenses[0].amount}/>

<ExpenseItem 
     date={Expenses[1].date}
     title={Expenses[1].title}
     amount={Expenses[1].amount}/>

<ExpenseItem 
     date={Expenses[2].date}
     title={Expenses[2].title}
     amount={Expenses[2].amount}/>

<ExpenseItem 
     date={Expenses[3].date}
     title={Expenses[3].title}
     amount={Expenses[3].amount}/>
     <ExpenseItem 
     date={Expenses[4].date}
     title={Expenses[4].title}
     amount={Expenses[4].amount}/>
    </>
  );
}

export default App;
