import React, { useState, useEffect, useMemo, useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";

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
  const selectedEtf = useMemo(() => {
    return etfs.find((etf) => etf.ticker === selectedEtfTicker);
  }, [etfs, selectedEtfTicker]);

  const { calculatorStorage, setCalculatorStorage } =
    useContext(CalculatorContext);

  const [dividendRate, setDividendRate] = useState();
  const [etfGrowthRate, setEtfGrowthRate] = useState();

  useEffect(() => {
    setDividendRate(selectedEtf.averageDivYield / 100);
    setEtfGrowthRate(selectedEtf.fiveYearTrailingReturn / 100);
  }, [selectedEtf]);

  const totalInvestedGoal = useMemo(() => {
    return Math.round(calculatorStorage.passiveIncomeGoal / dividendRate);
  }, [calculatorStorage.passiveIncomeGoal, dividendRate]);

  const monthlyPayments = useMemo(() => {
    const yearsToInvest = calculatorStorage.toAge - calculatorStorage.fromAge;
    const numerator = totalInvestedGoal * (1 + etfGrowthRate / 12 - 1);
    const denominator = Math.pow(1 + etfGrowthRate / 12, yearsToInvest * 12) - 1;
    return (numerator / denominator).toFixed(2);
  }, [
    calculatorStorage.toAge,
    calculatorStorage.fromAge,
    totalInvestedGoal,
    etfGrowthRate,
  ]);

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

    setCalculatorStorage({
      ...calculatorStorage,
      totalInvestedGoal: parseInt(totalInvestedGoal),
      monthlyPayments: parseInt(monthlyPayments),
      selectedEtf: selectedEtf
    });
  };

  return (
    <div className="card-white-calculator font-ubuntu max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col py-2 px-7">
        <div className="text-xl font-medium mb-3">1. Passive Income Goal</div>
        <div className="px-5">
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
        </div>

        <div className="text-xl font-medium mb-3">2. Start Investing ...</div>

        <div className="flex flex-wrap justify-between px-5">
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
          3. Choose An ETF to Invest In
        </div>

        <div className="flex justify-between relative px-5">
          <select
            className="input-gray-select min-w-[105px]"
            value={selectedEtfTicker}
            onChange={(e) => setSelectedEtfTicker(e.target.value)}
          >
            {etfs.map((etf) => {
              return (
                <option key={etf.ticker} value={etf.ticker}>
                  {etf.ticker}
                </option>
              );
            })}
          </select>
          <div className="absolute top-9 left-[93px] pointer-events-none">
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
          <div className="text-center self-center text-md ml-4">
            {selectedEtf.name}
          </div>
        </div>

        <div className="divide-line self-center"></div>

        <div className="flex justify-between items-center">
          <div className="text-sm">
            2012-2021 Dividend Rate Average Per Year
          </div>
          <div className="input-gray-display min-w-[100px] ml-1">{`${selectedEtf.averageDivYield}%`}</div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm">5-Year Trailing Return</div>
          <div className="input-gray-display min-w-[100px] ml-1">{`${selectedEtf.fiveYearTrailingReturn}%`}</div>
        </div>

        <div className="divide-line self-center"></div>

        <button className="btn-pink mt-3 w-4/5 self-center" type="submit">
          Calculate
        </button>
      </form>
    </div>
  );
}

export default Calculator;
