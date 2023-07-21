import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import MerchantPage from "./pages/MerchantPage";
import InvestorPage from "./pages/InvestorPage";
import BanksettlementPage from "./pages/BanksettlementPage";
import TransactionPage from "./pages/TransactionPage";
import VerificationPage from "./pages/VerificationPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/merchants" element={<MerchantPage />} />
        <Route path="/investor" element={<InvestorPage />} />
        <Route path="/banksettelment" element={<BanksettlementPage />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/verification" element={<VerificationPage />} />
      </Routes>
    </>
  );
}

export default App;
