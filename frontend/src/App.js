import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CalculatorContext } from "./contexts/CalculatorContext";
import { UserContext } from "./contexts/UserContext";
import LandingPage from "./pages/LandingPage";
import AccountPortal from "./pages/AccountPortal";
import MainAppPage from "./pages/MainAppPage";
import CalculatorPage from "./pages/CalculatorPage";
import { newUserAppData } from "./ApiCalls/userAppData"
import { dbGetUser } from "./ApiCalls/calls";

const userFromWindowStorage = JSON.parse(window.sessionStorage.getItem("globalUser")) || 
JSON.parse(window.localStorage.getItem("globalUser")) || {email: "", uid: 0};

const calculatorFromWindowStorage = JSON.parse(window.sessionStorage.getItem("calculatorStorage")) || 
newUserAppData.calculatorStorage;

function App() {
  const [globalUser, setGlobalUser] = useState(userFromWindowStorage);

  const userContextProvider = useMemo(() => {
    return { globalUser, setGlobalUser };
  }, [globalUser]);

  const [calculatorStorage, setCalculatorStorage] = useState(calculatorFromWindowStorage);

  const calculatorContextProvider = useMemo(
    () => ({ calculatorStorage, setCalculatorStorage }),
    [calculatorStorage]
  );

// *******************************************************************************************
  const isLoggedIn = window.localStorage.getItem("globalUser") !== null ||
  window.sessionStorage.getItem("globalUser") !== null;

  useEffect(() => {
    if (isLoggedIn) 
      window.sessionStorage.setItem("calculatorStorage", JSON.stringify(calculatorStorage));
  }, [calculatorStorage]);

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
