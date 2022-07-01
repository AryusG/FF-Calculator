import React, { useContext } from 'react'
import { CalculatorContext } from "../../contexts/CalculatorContext"

function CalculatorResults() {

  const {calculatorStorage, setCalculatorStorage} = useContext(CalculatorContext)

  return (
    <div className="card-white font-ubuntu max-w-sm">
      <div>
        {calculatorStorage.monthlyPayments}
      </div>
      <div>
        {calculatorStorage.totalInvestedGoal}
      </div>

    </div>
  )
}

export default CalculatorResults