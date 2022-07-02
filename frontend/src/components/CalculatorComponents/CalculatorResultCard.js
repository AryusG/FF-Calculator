import React, { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";

function CalculatorResults() {
  const { calculatorStorage } = useContext(CalculatorContext);

  let monthlyPayments = parseInt(calculatorStorage.monthlyPayments)
  let totalInvestedGoal = parseInt(calculatorStorage.totalInvestedGoal)
  
  return (
    <div className="card-white-calculator font-ubuntu max-w-md">
      <div className="flex flex-col items-center py-2 px-7">
        <div className="text-xl font-medium mb-3">Investment Goal Per Month</div>
        <div className="input-gray-display text-lg w-11/12">
          {monthlyPayments === 0 ? "$" : `$ ${monthlyPayments.toLocaleString()}`}
        </div>
        <div className="text-xl font-medium mb-3 mt-5">Total Investment Needed</div>
        <div className="input-gray-display text-lg w-11/12">
          {monthlyPayments === 0 ? "$" : `$ ${totalInvestedGoal.toLocaleString()}`}
        </div>
      </div>
    </div>
  );
}

export default CalculatorResults;
