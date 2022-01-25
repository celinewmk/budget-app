import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Expense from './components/Expense';
import ExpenseList from './components/ExpenseList';
import { AppProvider } from './context/AppContext';
import AddExpenseForm from './components/AddExpenseForm';
//import Footer from './components/Footer';

const App = () => {
  return (
    <AppProvider>
      <Header />
      <div className='container'>
          <div className='row mt-3'>
            <div className='col-sm'>
              <Budget />
            </div>
            <div className='col-sm'>
              <Remaining />
            </div>
            <div className='col-sm'>
              <Expense />
            </div>
          </div>
          <h3>Expenses</h3>
          <div className='row mt-3'>
            <div className='col-sm'>
              <ExpenseList />
            </div>
          </div>
          <h3>Add an expense</h3>
          <div className='row mt-3'>
            <div className='col-sm'>
              <AddExpenseForm />
            </div>
          </div>
      </div>
    </AppProvider>
 

    
  )
}

export default App;