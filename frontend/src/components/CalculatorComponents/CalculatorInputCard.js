import React, { useState, useEffect } from "react";

function Calculator() {
  // All in percentages, averageDivYield from last 9 years.
  // Idealy would get data from the EODHistoricalData API
  const [etfs] = useState([
    {
      ticker: "VIG",
      name: "Vanguard Dividend Appreciation ETF",
      fiveYearTrailingReturn: 13.3,
      averageDivYield: 1.95,
    },
    {
      ticker: "HDV",
      name: "iShares Core High Dividend ETF",
      fiveYearTrailingReturn: 9,
      averageDivYield: 3.49,
    },
    {
      ticker: "SPHD",
      name: "Invesco S&P 500 High Dividend Low Volatility ETF",
      fiveYearTrailingReturn: 7.5,
      averageDivYield: 3.41,
    },
    {
      ticker: "WIDV",
      name: "SPDR S&P Global Dividend ETF",
      fiveYearTrailingReturn: 4.2,
      averageDivYield: 3.89,
    },
  ]);

  const [selectedEtfTicker, setSelectedEtfTicker] = useState(etfs[0].ticker);
  const selectedEtf = etfs.find((etf) => {
    return etf.ticker === selectedEtfTicker;
  });

  const [calculatorStorage, setCalculatorStorage] = useState({
    passiveIncomeGoal: "",
    fromAge: "",
    toAge: "",
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

  const calculateMonthlyPayments = () => {
    // Make sure calculatorStorage.toAge is larger than calculatorStorage.fromAge
    // ^ Should be done before this function
    const yearsToInvest = calculatorStorage.toAge - calculatorStorage.fromAge;
    const numerator = totalInvestedGoal * (1 + growthRate / 12 - 1);
    const denominator = Math.pow(1 + growthRate / 12, yearsToInvest * 12) - 1;
    const monthlyPayments = numerator / denominator;
    setMonthlyPayments(Math.round(monthlyPayments));
  };

  useEffect(() => {
    setDividendRate(selectedEtf.averageDivYield / 100);
    setGrowthRate(selectedEtf.fiveYearTrailingReturn / 100);
  }, [selectedEtf]);

  useEffect(() => {
    calculateMonthlyPayments();
  }, [totalInvestedGoal]);

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
    calculateTotalInvestmentGoal();
  };

  return (
    <div className="card-white font-ubuntu max-w-sm">
      <form onSubmit={handleSubmit} className="flex-col py-2 px-7">
        <div className="text-xl font-medium mb-3">1. Passive Income Goal</div>
        <div id="calculator-goal-input" className="relative">
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

        <div className="text-xl font-medium mb-3">2. Start Investing ...</div>

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

        <div className="">
          <select
            className="input-gray-select w-[105px]"
            value={selectedEtfTicker}
            onChange={(e) => setSelectedEtfTicker(e.target.value)}
          >
            {etfs.map((etf) => {
              return <option value={etf.ticker}>{etf.ticker}</option>;
            })}
          </select>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm m-1">2012-2021 Dividend Rate Average Per Year</div>
          <div className="input-gray-display w-[100px]">{`${selectedEtf.averageDivYield}%`}</div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm m-1">5-Year Trailing Return</div>
          <div className="input-gray-display w-[100px]">{`${selectedEtf.fiveYearTrailingReturn}%`}</div>
        </div>

        <button className="btn-pink" type="submit">
          Calculate
        </button>
      </form>
    </div>
  );
}

export default Calculator;
