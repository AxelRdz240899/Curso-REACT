import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from 'react';

function Expenses(props) {
    const expenses = props.expenses;

    // Hook que actualiza el estado del año seleccionado en el filtro
    const [filterYear, setFilterYear] = useState('2021');

    // Función para obtener el cambio de estado del filtro de gastos
    const filterChangeHandler = (year) => {
        console.log("El año que me llegó es: ", year);
        // Se ejecuta la función para cambiar el estado del año seleccionado en el filtro
        setFilterYear(year);
    };

    return (
        <div>
            {/* Componente CARD con la lista de Gastos y el filtro */}
            <Card className="expenses">
                {/* Filtro de Gastos */}
                <ExpensesFilter selected={filterYear} changeYearCallback={filterChangeHandler} />
                <ExpenseItem
                    title={expenses[0].title}
                    amount={expenses[0].amount}
                    date={expenses[0].date} >
                </ExpenseItem>
                <ExpenseItem
                    title={expenses[1].title}
                    amount={expenses[1].amount}
                    date={expenses[1].date} >
                </ExpenseItem>
                <ExpenseItem
                    title={expenses[2].title}
                    amount={expenses[2].amount}
                    date={expenses[2].date} >
                </ExpenseItem>
                <ExpenseItem
                    title={expenses[3].title}
                    amount={expenses[3].amount}
                    date={expenses[3].date} >
                </ExpenseItem>
            </Card>
        </div>

    )
}

export default Expenses;