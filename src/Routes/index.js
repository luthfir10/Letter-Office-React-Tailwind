import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingLazy } from "../components";
import Notfound from "../pages/404";
import Noaccess from "../pages/403";
import UserRoute from "./UserRoute";
import ProtectedRoute from "./ProtectedRoute";

const LazyPageLogin = React.lazy(() => import("../pages/Login"));
const LazyPageRegister = React.lazy(() => import("../pages/Register"));

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<LoadingLazy />}>
            <LazyPageLogin />
          </React.Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <React.Suspense fallback={<LoadingLazy />}>
            <LazyPageRegister />
          </React.Suspense>
        }
      />
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="/spde/*" element={<UserRoute />}></Route>
      </Route>
      <Route path="unauthorized" element={<Noaccess />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default Routers;
