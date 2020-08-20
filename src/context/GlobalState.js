import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const intialState = {
    transactions:[]
}

//create context
export const GlobalContext = createContext(intialState);

//Provide components
export const GlobalProvider = ({children}) => {
    const [state, dispatch] =  useReducer(AppReducer , intialState);

    //Action
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value = {{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}