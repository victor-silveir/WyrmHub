import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login/Login";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import DragonsPage from "../pages/Dragons/DragonsPage";
import DragonDetailsPage from "../pages/Dragons/DragonsDetailsPage/DragonsDetailsPage";
import DragonFormPage from "../pages/Dragons/DragonsFormPage/DragonsFormPage";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route element={<PageTemplate />}>
          <Route path="/list" element={<DragonsPage />} />
          <Route path="/dragons/:id" element={<DragonDetailsPage />} />
          <Route path="/dragons-form" element={<DragonFormPage />} />
          <Route path="/dragons-form/:id" element={<DragonFormPage />} />
        </Route>
      </Route>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
