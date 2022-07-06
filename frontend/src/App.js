import { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CalculatorContext } from "./contexts/CalculatorContext";
import { UserContext } from "./contexts/UserContext";
import LandingPage from "./pages/LandingPage";
import AccountPortal from "./pages/AccountPortal";
import MainAppPage from "./pages/MainAppPage";
import CalculatorPage from "./pages/CalculatorPage";

function App() {
  const [globalUser, setGlobalUser] = useState({
    email: "",
    uid: 0,
  });

  const userContextProvider = useMemo(() => {
    return { globalUser, setGlobalUser };
  }, [globalUser]);

  const [calculatorStorage, setCalculatorStorage] = useState({
    passiveIncomeGoal: "",
    fromAge: "",
    toAge: "",
    totalInvestedGoal: 0,
    monthlyPayments: 0,
    selectedEtf: {},
    totalTotal: 0,
    totalSaved: 0,
    totalGained: 0,
  });

  const calculatorContextProvider = useMemo(
    () => ({ calculatorStorage, setCalculatorStorage }),
    [calculatorStorage]
  );

  const isLoggedIn = window.localStorage.getItem("globalUser") !== null ||
                     window.sessionStorage.getItem("globalUser") !== null;
  // if theyre logged in, then redirect to the main app page instead of the landing page
  // do the same for all the routes
  // if loggedIn -> logged in will be null if local storage has no items for the specified key
  // they are logged in, will return true

  return (
    <BrowserRouter>
      <UserContext.Provider value={userContextProvider}>
        <CalculatorContext.Provider value={calculatorContextProvider}>
          <Routes>
            <Route exact path="/" element={isLoggedIn ? <MainAppPage /> : <LandingPage />} />
            <Route path="/portal/:type" element={<AccountPortal />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/application" element={isLoggedIn ? <MainAppPage /> : <LandingPage />} />
          </Routes>
        </CalculatorContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
