import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

    // Si es 0 el número de gastos entonces renderiza un código JSX
    // completamente diferente
    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback"> No se encontraron gastos </h2>
    }

    // Si el número de gastos es diferente a 0 entonces se regresa esta lista de elementos
    return (
        <ul className="expenses-list">
            {props.expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                ></ExpenseItem>
            ))}
        </ul>
    );
};

export default ExpensesList;