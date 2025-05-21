import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login/Login";
import DashboardPage from "../pages/Dashboard/Dashboard"; // example

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default AppRoutes;
