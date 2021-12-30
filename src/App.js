import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Transporte',
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

  const addExpenseHandler = (receivedExpense) => {
    expenses.push(receivedExpense);
    console.log("Lista de Gastos: ", expenses);
  }
  return (
    <div>
      <NewExpense addExpenseCallback={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
