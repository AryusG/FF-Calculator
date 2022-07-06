import React, { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";

function ProgressBar() {
  const { calculatorStorage } = useContext(CalculatorContext);

  const { totalSaved, totalGained, totalInvestedGoal } = calculatorStorage;

  const totalSavedPercentage = (totalSaved / totalInvestedGoal) * 100;
  const totalGainedPercentage = (totalGained / totalInvestedGoal) * 100;

  return (
    <>
      <button className="btn-progress-bar bg-purple-700/50 w-full h-7 rounded-xl">
        <div className="flex">
          <div
            className="bg-pink h-7 rounded-l-xl"
            style={{ width: `${totalSavedPercentage}%` }}
          ></div>
          <div
            className="bg-green-300 h-7 rounded-r-xl"
            style={{ width: `${totalGainedPercentage}%` }}
          ></div>
        </div>
      </button>
    </>
  );
}

export default ProgressBar;
