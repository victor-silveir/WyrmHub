import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login/Login";
import DashboardPage from "../pages/Dashboard/Dashboard"; // example
import PageTemplate from "../components/PageTemplate/PageTemplate";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<PageTemplate />}>
        <Route path="/list" element={<DashboardPage />} />
      </Route>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
