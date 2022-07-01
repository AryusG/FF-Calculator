import { useMemo, useState } from "react";
import LandingPage from "./pages/LandingPage";
import AccountPortal from "./pages/AccountPortal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CalculatorPage from "./pages/CalculatorPage";
import { CalculatorContext } from "./contexts/CalculatorContext";

function App() {
  const [calculatorStorage, setCalculatorStorage] = useState({
    passiveIncomeGoal: "",
    fromAge: "",
    toAge: "",
    totalInvestedGoal: "",
    monthlyPayments: "",
    selectedEtf: {},
  });

  const calculatorContextProvider = useMemo(
    () => ({ calculatorStorage, setCalculatorStorage }),
    [calculatorStorage]
  );
  
  return (
    <BrowserRouter>
      <CalculatorContext.Provider
        value={calculatorContextProvider}
      >
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/portal/:type" element={<AccountPortal />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </CalculatorContext.Provider>
    </BrowserRouter>
  );
}

export default App;
