import React, { useState } from 'react'

function Calculator() {
  const [passiveIncomeCalc, setPassiveIncomeCalc] = useState({
    "passiveIncomeGoal": null,
    "fromAge": null,
    "toAge": null,
    "monthlyPayments": null,
    "totalInvestedGoal": null,
  });
  
  const [dividendRate, setDividendRate] = useState(0.08)

  const calculateInvestmentGoal = () => {
    // Check if this works
    const passiveIncomeGoal = passiveIncomeCalc.passiveIncomeGoal;
    let result = passiveIncomeGoal / dividendRate;
    setPassiveIncomeCalc({
      ...passiveIncomeCalc,
      "totalInvestedGoal": result
    });
  };

  const handleInputChange = (event) => {
    setPassiveIncomeCalc({...passiveIncomeCalc,
      [event.target.name]: event.target.value,
    })
    console.log(passiveIncomeCalc.passiveIncomeGoal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(passiveIncomeCalc)
  };

  return (
    <div>
       <h1 className="text-center text-3xl font-bold">Calculator</h1>
       <form onSubmit={handleSubmit}>
        <label>Passive Income Goal: </label>
        <input type='text' name="passiveIncomeGoal" onChange={handleInputChange} required/>
        <label>From Age: </label>
        <input type="text" name="fromAge" onChange={handleInputChange} required/>
        <label>To Age: </label>
        <input type="text" name="toAge" onChange={handleInputChange} required/>
        <button className='btn bg-orange-400 text-white' type="submit">Calculate</button>
       </form>
    </div>
  )
}

export default Calculator