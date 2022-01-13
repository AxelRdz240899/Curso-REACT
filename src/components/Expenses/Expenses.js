import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

const Expenses = (props) => {

    // Hook que actualiza el estado del año seleccionado en el filtro
    const [filterYear, setFilterYear] = useState("2022");
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filterYear);


    // Función para obtener el cambio de estado del filtro de gastos
    const filterChangeHandler = (year) => {
        // Se ejecuta la función para cambiar el estado del año seleccionado en el filtro
        setFilterYear(year);
    }

    return (
        <div>
            {/* Componente CARD con la lista de Gastos y el filtro */}
            <Card className="expenses">                
                {/* Filtro de Gastos */}
                <ExpensesFilter
                    selected={filterYear}
                    changeYearCallback={filterChangeHandler}
                />

                {/* Grafico de gastos */}
                <ExpensesChart expenses={filteredExpenses} />

                {/* Lista de Gastos */}
                <ExpensesList expenses={filteredExpenses} />

                {/* Aquí estoy generando  el contenido de manera condicional , el simbolo && es un
                 "truco" que se utiliza con frecuencia, ya que siempre va a dar true, entonces solo se
                 checa la primera condicional
                */}
                {/* {filteredExpenses.length === 0 && <p> No se encontraron gastos </p>}
                {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    ></ExpenseItem>
                ))} */}
                {/* {filteredExpenses.length === 0 ? <p> No se encontraron gastos</p> :
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        ></ExpenseItem>
                    ))} */}
            </Card>
        </div>
    );
}

export default Expenses;