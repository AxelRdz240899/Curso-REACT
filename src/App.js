import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: 'e1',
    title: 'Transporte Pelotudazo',
    amount: 94.12,
    date: new Date(Date.now())
  }, {
    id: 'e2',
    title: 'Uber',
    amount: 100,
    date: new Date(Date.now())
  }, {
    id: 'e3',
    title: 'Mary',
    amount: 147,
    date: new Date(Date.now())
  }, {
    id: 'e4',
    title: 'Prueba',
    amount: 95,
    date: new Date(Date.now())
  }
]

const App = () => {

  // Variable que contiene la lista de gastos
  const [expenses, setExpenses] = useState(initialExpenses);

  // Método que se ejecuta cuando se agrega un nuevo gasto utilizando el formulario
  const addExpenseHandler = (receivedExpense) => {
    console.log("Gasto: ", receivedExpense);
    // Se ejecuta la función para actualizar el estado de los gastos, se utiliza la función fecha para actualizar la lista con un "snapshot" de como estaba anteriormente
    setExpenses((previousExpenses) => {
      return [receivedExpense, ...previousExpenses];;
    });
  }
  return (
    <div>
      <NewExpense addExpenseCallback={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
