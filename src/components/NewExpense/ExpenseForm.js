import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const createExpense = (event) => {
        // Se cancela la recarga de la página debido al submit
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        };
        // Se ejecuta la función que limpia la bandera de formulario activo
        props.cancelExpense();
        props.onSaveExpenseClick(expenseData);
    }



    return (
        <form onSubmit={createExpense}>
            <div>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label> Titulo </label>
                        <input type="text" value={title} onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label> Monto </label>
                        <input type="number" min='0.01' step="0.01" value={amount} onChange={amountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label> Fecha </label>
                        <input type="date" min='2019-01-01' max='2022-12-31' value={date} onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={props.cancelExpense}> Cancelar </button>
                    <button type='submit'> Agregar Gasto </button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;