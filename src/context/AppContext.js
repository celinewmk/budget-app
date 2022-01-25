import {createContext, useReducer} from 'react';

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            }
        case 'REMOVE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense)=> expense.id !== action.payload)
            }
        case 'EDIT_BUDGET':
            return {
                ...state,
                budget: action.payload,
            }
        default:
            return state;
    }

}

const initialState = {
    budget: 2000,
    expenses: [
        {id: 1, name: "Shopping", cost: 50},
        {id: 2, name: "Holiday", cost: 300},
        {id: 3, name: "Transportation", cost: 70},
        {id: 4, name: "Entertainment", cost: 40}, 
    ]
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return(
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}