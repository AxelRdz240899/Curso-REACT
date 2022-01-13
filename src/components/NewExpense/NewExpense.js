import { React, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [activeForm, setActiveForm] = useState(false);

    const activeFormChangeHandler = (value) => {
        setActiveForm(value);
    }

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            id: "e" + Math.random().toString(),
            ...enteredExpenseData
        };
        props.addExpenseCallback(expenseData);
    }

    // Función para desactivar el formulario de nuevo gasto
    const cancelExpense = () => {
        activeFormChangeHandler(false);
    }

    // Función para activar el formulario de nuevo gasto
    const activateForm = () => {
        activeFormChangeHandler(true);
    }

    return (
        <div className="new-expense">
            {activeForm === false && <button onClick={activateForm}> Crear nuevo gasto </button>}
            {activeForm === true && <ExpenseForm onSaveExpenseClick={saveExpenseHandler} cancelExpense={cancelExpense} />}
        </div>
    );
};

export default NewExpense;