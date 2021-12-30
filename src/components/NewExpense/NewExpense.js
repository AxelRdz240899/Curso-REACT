import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };        
        props.addExpenseCallback(expenseData);
    }
    return (
        <div className="new-expense">
            {/* Se implementa  un callback desde el formulario (Hijo de este componente)*/}
            <ExpenseForm onSaveExpenseClick = {saveExpenseHandler} />
        </div>
    );
};

export default NewExpense;