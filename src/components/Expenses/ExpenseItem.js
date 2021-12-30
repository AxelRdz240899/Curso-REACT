import { useState } from 'react';
import './ExpenseItem.css';
import './ExpenseDate'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    // Función para cambiar el titulo 
    const changingTitle = () => {
        setTitle('Cambió esta madre');
        setAmount(0);
    }

    // Llegan como parámetros en el props la fecha del gasto, el nombre del gasto y el monto del gasto.
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2> {title}</h2>
                <div className="expense-item__price"> ${amount} </div>
            </div>
            <button onClick={changingTitle}>Cambiar Título</button>
        </Card >
    );
}

export default ExpenseItem;