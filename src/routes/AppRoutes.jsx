import React from "react";
import { publicRoutes } from "./routes";
import PublicRoute from "./PublicRoute";
import { Route, Routes } from "react-router";

function AppRoutes() {
  return (
    <>
      <Routes>
        {publicRoutes.map((object) => (
          <Route
            key={1}
            path={object.path}
            element={<PublicRoute>{<object.page />}</PublicRoute>}
          />
        ))}
      </Routes>
    </>
  );
}

export default AppRoutes;
