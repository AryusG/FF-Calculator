import React, { useContext, useMemo } from "react";
import MainAppNavBar from "../components/MainAppComponents/MainAppNavBar";
import ProgressBar from "../components/MainAppComponents/ProgressBar";
import { CalculatorContext } from "../contexts/CalculatorContext";
import BasicHouse from "../assets/houses/basic-house.png";
import TwoStoryCozyHouse from "../assets/houses/two-story-cozy.png";
import VillaCozyHouse from "../assets/houses/villa-cozy.png";
import TallHouse from "../assets/houses/tall.png";
import LakeLandHouse from "../assets/houses/lake-land.png";

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

  const totalTotalPercentage = useMemo(() => {
    return (totalTotal / totalInvestedGoal) * 100;
  }, [totalTotal]);

  return (
    <div className="bg-purple-900 h-screen overflow-hidden relative">
      <MainAppNavBar />

      <div className="flex justify-center sticky top-20">
        <div className="md:w-7/12 w-8/12 md:my-14 my-14">
          <div className="group relative">
            <ProgressBar />
            <div className="flex justify-center">
              <div className="font-ubuntu text-white absolute -top-8 pointer-events-none">
                {`$ ${Math.round(totalTotal).toLocaleString()} / $ ${Math.round(
                  totalInvestedGoal
                ).toLocaleString()}`}
              </div>
              <div
                className="card-white-progress-bar font-ubuntu font-medium text-xl 
                flex justify-around items-center gap-6 absolute sm:-bottom-28 -bottom-32"
              >
                <div className="">Saved:</div>
                <div className="bg-pink_light text-pink py-2 px-6 rounded-3xl sm:text-lg text-base">
                  {`$ ${Math.round(totalSaved).toLocaleString()}`}
                </div>
                <div className="">Gains:</div>
                <div className="bg-green-100 text-green-500 py-2 px-6 rounded-3xl sm:text-lg text-base">
                  {`+ $ ${Math.round(totalGained).toLocaleString()}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-6 my-10">
        <div className="max-w-2xl">
          {totalTotalPercentage < 1 || totalTotalPercentage === 0
          ? (<img src={BasicHouse} alt="BasicHouse" />) 
          : totalTotalPercentage < 2 
          ? (<img src={TwoStoryCozyHouse} alt="TwoStoryCozyHouse" />) 
          : totalTotalPercentage < 4
          ? (<img src={VillaCozyHouse} alt="VillaCozyHouse" />)
          : totalTotalPercentage < 7 
          ? (<img src={TallHouse} alt="TallHouse" className="max-w-sm"/>)
          : (<img src={LakeLandHouse} alt="LakeLandHouse" />)}
        </div>
      </div>

      <div className="flex justify-center py-7 absolute bottom-5 left-1/2 -translate-x-28">
        <button onClick={handleInvestPress} className="btn-green">
          Each Month Investment
        </button>
      </div>
    </div>
  );
}

export default MainAppPage;
