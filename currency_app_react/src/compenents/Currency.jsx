import React, {  useState } from 'react'
import '../css/currency.css'
import { FaLongArrowAltRight } from "react-icons/fa"
import axios from 'axios';


function Currency() {
    let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
    let apiKey = "fca_live_fdLw2LP8Qk4TtlBczx58Vyh55Nd2drUZs1SxGVKw";
    
    


    const[amount, setAmount] = useState('');
    const[fromCurrency, setFromCurrency] = useState('USD');
    const[toCurrency, setToCurrency] = useState('TRY');
    const[result, setResult] = useState('');

    const convert = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${apiKey}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    }





  return (
    <div className='currency-div'>
        <div style={{textAlign:'center', marginBottom:'40px',marginTop:'40px' ,textDecoration:'underline'}}>
            <h1 className='title'>Currency Converter App</h1>
        </div>

        <div className='trader-div'>
            <input type="number" className='amount' value={amount} onChange={(e)=> setAmount(e.target.value)} />

            <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                <option >USD</option>
                <option >EUR</option>
                <option >TRY</option>
            </select>

            <FaLongArrowAltRight style={{fontSize:'30px'}} />

            <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                <option >TRY</option>
                <option >USD</option>
                <option >EUR</option>
            </select>

            <input type="number" className='result' value={result} readOnly/>
        </div>

        <div>
            <button onClick={convert} className='convert-btn'>Convert</button>
        </div>
    </div>
  )
  
}

export default Currency