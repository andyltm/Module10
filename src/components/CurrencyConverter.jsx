import { useState, useEffect, useContext } from 'react'
import './CurrencyStyling.css'
import AppContext from '../AppContext';

const CurrencyConverter = () => {
    const { fromCurrency, toCurrency } = useContext(AppContext)
    const [amount, setAmount] = useState(1)
    const [output, setOutput] = useState(2)

    // convert user input in currency A to correct value in currency B
    useEffect(() => {
        fetch(
            `https://v6.exchangerate-api.com/v6/fakeapikey/pair/${fromCurrency}/${toCurrency}/` + amount, 
            // 'https://v6.exchangerate-api.com/v6/cc62d6e02ce320c8d60cefd7/pair/EUR/USD/' + amount, 
            // `https://v6.exchangerate-api.com/v6/cc62d6e02ce320c8d60cefd7/pair/${fromCurrency}/${toCurrency}/${amount}`, 
            // { mode: "no-cors" }
        )
        .then(response => {
            return response.json()
        })
        .then(data => {
            // console.log(data)
            setOutput(data?.conversion_result) 
        })
        .catch(error => {
            console.log('error: ', error)
        }) 
    }, [amount, fromCurrency, toCurrency]) // we want this side effect to run whenever the amount or selected from/to currencies changes 

    const handleOnChange = (event) => {
        setAmount(event.target.value)
    }

    return(
        <>
            <div className="container">
            <input 
                value={amount}
                placeholder="Enter amount"
                className="currencyInput"
                onChange={handleOnChange}
            />
            <p>{fromCurrency}</p>
            <p>=</p>
            <p className="currencyOutput">{output}</p>
            <p>{toCurrency}</p>
            </div>
        </>
    )
}

export default CurrencyConverter;