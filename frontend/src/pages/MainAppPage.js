import React, { useContext } from "react";
import Land from "../components/MainAppComponents/Land";
import MainAppNavBar from "../components/MainAppComponents/MainAppNavBar";
import ProgressBar from "../components/MainAppComponents/ProgressBar";
import { CalculatorContext } from "../contexts/CalculatorContext";

function MainAppPage() {
  const { calculatorStorage, setCalculatorStorage } =
    useContext(CalculatorContext);

  const {
    monthlyPayments,
    selectedEtf: { fiveYearTrailingReturn },
    totalSaved,
    totalTotal,
    totalInvestedGoal,
    totalGained,
  } = calculatorStorage;

  const handleInvestPress = () => {
    const growthRatePerMonthInPercentage = fiveYearTrailingReturn / 5 / 12;
    const growthRatePerMonthFloating = growthRatePerMonthInPercentage / 100;

    if (totalTotal === 0) {
      setCalculatorStorage({
        ...calculatorStorage,
        totalTotal: monthlyPayments,
        totalSaved: monthlyPayments,
        totalGained: 0,
      });
    } else {
      setCalculatorStorage({
        ...calculatorStorage,
        totalTotal:
          (totalTotal + monthlyPayments) * (1 + growthRatePerMonthFloating),
        totalSaved: totalSaved + monthlyPayments,
        totalGained: totalTotal - totalSaved,
      });
    }
  };

  return (
    <div className="bg-purple-900 h-screen">
      <MainAppNavBar />

      <div className="flex justify-center">
        <div className="md:w-7/12 w-8/12 md:my-14 my-12">
          <div className="group relative ">
            <ProgressBar />
            <div className="flex justify-center">
              <div
                className="font-ubuntu text-white absolute -top-8 pointer-events-none"
              >
                {`$ ${Math.round(totalTotal).toLocaleString()} / $ ${totalInvestedGoal.toLocaleString()}`}
              </div>
              <div
                className="card-white-progress-bar font-ubuntu font-medium text-xl 
                flex justify-around items-center gap-6 absolute sm:-bottom-28"
              >
                <div className="">Saved:</div>
                <div className="bg-pink_light text-pink py-2 px-6 rounded-3xl">
                  {`$ ${totalSaved.toLocaleString()}`}
                </div>
                <div className="">Gains:</div>
                <div className="bg-green-100 text-green-500 py-2 px-6 rounded-3xl">
                  {`+ $ ${Math.round(totalGained).toLocaleString()}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-7 my-10">
        <div className="max-w-2xl">
          <Land />
        </div>
      </div>

      <div className="flex justify-center py-7">
        <button onClick={handleInvestPress} className="btn-green">
          Each Month Investment
        </button>
      </div>
    </div>
  );
}

export default MainAppPage;
