import './App.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import Spent from './components/Spent';
import { AppProvider } from './context/AppContext';

function App() {
  return (
<>
<AppProvider>
<div>
<h1 className = 'flex justify-center text-center font-bold text-3xl'> Expense Tracker </h1>
      <div className='flex items-center justify-center'>
      
        <Budget />
        <Remaining />
        <Spent />
      </div>

      <ExpenseList />
      <AddExpenseForm />
    </div>
</AppProvider>
</>
  );
}

export default App;