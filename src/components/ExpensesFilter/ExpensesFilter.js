import React from 'react';

import './ExpensesFilter.css';

// Filtro del año seleccionado para ver los gastos, recibe como props la función callback para notificar al componente Expenses que se seleccionó otro estado
const ExpensesFilter = (props) => {

    // Función que cambia el estado del año seleccionado
    const changeYear = (event) => {
        // Se ejecuta el callback para regresar el estado del filtro al componente expenses
        props.changeYearCallback(event.target.value);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filtrar por año</label>
                <select value={props.selected} onChange={changeYear}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;