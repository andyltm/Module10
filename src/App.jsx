import { useState } from 'react'
import './App.css'
import CurrencyDropdown from './components/CurrencyDropdown'
import CurrencyConverter from './components/CurrencyConverter';
import AppContext from './AppContext.jsx';

function App() {
  const [fromCurrency, setFromCurrency] = useState("EUR")
  const [toCurrency, setToCurrency] = useState("USD")

  return (
    <>
      <AppContext.Provider value={{ fromCurrency, toCurrency, setFromCurrency, setToCurrency }}>
        <div className="container">
          <p>I want to convert</p>
          <CurrencyDropdown 
            isSource={true}
          />
          <p>to</p>
          <CurrencyDropdown
            isSource={false}
          />
        </div>
        <CurrencyConverter 
        />
      </AppContext.Provider>
    </>
  )
}

export default App;
