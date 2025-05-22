import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login/Login";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import DragonsPage from "../pages/Dragons/DragonsPage";
import DragonDetailsPage from "../pages/Dragons/DragonsDetailsPage/DragonsDetailsPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<PageTemplate />}>
        <Route path="/list" element={<DragonsPage />} />
        <Route path="/dragons/:id" element={<DragonDetailsPage />} />
      </Route>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
