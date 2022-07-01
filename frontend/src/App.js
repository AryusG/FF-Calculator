import LandingPage from './pages/LandingPage';
import AccountPortal from './pages/AccountPortal';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CalculatorPage from './pages/CalculatorPage';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/portal/:type" element={<AccountPortal />}/>
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
