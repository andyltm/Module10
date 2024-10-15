import { useState, useEffect, useContext } from 'react'
import './CurrencyStyling.css'
import AppContext from '../AppContext';

const CurrencyDropdown = ({ isSource }) => {
    const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } = useContext(AppContext)
    const [currencyCodes, setCurrencyCodes] = useState([])

    useEffect(() => {
        // fetch(
        //     'https://v6.exchangerate-api.com/v6/cc62d6e02ce320c8d60cefd7/codes',
        //     { mode: 'cors' } // for those with CORS error
        // )
        // .then(response => response.json())
        // .then(data => setCurrencyCodes(data.supported_codes))

        const data = [
            ["AED", "UAE Dirham"],
            ["AFN", "Afghan Afghani"],
            ["ALL", "Albanian Lek"],
            ["AMD", "Armenian Dram"],
            ["EUR", "Euro"],
            ["USD", "United States Dollar"],
            ["SGD", "Singapore Dollar"]
          ]
          setCurrencyCodes(data)
    }, [])

    const handleOnChange = (event) => {
        isSource ? setFromCurrency(event.target.value) : setToCurrency(event.target.value)
    }

    return (
        <select 
            name="currency"
            id="currencySelect"
            value={isSource ? fromCurrency : toCurrency}
            onChange={handleOnChange}
        >
            {currencyCodes.map(code => {
                return <option value={code[0]}>{code[0]}</option>
            })}
        </select>
    )
}

export default CurrencyDropdown
