import './App.css';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalState'

const App = () => {

  const fName = 'Seph Gutierrez';
  const isNameShow = true;

  return (
    <GlobalProvider>
      <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
    </GlobalProvider>
  );
}

export default App;
