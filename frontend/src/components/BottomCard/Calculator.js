import React, { useState, useEffect } from "react";

function Calculator() {
  const [calculatorStorage, setCalculatorStorage] = useState({
    passiveIncomeGoal: '',
    fromAge: '',
    toAge: '',
    monthlyPayments: '',
    totalInvestedGoal: '',
  });

  const [dividendRate, setDividendRate] = useState(0.03);

  const calculateInvestmentGoal = () => {
    // Check if this works
    const passiveIncomeGoal = parseInt(calculatorStorage.passiveIncomeGoal);
    const totalInvestedGoal = Math.round(passiveIncomeGoal / dividendRate); 
    return totalInvestedGoal
  };

  const calculateMonthlyPayments = () => {
    const totalInvestedGoal = calculatorStorage.totalInvestedGoal;
  }

  const handleInputChange = (event) => {
    setCalculatorStorage({
      ...calculatorStorage,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle error if text is not string  
    // Add $ to the beginning of input field and make sure to clear it during submit 
    // Add , for every 3 digits  

    console.log("Submit Called")
    const investmentGoal = calculateInvestmentGoal()
    calculateMonthlyPayments()

    // Resets state 
    setCalculatorStorage({
      ...calculatorStorage,
      passiveIncomeGoal: '',
      fromAge: '',
      toAge: '',
      totalInvestedGoal: investmentGoal
    })
    console.log(calculatorStorage.totalInvestedGoal)
  };

  // useEffect(() => {
  //   console.log(calculatorStorage)
  // }, [calculatorStorage])

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Calculator</h1>
      <p>{calculatorStorage.passiveIncomeGoal}</p>
      <h3>{calculatorStorage.totalInvestedGoal}</h3>
      <form onSubmit={handleSubmit}>
        <label>Passive Income Goal: </label>
        <input
          type="text"
          name="passiveIncomeGoal"
          value={calculatorStorage.passiveIncomeGoal}
          onChange={handleInputChange}
          required
        />
        <label>From Age: </label>
        <input
          type="text"
          name="fromAge"
          value={calculatorStorage.fromAge}
          onChange={handleInputChange}
          required
        />
        <label>To Age: </label>
        <input
          type="text"
          name="toAge"
          value={calculatorStorage.toAge}
          onChange={handleInputChange}
          required
        />
        <button className="btn bg-orange-400 text-white" type="submit">
          Calculate
        </button>
      </form>
    </div>
  );
}

export default Calculator;
