import React, {useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const {expenses} = useContext(AppContext)

    return (
        <>
            <input 
                type='text'
                className='form-control mb-2 mr-sm-2'
                placeholder='Search an expense'
            />
            <ul className='list-group'>
                {expenses.map(
                    (expense)=>(
                        <ExpenseItem id={expense.id}
                                    name={expense.name}
                                    cost={expense.cost}/>
                    ))}
            </ul>
        </>
    )
}

export default ExpenseList;