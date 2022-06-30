import React, { useState, useEffect } from "react";

function Calculator() {
  const [calculatorStorage, setCalculatorStorage] = useState({
    passiveIncomeGoal: '',
    fromAge: '',
    toAge: '',
  });
  
  const [totalInvestedGoal, setTotalInvestedGoal] = useState(0);
  const [monthlyPayments, setMonthlyPayments] = useState(0);
  const [dividendRate, setDividendRate] = useState(0.03);
  const [growthRate, setGrowthRate] = useState(0.08);

  const calculateTotalInvestmentGoal = () => {
    const passiveIncomeGoal = parseInt(calculatorStorage.passiveIncomeGoal);
    const investedGoal = Math.round(passiveIncomeGoal / dividendRate); 
    setTotalInvestedGoal(investedGoal);
  };

  useEffect(() => {
    const calculateMonthlyPayments = () => {
      // Make sure calculatorStorage.toAge is larger than calculatorStorage.fromAge
      // ^ Should be done before this function
      const yearsToInvest = calculatorStorage.toAge - calculatorStorage.fromAge;
      const numerator = totalInvestedGoal * ((1 + growthRate/12) - 1);
      const denominator = (Math.pow(1 + growthRate/12, yearsToInvest * 12) - 1);
      const monthlyPayments = numerator / denominator;
      setMonthlyPayments(Math.round(monthlyPayments));
    }

    calculateMonthlyPayments();
  }, [totalInvestedGoal])


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
    calculateTotalInvestmentGoal()
    
  };
  console.log(monthlyPayments)
  console.log(totalInvestedGoal)
  return (
    <div className="card-white font-ubuntu max-w-sm">
      <form onSubmit={handleSubmit} className="flex-col py-2 px-7">

        <div className="text-xl font-medium mb-3">
          1. Passive Income Goal
        </div>
        <div id="calculator-goal-input" className="relative text-center">
          <input
            placeholder="$ / Per Year"
            className="peer input-gray w-full"
            name="passiveIncomeGoal"
            required
            value={calculatorStorage.passiveIncomeGoal}
            onChange={handleInputChange}
          />
          <label className="absolute floating-label">$ / Per Year</label>
        </div>

        <div className="text-xl font-medium mb-3">
          2. Start Investing ...
        </div>

        <div className="flex flex-wrap justify-between">
          <div id="calculator-from-age" className="relative">
            <input
              placeholder="From Age"
              className="peer input-gray w-[110px] mr-3"
              name="fromAge"
              required
              value={calculatorStorage.fromAge}
              onChange={handleInputChange}
            />
            <label className="absolute floating-label">From Age</label>
          </div>
          <div id="passive-income-goal-input" className="relative">
            <input
              placeholder="To Age"
              className="peer input-gray w-[110px]"
              name="toAge"
              required
              value={calculatorStorage.toAge}
              onChange={handleInputChange}
            />
            <label className="absolute floating-label">To Age</label>
          </div>
        </div>

        <div className="text-xl font-medium mb-2.5">
          3. Choose ETF to Invest In
        </div> 



        <button className="btn-pink" type="submit">
          Calculate
        </button>
      </form>
    </div>
  );
}

export default Calculator;
