import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingLazy } from "../components";
import Notfound from "../pages/404";
import UserRoute from "./UserRoute";

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
      <Route path="/spde/*" element={<UserRoute />}></Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default Routers;
