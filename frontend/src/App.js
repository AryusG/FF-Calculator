import LandingPage from './pages/LandingPage';
import AccountPortal from './pages/AccountPortal';
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/portal/:type" element={<AccountPortal />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
