import { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CalculatorContext } from "./contexts/CalculatorContext";
import LandingPage from "./pages/LandingPage";
import AccountPortal from "./pages/AccountPortal";
import MainAppPage from "./pages/MainAppPage";
import CalculatorPage from "./pages/CalculatorPage";

function App() {
  const [calculatorStorage, setCalculatorStorage] = useState({
    passiveIncomeGoal: "",
    fromAge: "",
    toAge: "",
    totalInvestedGoal: 0,
    monthlyPayments: 0,
    selectedEtf: {},
  });

  const calculatorContextProvider = useMemo(
    () => ({ calculatorStorage, setCalculatorStorage }),
    [calculatorStorage]
  );

  return (
    <BrowserRouter>
      <CalculatorContext.Provider value={calculatorContextProvider}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/portal/:type" element={<AccountPortal />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/application" element={<MainAppPage />} />
        </Routes>
      </CalculatorContext.Provider>
    </BrowserRouter>
  );
}

export default App;
