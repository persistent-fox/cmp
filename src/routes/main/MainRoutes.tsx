import { Navigate, Route, Routes } from "react-router-dom";
import { ERoutes } from "../../types/enums/routes.enum.ts";
import { ProjectPage } from "../../pages/project/ProjectPage.tsx";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={`${ERoutes.Project}/115972`} />} />
      <Route path={`${ERoutes.Project}/:projectId`} element={<ProjectPage />} />
    </Routes>
  );
};
