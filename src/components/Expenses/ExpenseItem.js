import './ExpenseItem.css';
import './ExpenseDate'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    // Llegan como parámetros en el props la fecha del gasto, el nombre del gasto y el monto del gasto.
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2> {props.title}</h2>
                    <div className="expense-item__price"> ${props.amount} </div>
                </div>
                {/* <button onClick={changingTitle}>Cambiar Título</button> */}
            </Card >
        </li>
    );
}

export default ExpenseItem;