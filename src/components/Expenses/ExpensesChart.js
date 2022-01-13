import React from "react";
import Chart from "../Chart/Chart";
const ExpensesChart = (props) => {
    // Lista de puntos de la gráfica ( Por el momento son estáticos )
    const chartDataPoints = [
        { label: 'Ene', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Abr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Ago', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dic', value: 0 },
    ]

    // Se recibe la lista de gastos desde el componente padre
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); // El mes empieza en 0
        // Se busca el mes en la lista de puntos y se le suma el valor del monto del gasto
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    return (
        <Chart dataPoints={chartDataPoints} />
    );
}

export default ExpensesChart;