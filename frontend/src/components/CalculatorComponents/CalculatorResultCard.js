import React, { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";
import { UserContext } from "../../contexts/UserContext";
import { dbUpdateUserProperty } from "../../ApiCalls/calls";

function CalculatorResults() {
  const { calculatorStorage } = useContext(CalculatorContext);
  const { globalUser, setGlobalUser } = useContext(UserContext);

  const monthlyPayments = calculatorStorage.monthlyPayments;
  const totalInvestedGoal = calculatorStorage.totalInvestedGoal;
  
  dbUpdateUserProperty(
    globalUser.uid,
    "calculatorStorage",
    calculatorStorage
  );

  return (
    <div className="card-white-calculator font-ubuntu max-w-md">
      <div className="flex flex-col items-center py-2 px-7">
        <div className="text-xl font-medium mb-3">
          Investment Goal Per Month
        </div>
        <div className="input-gray-display text-lg w-11/12">
          {monthlyPayments === 0
            ? "$"
            : monthlyPayments < 0.01
            ? "Number Too Small"
            : monthlyPayments < 10
            ? `$ ${monthlyPayments.toFixed(2).toLocaleString()}`
            : `$ ${Math.round(monthlyPayments).toLocaleString()}`}
        </div>
        <div className="text-xl font-medium mb-3 mt-5">
          Total Investment Needed
        </div>
        <div className="input-gray-display text-lg w-11/12">
          {totalInvestedGoal === 0
            ? "$"
            : totalInvestedGoal < 0.01
            ? "Number Too Small"
            : totalInvestedGoal < 10
            ? `$ ${totalInvestedGoal.toFixed(2).toLocaleString()}`
            : `$ ${Math.round(totalInvestedGoal).toLocaleString()}`}
        </div>
      </div>
    </div> 
  );
}

export default CalculatorResults;
