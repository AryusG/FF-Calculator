import React, { useState, useEffect } from "react";

function Calculator() {
  const [calculatorStorage, setCalculatorStorage] = useState({
    passiveIncomeGoal: '',
    fromAge: '',
    toAge: '',
    monthlyPayments: '',
    totalInvestedGoal: '',
  });

  const [totalInvestedGoal, setTotalInvestedGoal] = useState();
  const [monthlyPayments, setMonthlyPayments] = useState();
  const [dividendRate, setDividendRate] = useState(0.03);
  const [growthRate, setGrowthRate] = useState(0.08);

  const calculateInvestmentGoal = () => {
    // Check if this works
    const passiveIncomeGoal = parseInt(calculatorStorage.passiveIncomeGoal);
    const totalInvestedGoal = Math.round(passiveIncomeGoal / dividendRate); 
    return totalInvestedGoal
  };

  const calculateMonthlyPayments = () => {
    // Make sure calculatorStorage.toAge is larger than calculatorStorage.fromAge
    // ^ Should be done before this function
    console.log("Start of MonthlyPayments()")
    const totalInvestedGoal = calculatorStorage.totalInvestedGoal;
    console.log(`totalInvestedGoal: ${totalInvestedGoal}`)
    const yearsToInvest = calculatorStorage.toAge - calculatorStorage.fromAge;
    console.log(`yearsToInvest: ${yearsToInvest}`)
    const numerator = totalInvestedGoal * ((1 + growthRate/12) - 1);
    console.log(`numerator: ${numerator}`)
    const denominator = (Math.pow(1 + growthRate/12, yearsToInvest * 12) - 1);
    console.log(`denom: ${denominator}`)
    const monthlyPayments = numerator / denominator;
    console.log(`montlyPayments: ${monthlyPayments}`)
    
    return monthlyPayments
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
    const monthlyPayments = calculateMonthlyPayments()
    console.log(`During Submit Monthlies: ${monthlyPayments}`)
    // Resets 
    setCalculatorStorage({
      ...calculatorStorage,
      passiveIncomeGoal: '',
      fromAge: '',
      toAge: '',
      monthlyPayments: monthlyPayments,
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
      <h2>Monthly Payments: {calculatorStorage.monthlyPayments}</h2>
      <h3>Total Invested: {calculatorStorage.totalInvestedGoal}</h3>
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
