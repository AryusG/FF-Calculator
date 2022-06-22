import React, { useState } from 'react'

function Card() {
  const [passiveIncomeCalc, setPassiveIncomeCalc] = useState({
    "passiveIncomeGoal": null,
    "fromAge": null,
    "toAge": null,
    "monthlyPayments": null,
    "totalInvested": null,
  });
  
  const doMath = () => {
    
  }

  const handleInputChange = (event) => {
    setPassiveIncomeCalc({
      ...passiveIncomeCalc,
      [event.target.name]: event.target.value,
    })
    console.log(passiveIncomeCalc.passiveIncomeGoal);
  }

  return (
    <div>
       <h1>Calculator</h1>
       <form>
        <label>Passive Income Goal: </label>
        <input type='text' name="passiveIncomeGoal" onChange={handleInputChange}/>
        <label>From Age: </label>
        <input/>
        <label>To Age: </label>
        <input/>
        <button onClick={doMath}>Calculate</button>
       </form>
    </div>
  )
}

export default Card