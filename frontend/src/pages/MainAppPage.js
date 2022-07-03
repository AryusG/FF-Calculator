import React, { useContext } from 'react'
import Land from '../components/MainAppComponents/Land'
import MainAppNavBar from '../components/MainAppComponents/MainAppNavBar'
import ProgressBar from '../components/MainAppComponents/ProgressBar'
import { CalculatorContext } from "../contexts/CalculatorContext"

function MainAppPage() {
  const { calculatorStorage, setCalculatorStorage } = useContext(CalculatorContext);

  const handleInvestPress = () => {
    // if  
  };


  return (
    <div className='bg-purple-900 h-screen'>
      <MainAppNavBar />

      <div className="flex justify-center">
        <div className="md:w-7/12 w-8/12 md:py-9 py-12">
          <ProgressBar />
        </div>
      </div>

      <div className="flex justify-center py-7 my-10">
        <div className="max-w-2xl">
          <Land />
        </div>
      </div>

      <div className="flex justify-center py-7">
        {/* Need useContext to update context  */}
        <button className="btn-green">Invest Now</button>
      </div>
    </div>
  )
}

export default MainAppPage