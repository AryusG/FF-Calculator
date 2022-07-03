import React, { useContext } from 'react'
import { CalculatorContext } from '../../contexts/CalculatorContext'

function ProgressBar() {
  const { calculatorStorage, setCalculatorStorage } = useContext(CalculatorContext);
  let growthRate = 0.04;
  let saved = 0;
  let gains = 0;

  // if saved == 0, first invest will go up by monthlyPayments
  // after that, 

  return (
    <div className='bg-purple-700/50 w-full h-7 rounded-xl flex'>
      <div className="bg-pink w-[50%] h-7 rounded-l-xl">
        
      </div>
      <div className="bg-green-300 w-[20%] h-7 rounded-r-xl">

      </div>
    </div>
    // <div className="w-full bg-gray-200 rounded-full h-2.5 ">
    //   <div className="bg-blue-600 h-2.5 rounded-full w-[20%]"></div>
    // </div>
  )
}

export default ProgressBar