import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    // Se convierten los valores obtenidos en la lista de objetos de puntos a una lista de valores
    const valueArrays = props.dataPoints.map(dataPoint => dataPoint.value);
    // Se obtiene el maximo valor de la lista de gastos
    const maxValue = Math.max(...valueArrays);
    
    return <div className="chart">
        {props.dataPoints.map((dataPoint) => (
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={maxValue}
                label={dataPoint.label} />
        ))}
    </div>
};

export default Chart;